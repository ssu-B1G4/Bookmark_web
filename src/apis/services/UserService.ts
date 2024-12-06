import { BaseResponse } from '@/types/BaseResponse';
import { UserInfo } from '@/types/User';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

import { IUserService } from '../application/interfaces/IUserService';

export class UserService implements IUserService {
  /**
   * 마이페이지 API 호출 메서드
   * @param 없음, Authorization 헤더만
   * @returns 사용자 id, nickname
   */
  async getUserInfo(): Promise<BaseResponse<UserInfo>> {
    try {
      const response = await client.get<BaseResponse<UserInfo>>('/mypage');
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }
}
