import { useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { ChatHeader } from '@/components/ChatHeader/ChatHeader';
import { ChatInput } from '@/components/ChatInput/ChatInput';
import { DateSeparator } from '@/components/DateSeparator/DateSeparator';
import { MessageBubble } from '@/components/MessageBubble/MessageBubble';
import { useChat } from '@/hooks/useChat';
import { ChatMessageResponse } from '@/types/chat';

import { ChatContainer, MessagesWrapper, SystemMessage } from './ChatPage.style';

export const ChatPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const location = useLocation();
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const nickname = '귀여운 다람쥐';
  const { joinRoom, sendMessage, isJoining, isSending } = useChat(placeId || '', nickname);
  const placeName = location.state?.name || '공간 채팅';

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  const isJoinMessage = (message: ChatMessageResponse) => {
    return message.message.includes('님이 입장했습니다.');
  };

  // useMockChat({
  //   onAddMessage: (message) => setMessages((prev) => [...prev, message]),
  //   enabled: true,
  // });

  useEffect(() => {
    const handleJoin = async () => {
      try {
        joinRoom(undefined, {
          onSuccess: (data) => {
            setMessages((prev) => [...prev, data.result]);
          },
        });
      } catch (error) {
        console.error('Failed to join chat:', error);
      }
    };

    handleJoin();
  }, [joinRoom]);

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim() || isSending) return;

    sendMessage(messageText, {
      onSuccess: (data) => {
        setMessages((prev) => [...prev, data.result]);
      },
      onError: (error) => {
        console.error('Failed to send message:', error);
      },
    });
  };

  if (!placeId) {
    return <div>Invalid place ID</div>;
  }

  return (
    <>
      <ChatHeader title={placeName} />
      <ChatContainer>
        <MessagesWrapper>
          <DateSeparator />
          {messages.map((message, index) =>
            isJoinMessage(message) ? (
              <SystemMessage key={index}>{message.message}</SystemMessage>
            ) : (
              <MessageBubble
                key={index}
                text={message.message}
                timestamp={formatTime(message.timestamp)}
                isUserMessage={message.nickname === nickname}
              />
            )
          )}
        </MessagesWrapper>
        <ChatInput onSendMessage={handleSendMessage} disabled={isJoining || isSending} />
      </ChatContainer>
    </>
  );
};
