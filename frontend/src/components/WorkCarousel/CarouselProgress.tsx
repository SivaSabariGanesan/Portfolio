import { motion } from 'framer-motion';

interface CarouselProgressProps {
  total: number;
  current: number;
}

const CarouselProgress = ({ total, current }: CarouselProgressProps) => {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {[...Array(total)].map((_, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            width: index === current ? '2rem' : '0.5rem',
            backgroundColor: index === current ? '#FFCC00' : '#4B5563'
          }}
          className="h-1.5 rounded-full transition-all duration-300"
        />
      ))}
    </div>
  );
};
export default CarouselProgress;