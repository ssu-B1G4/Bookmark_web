import { useEffect, useRef, useState } from 'react';

import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { api } from '@/service/TokenService';
import { ChatMessageDTO } from '@/types/chat';

const formatDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const useChat = (chatRoomId: number, nickname: string) => {
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

        console.log(client.current);

        if (client.current) {
          console.log('Subscribing with client:', client.current.connected);

          try {
            const subscription = client.current.subscribe(
              `/topic/chat/${chatRoomId}`,
              (message) => {
                // console.log('받은 메시지:', message);
                if (message.body) {
                  const response = JSON.parse(message.body);
                  // console.log('파싱된 응답:', response);
                  const receivedMessage = response.result;
                  setMessages((prev) => [...prev, receivedMessage]);
                }
              },
              {
                id: `chat-room-${chatRoomId}`,
              }
            );

            console.log('구독 성공:', subscription);

            client.current.publish({
              destination: `/app/chat/${chatRoomId}/join`,
              body: JSON.stringify({
                nickname,
                message: '',
                timestamp: formatDateTime(),
              }),
            });
          } catch (error) {
            console.error('구독 중 에러 발생:', error);
          }
        }
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket');
        setIsConnected(false);
      },
      onStompError: (frame) => {
        console.error('STOMP error:', frame);
      },
    });

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
        timestamp: formatDateTime(),
      }),
    });
  };

  return {
    messages,
    sendMessage,
    isConnected,
  };
};
