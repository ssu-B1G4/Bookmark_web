import { useRef } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

import { getReview } from '@/apis/getReview';
import profile from '@/assets/SpacePage/UserIcon.svg';
import { REVIEW_MESSAGES } from '@/constant/\bReviewMessage';
import { ReviewResponse } from '@/types/getReview.type';

import {
  EmptyState,
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

const NoReviews = () => <EmptyState>{REVIEW_MESSAGES.NO_REVIEWS}</EmptyState>;

export const ReviewTab = () => {
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/').pop());
  const reviewContainerRef = useRef<HTMLDivElement>(null);

  const { data: reviewData, isLoading } = useQuery<ReviewResponse>({
    queryKey: ['reviews', spaceId],
    queryFn: () => getReview(spaceId),
    enabled: !!spaceId,
  });

  if (isLoading) return <div>리뷰를 불러오는 중...</div>;
  if (!reviewData?.result.reviewPreviewList.length) return <NoReviews />;

  return (
    <ReviewContainer ref={reviewContainerRef}>
      <ReviewHeader>리뷰</ReviewHeader>
      <ReviewSubText>방문자들의 리뷰를 확인해보세요!</ReviewSubText>
      <ReviewList>
        {reviewData?.result.reviewPreviewList.map((review) => (
          <ReviewItem key={review.reviewId}>
            <ReviewProfile>
              <ProfileImage>
                <ProfileImg src={profile} alt="프로필" />
              </ProfileImage>
              <ReviewInfo>
                <Nickname>{review.nickname}</Nickname>
                <VisitDate>
                  방문 날짜{' '}
                  {new Date(review.visitDate).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </VisitDate>
              </ReviewInfo>
            </ReviewProfile>
            {review.reviewImgs && review.reviewImgs.length > 0 && (
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
