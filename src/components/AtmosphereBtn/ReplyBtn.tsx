import React from 'react';

import { StyledButton } from './ReplyBtn.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

export const ReplyBtn = ({
  children,
  onClick,
  disabled = false,
  selected = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} selected={selected}>
      {children}
    </StyledButton>
  );
};
