import { HorizontalPlaceCard } from '@/components/PlaceCard/HorizontalPlaceCard/HorizontalPlaceCard';

import { Container, CardList } from './SearchResultBottomSheetPage.style';
import { SearchResultBottomSheetPageProps } from './SearchResultBottomSheetPageProps';

export const SearchResultBottomSheetPage = ({
  places,
  isLastPage,
  loaderRef,
}: SearchResultBottomSheetPageProps) => {
  return (
    <Container>
      <CardList>
        {places.map((place) => (
          <HorizontalPlaceCard key={place.placeId} {...place} />
        ))}
      </CardList>

      {!isLastPage && <div ref={loaderRef} style={{ height: '50px' }} />}
    </Container>
  );
};
