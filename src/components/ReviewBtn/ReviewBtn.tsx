import { useEffect, useRef, useState } from 'react';

import PencilIcon from '@/assets/pencil.svg';

import { StyledButton } from './ReviewBtn.style';

interface ReviewButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export const ReviewBtn = ({ onClick, children, containerRef, isVisible }: ReviewButtonProps) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [containerRef]);

  return (
    <StyledButton
      onClick={onClick}
      $isVisible={isVisible}
      $isScrolling={isScrolling}
      disabled={isScrolling}
    >
      <img src={PencilIcon} alt="Pencil Icon" />
      {!isScrolling && <span>{children}</span>}
    </StyledButton>
  );
};
