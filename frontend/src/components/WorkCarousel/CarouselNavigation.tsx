import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselNavigation = ({ onPrevious, onNext }: CarouselNavigationProps) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
      >
        <ChevronRight size={24} />
      </motion.button>
    </>
  );
};
export default CarouselNavigation;