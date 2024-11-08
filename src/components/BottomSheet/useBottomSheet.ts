import { useRef, useEffect, useState } from 'react';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: 'none' | 'down' | 'up';
  };
  isContentAreaTouched: boolean;
}

export default function useBottomSheet(
  initialHeight: number,
  minHeight: number,
  maxHeight: number
) {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(initialHeight);
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const sheetElement = sheet.current;
    const contentElement = content.current;

    if (!sheetElement || !contentElement) return;

    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) return true;
      if (sheetElement.getBoundingClientRect().y !== minHeight) return true;
      if (touchMove.movingDirection === 'down') {
        return contentElement.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheetElement.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      touchMove.movingDirection = touchMove.prevTouchY < currentTouch.clientY ? 'down' : 'up';

      if (canUserMoveBottomSheet()) {
        e.preventDefault();
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let newHeight = height - touchOffset;

        if (newHeight <= minHeight) newHeight = minHeight;
        if (newHeight >= maxHeight) newHeight = maxHeight;

        setHeight(newHeight);
      }
    };

    const handleTouchEnd = () => {
      metrics.current = {
        touchStart: { sheetY: 0, touchY: 0 },
        touchMove: { prevTouchY: 0, movingDirection: 'none' },
        isContentAreaTouched: false,
      };
    };

    sheetElement.addEventListener('touchstart', handleTouchStart);
    sheetElement.addEventListener('touchmove', handleTouchMove);
    sheetElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheetElement.removeEventListener('touchstart', handleTouchStart);
      sheetElement.removeEventListener('touchmove', handleTouchMove);
      sheetElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [height, minHeight, maxHeight]);

  useEffect(() => {
    const contentElement = content.current;
    if (!contentElement) return;

    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };

    contentElement.addEventListener('touchstart', handleTouchStart);

    return () => {
      contentElement.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return { sheet, content, height };
}
