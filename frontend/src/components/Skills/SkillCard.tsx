import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  index: number;
}

const SkillCard = ({ name, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light opacity-30 blur group-hover:opacity-50 transition duration-300 rounded-xl" />
      <div className="relative p-3 sm:p-4 bg-black rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm sm:text-base text-white font-semibold">{name}</span>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="text-sm sm:text-base text-primary"
          >
            {level}%
          </motion.span>
        </div>
        <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            className="h-full bg-gradient-to-r from-primary to-primary-light"
          />
        </div>
      </div>
    </motion.div>
  );
};