import { useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { getPlaceDetail } from '@/apis/getPlaceDetail';
import back from '@/assets/BottomNav/backIconWhite.svg';
import { Carousel } from '@/components/Carousel/Carousel';
import { PlaceBottomSheet, TabType } from '@/components/PlaceBottomSheet/PlaceBottomSheet';
import { ReviewBtn } from '@/components/ReviewBtn/ReviewBtn';
import { PlaceDetailResponse } from '@/types/placeDetail';

import { BackButton, Container } from './PlacePage.style';

export const PlacePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const spaceId = location.pathname.split('/').pop();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState<TabType>('정보');

  const { data: placeData } = useQuery<PlaceDetailResponse>({
    queryKey: ['place', spaceId],
    queryFn: () => getPlaceDetail(Number(spaceId)),
    enabled: !!spaceId,
  });
  console.log(placeData);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleReviewClick = () => {
    navigate('/review', {
      state: { spaceId },
    });
  };

  // const images = [MainImage, MainImage2, MainImage3, MainImage];
  return (
    <Container ref={containerRef}>
      <BackButton onClick={handleBackClick}>
        <img src={back} alt="뒤로가기" />
      </BackButton>
      <Carousel images={placeData?.result.placeImgList || []} />
      <PlaceBottomSheet
        spaceDetail={placeData?.result}
        spaceId={Number(spaceId)}
        containerRef={containerRef}
        onTabChange={setCurrentTab}
        // refetchSpaceDetail={refetch}
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
