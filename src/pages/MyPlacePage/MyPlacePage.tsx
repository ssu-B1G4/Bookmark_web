import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getBookmark } from '@/apis/getBookmark';
import { MyPlaceCard } from '@/components/MyPlaceCard/MyPlaceCard';
import { EMPTY_PLACE_MESSAGES } from '@/constant/myplace';
import { BookmarkPlace } from '@/types/bookmarks';

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

const extractDistrict = (address: string) => {
  const match = address.match(/[가-힣]+ [가-힣]+구/);
  return match ? match[0] : address;
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

const PlaceList = ({ places }: { places: BookmarkPlace[] }) => (
  <SpaceGrid>
    {places.map((place) => (
      <MyPlaceCard
        key={place.placeId}
        placeId={place.placeId}
        name={place.name}
        address={extractDistrict(place.address)}
        img={place.img}
      />
    ))}
  </SpaceGrid>
);

export const MyPlacePage = () => {
  const [page] = useState(1);

  const { data: bookmarkData } = useQuery({
    queryKey: ['bookmarks', page],
    queryFn: () => getBookmark(page),
    select: (data) => {
      return data.result.bookmarkPlaceList.map(
        (bookmark): BookmarkPlace => ({
          placeId: bookmark.placeId,
          name: bookmark.name,
          address: extractDistrict(bookmark.address),
          img: bookmark.img,
        })
      );
    },
  });

  const places = bookmarkData || [];

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
