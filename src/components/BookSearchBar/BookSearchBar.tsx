import { ChangeEvent, useState } from 'react';

import SearchIcon from '@/assets/BookSearch/SearchIcon.svg';
import CloseIcon from '@/assets/BookSearch/closeBtn.svg';

import { ClearButton, Input, SearchContainer, SearchIconWrapper } from './BookSearchBar.style';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const BookSearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <img src={SearchIcon} alt="검색" />
      </SearchIconWrapper>
      <Input
        placeholder="찾으시는 책이 있는지 보유 도서를 검색해보세요."
        value={query}
        onChange={handleChange}
      />
      <ClearButton onClick={handleClear}>
        <img src={CloseIcon} alt="검색어 지우기" />
      </ClearButton>
    </SearchContainer>
  );
};
