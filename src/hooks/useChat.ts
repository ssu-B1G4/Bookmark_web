import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postChat } from '@/apis/postChat';
import { ChatMessageResponse } from '@/types/chat';

export const CHAT_QUERY_KEYS = {
  messages: (placeId: string) => ['chat', placeId, 'messages'] as const,
  room: (placeId: string) => ['chat', placeId] as const,
};

export const useChat = (placeId: string, nickname: string) => {
  const queryClient = useQueryClient();

  const joinMutation = useMutation({
    mutationFn: () => postChat.joinRoom(placeId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: CHAT_QUERY_KEYS.room(placeId) });
      queryClient.setQueryData<ChatMessageResponse[]>(
        CHAT_QUERY_KEYS.messages(placeId),
        (old = []) => [...old, data.result]
      );
    },
  });

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => {
      const now = new Date();
      const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      return postChat.sendMessage(placeId, {
        nickname,
        message,
        timestamp,
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData<ChatMessageResponse[]>(
        CHAT_QUERY_KEYS.messages(placeId),
        (old = []) => [...old, data.result]
      );
    },
  });

  return {
    joinRoom: joinMutation.mutate,
    sendMessage: sendMessageMutation.mutate,
    isJoining: joinMutation.isPending,
    isSending: sendMessageMutation.isPending,
  };
};
