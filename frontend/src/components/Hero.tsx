import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.p 
              className="text-primary text-base sm:text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi there! 👋
            </motion.p>

            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 glitch-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Siva Sabari Ganesan A
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl lg:text-2xl text-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typewriter
                options={{
                  strings: ['I am a Student', 'I am a MERN Stack Developer', 'I am a Machine Learning Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate full-stack developer and machine learning enthusiast, crafting digital experiences that merge creativity with functionality.
            </motion.p>

            <motion.div
              className="flex space-x-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://github.com/SivaSabariGanesan" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/siva-sabari-ganesan-a-b3288a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="asivasabariganesan@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-first lg:order-last"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;