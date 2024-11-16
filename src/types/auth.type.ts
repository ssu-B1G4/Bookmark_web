export interface AuthErrorData {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface RefreshTokenResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    accessToken: string;
    refreshToken: string;
  };
}
