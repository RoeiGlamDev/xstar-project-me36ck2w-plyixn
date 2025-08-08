import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our products are crafted with the finest ingredients to ensure a luxurious experience.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is elegantly packaged to reflect the luxury of luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Expert Formulations',
    description: 'Developed by industry experts, our formulations deliver exceptional results.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to sustainability, ensuring our luxury products are eco-friendly.',
    icon: <i className="fas fa-recycle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;