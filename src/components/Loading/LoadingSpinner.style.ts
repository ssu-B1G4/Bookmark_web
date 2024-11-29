import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0%, 39%, 100% {
    opacity: 0.3;
  }
  40% {
    opacity: 1;
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  position: relative;
`;

export const Dot = styled.div<{ $index: number }>`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  position: absolute;
  animation: ${fade} 1.2s infinite ease-in-out;
  animation-delay: ${({ $index }) => $index * 0.15}s;

  ${({ $index }) => {
    const angle = ($index * 360) / 8;
    const radians = (angle * Math.PI) / 180;
    const distance = 30;
    return `
      top: calc(50% + ${Math.sin(radians) * distance}px - 6px);
      left: calc(50% + ${Math.cos(radians) * distance}px - 6px);
    `;
  }}
`;
