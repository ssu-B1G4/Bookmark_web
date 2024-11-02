import { useRef } from 'react';

import MainImage from '@/assets/SpacePage/mainimage.svg';
import MainImage2 from '@/assets/SpacePage/mainimage2.svg';
import MainImage3 from '@/assets/SpacePage/mainimage3.svg';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { BackgroundImage } from '@/components/Carousel/Carousel';

import { Container } from './SpacePage.style';

export const SpacePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [MainImage, MainImage2, MainImage3, MainImage];

  const spaceInfo = {
    title: 'eea',
    location: '서울특별시 동작구 369',
    category: '실내 공간',
    outlet: '적음',
    size: '작음',
    wifi: '없음',
    noise: '낮음',
    mood1: '🎆 편안한',
    mood2: '🪑 아늑한',
  };

  return (
    <Container ref={containerRef}>
      <BackgroundImage images={images} />
      <BottomSheet spaceInfo={spaceInfo} />
    </Container>
  );
};
