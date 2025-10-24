'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

const tRNAImages = [
  '/tRNA blue.png',
  '/tRNA green .png', 
  '/tRNA purple.png',
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
  rotationSpeed: number;
  initialRotation: number;
}

export default function InteractiveBackground() {
  const [sprites, setSprites] = useState<Sprite[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });
  const { scrollYProgress } = useScroll();
  const lastUpdateRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Initialize sprites with better sizing and visibility
  useEffect(() => {
    // Show on all screens including mobile
    const checkScreenSize = () => {
      setIsVisible(true);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    if (!isVisible) return;

    // Adjust sprite count based on screen size
    const isMobile = window.innerWidth <= 768;
    const spriteCount = isMobile ? 10 : 20;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Create a grid-based distribution to ensure even spacing
    const cols = isMobile ? 2 : 4;
    const rows = Math.ceil(spriteCount / cols);
    const cellWidth = screenWidth / cols;
    const cellHeight = screenHeight / rows;

    const initialSprites: Sprite[] = Array.from({ length: spriteCount }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Position within cell with some randomness
      const baseX = col * cellWidth + (Math.random() * cellWidth * 0.8 + cellWidth * 0.1);
      const baseY = row * cellHeight + (Math.random() * cellHeight * 0.8 + cellHeight * 0.1);

      return {
        id: i,
        baseX,
        baseY,
        x: 0,
        y: 0,
        image: tRNAImages[i % tRNAImages.length], // Distribute images evenly
        size: isMobile ? 60 + Math.random() * 50 : 80 + Math.random() * 80,
        rotation: 0,
        initialRotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3, // Random speed between -0.15 and 0.15 degrees per frame
        sensitivity: 0.05 + Math.random() * 0.15,
      };
    });
    setSprites(initialSprites);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  // Mouse and touch move handler for better reactivity
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX: number, clientY: number;

      if (e instanceof TouchEvent) {
        clientX = e.touches[0]?.clientX || 0;
        clientY = e.touches[0]?.clientY || 0;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    if (isVisible) {
      window.addEventListener('mousemove', handleMove as EventListener, { passive: true });
      window.addEventListener('touchmove', handleMove as EventListener, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMove as EventListener);
      window.removeEventListener('touchmove', handleMove as EventListener);
    };
  }, [mouseX, mouseY, isVisible]);

  // Optimized position updates with RAF and throttling
  useEffect(() => {
    if (!isVisible) return;

    const updatePositions = () => {
      const now = Date.now();
      if (now - lastUpdateRef.current < 33) { // Limit to ~30fps
        animationFrameRef.current = requestAnimationFrame(updatePositions);
        return;
      }
      lastUpdateRef.current = now;

      setSprites(prevSprites =>
        prevSprites.map(sprite => {
          const currentMouseX = springX.get();
          const currentMouseY = springY.get();

          // Calculate distance from mouse to sprite
          const distX = currentMouseX - sprite.baseX;
          const distY = currentMouseY - sprite.baseY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          // Only apply mouse influence if mouse is within range
          const maxDistance = 300;
          const influenceStrength = Math.max(0, 1 - (distance / maxDistance));

          // Apply repulsion effect based on distance
          const mouseInfluenceX = distX * sprite.sensitivity * influenceStrength * 2;
          const mouseInfluenceY = distY * sprite.sensitivity * influenceStrength * 2;

          const scrollInfluence = scrollYProgress.get() * 80 * sprite.sensitivity;
          const time = now * 0.001;

          return {
            ...sprite,
            x: sprite.baseX + mouseInfluenceX + Math.sin(time + sprite.id) * 20,
            y: sprite.baseY + mouseInfluenceY + Math.cos(time + sprite.id) * 20 + scrollInfluence,
            rotation: sprite.initialRotation + (time * sprite.rotationSpeed * 10),
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(updatePositions);
    };
    
    animationFrameRef.current = requestAnimationFrame(updatePositions);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [springX, springY, scrollYProgress, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      {sprites.map((sprite) => (
        <motion.img
          key={sprite.id}
          src={sprite.image}
          alt=""
          className="absolute opacity-20 pointer-events-none will-change-transform"
          style={{
            width: sprite.size,
            height: sprite.size,
            x: sprite.x,
            y: sprite.y,
            transform: `rotate(${sprite.rotation}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}