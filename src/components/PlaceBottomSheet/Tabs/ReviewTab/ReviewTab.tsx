import { useRef, useState } from 'react';

import profile from '@/assets/SpacePage/UserIcon.svg';
import MainImage from '@/assets/SpacePage/mainimage.svg';
import MainImage2 from '@/assets/SpacePage/mainimage2.svg';
import MainImage3 from '@/assets/SpacePage/mainimage3.svg';
import { Review } from '@/types/placeDetail';

import {
  ImageGrid,
  Nickname,
  ProfileImage,
  ProfileImg,
  ReviewContainer,
  ReviewContent,
  ReviewHeader,
  ReviewImage,
  ReviewInfo,
  ReviewItem,
  ReviewList,
  ReviewProfile,
  ReviewSubText,
  VisitDate,
} from './ReviewTab.style';

const MOCK_REVIEWS: Review[] = [
  {
    reviewId: 1,
    nickname: '유저 이름',
    visitDate: '2024.11.12',
    content: '갔다왔는데 너무 좋았어요~',
    reviewImgs: [MainImage, MainImage2, MainImage3, MainImage],
  },
  {
    reviewId: 2,
    nickname: '유저 이름',
    visitDate: '2024.11.12',
    content: '갔다왔는데 너무 좋았어요~',
    reviewImgs: [MainImage],
  },
  {
    reviewId: 3,
    nickname: '유저 이름',
    visitDate: '2024.11.12',
    content: '갔다왔는데 너무 좋았어요~',
    reviewImgs: [],
  },
];
export const ReviewTab = () => {
  const reviewContainerRef = useRef<HTMLDivElement>(null);
  const [reviews] = useState<Review[]>(MOCK_REVIEWS);

  return (
    <ReviewContainer ref={reviewContainerRef}>
      <ReviewHeader>리뷰</ReviewHeader>
      <ReviewSubText>방문자들의 리뷰를 확인해보세요!</ReviewSubText>

      <ReviewList>
        {reviews.map((review) => (
          <ReviewItem key={review.reviewId}>
            <ReviewProfile>
              <ProfileImage>
                <ProfileImg src={profile} />
              </ProfileImage>
              <ReviewInfo>
                <Nickname>{review.nickname}</Nickname>
                <VisitDate>방문 날짜 {review.visitDate}</VisitDate>
              </ReviewInfo>
            </ReviewProfile>
            {review.reviewImgs && (
              <ImageGrid>
                {review.reviewImgs.map((img, index) => (
                  <ReviewImage key={index} src={img} alt={`리뷰 이미지 ${index + 1}`} />
                ))}
              </ImageGrid>
            )}
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewContainer>
  );
};
