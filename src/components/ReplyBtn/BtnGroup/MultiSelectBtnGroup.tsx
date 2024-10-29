import { useState } from 'react';

import { ReplyBtn } from '../ReplyBtn';

import { StyledSelectBtnGroup } from './SelectBtnGroup.style';

interface MultiSelectBtnGroupProps {
  options: string[];
  textColor?: string;
  bgColor?: string;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  onSelectionChange?: (selectedOptions: string[]) => void;
}

export const MultiSelectBtnGroup = ({
  options,
  textColor = '#198155',
  bgColor = '#ECFCE5',
  borderRadius = 16,
  fontSize = 1.2,
  fontWeight = '400',
  onSelectionChange,
}: MultiSelectBtnGroupProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);

    if (onSelectionChange) onSelectionChange(updatedOptions);
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
          borderRadius={borderRadius}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {option}
        </ReplyBtn>
      ))}
    </StyledSelectBtnGroup>
  );
};
