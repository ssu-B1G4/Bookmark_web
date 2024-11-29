import { GetBookmarkResponse } from '@/types/bookmarks';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getBookmark = async (page: number): Promise<GetBookmarkResponse> => {
  try {
    const { data } = await client.get<GetBookmarkResponse>(`/places/bookmarks`, {
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
