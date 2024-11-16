import axios, { AxiosError, AxiosResponse } from 'axios';

import { postRefresh } from '@/apis/postRefresh';
import { api } from '@/service/TokenService';
import { AuthErrorData } from '@/types/auth.type';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

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

    if (originalConfig && error.response?.status === 401 && !data?.isSuccess) {
      try {
        const { accessToken, refreshToken } = await postRefresh();

        api.setAccessToken(accessToken);
        api.setRefreshToken(refreshToken);

        return client.request(originalConfig);
      } catch (error) {
        api.logout();
        sessionStorage.removeItem('user');
        window.location.reload();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
