import { useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { ChatHeader } from '@/components/ChatHeader/ChatHeader';
import { ChatInput } from '@/components/ChatInput/ChatInput';
import { DateSeparator } from '@/components/DateSeparator/DateSeparator';
import { OtherMessageBubble } from '@/components/MessageBubble/OtherMessageBubble';
import { SystemMessage } from '@/components/MessageBubble/SystemMessage';
import { UserMessageBubble } from '@/components/MessageBubble/UserMessageBubble';
import { useChat } from '@/hooks/useChat';
import { ChatMessageDTO } from '@/types/chat';

import { ChatContainer, MessagesWrapper } from './ChatPage.style';

export const ChatPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const location = useLocation();
  const placeName = location.state?.name || '공간 채팅';
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [memberId, setMemberId] = useState<string | null>(null);

  const chatRoomId = parseInt(placeId ?? '', 10) || 0;
  const { messages, sendMessage, isConnected } = useChat(chatRoomId, memberId ?? '');

  useEffect(() => {
    const id = sessionStorage.getItem('memberId');
    setMemberId(id);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim() || !isConnected || !chatRoomId) return;
    sendMessage(messageText);
  };

  const renderMessage = (message: ChatMessageDTO, index: number) => {
    if (!message.message && message.nickname) {
      return (
        <SystemMessage
          key={`${message.timestamp}-${index}`}
          text={`${message.nickname}님이 입장했습니다.`}
        />
      );
    }

    const isUserMessage = message.nickname === memberId;

    if (isUserMessage) {
      return (
        <UserMessageBubble
          key={`${message.timestamp}-${index}`}
          text={message.message}
          timestamp={formatTime(message.timestamp)}
        />
      );
    }

    return (
      <OtherMessageBubble
        key={`${message.timestamp}-${index}`}
        text={message.message}
        timestamp={formatTime(message.timestamp)}
        nickname={message.nickname}
      />
    );
  };

  if (!chatRoomId) {
    return <div>잘못된 채팅방 ID입니다</div>;
  }

  return (
    <>
      <ChatHeader title={placeName} />
      <ChatContainer>
        <MessagesWrapper>
          <DateSeparator />
          {messages.map(renderMessage)}
          <div ref={messagesEndRef} />
        </MessagesWrapper>
        <ChatInput onSendMessage={handleSendMessage} disabled={!isConnected} />
      </ChatContainer>
    </>
  );
};
