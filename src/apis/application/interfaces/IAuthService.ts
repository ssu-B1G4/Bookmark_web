import { BaseResponse } from '@/types/BaseResponse';
import { RefreshTokenResponse } from '@/types/auth.type';
import { LoginResult } from '@/types/getLogin.type';

export interface IAuthService {
  /**
   * 소셜 로그인 API 호출
   * @param code 소셜 로그인 인증 코드
   * @returns 로그인 결과 (토큰, 유저정보 등)
   */
  login(code: string): Promise<BaseResponse<LoginResult>>;

  /**
   * 토큰 갱신 API 호출
   * @returns 갱신된 토큰 정보
   */
  refresh(): Promise<BaseResponse<RefreshTokenResponse>>;

  /**
   * 로그아웃 함수 호출
   */
  logout(): void;

  /**
   * 회원 탈퇴 API 호출
   * @returns 회원 탈퇴 결과
   */
  withdraw(): Promise<BaseResponse<void>>;
}

// export interface LoginResponse {
//   isSuccess: boolean;
//   code: string;
//   message: string;
//   result: {
//     memberId: number;
//     accessToken: string;
//     refreshToken: string;
//   };
// }

// export interface RefreshTokenResponse {
//   isSuccess: boolean;
//   code: string;
//   message: string;
//   result: {
//     accessToken: string;
//     refreshToken: string;
//   };
// }
