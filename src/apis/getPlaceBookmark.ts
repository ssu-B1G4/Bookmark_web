import { client } from '@/utils/axios';

interface BookmarkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    placeId: number;
    isSaved: boolean;
  };
}

export const getPlaceBookmark = async (placeId: number): Promise<BookmarkResponse> => {
  const { data } = await client.get<BookmarkResponse>(`/places/${placeId}/bookmarks`);
  return data;
};
