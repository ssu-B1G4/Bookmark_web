import { api } from '@/service/TokenService';
import { LoginResponse } from '@/types/getLogin.type';
import { client } from '@/utils/axios';

export const getLogin = async (code: string): Promise<LoginResponse> => {
  const { data } = await client.get<LoginResponse>('/login', {
    params: { code },
    headers: { Authorization: '' }, 
  });

  if (data.isSuccess) {
    const { accessToken, refreshToken } = data.result;
    api.setAccessToken(accessToken);
    api.setRefreshToken(refreshToken);
    sessionStorage.setItem('memberId', String(data.result.memberId));
  }

  return data;
};
