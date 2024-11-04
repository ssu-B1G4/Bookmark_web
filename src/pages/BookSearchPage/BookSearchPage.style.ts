import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export const SearchResultCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666666;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin: 16px 0;
  padding-left: 20px;
`;

export const Count = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 0;
  white-space: pre-line;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  line-height: 1.5;

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
