import { useState } from 'react';

import { SendBtn } from '@/components/SendBtn/SendBtn';

import { InputWrapper, TextInput } from './ChatInput.style';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
};

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() && !disabled) {
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
        disabled={disabled}
      />
      <SendBtn onClick={handleSend} label="전송" disabled={disabled} />
    </InputWrapper>
  );
};
