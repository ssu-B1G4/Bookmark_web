import styled from 'styled-components';

export const TimeInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    width: 20%;
    left: 35%;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeLabel = styled.span`
  margin: 0 10px;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.light300};
  color: ${({ theme }) => theme.colors.black};
`;
