import { PlaceDetailResponse } from '@/types/placeDetail';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getPlaceDetail = async (placeId: number): Promise<PlaceDetailResponse> => {
  try {
    const { data } = await client.get<PlaceDetailResponse>(`/places/${placeId}/detail`);
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
