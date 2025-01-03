import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface CarouselSlideProps {
  project: Project;
  isActive: boolean;
}

const CarouselSlide = ({ project, isActive }: CarouselSlideProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 h-full pb-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-4 font-display">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary-light transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-lg overflow-hidden group aspect-video"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </div>
  );
};
export default CarouselSlide;