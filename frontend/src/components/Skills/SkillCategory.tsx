import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import SkillBar from './SkillBar';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: string;
  icon: LucideIcon;
  items: SkillItem[];
  index: number;
}

const SkillCategory = ({ category, icon: Icon, items, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light opacity-30 blur group-hover:opacity-50 transition duration-300 rounded-xl" />
      <div className="relative p-6 bg-black rounded-lg border border-primary/20">
        <div className="flex items-center gap-3 mb-6">
          <Icon className="text-primary" size={24} />
          <h3 className="text-xl font-bold text-white font-display">{category}</h3>
        </div>
        
        <div className="space-y-4">
          {items.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategory;