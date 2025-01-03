import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
      <div className="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-6 transition-transform group-hover:-rotate-12" />
      <motion.div 
        className="relative overflow-hidden rounded-lg bg-black"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="Profile"
          className="w-full h-48 sm:h-64 object-cover transition-transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-base sm:text-lg font-bold">Siva Sabari Ganesan</p>
            <p className="text-primary-light text-sm sm:text-base">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
