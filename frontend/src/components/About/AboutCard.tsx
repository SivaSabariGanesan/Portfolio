import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const AboutCard = ({ Icon, title, description }: AboutCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 border border-primary/30 rounded-lg bg-black/50 backdrop-blur-sm relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 relative z-10">{description}</p>
    </motion.div>
  );
};

export default AboutCard;