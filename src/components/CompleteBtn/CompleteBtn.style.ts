import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  color: ${({ disabled }) => (disabled ? '#979C9E' : '#198155')};
  background-color: ${({ disabled }) => (disabled ? '#e3e5e5' : '#ECFCE5')};
  height: 48px;
  width: 100%;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
