{/* Same file but replacing cyan-500 with primary and cyan-400 with primary-light */}
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 mb-6 text-lg">
                I'm a second-year Computer Science Engineering student at Rajalakshmi Engineering College, passionate about creating innovative solutions through code.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                My journey in tech has led me to explore various aspects of software development, from building responsive web applications to diving into the fascinating world of machine learning.
              </p>
              <p className="text-gray-300 text-lg">
                Currently focused on MERN stack development and expanding my knowledge in AI/ML technologies.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-4 border border-primary/30 rounded-lg bg-black/50 backdrop-blur-sm">
                <Code2 className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                <p className="text-gray-400">Specializing in MERN stack development with a focus on creating responsive and user-friendly applications.</p>
              </div>

              <div className="p-4 border border-primary/30 rounded-lg bg-black/50 backdrop-blur-sm">
                <Brain className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
                <p className="text-gray-400">Exploring ML algorithms and their applications in solving real-world problems.</p>
              </div>

              <div className="p-4 border border-primary/30 rounded-lg bg-black/50 backdrop-blur-sm">
                <Database className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-bold text-white mb-2">Database Design</h3>
                <p className="text-gray-400">Experienced in both SQL and NoSQL databases, focusing on efficient data structures.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;