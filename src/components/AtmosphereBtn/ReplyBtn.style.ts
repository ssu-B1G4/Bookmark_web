import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean; selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: ${({ disabled, selected }) => (disabled ? '#198155' : selected ? '#198155' : '#CDCFD0')};
  background-color: ${({ disabled, selected }) =>
    disabled ? '#ECFCE5' : selected ? '#ECFCE5' : 'transparent'};
  border: ${({ disabled, selected }) =>
    disabled ? '1px solid transparent' : selected ? '1px solid transparent' : '1px solid #F0F0F0'};
  transition: background-color 0.3s ease;
`;
