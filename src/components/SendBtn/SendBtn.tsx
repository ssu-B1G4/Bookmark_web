import { useState } from 'react';

import { ButtonWrapper } from './SendBtn.style';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  delay?: number;
};

export const SendBtn = ({ label, onClick, delay = 2000 }: ButtonProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, delay);
  };

  return (
    <ButtonWrapper isProcessing={isProcessing} onClick={handleClick} disabled={isProcessing}>
      {label}
    </ButtonWrapper>
  );
};
