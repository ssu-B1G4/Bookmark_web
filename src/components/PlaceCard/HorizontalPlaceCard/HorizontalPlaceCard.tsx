import { Bookmark } from '@/components/Bookmark/Bookmark';
import { PLACE_INFO_MESSAGES } from '@/constant/HomeMessage';
import { PlacePreviewDTO, RecommendPlace } from '@/types/Place';

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
  BookmarkWrapper,
} from './HorizontalPlaceCard.style';

type PlaceCardProps = PlacePreviewDTO | RecommendPlace;

const isPlacePreviewDTO = (place: PlaceCardProps): place is PlacePreviewDTO => {
  return 'moods' in place && Array.isArray(place.moods);
};

export const HorizontalPlaceCard = (
  props: PlaceCardProps & { onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }
) => {
  const { name, size, outlet, wifi, reviewCount, onClick } = props;

  const imageUrl = isPlacePreviewDTO(props) ? props.placeImgList[0] : props.img;

  return (
    <Card
      onClick={(e) => {
        if (e.defaultPrevented) return;
        if (onClick) onClick(e);
      }}
    >
      <ImageWrapper>
        <Image src={imageUrl} alt={name} />
      </ImageWrapper>
      <Content>
        <Title>{name}</Title>
        <Description>
          {PLACE_INFO_MESSAGES.SIZE_LABEL} <StyledText>{size}</StyledText> /{' '}
          {PLACE_INFO_MESSAGES.OUTLET_LABEL} <StyledText>{outlet}</StyledText> /
          {PLACE_INFO_MESSAGES.WIFI_LABEL} <StyledText>{wifi}</StyledText>
        </Description>
        <MoodContainer>
          {isPlacePreviewDTO(props)
            ? props.moods.map((mood, index) => (
                <ReplyBtn
                  key={index}
                  selected={true}
                  $borderRadius={11}
                  $fontSize={0.8}
                  $fontWeight="regular"
                >
                  {mood}
                </ReplyBtn>
              ))
            : [props.mood1, props.mood2].map((mood, index) => (
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
        <ReviewCount>
          {PLACE_INFO_MESSAGES.REVIEW_LABEL} {reviewCount}
        </ReviewCount>
      </Content>
      <BookmarkWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Bookmark placeId={props.placeId} />
      </BookmarkWrapper>
    </Card>
  );
};
