import { ReactNode } from 'react';

import { StyledBottomSheet, ContentContainer } from './BottomSheet.style';
import { BottomSheetHeader } from './BottomSheetHeader/BottomSheetHeader';
import useBottomSheet from './useBottomSheet.ts';

interface BottomSheetProps {
  initialHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  showHeader?: boolean;
  children: ReactNode;
  $zIndex?: number;
}

export const BottomSheet = ({
  initialHeight = window.innerHeight * 0.57,
  minHeight = window.innerHeight * 0.57,
  maxHeight = window.innerHeight * 0.57,
  showHeader = true,
  children,
  $zIndex = 0,
}: BottomSheetProps) => {
  const { sheet, content, height } = useBottomSheet(initialHeight, minHeight, maxHeight);

  return (
    <StyledBottomSheet ref={sheet} height={height} $zIndex={$zIndex}>
      <ContentContainer ref={content}>
        {showHeader && <BottomSheetHeader />}
        {children}
      </ContentContainer>
    </StyledBottomSheet>
  );
};
