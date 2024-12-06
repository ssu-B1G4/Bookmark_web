import { GraphResponse } from '@/types/getCongestions.type';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getCongestionGraph = async (placeId: number): Promise<GraphResponse> => {
  try {
    const { data } = await client.get<GraphResponse>(`/congestions/${placeId}/graph`);
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
