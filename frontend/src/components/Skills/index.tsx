import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import { skills } from './skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/95 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(255,204,0,0.1)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-primary font-display">Technical Arsenal</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <SkillCategory
                key={category.category}
                {...category}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;