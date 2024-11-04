import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  position: relative;
`;

export const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background-color: #eaebeb;
`;

export const SliderProgress = styled.div<{ $progress: number; $progressColor?: string }>`
  position: absolute;
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ $progressColor, theme }) => $progressColor ?? theme.colors.green};
  border-radius: 5px;
`;

export const SliderThumb = styled.img<{ $progress: number }>`
  position: absolute;
  top: -20px;
  left: ${({ $progress }) => $progress}%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 40px;
`;

export const MarkerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

export const MarkerLabel = styled.span<{ $labelColor?: string }>`
  font-size: 1.2rem;
  color: ${({ $labelColor, theme }) => $labelColor ?? theme.colors.green};
`;
