import { useNavigate } from 'react-router-dom';

import { HorizontalPlaceCard } from '@/components/PlaceCard/HorizontalPlaceCard/HorizontalPlaceCard';
import { TAB_MESSAGES, NO_PLACE_MESSAGES } from '@/constant/HomeMessage';
import { EmptyState, EmptyTitle, EmptyDescription } from '@/pages/MyPlacePage/MyPlacePage.style';

import { Container, TabContainer, Tab, CardList, Content } from './PlacesBottomSheetPage.style';
import { PlacesBottomSheetPageProps } from './PlacesBottomSheetPageProps';

export const PlacesBottomSheetPage = ({
  places = [],
  isLastPage,
  showTabs = true,
  onTabChange,
  activeTab,
  loaderRef,
}: PlacesBottomSheetPageProps) => {
  const navigate = useNavigate();

  const handleCardClick = (placeId: number) => {
    navigate(`/place/${placeId}`);
  };

  const PlaceList = () => {
    return (
      <CardList>
        {places.map((place) => (
          <HorizontalPlaceCard
            key={place.placeId}
            {...place}
            onClick={() => handleCardClick(place.placeId)}
          />
        ))}
      </CardList>
    );
  };

  const EmptyPlace = () => {
    const { icon, title, description } = NO_PLACE_MESSAGES;

    return (
      <EmptyState>
        <EmptyTitle>{icon}</EmptyTitle>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyState>
    );
  };

  const renderContent = () => {
    if (!places || places.length === 0) {
      return <EmptyPlace />;
    }

    return <PlaceList />;
  };

  return (
    <Container>
      {showTabs && (
        <TabContainer>
          <Tab onClick={() => onTabChange?.('nearby')} $active={activeTab === 'nearby'}>
            {TAB_MESSAGES.NEARBY}
          </Tab>
          <Tab onClick={() => onTabChange?.('bookmark')} $active={activeTab === 'bookmark'}>
            {TAB_MESSAGES.BOOKMARK}
          </Tab>
        </TabContainer>
      )}

      <Content>{renderContent()}</Content>

      {!isLastPage && <div ref={loaderRef} style={{ height: '50px' }} />}
    </Container>
  );
};
