import { useEffect, useState } from 'react';

import Mock1 from '@/assets/MyPlacePageMock/Image1.svg';
import Mock2 from '@/assets/MyPlacePageMock/Image2.svg';
import { MyPlaceCard } from '@/components/MyPlaceCard/MyPlaceCard';
import { EMPTY_PLACE_MESSAGES } from '@/constant/myplace';
import { Place } from '@/types/MyPlacePage/Place';

import {
  Container,
  Content,
  CountText,
  EmptyDescription,
  EmptyState,
  EmptyTitle,
  Header,
  HeaderTitle,
  SectionHeader,
  SpaceGrid,
  Title,
} from './MyPlacePage.style';

const mockApiResponse = {
  withData: {
    isSuccess: true,
    code: 'PLACE2004',
    message: '저장 공간 목록을 조회했습니다.',
    result: {
      placeList: [
        {
          placeId: 1,
          name: '뚝섬 생각마루',
          size: '넓음',
          outlet: '있음',
          wifi: '있음',
          mood1: '조용한',
          mood2: '깔끔한',
          reviewCount: 0,
          longtitude: '127.123456',
          latitude: '37.123456',
          isSaved: true,
          img: Mock1,
        },
        {
          placeId: 2,
          name: '생각마루 생각마루 생각마루 생각마루 생각마루',
          size: '넓음',
          outlet: '있음',
          wifi: '있음',
          mood1: '조용한',
          mood2: '깔끔한',
          reviewCount: 0,
          longtitude: '127.123456',
          latitude: '37.123456',
          isSaved: true,
          img: Mock2,
        },
      ],
      listSize: 2,
      totalPage: 1,
      totalElements: 2,
      isFirst: true,
      isLast: true,
    },
  },
  empty: {
    isSuccess: true,
    code: 'PLACE2004',
    message: '저장 공간 목록을 조회했습니다.',
    result: {
      placeList: [],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: true,
    },
  },
};
const EmptyPlaceList = () => {
  const { icon, title, description } = EMPTY_PLACE_MESSAGES.NO_PLACES;

  return (
    <EmptyState>
      <EmptyTitle>{icon}</EmptyTitle>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </EmptyState>
  );
};

const PlaceList = ({ places }: { places: Place[] }) => (
  <SpaceGrid>
    {places.map((place) => (
      <MyPlaceCard key={place.placeId} place={place} />
    ))}
  </SpaceGrid>
);

export const MyPlacePage = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    setPlaces(mockApiResponse.empty.result.placeList);
    // setPlaces(mockApiResponse.withData.result.placeList);
  }, []);

  const renderContent = () => {
    if (!places.length) {
      return <EmptyPlaceList />;
    }

    return <PlaceList places={places} />;
  };

  return (
    <Container>
      <Header>
        <Title>내 독서 공간</Title>
        <SectionHeader>
          <HeaderTitle>저장한 공간</HeaderTitle>
          {places.length > 0 && <CountText>총 {places.length}개</CountText>}
        </SectionHeader>
      </Header>
      <Content>{renderContent()}</Content>
    </Container>
  );
};
