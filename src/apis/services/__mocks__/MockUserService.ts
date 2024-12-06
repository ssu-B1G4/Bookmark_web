import { IUserService } from '@/apis/application/interfaces/IUserService';
import { BaseResponse } from '@/types/BaseResponse';
import { UserInfo } from '@/types/User';

export class MockUserService implements IUserService {
  /**
   * 마이페이지 API 호출 메서드
   * @param 없음, Authorization 헤더만
   * @returns 사용자 id, nickname
   */
  async getUserInfo(): Promise<BaseResponse<UserInfo>> {
    return {
      isSuccess: true,
      code: 'AUTH2004',
      message: '마이페이지 조회가 완료되었습니다.',
      result: {
        memberId: 1,
        nickname: '유저 정보 테스트',
      },
    };
  }
}
