import { useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import MainImage from '@/assets/SpacePage/mainimage.svg';
import MainImage2 from '@/assets/SpacePage/mainimage2.svg';
import MainImage3 from '@/assets/SpacePage/mainimage3.svg';
import { BottomSheet, TabType } from '@/components/BottomSheet/BottomSheet';
import { Carousel } from '@/components/Carousel/Carousel';
import { ReviewBtn } from '@/components/ReviewBtn/ReviewBtn';
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
  const [currentTab, setCurrentTab] = useState<TabType>('정보');

  const handleReviewClick = () => {
    // 리뷰 작성 로직
  };

  // 이미지는 나중에 API 응답에서 받아올 수 있음
  const images = [MainImage, MainImage2, MainImage3, MainImage];
  return (
    <Container ref={containerRef}>
      <Carousel images={images} />
      <BottomSheet
        spaceDetail={spaceDetail}
        spaceId={Number(spaceId)}
        containerRef={containerRef}
        onTabChange={setCurrentTab}
      />
      <ReviewBtn
        onClick={handleReviewClick}
        containerRef={containerRef}
        isVisible={currentTab === '리뷰'}
      >
        리뷰 등록
      </ReviewBtn>
    </Container>
  );
};
