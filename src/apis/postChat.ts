import { ApiResponse, ChatMessageResponse, SendMessageRequest } from '@/types/chat';
import { client } from '@/utils/axios';

export const postChat = {
  joinRoom: async (placeId: string): Promise<ApiResponse<ChatMessageResponse>> => {
    const { data } = await client.post<ApiResponse<ChatMessageResponse>>(
      `/swagger/chat/${placeId}/join`,
      null,
      {
        params: {
          chatRoomId: placeId,
        },
      }
    );
    return data;
  },

  sendMessage: async (
    placeId: string,
    request: SendMessageRequest
  ): Promise<ApiResponse<ChatMessageResponse>> => {
    const { data } = await client.post<ApiResponse<ChatMessageResponse>>(
      `/swagger/chat/${placeId}/send`,
      request,
      {
        params: {
          chatRoomId: placeId,
        },
      }
    );
    return data;
  },
};
