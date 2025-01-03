import { useState, useCallback, useRef } from 'react';

interface UseCarouselProps {
  totalItems: number;
}

export const useCarousel = ({ totalItems }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) => (current === 0 ? totalItems - 1 : current - 1));
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) => (current === totalItems - 1 ? 0 : current + 1));
  }, [totalItems]);

  const handleDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
  }, []);

  const handleDragEnd = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    
    const diffX = e.clientX - startX.current;
    const threshold = 100;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }

    isDragging.current = false;
  }, [handleNext, handlePrevious]);

  return {
    currentIndex,
    direction,
    handlePrevious,
    handleNext,
    handleDragStart,
    handleDragEnd
  };
};