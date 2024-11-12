import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: white;
`;
export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 16px;
`;
export const LoginText = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.bold700};
  margin-bottom: 10px;
`;
export const LoginSubText = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  color: #2aa971;
  margin-bottom: 80px;
`;
export const KakaoButton = styled.img`
  width: 100%;
  max-width: 335px;
  cursor: pointer;
`;
