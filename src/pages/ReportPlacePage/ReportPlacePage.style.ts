import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  margin: 0;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const StyledTitleText = styled.p`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #70520f;
  align-self: self-start;
  padding-left: 4px;
  margin-top: 10px;
`;

export const StyledContentText = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  color: ${({ theme }) => theme.colors.black};
  align-self: self-start;
  padding-left: 6px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledBtnGap = styled.div`
  padding-left: 6px;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 48px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
