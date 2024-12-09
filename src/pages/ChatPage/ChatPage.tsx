import { useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { ChatHeader } from '@/components/ChatHeader/ChatHeader';
import { ChatInput } from '@/components/ChatInput/ChatInput';
import { DateSeparator } from '@/components/DateSeparator/DateSeparator';
import { UserMessageBubble } from '@/components/MessageBubble/UserMessageBubble';
import { useChat } from '@/hooks/useChat';

interface ChatMessageDTO {
  nickname: string;
  message: string;
  timestamp: string;
}

import { ChatContainer, MessagesWrapper } from './ChatPage.style';

export const ChatPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const location = useLocation();
  const nickname = '귀여운 다람쥐';
  const placeName = location.state?.name || '공간 채팅';
  const [localMessages, setLocalMessages] = useState<ChatMessageDTO[]>([]);

  const { messages, sendMessage, isConnected } = useChat(placeId as string, nickname);

  useEffect(() => {
    if (placeId) {
      console.log('Current messages:', messages);
      console.log('Connection status:', isConnected);
    }
  }, [messages, isConnected, placeId]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
      2,
      '0'
    )}`;
  };

  // const isJoinMessage = (message: ChatMessageDTO) => {
  //   return message.message.includes('님이 입장했습니다.');
  // };

  const handleSendMessage = (messageText: string) => {
    console.log('메시지 전송 시도:', messageText);
    if (!messageText.trim() || !isConnected) return;

    const newMessage: ChatMessageDTO = {
      nickname,
      message: messageText,
      timestamp: new Date().toISOString(),
    };
    setLocalMessages((prev: ChatMessageDTO[]) => [...prev, newMessage]);

    sendMessage(messageText);
  };

  if (!placeId) {
    return <div>잘못된 채팅방 ID입니다</div>;
  }

  return (
    <>
      <ChatHeader title={placeName} />
      <ChatContainer>
        <MessagesWrapper>
          <DateSeparator />
          {localMessages.length > 0 ? (
            localMessages.map((message, index) => (
              <UserMessageBubble
                key={index}
                text={message.message}
                timestamp={formatTime(message.timestamp)}
              />
            ))
          ) : (
            <div></div>
          )}
        </MessagesWrapper>
        <ChatInput onSendMessage={handleSendMessage} disabled={!isConnected} />
      </ChatContainer>
    </>
  );
};
