'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'Normal Translation',
    description: 'Full-length protein',
    content: 'mRNA is read continuously by the ribosome, producing a complete, functional protein.',
  },
  {
    title: 'Premature Stop (PTC)',
    description: 'Truncated protein',
    content: 'A nonsense mutation creates an early stop codon, resulting in a shortened, non-functional protein.',
  },
  {
    title: 'Suppressor tRNA Concept',
    description: 'Rescuing translation',
    content: 'Engineered suppressor tRNAs read through the premature stop, restoring protein function.',
  },
];

export default function TranslationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="glass p-8 mx-2 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-slate-100 mb-2">{slide.title}</h3>
                <p className="text-brand-pink font-medium mb-4">{slide.description}</p>
                <p className="text-slate-300 leading-relaxed">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-slate-300" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-slate-300" />
      </button>
    </div>
  );
}