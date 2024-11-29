import { api } from '@/service/TokenService';
import { BaseResponse } from '@/types/BaseResponse';
import { RefreshTokenResponse } from '@/types/auth.type';
import { LoginResult } from '@/types/getLogin.type';
import { client } from '@/utils/axios';

import { IAuthService } from '../application/interfaces/IAuthService';

export class AuthService implements IAuthService {
  async login(code: string): Promise<BaseResponse<LoginResult>> {
    try {
      const { data } = await client.get<BaseResponse<LoginResult>>('/login', {
        params: { code },
      });

      if (data.isSuccess) {
        const { accessToken, refreshToken, memberId } = data.result;
        api.setAccessToken(accessToken);
        api.setRefreshToken(refreshToken);
        sessionStorage.setItem('memberId', String(memberId));
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async refresh(): Promise<BaseResponse<RefreshTokenResponse>> {
    try {
      const refresh_token = api.getRefreshToken();
      const { data } = await client.post<BaseResponse<RefreshTokenResponse>>('/refresh', {
        refresh_token,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<BaseResponse<void>> {
    try {
      const { data } = await client.post<BaseResponse<void>>('/logout');
      api.logout();
      sessionStorage.removeItem('memberId');
      return data;
    } catch (error) {
      throw error;
    }
  }
}
