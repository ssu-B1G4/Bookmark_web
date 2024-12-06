import { BaseResponse } from '@/types/BaseResponse';
import { UserInfo } from '@/types/User';

export interface IUserService {
  /**
   * 마이페이지 API 호출 메서드
   * @param 없음, Authorization 헤더만
   * @returns 사용자 id, nickname
   */
  getUserInfo(): Promise<BaseResponse<UserInfo>>;
}
