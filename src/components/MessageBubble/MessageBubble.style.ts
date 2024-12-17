import styled from 'styled-components';

export const MessageWrapper = styled.div<{ $isUserMessage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isUserMessage }) => ($isUserMessage ? 'flex-end' : 'flex-start')};
  margin: 8px 0;
  max-width: 70%;
  ${({ $isUserMessage }) => ($isUserMessage ? 'margin-left: auto;' : 'margin-right: auto;')}
`;

export const ContentWrapper = styled.div<{ $isUserMessage: boolean }>`
  display: flex;
  flex-direction: ${({ $isUserMessage }) => ($isUserMessage ? 'row-reverse' : 'row')};
  align-items: flex-end;
  gap: 8px;
`;

export const MessageText = styled.div<{ $isUserMessage: boolean }>`
  background-color: ${({ $isUserMessage }) => ($isUserMessage ? '#198155' : '#ECFCE5')};
  color: ${({ $isUserMessage }) => ($isUserMessage ? '#fff' : '#000')};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.light300};
  line-height: 1.4;
  word-break: break-word;
  border-top-right-radius: ${({ $isUserMessage }) => ($isUserMessage ? '0' : '20px')};
  border-top-left-radius: ${({ $isUserMessage }) => (!$isUserMessage ? '0' : '20px')};
`;

export const Timestamp = styled.span`
  font-weight: ${({ theme }) => theme.fonts.light300};
  font-size: 8px;
  color: #a7a7a7;
  margin-top: 4px;
  flex-shrink: 0;
`;

export const NicknameText = styled.span`
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 4px;
  display: block;
`;
