export interface Book {
  bookId: number;
  title: string;
  author: string;
}

export interface BooksResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    books: Book[];
    totalPages: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface BookSearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    books: Book[];
    totalBooks: number;
  };
}
