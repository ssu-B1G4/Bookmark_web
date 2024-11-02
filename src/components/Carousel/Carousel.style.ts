import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: fixed;
  max-width: 43rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #000;
  z-index: 1;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  height: calc(min(43rem, 100vw));
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`;

export const Slider = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

export const PageIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#198155' : '#ECFCE5')};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
`;
