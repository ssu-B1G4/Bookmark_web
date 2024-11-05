import styled from 'styled-components';

interface StyledButtonProps {
  disabled?: boolean;
  variant?: 'green' | 'yellow';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  height: 48px;
  width: 100%;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  color: ${(props) => {
    if (props.disabled) return '#979C9E';
    return props.variant === 'yellow' ? '#70520F' : '#198155';
  }};

  background-color: ${(props) => {
    if (props.disabled) return '#e3e5e5';
    return props.variant === 'yellow' ? '#FFF4C1' : '#ECFCE5';
  }};
`;
