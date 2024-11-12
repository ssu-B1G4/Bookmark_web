interface Book {
  id: string;
  title: string;
  author: string;
}

const mockBooks: Book[] = [
  {
    id: '1',
    title: '빛이 이끄는 곳으로고집이 닮았다 마땅히 살아야 할 삶에 대하여',
    author: '백희성',
  },
  {
    id: '2',
    title: '연젠가 우리가 걸은 별을 바라본다면',
    author: '차민표',
  },
  {
    id: '3',
    title: '고집이 닮았다 마땅히 살아야 할 삶에 대하여',
    author: '고명희',
  },
  {
    id: '4',
    title: '저기 주먼으로 나의 언어를 만들어라',
    author: '요시다나 고로',
  },
];

import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import back from '@/assets/BottomNav/backIcon.svg';
import { BookCard } from '@/components/BookCard/BookCard';
import { BookSearchBar } from '@/components/BookSearchBar/BookSearchBar';
import { BOOK_MESSAGES } from '@/constant/BookMessage';

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
          <BookCard key={book.id} title={book.title} author={book.author} />
        ))}
      </BookList>
    </>
  );
};

export const BookSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/place');
  };

  useEffect(() => {
    if (!searchQuery) {
      setIsSearching(false);
      setFilteredBooks(mockBooks);
      return;
    }

    setIsSearching(true);
    const filtered = mockBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery]);

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </BackButton>
        <Title>도서 검색</Title>
      </Header>

      <BookSearchBar onSearch={setSearchQuery} />

      <BookListSection books={filteredBooks} isSearching={isSearching} />
    </Container>
  );
};
