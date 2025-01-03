import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'AI Image Recognition',
    description: 'Machine learning model that classifies images using TensorFlow and provides real-time predictions.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    tags: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Real-time Chat App',
    description: 'Feature-rich chat application with real-time messaging and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;