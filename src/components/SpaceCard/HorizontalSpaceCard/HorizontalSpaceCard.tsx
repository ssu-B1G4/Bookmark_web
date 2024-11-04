import React, { useState } from 'react';

import { ReplyBtn } from '../../ReplyBtn/ReplyBtn';

import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Title,
  Description,
  StyledText,
  MoodContainer,
  ReviewCount,
  BookmarkButton,
} from './HorizontalSpaceCard.style';

interface SpaceCardProps {
  name: string;
  size: string;
  outlet: string;
  wifi: string;
  isSaved: boolean;
  moods: string[];
  reviewCount: number;
  imageUrl: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({
  name,
  size,
  outlet,
  wifi,
  moods,
  reviewCount,
  isSaved: initialIsSaved,
  imageUrl,
}) => {
  const [isSaved, setIsSaved] = useState(initialIsSaved);

  const handleBookmarkClick = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <Card>
      <ImageWrapper>
        <Image src={imageUrl} alt={name} />
      </ImageWrapper>
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
    </Card>
  );
};

export default SpaceCard;
