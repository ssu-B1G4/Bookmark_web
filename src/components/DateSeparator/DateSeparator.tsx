import { DateText, Line, SeparatorWrapper } from './DateSeparator.style';

export const DateSeparator = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <SeparatorWrapper>
      <Line />
      <DateText>{formattedDate}</DateText>
      <Line />
    </SeparatorWrapper>
  );
};
