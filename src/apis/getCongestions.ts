import { CongestionResponse } from '@/types/getCongestions.type';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getCongestions = async (placeId: number): Promise<CongestionResponse> => {
  try {
    const { data } = await client.get<CongestionResponse>(`/congestions/${placeId}`);
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
