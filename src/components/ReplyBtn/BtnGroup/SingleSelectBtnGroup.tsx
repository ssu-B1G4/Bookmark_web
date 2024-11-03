import { useState } from 'react';

import { ReplyBtn } from '../ReplyBtn';

import { StyledSelectBtnGroup } from './SelectBtnGroup.style';

interface SingleSelectBtnGroupProps {
  options: string[];
  textColor?: string;
  bgColor?: string;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  onSelectionChange?: (selectedOption: string) => void;
}

export const SingleSelectBtnGroup = ({
  options,
  textColor = '#198155',
  bgColor = '#ECFCE5',
  borderRadius = 16,
  fontSize = 1.2,
  fontWeight = '400',
  onSelectionChange,
}: SingleSelectBtnGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleClick = (option: string) => {
    setSelectedOption(option);

    if (onSelectionChange) onSelectionChange(option);
  };

  return (
    <StyledSelectBtnGroup>
      {options.map((option) => (
        <ReplyBtn
          key={option}
          onClick={() => handleClick(option)}
          selected={selectedOption === option}
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
