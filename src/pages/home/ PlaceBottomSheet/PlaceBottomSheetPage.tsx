import { useNavigate } from 'react-router-dom';

import { SinglePlaceCard } from '@/components/PlaceCard/SinglePlaceCard/SinglePlaceCard';

import { Container } from './PlaceBottomSheetPage.style';
import { PlaceBottomSheetPageProps } from './PlaceBottomSheetPageProps';

export const PlaceBottomSheetPage = ({ placeData }: PlaceBottomSheetPageProps) => {
  const navigate = useNavigate();

  const handleCardClick = (placeId: number) => {
    navigate(`/place/${placeId}`);
  };
  if (!placeData) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <SinglePlaceCard {...placeData} onClick={() => handleCardClick(placeData.placeId)} />
    </Container>
  );
};
