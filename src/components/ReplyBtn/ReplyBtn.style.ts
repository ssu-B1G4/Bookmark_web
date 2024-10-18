import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  selected?: boolean;
  textColor?: string;
  bgColor?: string;
}

const getTextColor = ({ disabled, selected, textColor }: ButtonProps) => {
  if (disabled) return textColor;
  if (selected) return textColor;
  return '#CDCFD0';
};

const getBackgroundColor = ({ disabled, selected, bgColor }: ButtonProps) => {
  if (disabled) return bgColor;
  if (selected) return bgColor;
  return 'transparent';
};

const getBorderStyle = ({ disabled, selected }: ButtonProps) => {
  if (disabled) return '1px solid transparent';
  if (selected) return '1px solid transparent';
  return '1px solid #F0F0F0';
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: ${getTextColor};
  background-color: ${getBackgroundColor};
  border: ${getBorderStyle};
  transition: background-color 0.3s ease;
`;
