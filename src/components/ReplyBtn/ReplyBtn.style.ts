import { styled, DefaultTheme } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  selected?: boolean;
  textColor?: string;
  bgColor?: string;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
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

const getFontWeight = ({ fontWeight, theme }: ButtonProps & { theme: DefaultTheme }) => {
  switch (fontWeight) {
    case 'thin':
      return theme.fonts.thin100;
    case '100':
      return theme.fonts.thin100;
    case 'extraLight':
      return theme.fonts.extraLight200;
    case '200':
      return theme.fonts.extraLight200;
    case 'light':
      return theme.fonts.light300;
    case '300':
      return theme.fonts.extraLight200;
    case 'regular':
      return theme.fonts.regular400;
    case '400':
      return theme.fonts.regular400;
    case 'medium5':
      return theme.fonts.medium500;
    case '500':
      return theme.fonts.medium500;
    case 'semiBold':
      return theme.fonts.semiBold600;
    case '600':
      return theme.fonts.semiBold600;
    case 'bold':
      return theme.fonts.bold700;
    case '700':
      return theme.fonts.bold700;
    case 'extraBold':
      return theme.fonts.extraBold800;
    case '800':
      return theme.fonts.extraBold800;
    case 'black':
      return theme.fonts.black900;
    case '900':
      return theme.fonts.black900;
    default:
      return theme.fonts.regular400;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${getFontWeight};
  color: ${getTextColor};
  background-color: ${getBackgroundColor};
  border: ${getBorderStyle};
  transition: background-color 0.3s ease;
`;
