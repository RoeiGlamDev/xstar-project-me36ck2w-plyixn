import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`transition-all duration-500 ${className`}}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Welcome to Luxury LRP Cosmetics</h1>
        <p className="mt-4 text-lg">Elevate your beauty with our luxurious products.</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FadeIn className="p-6 bg-orange-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Our Philosophy</h2>
          <p className="mt-2">
            At Luxury LRP Cosmetics, we believe in the transformative power of beauty. Our products are crafted with the finest ingredients to ensure a luxurious experience.
          </p>
        </FadeIn>
        <FadeIn className="p-6 bg-orange-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <p className="mt-2">
            Discover our exclusive range of cosmetics designed for the modern individual who appreciates elegance and sophistication.
          </p>
        </FadeIn>
      </main>
      <footer className="text-center mt-12">
        <p className="text-sm">© 2023 Luxury LRP Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;