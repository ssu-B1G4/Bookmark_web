import { Bookmark } from '@/components/Bookmark/Bookmark';
import { PLACE_INFO_MESSAGES } from '@/constant/HomeMessage';
import { PlacePreviewDTO } from '@/types/Place';

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

type PlaceCardProps = PlacePreviewDTO;

export const HorizontalPlaceCard = (
  props: PlaceCardProps & { onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }
) => {
  const { name, size, outlet, wifi, reviewCount, onClick } = props;

  const imageUrl = props.placeImgList[0];

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
