import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #ffffff;
`;

export const MessagesWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const DateSeparator = styled.div`
  text-align: center;
  color: #999;
  margin: 20px 0;
  font-size: 12px;
`;
