import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-orange-500 text-2xl font-bold mb-2">
        {title}
      </h2>
      <p className="text-gray-700 text-base">
        {description}
      </p>
      <button className="mt-4 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-600">
        Shop Now
      </button>
    </motion.div>
  );
};

export default Card;