export interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    memberId: number;
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginResult {
  memberId: number;
  accessToken: string;
  refreshToken: string;
}
