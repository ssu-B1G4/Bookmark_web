import { useNavigate } from 'react-router-dom';

import { HorizontalPlaceCard } from '@/components/PlaceCard/HorizontalPlaceCard/HorizontalPlaceCard';

import { Container, CardList } from './SearchResultBottomSheetPage.style';
import { SearchResultBottomSheetPageProps } from './SearchResultBottomSheetPageProps';

export const SearchResultBottomSheetPage = ({
  places,
  isLastPage,
  loaderRef,
}: SearchResultBottomSheetPageProps) => {
  const navigate = useNavigate();

  const handleCardClick = (placeId: number) => {
    navigate(`/place/${placeId}`);
  };

  return (
    <Container>
      <CardList>
        {places.map((place) => (
          <HorizontalPlaceCard
            key={place.placeId}
            {...place}
            onClick={() => handleCardClick(place.placeId)}
          />
        ))}
      </CardList>

      {!isLastPage && <div ref={loaderRef} style={{ height: '50px' }} />}
    </Container>
  );
};
