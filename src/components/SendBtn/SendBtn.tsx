import { useState } from 'react';

import { ButtonWrapper } from './SendBtn.style';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  delay?: number;
  disabled?: boolean;
};

export const SendBtn = ({ label, onClick, delay = 2000, disabled }: ButtonProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    if (disabled || isProcessing) return;

    if (onClick) onClick();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, delay);
  };

  return (
    <ButtonWrapper
      $isProcessing={isProcessing}
      onClick={handleClick}
      disabled={disabled || isProcessing}
    >
      {label}
    </ButtonWrapper>
  );
};
