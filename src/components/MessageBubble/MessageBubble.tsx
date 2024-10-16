import { MessageText, MessageWrapper, Timestamp } from './MessageBubble.style';

type MessageProps = {
  text: string;
  timestamp: string;
  isUserMessage: boolean;
};

export const MessageBubble = ({ text, timestamp, isUserMessage }: MessageProps) => {
  return (
    <MessageWrapper $isUserMessage={isUserMessage}>
      <MessageText $isUserMessage={isUserMessage}>{text}</MessageText>
      <Timestamp $isUserMessage={isUserMessage}>{timestamp}</Timestamp>
    </MessageWrapper>
  );
};
