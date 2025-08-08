import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold focus:outline-none transition-all duration-300';
  const primaryClasses = 'bg-orange-500 text-white hover:bg-orange-600';
  const secondaryClasses = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white';

  const classes = variant === 'primary' ? ${baseClasses} ${primaryClasses} : ${baseClasses} ${secondaryClasses};

  return (
    <motion.div
      className="classes"
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={Button for luxury LRP cosmetics - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;