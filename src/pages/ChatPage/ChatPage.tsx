import { useState } from 'react';

import { ChatInput } from '@/components/ChatInput/ChatInput';
import { DateSeparator } from '@/components/DateSeparator/DateSeparator';
import { MessageBubble } from '@/components/MessageBubble/MessageBubble';

import { ChatContainer, MessagesWrapper } from './ChatPage.style';

export const ChatPage = () => {
  const [messages, setMessages] = useState<
    { text: string; timestamp: string; isUserMessage: boolean }[]
  >([]);

  const handleSendMessage = (messageText: string) => {
    const newMessage = {
      text: messageText,
      timestamp: new Date().toLocaleTimeString(),
      isUserMessage: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContainer>
      <MessagesWrapper>
        <DateSeparator />
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            text={message.text}
            timestamp={message.timestamp}
            isUserMessage={message.isUserMessage}
          />
        ))}
      </MessagesWrapper>
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};
