export interface AuthErrorData {
  error: string;
  message: string;
  status: number;
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
