'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface RibosomeProgressProps {
  orientation?: 'vertical' | 'horizontal';
  milestones?: string[];
}

export default function RibosomeProgress({ 
  orientation = 'vertical',
  milestones = []
}: RibosomeProgressProps) {
  const { scrollYProgress } = useScroll();
  
  if (orientation === 'horizontal') {
    return (
      <div className="relative w-full h-20 flex items-center">
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full border-2 border-brand-pink bg-slate-800"
              animate={{
                backgroundColor: scrollYProgress.get() > index / milestones.length ? '#FF4D9A' : '#1e293b',
                scale: scrollYProgress.get() > index / milestones.length ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <motion.img
          src="/ribosomei.png"
          alt="Progress indicator"
          className="w-32 h-32 relative z-10"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-2 h-64 bg-slate-800/50 rounded-full">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['-64px', '176px']),
        }}
      >
        <img
          src="/ribosomei.png"
          alt="Page progress"
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full bg-brand-pink rounded-full"
        style={{
          height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
        }}
      />
    </div>
  );
}