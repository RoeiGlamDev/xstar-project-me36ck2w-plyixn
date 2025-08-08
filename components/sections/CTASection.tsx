import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Experience the Luxury of LRP",
  subtitle = "Indulge in our premium cosmetics crafted for elegance and sophistication.",
  buttonText = "Shop Now",
  buttonLink = "/shop",
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-20 px-4">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600">{title}</h2>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
      </motion.div>
      <motion.div
        href={buttonLink}
        className="mt-6 inline-block px-8 py-3 bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;