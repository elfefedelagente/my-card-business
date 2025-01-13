import { motion } from 'framer-motion';
import React from 'react';

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundPosition: '200% 0' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: 'linear-gradient(45deg, #4caf50, #81c784, #aed581)',
        backgroundSize: '200% 200%',
      }}
    />
  );
};

export default AnimatedBackground;
