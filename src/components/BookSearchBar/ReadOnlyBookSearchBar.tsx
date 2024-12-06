import { useLocation, useNavigate } from 'react-router-dom';

import SearchIcon from '@/assets/BookSearch/SearchIcon.svg';

import { Input, SearchContainer, SearchIconWrapper } from './BookSearchBar.style';

export const ReadOnlyBookSearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const spaceId = location.pathname.split('/').pop();

  const handleClick = () => {
    navigate('/booksearch', {
      state: { spaceId },
    });
  };

  return (
    <SearchContainer onClick={handleClick} style={{ cursor: 'pointer' }}>
      <SearchIconWrapper>
        <img src={SearchIcon} alt="검색" />
      </SearchIconWrapper>
      <Input
        placeholder="찾으시는 책이 있는지 보유 도서를 검색해보세요."
        value=""
        readOnly
        style={{ cursor: 'pointer' }}
        onClick={(e) => e.preventDefault()}
      />
    </SearchContainer>
  );
};
