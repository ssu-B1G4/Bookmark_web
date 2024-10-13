import styled from 'styled-components';

export const ButtonWrapper = styled.button<{ isProcessing: boolean }>`
  padding: 5.8px 12px;
  font-size: 16px;
  border-radius: 22px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ isProcessing }) => (isProcessing ? '#ECFCE5' : '#FFFFFF')};
  font-weight: ${({ theme }) => theme.fonts.regular400};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:disabled {
    cursor: not-allowed;
  }
`;
