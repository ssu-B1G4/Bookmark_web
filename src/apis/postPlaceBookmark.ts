import { client } from '@/utils/axios';

interface BookmarkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export const postPlaceBookmark = async (placeId: number): Promise<BookmarkResponse> => {
  const { data } = await client.post<BookmarkResponse>(`/place/${placeId}/bookmarks`);
  return data;
};
