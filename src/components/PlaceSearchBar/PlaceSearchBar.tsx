import { useState } from 'react';

import { PlaceSearchIcon } from '@/assets/PlaceSearch/PlaceSearchIcon';
import XIcon from '@/assets/x.svg';
import { SEARCHBAR_MESSAGES } from '@/constant/HomeMessage';

import { SearchBarContainer, StyledInput, ClearButton } from './PlaceSearchBar.style';

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

  const handleClearInput = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <SearchBarContainer>
      <PlaceSearchIcon />
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={SEARCHBAR_MESSAGES.PLACEHOLDER_LABEL}
      />
      {searchTerm && (
        <ClearButton onClick={handleClearInput}>
          <img src={XIcon} alt="clear" />
        </ClearButton>
      )}
    </SearchBarContainer>
  );
};
