import { ReviewFormData } from '@/types/ReviewPage/ReviewFormData';
import { ResponseReview } from '@/types/review.type';
import { client } from '@/utils/axios';
import { transformReviewData } from '@/utils/enumTransforms';

export const postReview = async (
  placeId: number,
  reviewData: ReviewFormData,
  images?: File[]
): Promise<ResponseReview> => {
  const formData = new FormData();
  const transformedData = transformReviewData(reviewData);

  formData.append('reviewData', JSON.stringify(transformedData));

  if (images && images.length > 0) {
    images.forEach((image) => {
      formData.append('images', image);
    });
  }

  const { data } = await client.post<ResponseReview>(`/reviews/${placeId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
