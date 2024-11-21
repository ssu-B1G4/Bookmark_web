import { SinglePlaceCard } from '@/components/PlaceCard/SinglePlaceCard/SinglePlaceCard';

import { Container } from './PlaceBottomSheetPage.style';
import { PlaceBottomSheetPageProps } from './PlaceBottomSheetPageProps';

export const PlaceBottomSheetPage = ({ placeData }: PlaceBottomSheetPageProps) => {
  if (!placeData) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <SinglePlaceCard {...placeData} />
    </Container>
  );
};
