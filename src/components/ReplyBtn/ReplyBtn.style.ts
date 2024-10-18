import styled from 'styled-components';

export const StyledButton = styled.button<{
  disabled?: boolean;
  selected?: boolean;
  textColor?: string;
  bgColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: ${({ disabled, selected, textColor }) =>
    disabled ? textColor : selected ? textColor : '#CDCFD0'};
  background-color: ${({ disabled, selected, bgColor }) =>
    disabled ? bgColor : selected ? bgColor : 'transparent'};
  border: ${({ disabled, selected }) =>
    disabled ? '1px solid transparent' : selected ? '1px solid transparent' : '1px solid #F0F0F0'};
  transition: background-color 0.3s ease;
`;
