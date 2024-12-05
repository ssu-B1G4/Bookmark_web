import { client } from '@/utils/axios';

interface BookmarkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export const deletePlaceBookmark = async (placeId: number): Promise<BookmarkResponse> => {
  const { data } = await client.delete<BookmarkResponse>(`/place/${placeId}/bookmarks`);
  return data;
};
