import axios, { AxiosError, AxiosResponse } from 'axios';

import { postRefresh } from '@/apis/postRefresh';
import { api } from '@/service/TokenService';
import { AuthErrorData } from '@/types/auth.type';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

client.interceptors.request.use(
  (config) => {
    if (config.headers && api.getAccessToken()) {
      config.headers.Authorization = `Bearer ${api.getAccessToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalConfig = error.config;
    const data = error.response?.data as AuthErrorData;

    if (!originalConfig || error.response?.status !== 401 || data?.isSuccess) {
      return Promise.reject(error);
    }

    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const { accessToken, refreshToken } = await postRefresh();
        api.setAccessToken(accessToken);
        api.setRefreshToken(refreshToken);

        refreshSubscribers.forEach((cb) => cb(accessToken));
        refreshSubscribers = [];

        return client.request(originalConfig);
      } catch (err) {
        api.logout();
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise((resolve) => {
      refreshSubscribers.push((token: string) => {
        originalConfig.headers.Authorization = `Bearer ${token}`;
        resolve(client.request(originalConfig));
      });
    });
  }
);
