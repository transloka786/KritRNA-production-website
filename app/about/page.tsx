'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import { ap } from '@/lib/assets';
import { Dna, Globe, Bot } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.img
              src="/LOGO.png"
              alt="KritRNA Logo"
              className="w-40 h-40"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-brand-pink">KritRNA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our name bridges ancient script and modern science. "कृ" (kr) from Devanagari represents action and creation, 
            while its visual form mirrors segments of the biological transfer RNA—the molecular courier that translates genetic code into life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The KritRNA Name & Logo Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  In Devanagari, "कृत्" (Krit) means 'engineered' and in biology, such modified tRNA that suppress nonsense 
                  mutations in rare diseases are called 'engineered tRNA'.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Script as Structure</h3>
                  <p>
                    The Devanagari character naturally resembles tRNA's iconic cloverleaf shape, connecting linguistic 
                    heritage with molecular architecture.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">The Language of Life</h3>
                  <p>
                    Every culture has contributed to our understanding of genetics. We celebrate the universality of 
                    biological language—codons and characters alike carry meaning across boundaries.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                      <span><strong>Curve</strong> echoes the molecular interactive parts of a tRNA</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                      <span><strong>Dot</strong> represents the amino acid cargo</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#38B6FF] rounded-full"></span>
                      <span><strong>Blue</strong> represents its ability to correct the effects of mutation in rare diseases</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mb-8">
                <motion.img
                  src="/LOGO.png"
                  alt="KritRNA Logo - Devanagari कृ with tRNA elements"
                  className="w-80 h-80"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                KritRNA was founded on the belief that every genetic message deserves to be read to completion. 
                When premature termination codons (PTCs) interrupt the cellular translation process, they rob 
                patients of functional proteins essential for life.
              </p>
              <p>
                Our breakthrough approach uses AI-designed suppressor tRNAs to restore protein function, 
                offering hope to millions of patients worldwide affected by nonsense mutations. By combining 
                cutting-edge machine learning with deep biological understanding, we're creating a new class 
                of genetic medicines.
              </p>
              <p>
                India's genetic diversity is extraordinary, yet rare disease data remains fragmented and incomplete. 
                We envision a secure, ethical, federated data infrastructure that empowers clinicians, researchers, 
                and patients while protecting privacy and ensuring equitable benefit. Our Translation Small-World AI 
                platform represents the convergence of systems biology, artificial intelligence, and precision medicine.
              </p>
              <blockquote className="border-l-4 border-brand-pink pl-6 italic text-lg text-white">
                "A single wrong 'period' in the genetic sentence can silence an entire protein story."
              </blockquote>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Dna className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Restore Function</h3>
              <p className="text-gray-400">
                By engineering suppressor tRNAs—molecules that can read through premature stop codons—we create 
                a single modality capable of addressing dozens of genetic diseases
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-gray-400">
                Address India's genetic diversity gap while building therapeutic solutions that can reach patients 
                globally through federated data infrastructure
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Driven</h3>
              <p className="text-gray-400">
                Our proprietary design platform integrates genomic data, structural biology, and machine learning 
                to generate and rank suppressor tRNA candidates
              </p>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}