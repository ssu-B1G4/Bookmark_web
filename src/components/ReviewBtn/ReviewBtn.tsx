import { useEffect, useRef, useState } from 'react';

import PencilIcon from '@/assets/pencil.svg';

import { StyledButton } from './ReviewBtn.style';

interface ScrollButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ReviewBtn = ({ onClick, children }: ScrollButtonProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <StyledButton onClick={onClick} $isScrolling={isScrolling} disabled={isScrolling}>
      <img src={PencilIcon} alt="Pencil Icon" />
      {!isScrolling && <span>{children}</span>}
    </StyledButton>
  );
};
