import { useRef } from 'react';

import { useParams } from 'react-router-dom';

import MainImage from '@/assets/SpacePage/mainimage.svg';
import MainImage2 from '@/assets/SpacePage/mainimage2.svg';
import MainImage3 from '@/assets/SpacePage/mainimage3.svg';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { BackgroundImage } from '@/components/Carousel/Carousel';
import { mockPlaceDetail } from '@/mock/placeDetail';

import { Container } from './PlacePage.style';

const useSpaceDetail = () => {
  // 현재는 mock 데이터 반환
  // 나중에 API 연동 시 실제 데이터 fetch 로직 구현
  return {
    data: mockPlaceDetail.result,
    loading: false,
    error: null,
  };
};

export const PlacePage = () => {
  const { spaceId } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: spaceDetail } = useSpaceDetail();

  // 이미지는 나중에 API 응답에서 받아올 수 있음
  const images = [MainImage, MainImage2, MainImage3, MainImage];
  return (
    <Container ref={containerRef}>
      <BackgroundImage images={images} />
      <BottomSheet spaceDetail={spaceDetail} spaceId={Number(spaceId)} />
    </Container>
  );
};
