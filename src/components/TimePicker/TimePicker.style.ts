// import styled from 'styled-components';

// export const TimeInput = styled.input`
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid #ddd;
//   font-size: 1rem;
//   appearance: none;
//   cursor: pointer;

//   &::-webkit-calendar-picker-indicator {
//     opacity: 0;
//     position: absolute;
//     width: 20%;
//     left: 35%;
//   }
// `;

// export const TimeWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const TimeLabel = styled.span`
//   margin: 0 10px;
//   font-size: 1.4rem;
//   font-weight: ${({ theme }) => theme.fonts.light300};
//   color: ${({ theme }) => theme.colors.black};
// `;
import styled from 'styled-components';

export const TimePickerContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TimeSelectGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimeDropdown = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 60px;
`;

export const TimeDisplay = styled.div`
  padding: 12px 8px;
  border: 1px solid #f2f4f5;
  border-radius: 8px;
  background-color: white;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  cursor: pointer;
`;

export const DropdownList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? '150px' : '0')};
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
  font-weight: 300;
  text-align: center;
  padding: 12px 8px;
  border-bottom: 1px solid #f2f4f5;
  cursor: pointer;

  &:hover {
    background-color: #f2f4f5;
  }
`;

export const TimeSeparator = styled.span`
  font-size: 1.6rem;
  color: #666;
`;

export const Divider = styled.span`
  font-size: 1.6rem;
  color: #666;
`;
