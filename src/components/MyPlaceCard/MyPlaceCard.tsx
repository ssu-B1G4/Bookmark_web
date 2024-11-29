import { BookmarkPlace } from '@/types/bookmarks';

import { Card, Image, ImageContainer, Location, TextContainer, Title } from './MyPlaceCard.style';

export const MyPlaceCard = ({ name, address, img }: BookmarkPlace) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={img} alt={name} />
      </ImageContainer>
      <TextContainer>
        <Title>{name}</Title>
        <Location>{address}</Location>
      </TextContainer>
    </Card>
  );
};
