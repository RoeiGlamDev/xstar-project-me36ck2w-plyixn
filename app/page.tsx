import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Our products are crafted with the finest ingredients to ensure a luxurious experience.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is elegantly packaged, reflecting the luxury of luxury LRP cosmetics.',
    icon: <i className="fas fa-box-open text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to ethical practices, ensuring all our products are cruelty-free.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-white">
        <motion.div
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Indulge in the luxury of beauty with our exclusive range of cosmetics.
        </motion.p>
        <motion.div
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </header>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-orange-500 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;