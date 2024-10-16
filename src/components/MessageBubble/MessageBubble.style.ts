import styled from 'styled-components';

export const MessageWrapper = styled.div<{ $isUserMessage: boolean }>`
  display: flex;
  flex-direction: ${({ $isUserMessage }) => ($isUserMessage ? 'row-reverse' : 'row')};
  align-items: ${({ $isUserMessage }) => ($isUserMessage ? 'flex-end' : 'flex-start')};
  margin: 8px 0;
`;

export const MessageText = styled.div<{ $isUserMessage: boolean }>`
  background-color: ${({ $isUserMessage }) => ($isUserMessage ? '#198155' : '#ECFCE5')};
  color: ${({ $isUserMessage }) => ($isUserMessage ? '#fff' : '#000')};
  padding: 8px 16px;
  border-radius: 20px;
  max-width: 60%;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.light300};
  line-height: 1.4;
  border-top-right-radius: ${({ $isUserMessage }) => ($isUserMessage ? '0' : '20px')};
  border-top-left-radius: ${({ $isUserMessage }) => (!$isUserMessage ? '0' : '20px')};
`;

export const Timestamp = styled.span<{ $isUserMessage: boolean }>`
  font-weight: ${({ theme }) => theme.fonts.light300};
  font-size: 8px;
  color: #a7a7a7;
  margin-top: 4px;
  align-self: ${({ $isUserMessage }) => ($isUserMessage ? 'flex-end' : 'flex-start')};
  margin-left: ${({ $isUserMessage }) => (!$isUserMessage ? '8px' : '0')};
  margin-right: ${({ $isUserMessage }) => ($isUserMessage ? '8px' : '0')};
  align-self: flex-end;
`;
