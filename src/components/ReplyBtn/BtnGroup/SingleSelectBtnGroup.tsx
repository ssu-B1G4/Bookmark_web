import { useEffect, useState } from 'react';

import { ReplyBtn } from '../ReplyBtn';

import { StyledSelectBtnGroup } from './SelectBtnGroup.style';

interface SingleSelectBtnGroupProps {
  options: string[];
  selectedValue?: string;
  deselectable?: boolean;
  textColor?: string;
  bgColor?: string;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  onSelectionChange?: (selectedOption: string | undefined) => void;
}

export const SingleSelectBtnGroup = ({
  options,
  selectedValue,
  deselectable = false,
  textColor = '#198155',
  bgColor = '#ECFCE5',
  borderRadius = 16,
  fontSize = 1.2,
  fontWeight = '400',
  onSelectionChange,
}: SingleSelectBtnGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  useEffect(() => {
    setSelectedOption(selectedValue || '');
  }, [selectedValue]);

  const handleClick = (option: string) => {
    const newSelectedOption = deselectable && selectedOption === option ? undefined : option;
    setSelectedOption(newSelectedOption);

    if (onSelectionChange) onSelectionChange(newSelectedOption);
  };

  return (
    <StyledSelectBtnGroup>
      {options.map((option) => (
        <ReplyBtn
          key={option}
          onClick={() => handleClick(option)}
          selected={selectedOption === option}
          $textColor={textColor}
          $bgColor={bgColor}
          $borderRadius={borderRadius}
          $fontSize={fontSize}
          $fontWeight={fontWeight}
        >
          {option}
        </ReplyBtn>
      ))}
    </StyledSelectBtnGroup>
  );
};
