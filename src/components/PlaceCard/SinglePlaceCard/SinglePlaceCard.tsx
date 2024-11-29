import { useState } from 'react';

import { PreviewPlace } from '@/types/Place';

import { ReplyBtn } from '../../ReplyBtn/ReplyBtn';

import {
  Container,
  ImageGallery,
  Image,
  Content,
  Title,
  Description,
  StyledText,
  MoodContainer,
  ReviewCount,
  BookmarkButton,
} from './SinglePlaceCard.style';

interface SinglePlaceCardProps extends PreviewPlace {
  onClick?: () => void;
}

export const SinglePlaceCard = ({
  placeId,
  name,
  size,
  outlet,
  wifi,
  mood1,
  mood2,
  reviewCount,
  isSaved: initialIsSaved,
  imgList,
  onClick,
}: SinglePlaceCardProps) => {
  const [isSaved, setIsSaved] = useState(initialIsSaved);

  const handleBookmarkClick = () => {
    console.log(placeId);
    setIsSaved((prev) => !prev);
  };

  return (
    <Container onClick={onClick}>
      <ImageGallery>
        {imgList.map((src, index) => (
          <Image src={src} alt={`${name} image ${index}`} key={index} />
        ))}
      </ImageGallery>
      <Content>
        <Title>{name}</Title>
        <Description>
          공간 크기 <StyledText>{size}</StyledText> / 콘센트 <StyledText>{outlet}</StyledText> /
          와이파이 <StyledText>{wifi}</StyledText>
        </Description>
        <MoodContainer>
          <ReplyBtn
            key="mood1"
            selected={true}
            $borderRadius={11}
            $fontSize={0.8}
            $fontWeight="regular"
          >
            {mood1}
          </ReplyBtn>
          <ReplyBtn
            key="mood2"
            selected={true}
            $borderRadius={11}
            $fontSize={0.8}
            $fontWeight="regular"
          >
            {mood2}
          </ReplyBtn>
        </MoodContainer>
        <ReviewCount>리뷰 {reviewCount}</ReviewCount>
      </Content>
      <BookmarkButton $isSaved={isSaved} onClick={handleBookmarkClick}></BookmarkButton>
    </Container>
  );
};
