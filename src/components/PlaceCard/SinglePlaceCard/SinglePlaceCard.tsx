import { useState } from 'react';

import { PlacePreviewDTO } from '@/types/Place';

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

export const SinglePlaceCard = (props: PlacePreviewDTO & { onClick?: () => void }) => {
  const { name, size, outlet, wifi, reviewCount, isSaved: initialIsSaved, onClick } = props;

  const [isSaved, setIsSaved] = useState(initialIsSaved);

  const handleBookmarkClick = () => {
    console.log(props.placeId);
    setIsSaved((prev) => !prev);
  };

  return (
    <Container onClick={onClick}>
      <ImageGallery>
        {props.placeImgList.map((src, index) => (
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
          {props.moods.map((mood, index) => (
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
      <BookmarkButton $isSaved={isSaved} onClick={handleBookmarkClick}></BookmarkButton>
    </Container>
  );
};
