import { motion } from 'framer-motion';

interface ProjectCounterProps {
  current: number;
  total: number;
}

const ProjectCounter = ({ current, total }: ProjectCounterProps) => {
  return (
    <div className="absolute top-8 right-8 z-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-display"
      >
        <span className="text-primary">0{current + 1}</span>
        <span className="text-primary/50"> / 0{total}</span>
      </motion.div>
    </div>
  );
};
export default ProjectCounter;