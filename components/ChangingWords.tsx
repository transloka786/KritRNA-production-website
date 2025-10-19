'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'Therapeutics',
  'Innovation',
  'Discovery',
  'Medicine',
  'Research',
  'Solutions',
  'Technology',
  'Science'
];

export default function ChangingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 flex items-center justify-center mb-8">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 1.2,
            ease: 'easeInOut'
          }}
          className="absolute text-2xl md:text-3xl font-light text-slate-400"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}