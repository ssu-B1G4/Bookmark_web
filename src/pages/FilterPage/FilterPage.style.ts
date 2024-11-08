import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  gap: 25px;
  background-color: white;
`;

export const OptionWrraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const WorkTimeWrraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

export const TitleText = styled.label`
  font-size: 2.06rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
`;

export const LabelText = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
`;

export const TimeDropdown = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 100px;
`;

export const TimeDisplay = styled.div`
  padding: 12px 16px;
  border: 1px solid #f2f4f5;
  border-radius: 8px;
  background-color: white;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
`;

export const DropdownList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  border: 1px solid #f2f4f5;
  border-radius: 8px;
  overflow-y: auto;
  background-color: white;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  z-index: 10;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownOption = styled.div`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  text-align: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f2f4f5;

  &:hover {
    background-color: #f2f4f5;
  }
`;
