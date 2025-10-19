'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

const tRNAImages = [
  '/tRNA blue.png',
  '/tRNA green .png', 
  'tRNA purple.png',
  '/tRNA red.png'
];

interface Sprite {
  id: number;
  x: number;
  y: number;
  image: string;
  size: number;
  rotation: number;
  baseX: number;
  baseY: number;
  sensitivity: number;
}

export default function InteractiveBackground() {
  const [sprites, setSprites] = useState<Sprite[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Initialize sprites
    const initialSprites: Sprite[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      baseX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      baseY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      x: 0,
      y: 0,
      image: tRNAImages[Math.floor(Math.random() * tRNAImages.length)],
      size: 48 + Math.random() * 48,
      rotation: Math.random() * 360,
      sensitivity: 0.02 + Math.random() * 0.08, // Random sensitivity between 0.02 and 0.1
    }));
    setSprites(initialSprites);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Update sprite positions based on mouse and scroll
  useEffect(() => {
    const updatePositions = () => {
      setSprites(prevSprites => 
        prevSprites.map(sprite => {
          const mouseInfluenceX = (springX.get() - sprite.baseX) * sprite.sensitivity;
          const mouseInfluenceY = (springY.get() - sprite.baseY) * sprite.sensitivity;
          const scrollInfluence = scrollYProgress.get() * 100 * (sprite.sensitivity * 10);
          
          return {
            ...sprite,
            x: sprite.baseX + mouseInfluenceX + Math.sin(Date.now() * 0.001 + sprite.id) * 20,
            y: sprite.baseY + mouseInfluenceY + Math.cos(Date.now() * 0.001 + sprite.id) * 20 + scrollInfluence,
          };
        })
      );
    };
    const interval = setInterval(updatePositions, 16); // ~60fps
    return () => clearInterval(interval);
  }, [springX, springY, scrollYProgress]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      {sprites.map((sprite) => (
        <motion.img
          key={sprite.id}
          src={sprite.image}
          alt=""
          className="absolute opacity-30 pointer-events-none transition-opacity duration-300 hover:opacity-50"
          style={{
            width: sprite.size,
            height: sprite.size,
            x: sprite.x,
            y: sprite.y,
          }}
          animate={{
            rotate: sprite.rotation + Math.sin(Date.now() * 0.0005 + sprite.id) * 15,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.2,
            rotate: sprite.rotation + 45,
            transition: { duration: 0.3 }
          }}
        />
      ))}
    </div>
  );
}