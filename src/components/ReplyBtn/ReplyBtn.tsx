import React from 'react';

import { StyledButton } from './ReplyBtn.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  textColor?: string;
  bgColor?: string;
}

export const ReplyBtn = ({
  children,
  onClick,
  disabled = false,
  selected = false,
  textColor = '#198155',
  bgColor = '#ECFCE5',
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      selected={selected}
      textColor={textColor}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
};
