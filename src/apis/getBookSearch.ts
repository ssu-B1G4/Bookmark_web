import { BookSearchResponse } from '@/types/getBooks.type';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getBookSearch = async (
  placeId: number,
  search: string,
  page: number = 0,
  size: number = 10
): Promise<BookSearchResponse> => {
  try {
    const { data } = await client.get<BookSearchResponse>(`/books/${placeId}/search`, {
      params: {
        search,
        page,
        size,
      },
    });
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
