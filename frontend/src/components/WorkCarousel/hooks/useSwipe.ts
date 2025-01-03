import { useState } from 'react';

interface UseSwipeProps {
  onNext: () => void;
  onPrevious: () => void;
  threshold?: number;
}

export const useSwipe = ({ onNext, onPrevious, threshold = 50 }: UseSwipeProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe) {
      onNext();
    }
    if (isRightSwipe) {
      onPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};