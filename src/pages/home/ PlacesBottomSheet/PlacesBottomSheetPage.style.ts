import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  overflow: hidden;
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

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 500px;
  overflow-y: auto;
  padding-bottom: 24px;
  scrollbar-width: none;
`;
