import React from 'react';

import { StyledButton } from './CompleteBtn.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const CompleteBtn = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
