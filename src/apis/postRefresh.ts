import { api } from '@/service/TokenService';
import { RefreshTokenResponse } from '@/types/auth.type';
import { client } from '@/utils/axios';

export const postRefresh = async (): Promise<RefreshTokenResponse['result']> => {
  const refresh_token = api.getRefreshToken();
  const { data } = await client.post<RefreshTokenResponse>('/refresh', {
    refresh_token,
  });
  return data.result;
};
