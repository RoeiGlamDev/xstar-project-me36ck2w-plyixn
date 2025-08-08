import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Additional setup for 3D scene can go here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <Canvas className="w-full h-96">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/ Add 3D models related to cosmetics here /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="text-lg text-gray-700 mt-4 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to <span className="font-semibold text-orange-600">luxury LRP cosmetics</span>, where elegance meets beauty. Explore our exclusive range of high-end cosmetics designed to enhance your natural beauty with luxurious textures and stunning finishes.
      </motion.p>
      <motion.div
        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Scene;