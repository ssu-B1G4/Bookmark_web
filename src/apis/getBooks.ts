import { BooksResponse } from '@/types/getBooks.type';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

export const getBooks = async (
  placeId: number,
  page: number = 0,
  size: number = 10
): Promise<BooksResponse> => {
  try {
    const { data } = await client.get<BooksResponse>(`/books/${placeId}`, {
      params: {
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
