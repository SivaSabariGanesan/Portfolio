import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-primary to-primary-light"
        />
      </div>
    </div>
  );
};

export default SkillBar;