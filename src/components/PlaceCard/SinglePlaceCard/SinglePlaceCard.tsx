import { Bookmark } from '@/components/Bookmark/Bookmark';
import { PlacePreviewDTO } from '@/types/Place';

import { ReplyBtn } from '../../ReplyBtn/ReplyBtn';

import {
  Container,
  ImageGallery,
  Image,
  HorizontalWrapper,
  Content,
  Title,
  Description,
  StyledText,
  MoodContainer,
  ReviewCount,
  BookmarkWrapper,
} from './SinglePlaceCard.style';

export const SinglePlaceCard = (
  props: PlacePreviewDTO & { onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }
) => {
  const { name, size, outlet, wifi, reviewCount, onClick } = props;

  return (
    <Container
      onClick={(e) => {
        if (e.defaultPrevented) return;
        if (onClick) onClick(e);
      }}
    >
      <ImageGallery>
        {props.placeImgList.map((src, index) => (
          <Image src={src} alt={`${name} image ${index}`} key={index} />
        ))}
      </ImageGallery>
      <HorizontalWrapper>
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
        <BookmarkWrapper
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Bookmark placeId={props.placeId} />
        </BookmarkWrapper>
      </HorizontalWrapper>
    </Container>
  );
};
