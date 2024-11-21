import { HorizontalPlaceCard } from '@/components/PlaceCard/HorizontalPlaceCard/HorizontalPlaceCard';
import { TAB_MESSAGES } from '@/constant/HomeMessage';

import { Container, TabContainer, Tab, CardList } from './PlacesBottomSheetPage.style';
import { PlacesBottomSheetPageProps } from './PlacesBottomSheetPageProps';

export const PlacesBottomSheetPage = ({
  places,
  isLastPage,
  onTabChange,
  loaderRef,
  activeTab,
}: PlacesBottomSheetPageProps) => {
  return (
    <Container>
      <TabContainer>
        <Tab onClick={() => onTabChange('nearby')} $active={activeTab === 'nearby'}>
          {TAB_MESSAGES.NEARBY}
        </Tab>
        <Tab onClick={() => onTabChange('bookmark')} $active={activeTab === 'bookmark'}>
          {TAB_MESSAGES.BOOKMARK}
        </Tab>
      </TabContainer>

      <CardList>
        {places.map((place) => (
          <HorizontalPlaceCard key={place.placeId} {...place} />
        ))}
      </CardList>

      {!isLastPage && <div ref={loaderRef} style={{ height: '50px' }} />}
    </Container>
  );
};
