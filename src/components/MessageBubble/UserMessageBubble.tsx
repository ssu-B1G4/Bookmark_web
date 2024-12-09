import { ContentWrapper, MessageText, MessageWrapper, Timestamp } from './MessageBubble.style';
import { OtherMessageProps } from './OtherMessageBubble';

export const UserMessageBubble = ({ text, timestamp }: Omit<OtherMessageProps, 'nickname'>) => {
  return (
    <MessageWrapper $isUserMessage={true}>
      <ContentWrapper $isUserMessage={true}>
        <MessageText $isUserMessage={true}>{text}</MessageText>
        <Timestamp>{timestamp}</Timestamp>
      </ContentWrapper>
    </MessageWrapper>
  );
};
