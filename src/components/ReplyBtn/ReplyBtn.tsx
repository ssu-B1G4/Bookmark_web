import React from 'react';

import { StyledButton } from './ReplyBtn.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  textColor?: string;
  bgColor?: string;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
}

export const ReplyBtn = ({
  children,
  onClick,
  disabled = false,
  selected = false,
  textColor = '#198155',
  bgColor = '#ECFCE5',
  borderRadius = 16,
  fontSize = 1.2,
  fontWeight = '400',
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      selected={selected}
      textColor={textColor}
      bgColor={bgColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledButton>
  );
};
