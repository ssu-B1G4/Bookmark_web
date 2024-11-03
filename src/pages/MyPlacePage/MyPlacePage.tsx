import { useEffect, useState } from 'react';

import { MyPlaceCard } from '@/components/MyPlaceCard/MyPlaceCard';
import { EMPTY_PLACE_MESSAGES } from '@/constant/myplace';
import { Place, PlaceListResponse } from '@/types/MyPlacePage/Place';

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

const mockApiResponse: PlaceListResponse = {
  isSuccess: true,
  code: 'PLACE2004',
  message: '저장 공간 목록을 조회했습니다.',
  result: {
    placeList: [],
    listSize: 2,
    totalPage: 1,
    totalElements: 2,
    isFirst: true,
    isLast: true,
  },
};

export const MyPlacePage = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    setPlaces(mockApiResponse.result.placeList);
  }, []);

  const renderPlaceList = (places: Place[]) => {
    if (!places.length) {
      const { icon, title, description } = EMPTY_PLACE_MESSAGES.NO_PLACES;

      return (
        <EmptyState>
          <EmptyTitle>{icon}</EmptyTitle>
          <EmptyTitle>{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyState>
      );
    }

    return (
      <SpaceGrid>
        {places.map((place) => (
          <MyPlaceCard key={place.placeId} place={place} />
        ))}
      </SpaceGrid>
    );
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
      <Content>{renderPlaceList(places)}</Content>
    </Container>
  );
};
