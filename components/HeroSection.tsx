import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxury LRP cosmetics", 
  subtitle = "Indulge in our exquisite range of high-end cosmetics, crafted for the discerning beauty enthusiast.", 
  ctaText = "Shop Now", 
  ctaLink = "/shop" 
}) => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <motion.div 
        className="text-center p-10"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-orange-600 drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          {subtitle}
        </p>
        <motion.div 
          href={ctaLink} 
          className="mt-6 inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-sm text-gray-500">Trusted by beauty experts</span>
          <span className="text-sm text-gray-500">Luxury ingredients</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;