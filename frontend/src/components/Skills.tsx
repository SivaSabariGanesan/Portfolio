{/* Same file but replacing cyan-500 with primary and cyan-400 with primary-light */}
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express', level: 85 },
  { name: 'TypeScript', level: 50 },
  { name: 'Python', level: 60 },
  { name: 'Machine Learning', level: 65 },
  { name: 'SQL', level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-primary mb-12 text-center"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-2 flex justify-between">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-primary"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;