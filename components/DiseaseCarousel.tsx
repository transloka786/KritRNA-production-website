'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const diseaseSlides = [
  {
    id: 1,
    image: '/Slide19.PNG',
    alt: 'Ataxia-Telangiectasia (ATM Gene)',
  },
  {
    id: 2,
    image: '/Slide20.PNG',
    alt: 'X-Linked Retinitis Pigmentosa (RPGR Gene)',
  },
  {
    id: 3,
    image: '/Slide11.PNG',
    alt: 'Cystic Fibrosis (CFTR Gene)',
  },
  {
    id: 4,
    image: '/Slide12.PNG',
    alt: 'Duchenne Muscular Dystrophy (DMD Gene)',
  },
  {
    id: 5,
    image: '/Slide13.PNG',
    alt: 'Spinal Muscular Atrophy with Respiratory Distress Type 1 (SMARD1)',
  },
  {
    id: 6,
    image: '/Slide14.PNG',
    alt: 'Rett Syndrome (MECP2 Gene)',
  },
  {
    id: 7,
    image: '/Slide15.PNG',
    alt: 'Usher Syndrome Type 1C (USH1C Gene)',
  },
  {
    id: 8,
    image: '/Slide17.PNG',
    alt: 'Beta-Thalassemia (HBB Gene)',
  },
  {
    id: 9,
    image: '/Slide18.PNG',
    alt: 'Hurler Syndrome (IDUA Gene)',
  },
];

export default function DiseaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % diseaseSlides.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return diseaseSlides.length - 1;
      if (nextIndex >= diseaseSlides.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative aspect-[16/9] bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <Image
              src={diseaseSlides[currentIndex].image}
              alt={diseaseSlides[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#32E2E2]/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#32E2E2]/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {diseaseSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-[#32E2E2]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
