'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import MetricTile from '@/components/MetricTile';
import TranslationCarousel from '@/components/TranslationCarousel';

const indiaMetrics = [
  { label: 'Population', value: 1400000000, description: 'Diverse genetic landscape' },
  { label: 'Genetic Centers', value: 47, description: 'Across all states' },
  { label: 'Rare Diseases', value: 450, description: 'Documented conditions' },
  { label: 'Undiagnosed', value: 85, suffix: '%', description: 'Patients without molecular confirmation' },
];

export default function ProblemPage() {
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
                <motion.img
                  src="/tRNA red.png"
                  alt="tRNA molecular structure"
                  className="w-48 h-48 object-contain"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          </GlassCard>

          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Understanding Translation
          </h2>
          <div className="max-w-4xl mx-auto">
            <TranslationCarousel />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Diseases Caused by PTCs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Duchenne Muscular Dystrophy', prevalence: '10-15%', gene: 'DMD' },
              { name: 'Cystic Fibrosis', prevalence: '5-10%', gene: 'CFTR' },
              { name: 'Beta-Thalassemia', prevalence: '15-20%', gene: 'HBB' },
              { name: 'Hurler Syndrome', prevalence: '25-30%', gene: 'IDUA' },
              { name: 'Rett Syndrome', prevalence: '30-35%', gene: 'MECP2' },
              { name: 'Usher Syndrome', prevalence: '20-25%', gene: 'Multiple' },
            ].map((disease, index) => (
              <motion.div
                key={disease.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-semibold text-white mb-2">{disease.name}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Gene: {disease.gene}</span>
                    <span className="text-[#32E2E2]">{disease.prevalence} PTC</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}