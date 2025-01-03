import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls = ({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext
}: CarouselControlsProps) => {
  return (
    <>
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 md:left-4 flex items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          className="p-2 md:p-3 bg-black/50 backdrop-blur-sm border border-primary/20 rounded-full text-primary hover:bg-primary/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-0 md:right-4 flex items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="p-2 md:p-3 bg-black/50 backdrop-blur-sm border border-primary/20 rounded-full text-primary hover:bg-primary/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              width: index === currentIndex ? 24 : 8,
              backgroundColor: index === currentIndex ? '#FFCC00' : '#4B5563'
            }}
            className="h-2 rounded-full transition-all duration-300"
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-6 right-6">
        <div className="text-2xl font-display">
          <span className="text-primary">0{currentIndex + 1}</span>
          <span className="text-primary/50"> / 0{totalSlides}</span>
        </div>
      </div>
    </>
  );
};

export default CarouselControls;