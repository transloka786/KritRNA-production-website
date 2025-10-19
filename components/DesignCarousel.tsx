'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Cpu, Dna, Target, ChartBar as BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    icon: Cpu,
    title: 'Generate Candidates',
    description: 'AI models generate diverse suppressor tRNA sequences based on target PTC context.',
    color: '#FF4D9A',
  },
  {
    icon: Dna,
    title: 'Structural Checks',
    description: 'ΔG/MFE analysis and ensemble folding predictions ensure structural viability.',
    color: '#06b6d4',
  },
  {
    icon: Target,
    title: 'Functional Checks',
    description: 'Cis-penalty, orthogonality, conservation, and RMSF/MD simulations validate function.',
    color: '#10b981',
  },
  {
    icon: BarChart3,
    title: 'Rank & Explain',
    description: 'Feature weights and SHAP-like analysis provide interpretable candidate rankings.',
    color: '#f59e0b',
  },
];

export default function DesignCarousel() {
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
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="glass p-8 mx-2 h-80 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${slide.color}30, ${slide.color}10)`,
                      border: `1px solid ${slide.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: slide.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">{slide.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{slide.description}</p>
                </div>
              </div>
            );
          })}
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