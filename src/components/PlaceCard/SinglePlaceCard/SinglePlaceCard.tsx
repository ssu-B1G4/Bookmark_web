import React, { useState } from 'react';

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

interface SinglePlaceCardProps {
  name: string;
  size: string;
  outlet: string;
  wifi: string;
  isSaved: boolean;
  moods: string[];
  reviewCount: number;
  images: string[];
}

export const SinglePlaceCard = ({
  name,
  size,
  outlet,
  wifi,
  moods,
  reviewCount,
  isSaved: initialIsSaved,
  images,
}: SinglePlaceCardProps) => {
  const [isSaved, setIsSaved] = useState(initialIsSaved);

  const handleBookmarkClick = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <Container>
      <ImageGallery>
        {images.map((src, index) => (
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
          {moods.map((mood, index) => (
            <ReplyBtn
              key={index}
              selected={true}
              $borderRadius={11}
              $fontSize={0.8}
              $fontWeight="regular"
            >
              {mood}
            </ReplyBtn>
          ))}
        </MoodContainer>
        <ReviewCount>리뷰 {reviewCount}</ReviewCount>
      </Content>
      <BookmarkButton isSaved={isSaved} onClick={handleBookmarkClick}></BookmarkButton>
    </Container>
  );
};
