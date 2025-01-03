import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '../../types';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import { useSwipe } from './hooks/useSwipe';
import { useAutoplay } from './hooks/useAutoplay';

interface WorkCarouselProps {
  projects: Project[];
}

const WorkCarousel = ({ projects }: WorkCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  }, [projects.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  }, [projects.length]);

  const swipeHandlers = useSwipe({ onNext: handleNext, onPrevious: handlePrevious });
  useAutoplay({ onNext: handleNext });

  return (
    <div className="relative h-[100vh] bg-black overflow-hidden">
      <div className="absolute inset-0" {...swipeHandlers}>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? '100%' : '-100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CarouselSlide project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <CarouselControls
          currentIndex={currentIndex}
          totalSlides={projects.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default WorkCarousel;