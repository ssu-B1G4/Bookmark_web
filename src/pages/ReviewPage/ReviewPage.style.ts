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

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContentText = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  color: ${({ theme }) => theme.colors.black};
  align-self: self-start;
  padding-left: 6px;
`;

export const StyledWarnText = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  color: #72777a;
  padding-left: 6px;
  padding-top: 3px;
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

export const BookTagsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const BookTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ecfce5;
  color: #198155;
  border-radius: 2rem;
  font-size: 1.6rem;

  .remove-tag {
    margin-left: 0.5rem;
    border: none;
    background: none;
    color: #198155;
    cursor: pointer;
    padding: 0 0.3rem;
    font-size: 1.6rem;
  }
`;

export const InputWithButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;

  input {
    flex: 1;
  }
`;

export const AddTagButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border-radius: 0.8rem;
  white-space: nowrap;
  height: 42px;
  width: 18%;
  font-size: 1.3rem;
  border-radius: 8px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;
