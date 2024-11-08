import styled from 'styled-components';

export const Card = styled.div`
  padding: 16px;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  margin: 0 0 8px 0;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Author = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  margin: 0;
`;

export const AuthorInfo = styled(Author)`
  color: #198155;
`;
