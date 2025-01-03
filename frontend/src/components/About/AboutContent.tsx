import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <p className="text-gray-300 text-lg leading-relaxed">
        I'm a second-year Computer Science Engineering student at Rajalakshmi Engineering College, driven by a passion for creating innovative solutions through code.
      </p>
      <div className="pl-4 border-l-2 border-primary">
        <p className="text-gray-300 text-lg leading-relaxed">
          My journey in tech has been a fascinating exploration of various domains:
        </p>
        <ul className="mt-4 space-y-2 text-gray-400">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2" />
            Building responsive web applications
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2" />
            Exploring machine learning algorithms
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2" />
            Developing efficient database solutions
          </li>
        </ul>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Currently focused on MERN stack development and expanding my knowledge in AI/ML technologies.
      </p>
    </motion.div>
  );
};

export default AboutContent;