import { useState } from 'react';

import { PlaceSearchIcon } from '@/assets/PlaceSearch/PlaceSearchIcon';

import { SearchBarContainer, StyledInput } from './PlaceSearchBar.style';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const PlaceSearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchBarContainer>
      <PlaceSearchIcon />
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="원하는 독서 장소를 검색해보세요."
      />
    </SearchBarContainer>
  );
};
