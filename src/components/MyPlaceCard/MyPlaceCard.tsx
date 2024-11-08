import { Place } from '@/types/MyPlacePage/Place';

import { Card, Image, ImageContainer, Location, TextContainer, Title } from './MyPlaceCard.style';

interface MyPlaceCardProps {
  place: Place;
}

export const MyPlaceCard = ({ place }: MyPlaceCardProps) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={place.img} alt={place.name} />
      </ImageContainer>
      <TextContainer>
        <Title>{place.name}</Title>
        <Location>서울 광진구</Location>
      </TextContainer>
    </Card>
  );
};
