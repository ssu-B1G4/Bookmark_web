export interface ChatMessageResponse {
  nickname: string;
  message: string;
  timestamp: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface SendMessageRequest {
  nickname: string;
  message: string;
  timestamp: string;
}

export interface ChatMessageDTO {
  nickname: string;
  message: string;
  timestamp: string;
}
