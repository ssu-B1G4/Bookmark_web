import { useEffect, useRef, useState } from 'react';

import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { api } from '@/service/TokenService';
import { ChatMessageDTO } from '@/types/chat';

export const useChat = (chatRoomId: string, nickname: string) => {
  const client = useRef<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessageDTO[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const token = api.getAccessToken();

  useEffect(() => {
    if (!chatRoomId) return;
    if (client.current) {
      client.current.deactivate();
    }

    client.current = new Client({
      webSocketFactory: () => new SockJS('https://www.bookmark-server.com/ws'),
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },

      debug: (str) => console.log('STOMP Debug:', str),
      onConnect: () => {
        setIsConnected(true);

        client.current?.subscribe(`/topic/chat/${chatRoomId}`, (message) => {
          const receivedMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, receivedMessage]);
        });

        client.current?.publish({
          destination: `/app/chat/${chatRoomId}/join`,
          body: JSON.stringify({
            nickname,
            message: '',
            timestamp: new Date().toISOString(),
          }),
        });
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket');
        setIsConnected(false);
      },
      onStompError: (frame) => {
        console.error('STOMP error:', frame);
      },
    });

    console.log('client.current before activation:', client.current); // 로그 추가
    console.log('WebSocket connected:', client.current?.connected);
    if (client.current) {
      client.current.activate();
    }

    return () => {
      client.current?.deactivate();
    };
  }, [chatRoomId, nickname, token]);

  const sendMessage = (message: string) => {
    if (!client.current?.connected) return;

    client.current.publish({
      destination: `/app/chat/${chatRoomId}/send`,
      body: JSON.stringify({
        nickname,
        message,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  return {
    messages,
    sendMessage,
    isConnected,
  };
};
