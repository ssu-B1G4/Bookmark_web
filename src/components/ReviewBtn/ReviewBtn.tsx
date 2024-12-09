import { useEffect, useRef, useState } from 'react';

import { PencilIcon } from '@/assets/pencil';

import { StyledButton } from './ReviewBtn.style';

interface ReviewButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  bgColor?: string;
  color?: string;
}

export const ReviewBtn = ({
  onClick,
  children,
  containerRef,
  isVisible,
  bgColor = '#2f774d',
  color = '#FFFFFF',
}: ReviewButtonProps) => {
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
      $bgColor={bgColor}
      $color={color}
      $isScrolling={isScrolling}
      disabled={isScrolling}
    >
      <PencilIcon color={color} />
      {!isScrolling && <span>{children}</span>}
    </StyledButton>
  );
};
