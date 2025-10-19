'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Dna, Heart } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import ChangingWords from '@/components/ChangingWords';

const principles = [
  {
    icon: Heart,
    title: 'Patient-First',
    description: 'Every decision prioritizes patient outcomes and accessibility',
    color: '#FF3B47',
  },
  {
    icon: Dna,
    title: 'Programmable Biology',
    description: 'Engineering cellular translation with precision and control',
    color: '#32E2E2',
  },
  {
    icon: Shield,
    title: 'Safety by Design',
    description: 'Built-in safeguards at every level of therapeutic development',
    color: '#E1FF17',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated tRNA molecules */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <img
                src={`/tRNA ${['blue', 'green ', 'purple', 'red', 'blue'][i]}.png`}
                alt="tRNA molecule"
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
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
              Engineering the
              <br />
              <span className="text-gradient">Language of Life</span>
            </h1>
            <ChangingWords />
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed w-full font-light tracking-wide">
              AI-driven suppressor tRNA therapeutics for rare genetic diseases caused by 
              premature termination codons
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/technology"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-brand-pink text-white font-semibold text-lg transition-all duration-300 hover:bg-brand-pink/90 hover:scale-105"
              >
                <span>Explore Our Platform</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/problem"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg glass glass-hover font-semibold text-white"
              >
                <span>Learn About PTCs</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three core values that drive every aspect of our therapeutic development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
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
                      <Icon className="w-10 h-10" style={{ color: principle.color }} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard hover={false}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Rare Disease Treatment?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in developing the next generation of genetic medicines
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/partners"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-[#C99EED] text-[#020617] font-semibold text-lg transition-all duration-300 hover:bg-[#C99EED]/90 hover:scale-105"
                >
                  <span>Partner with Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ask"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg glass glass-hover font-semibold text-white"
                >
                  <span>Ask Questions</span>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}