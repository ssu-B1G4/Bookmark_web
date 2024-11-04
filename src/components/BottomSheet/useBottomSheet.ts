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
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) return true;
      if (sheet.current!.getBoundingClientRect().y !== minHeight) return true;
      if (touchMove.movingDirection === 'down') {
        return content.current!.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
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

    sheet.current!.addEventListener('touchstart', handleTouchStart);
    sheet.current!.addEventListener('touchmove', handleTouchMove);
    sheet.current!.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheet.current!.removeEventListener('touchstart', handleTouchStart);
      sheet.current!.removeEventListener('touchmove', handleTouchMove);
      sheet.current!.removeEventListener('touchend', handleTouchEnd);
    };
  }, [height, minHeight, maxHeight]);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };
    content.current!.addEventListener('touchstart', handleTouchStart);

    return () => {
      content.current!.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return { sheet, content, height };
}
