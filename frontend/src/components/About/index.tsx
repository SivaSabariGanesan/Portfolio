import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database } from 'lucide-react';
import AboutCard from './AboutCard';
import AboutContent from './AboutContent';
import ProfileImage from '../ProfileImage';

const About = () => {
  const skills = [
    {
      Icon: Code2,
      title: 'Web Development',
      description: 'Specializing in MERN stack development with a focus on creating responsive and user-friendly applications.'
    },
    {
      Icon: Brain,
      title: 'Machine Learning',
      description: 'Exploring ML algorithms and their applications in solving real-world problems.'
    },
    {
      Icon: Database,
      title: 'Database Design',
      description: 'Experienced in both SQL and NoSQL databases, focusing on efficient data structures.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,204,0,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-4xl font-bold text-primary">About Me</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProfileImage />
              <AboutContent />
            </div>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AboutCard {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;