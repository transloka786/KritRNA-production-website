'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import ChangingWords from '@/components/ChangingWords';
import Icon from '@/components/ui/Icon';
import EvidenceCard from '@/components/EvidenceCard';

const principles = [
  {
    icon: 'patient-first',
    title: 'Patient-First',
    description: 'Programme decisions begin with meaningful restoration, tissue relevance and a credible path to patient impact.',
    color: '#FF3B47',
  },
  {
    icon: 'programmable-biology',
    title: 'Translation by Design',
    description: 'We engineer at the level where premature stop codons interrupt protein production.',
    color: '#32E2E2',
  },
  {
    icon: 'safety-design',
    title: 'Evidence-Led Development',
    description: 'Each programme advances through explicit biological, delivery and safety gates.',
    color: '#E1FF17',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 opacity-30"
              style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 2) * 40}%` }}
              animate={{ rotate: 360, scale: [1, 1.2, 1], y: [0, -20, 0] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
            >
              <img
                src={`/tRNA ${['blue', 'green ', 'purple', 'red', 'blue'][i]}.png`}
                alt="Stylised tRNA molecule"
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <p className="mb-6 text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-[#32E2E2]">
              India-built precision translation therapeutics
            </p>
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
              Engineering the
              <br />
              <span className="text-gradient">Language of Life</span>
            </h1>
            <ChangingWords />
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed w-full font-light tracking-wide">
              Suppressor tRNA therapeutics designed to help translation continue where premature stop codons interrupt protein production.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              KritRNA combines deep tRNA biology, evidence-led programme selection and India-originated scientific capability to build globally relevant rare-disease medicines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/technology"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-brand-pink text-white font-semibold text-lg transition-all duration-300 hover:bg-brand-pink/90 hover:scale-105"
              >
                <span>Explore Our Platform</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/evidence"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg glass glass-hover font-semibold text-white"
              >
                <span>See the Evidence</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-y border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99EED] mb-4">A field moving forward</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The opportunity is measurable. The advantage comes from choosing well.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Premature-stop biology spans thousands of genes. KritRNA turns that broad opportunity into focused programmes by integrating disease mechanism, transcript context, tRNA performance, delivery feasibility and safety from the start.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EvidenceCard
              value="92,157"
              label="Distinct stop-gain variants mapped across the ClinVar landscape"
              denominator="7,811 genes"
              source="ClinVar-scale landscape analysis"
              limitation="A measure of documented variant burden, not patient prevalence."
              href="/problem"
              accent="#32E2E2"
            />
            <EvidenceCard
              value="4 gates"
              label="Charging, transcript context, binding-tissue delivery and native-stop safety"
              source="KritRNA scientific decision framework"
              limitation="Each gate directs programme selection and the next decisive experiment."
              href="/technology"
              accent="#E1FF17"
            />
            <EvidenceCard
              value="India-first"
              label="Population-aware origination capability built for global relevance"
              source="KritRNA development strategy"
              limitation="India is treated as a scientific design condition, not a geographic label."
              href="/impact"
              accent="#FF3B47"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How we build</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">A disciplined development model for a new therapeutic category.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GlassCard className="text-center h-full">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${principle.color}30, ${principle.color}10)`,
                      border: `1px solid ${principle.color}40`,
                    }}
                  >
                    <Icon name={principle.icon} size={40} className="mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <GlassCard hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build the next generation of translation therapeutics with us.</h2>
            <p className="text-xl text-gray-400 mb-8">We are building scientific programmes, partnerships and capabilities that can move suppressor tRNA from possibility to meaningful therapeutic evidence.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/partners"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-[#C99EED] text-[#020617] font-semibold text-lg transition-all duration-300 hover:bg-[#C99EED]/90 hover:scale-105"
              >
                <span>Partner with Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/ask" className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg glass glass-hover font-semibold text-white">
                <span>Ask KritRNA</span>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
