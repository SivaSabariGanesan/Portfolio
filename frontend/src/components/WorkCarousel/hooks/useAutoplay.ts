import { useEffect } from 'react';

interface UseAutoplayProps {
  onNext: () => void;
  interval?: number;
}

export const useAutoplay = ({ onNext, interval = 5000 }: UseAutoplayProps) => {
  useEffect(() => {
    const timer = setInterval(onNext, interval);
    return () => clearInterval(timer);
  }, [onNext, interval]);
};