import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  height: calc(100% - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  display: flex;
  background-color: rgba(145, 145, 145, 0.05);
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 16px;
`;

export const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 11px 18px;
  border-radius: 10px;
  background-color: ${({ $active }) => ($active ? '#198155' : 'transparent')};
  color: ${({ $active }) => ($active ? 'white' : 'black')};
  font-size: 1.2rem;
  font-weight: ${({ $active, theme }) => ($active ? theme.fonts.medium500 : theme.fonts.light300)};
  transition: background-color 0.3s ease;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

export const CardList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 16px;
`;
