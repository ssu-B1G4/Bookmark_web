import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { getBookSearch } from '@/apis/getBookSearch';
import { getBooks } from '@/apis/getBooks';
import back from '@/assets/BottomNav/backIcon.svg';
import { BookCard } from '@/components/BookCard/BookCard';
import { BookSearchBar } from '@/components/BookSearchBar/BookSearchBar';
import { BOOK_MESSAGES } from '@/constant/BookMessage';
import { Book } from '@/types/getBooks.type';

import {
  BackButton,
  BookList,
  Container,
  Count,
  EmptyState,
  Header,
  SearchResultCount,
  Title,
} from './BookSearchPage.style';

type BookListSectionProps = {
  books: Book[];
  isSearching: boolean;
};

const EmptyBookList = ({ isSearching }: { isSearching: boolean }) => (
  <EmptyState>{isSearching ? BOOK_MESSAGES.NO_SEARCH_RESULTS : BOOK_MESSAGES.NO_BOOKS}</EmptyState>
);

const BookListSection = ({ books, isSearching }: BookListSectionProps) => {
  if (books.length === 0) {
    return <EmptyBookList isSearching={isSearching} />;
  }

  return (
    <>
      <SearchResultCount>
        <span>총</span>
        <Count>{books.length}</Count>
        <span>개의 도서가 구비되어 있어요</span>
      </SearchResultCount>
      <BookList>
        {books.map((book) => (
          <BookCard key={book.bookId} title={book.title} author={book.author} />
        ))}
      </BookList>
    </>
  );
};

export const BookSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const spaceId = location.state?.spaceId;

  const { data: allBooksData } = useQuery({
    queryKey: ['books', spaceId],
    queryFn: () => getBooks(spaceId, 0, 10),
    enabled: !searchQuery && !!spaceId,
  });

  const { data: searchData } = useQuery({
    queryKey: ['books', 'search', spaceId, searchQuery],
    queryFn: () => getBookSearch(spaceId, searchQuery, 0, 10),
    enabled: !!searchQuery && !!spaceId,
  });

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const books = searchQuery ? searchData?.result.books : allBooksData?.result.books;

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </BackButton>
        <Title>도서 검색</Title>
      </Header>

      <BookSearchBar
        onSearch={(query) => {
          setSearchQuery(query);
          setIsSearching(!!query);
        }}
      />

      <BookListSection books={books || []} isSearching={isSearching} />
    </Container>
  );
};
