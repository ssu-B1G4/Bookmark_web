import React from 'react';

import { StyledButton } from './CompleteBtn.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'green' | 'yellow';
}

export const CompleteBtn = ({
  children,
  onClick,
  disabled = false,
  variant = 'green',
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
};
