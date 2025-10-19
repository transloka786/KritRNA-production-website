'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const keywords = [
  'Translation', 'tRNA', 'aaRS', 'Ribosome', 'Codon', 'Readthrough',
  'Orthogonality', 'ΔG', 'RMSF', 'QC', 'ISR', 'eRF1', 'eRF3'
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12]
];

export default function KeywordNetwork() {
  const [activeConnection, setActiveConnection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % connections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 mb-12 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 128">
        {connections.map((connection, index) => {
          const [start, end] = connection;
          const startX = (start % 7) * 114 + 57;
          const startY = Math.floor(start / 7) * 64 + 32;
          const endX = (end % 7) * 114 + 57;
          const endY = Math.floor(end / 7) * 64 + 32;
          
          return (
            <motion.line
              key={index}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={index === activeConnection ? '#FF4D9A' : '#334155'}
              strokeWidth={index === activeConnection ? 2 : 1}
              opacity={index === activeConnection ? 1 : 0.3}
              animate={{
                opacity: index === activeConnection ? [0.3, 1, 0.3] : 0.3,
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          );
        })}
      </svg>
      
      {keywords.map((keyword, index) => (
        <motion.div
          key={keyword}
          className="absolute text-xs text-slate-400 font-medium"
          style={{
            left: `${(index % 7) * 14.25}%`,
            top: `${Math.floor(index / 7) * 50 + 25}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            y: [0, -2, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
            ease: 'easeInOut',
          }}
        >
          {keyword}
        </motion.div>
      ))}
    </div>
  );
}