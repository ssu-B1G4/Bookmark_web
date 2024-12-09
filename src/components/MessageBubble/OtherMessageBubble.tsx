import {
  ContentWrapper,
  MessageText,
  MessageWrapper,
  NicknameText,
  Timestamp,
} from './MessageBubble.style';

export type OtherMessageProps = {
  text: string;
  timestamp: string;
  nickname: string;
};

export const OtherMessageBubble = ({ text, timestamp, nickname }: OtherMessageProps) => {
  return (
    <MessageWrapper $isUserMessage={false}>
      <NicknameText>{nickname}</NicknameText>
      <ContentWrapper $isUserMessage={false}>
        <MessageText $isUserMessage={false}>{text}</MessageText>
        <Timestamp>{timestamp}</Timestamp>
      </ContentWrapper>
    </MessageWrapper>
  );
};
