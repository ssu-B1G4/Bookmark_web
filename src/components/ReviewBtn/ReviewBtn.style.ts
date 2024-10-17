import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $isScrolling: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1000px;
  color: white;
  background-color: #2f774d;
  transition: all 0.3s ease;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};

  svg {
    width: 24px;
    height: 24px;
  }

  ${({ $isScrolling }) =>
    $isScrolling &&
    css`
      width: 45px;
      height: 45px;
      padding: 10px;
      font-size: 0px;
      cursor: default;
    `}

  ${({ $isScrolling }) =>
    !$isScrolling &&
    css`
      width: 108px;
      height: 42px;
      gap: 4px;
      padding: 9px;
      font-size: 14px;
      cursor: pointer;
    `}
`;