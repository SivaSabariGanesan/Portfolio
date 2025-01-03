import { motion } from 'framer-motion';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface CarouselSlideProps {
  project: Project;
}

const CarouselSlide = ({ project }: CarouselSlideProps) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end md:items-center pb-20 md:pb-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary mb-2 md:mb-4 text-sm md:text-lg"
            >
              Featured Project
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 font-display line-clamp-2 md:line-clamp-none"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 mb-4 md:mb-8 line-clamp-3 md:line-clamp-none"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-8"
            >
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 md:gap-6"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm md:text-base"
              >
                <Github size={18} />
                <span className="hidden md:inline">View Code</span>
                <span className="md:hidden">Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-colors text-sm md:text-base"
              >
                <ExternalLink size={18} />
                <span className="hidden md:inline">Live Demo</span>
                <span className="md:hidden">Live</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselSlide;