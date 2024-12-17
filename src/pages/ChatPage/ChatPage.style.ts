import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  height: calc(100vh - 60px);
`;

export const MessagesWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const DateSeparator = styled.div`
  text-align: center;
  color: #999;
  margin: 20px 0;
  font-size: 12px;
`;

export const SystemMessage = styled.div`
  text-align: center;
  color: #999;
  font-size: 12px;
  padding: 8px 0;
  margin: 8px 0;
`;
