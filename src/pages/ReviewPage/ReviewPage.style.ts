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
  color: ${({ theme }) => theme.colors.green};
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
