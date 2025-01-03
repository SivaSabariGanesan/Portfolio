import { motion } from 'framer-motion';
import WorkCarousel from '../../components/WorkCarousel';
import { projects } from './projectsData';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <WorkCarousel projects={projects} />
    </motion.div>
  );
};

export default Work;