import { useState } from 'react';

import { ReplyBtn } from '../ReplyBtn';

import { StyledSelectBtnGroup } from './SelectBtnGroup.style';

interface MultiSelectBtnGroupProps {
  options: string[];
  textColor?: string;
  bgColor?: string;
}

export const MultiSelectBtnGroup = ({
  options,
  textColor = '#198155',
  bgColor = '#ECFCE5',
}: MultiSelectBtnGroupProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <StyledSelectBtnGroup>
      {options.map((option) => (
        <ReplyBtn
          key={option}
          onClick={() => handleClick(option)}
          selected={selectedOptions.includes(option)}
          textColor={textColor}
          bgColor={bgColor}
        >
          {option}
        </ReplyBtn>
      ))}
    </StyledSelectBtnGroup>
  );
};
