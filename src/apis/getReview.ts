import { ReviewResponse } from '@/types/getReview.type';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getReview = async (placeId: number, page: number = 1): Promise<ReviewResponse> => {
  try {
    const { data } = await client.get<ReviewResponse>(`/reviews/${placeId}`, {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
