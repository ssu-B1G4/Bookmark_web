import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  overflow: hidden;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 500px;
  overflow-y: auto;
  padding-bottom: 24px;
  scrollbar-width: none;
`;
