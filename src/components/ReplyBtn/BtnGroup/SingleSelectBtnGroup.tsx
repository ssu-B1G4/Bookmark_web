import { useState } from 'react';

import { ReplyBtn } from '../ReplyBtn';

import { StyledSelectBtnGroup } from './SelectBtnGroup.style';

interface SingleSelectBtnGroupProps {
  options: string[];
  textColor?: string;
  bgColor?: string;
}

export const SingleSelectBtnGroup = ({
  options,
  textColor = '#198155',
  bgColor = '#ECFCE5',
}: SingleSelectBtnGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setSelectedOption(option);
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
        >
          {option}
        </ReplyBtn>
      ))}
    </StyledSelectBtnGroup>
  );
};
