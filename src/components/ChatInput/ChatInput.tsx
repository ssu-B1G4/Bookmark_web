import { useState } from 'react';

import { SendBtn } from '@/components/SendBtn/SendBtn';

import { InputWrapper, TextInput } from './ChatInput.style';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleSend();
      e.preventDefault();
    }
  };

  return (
    <InputWrapper>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메세지를 입력해주세요."
      />
      <SendBtn onClick={handleSend} label="전송" />
    </InputWrapper>
  );
};
