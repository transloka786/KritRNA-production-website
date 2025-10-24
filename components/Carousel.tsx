'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselCaptions = [
  "Normal translation: mRNA is read continuously to produce functional proteins",
  "Premature termination: A nonsense mutation creates an early stop codon",
  "Truncated protein: Results in shortened, non-functional protein products",
  "Disease manifestation: Loss of protein function leads to genetic disorders",
  "Suppressor tRNA concept: Engineered tRNAs can read through stop codons",
  "Readthrough mechanism: Suppressor tRNAs insert amino acids at PTCs",
  "Restored function: Full-length proteins are produced despite mutations",
  "Therapeutic potential: One modality addresses multiple genetic diseases"
];

interface ProblemCarouselProps {
  ptcData: any;
}

export default function ProblemCarousel({ ptcData }: ProblemCarouselProps) {
  const slides = Array.from({ length: 8 }, (_, i) => ({
    image: `/assets/problem-carousel/s${String(i + 1).padStart(2, '0')}.png`,
    caption: carouselCaptions[i] || `Slide ${i + 1}`
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`PTC Biology Slide ${index + 1}`}
              className="w-full h-auto"
onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}