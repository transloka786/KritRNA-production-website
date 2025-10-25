'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import MetricTile from '@/components/MetricTile';
import ProblemCarousel from '@/components/Carousel';
import FootnoteModal from '@/components/FootnoteModal';

const indiaMetrics = [
  { label: 'Population', value: 1400000000, description: 'Diverse genetic landscape' },
  { label: 'Genetic Centers', value: 47, description: 'Across all states' },
  { label: 'Rare Diseases', value: 450, description: 'Documented conditions' },
  { label: 'Undiagnosed', value: 85, suffix: '%', description: 'Patients without molecular confirmation' },
];

interface ProblemClientProps {
  ptcData: any;
}

export default function ProblemClient({ ptcData }: ProblemClientProps) {
  const [videoLanguage, setVideoLanguage] = useState<'english' | 'hindi'>('english');

  // ⬇️ Paths match your old structure, filenames are the new ones
  const videoSources = {
    english: '/assets/problem-video/kritrna-video-english.mp4',
    hindi: '/assets/problem-video/kritrna-video-hindi.mp4',
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The <span className="text-[#FF3B47]">Problem</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premature termination codons affect millions globally, yet therapeutic options remain limited
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <GlassCard hover={false} className="mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Are Premature Termination Codons?
              </h2>
              <blockquote className="text-xl italic text-gray-300 border-l-4 border-[#FF3B47] pl-6">
                "A single wrong 'period' in the genetic sentence can silence an entire protein story."
              </blockquote>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Premature termination codons (PTCs) act like stop signs placed too early in a genetic message. 
                  When ribosomes—the cellular machines that read RNA—encounter these incorrect stops, they halt 
                  protein production mid-sequence.
                </p>
                <p className="leading-relaxed">
                  The result: truncated, non-functional proteins that cause devastating rare diseases affecting 
                  millions of patients worldwide.
                </p>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="w-full max-w-md"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setVideoLanguage('english')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          videoLanguage === 'english'
                            ? 'bg-[#E1FF17] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setVideoLanguage('hindi')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          videoLanguage === 'hindi'
                            ? 'bg-[#E1FF17] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        हिन्दी
                      </button>
                    </div>
                    <video
                      key={videoLanguage}
                      src={videoSources[videoLanguage]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-auto rounded-lg shadow-lg"
                      style={{ maxHeight: '300px' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              </div>
            </div>
          </GlassCard>

          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Understanding Translation
          </h2>
          <div className="max-w-4xl mx-auto">
            <ProblemCarousel ptcData={ptcData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              India's Genetic Landscape: PTC-linked Conditions
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl text-gray-400">
                {ptcData.summary.global_nonsense_share_pct} nonsense/PTC variants globally
              </span>
              <FootnoteModal
                title="PTC Statistics Sources"
                citations={ptcData.summary.citations}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ptcData.examples.map((disease: any, index: number) => (
              <motion.div
                key={disease.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-semibold text-white mb-2">{disease.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{disease.mechanism}</p>
                  {disease.name.includes('TP53') && (
                    <a
                      href="https://tp53.cancer.gov/resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2 py-1 bg-[#32E2E2]/20 text-[#32E2E2] text-xs rounded-full hover:bg-[#32E2E2]/30 transition-colors"
                    >
                      Learn more
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            India's Genetic Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indiaMetrics.map((metric, index) => (
              <MetricTile
                key={metric.label}
                label={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                description={metric.description}
                delay={index * 150}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
