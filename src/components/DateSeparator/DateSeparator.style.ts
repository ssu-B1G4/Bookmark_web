import styled from 'styled-components';

export const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ecfce5;
  width: 100px;
`;

export const DateText = styled.div`
  padding: 0 10px;
  font-size: 8px;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #6e6e6e;
`;
