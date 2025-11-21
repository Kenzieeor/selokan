import { useRef } from "react";

export const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const startX = useRef(0);
  const endX = useRef(0);

  const MIN_SWIPE_DISTANCE = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    endX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    endX.current = e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = startX.current - endX.current;

    if (Math.abs(diff) < MIN_SWIPE_DISTANCE) return;

    if (diff > 0) {
      onSwipeLeft();
    } else {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
  };
};
