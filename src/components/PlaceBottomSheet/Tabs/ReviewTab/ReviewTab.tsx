import { useEffect, useRef, useState } from 'react';

import { getReview } from '@/apis/getReview';
import profile from '@/assets/SpacePage/UserIcon.svg';
import { ReviewPreview } from '@/types/getReview.type';

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

export const ReviewTab = () => {
  const reviewContainerRef = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<ReviewPreview[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await getReview(2);
      // 나중에 placeId를 prop으로 받거나 다른 방식으로 가져오기
      if (response.isSuccess) {
        setReviews(response.result.reviewPreviewList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) return <div>리뷰를 불러오는 중...</div>;

  return (
    <ReviewContainer ref={reviewContainerRef}>
      <ReviewHeader>리뷰</ReviewHeader>
      <ReviewSubText>방문자들의 리뷰를 확인해보세요!</ReviewSubText>
      <ReviewList>
        {reviews.map((review) => (
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
