'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface MetricTileProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  delay?: number;
}

export default function MetricTile({
  label,
  value,
  suffix = '',
  prefix = '',
  description,
  delay = 0,
}: MetricTileProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    const timer = setTimeout(() => {
      let current = 0;
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <GlassCard className="text-center">
        <div className="text-4xl font-bold text-[#32E2E2] mb-2">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm font-medium text-white mb-1">{label}</div>
        {description && (
          <div className="text-xs text-gray-400 mt-2">{description}</div>
        )}
      </GlassCard>
    </motion.div>
  );
}
