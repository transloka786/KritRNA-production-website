'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GlassCard from '@/components/GlassCard';
import { Cpu, Network, Dna, Zap } from 'lucide-react';
import SmallWorldGraph from '@/components/SmallWorldGraph';
import TRNAEngineFlow from '@/components/TRNAEngineFlow';

const designFeatures = [
  {
    icon: Cpu,
    title: 'AI-Powered Design',
    description: 'Machine learning models predict optimal suppressor tRNA sequences',
    color: '#32E2E2',
  },
  {
    icon: Dna,
    title: 'Context Awareness',
    description: 'Considers local sequence context and cellular environment',
    color: '#E1FF17',
  },
  {
    icon: Zap,
    title: 'Efficiency Optimization',
    description: 'Maximizes suppression while minimizing off-target effects',
    color: '#C99EED',
  },
];

const networkFeatures = [
  {
    icon: Network,
    title: 'Systems Biology',
    description: 'Maps complete translation machinery interactions',
    color: '#38B6FF',
  },
  {
    icon: Cpu,
    title: 'Drug Target ID',
    description: 'Identifies novel intervention points in translation',
    color: '#FF3B47',
  },
  {
    icon: Dna,
    title: 'Pathway Analysis',
    description: 'Predicts downstream effects of therapeutic interventions',
    color: '#32E2E2',
  },
];

interface TechnologyClientProps {
  translationFactors: any;
}

export default function TechnologyClient({ translationFactors }: TechnologyClientProps) {
  const [activeTab, setActiveTab] = useState('design');

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
            Our <span className="text-[#38B6FF]">Technology</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Two complementary AI platforms working together to revolutionize genetic medicine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass border-white/10 mb-12">
              <TabsTrigger 
                value="design" 
                className="data-[state=active]:bg-brand-pink/20 data-[state=active]:text-brand-pink"
              >
                tRNA Design Engine
              </TabsTrigger>
              <TabsTrigger 
                value="network"
                className="data-[state=active]:bg-brand-pink/20 data-[state=active]:text-brand-pink"
              >
                Translation Small-World AI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard hover={false} className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Suppressor tRNA Design Engine
                  </h2>
                  <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                    The Suppressor tRNA Engine decomposes tRNA into functional blocks (acceptor stem, D-arm,
                    anticodon loop, variable loop, TΨC loop, CCA) and proposes candidate suppressor tRNAs for
                    a given gene + PTC. Hard filters enforce baseline tRNA viability and recognition (tRNAscan-SE,
                    SPOT-RNA2/RNAformer structure checks, CCA/RNase P site integrity, aaRS identity elements).
                    Scoring integrates: ΔG folding (ViennaRNA/EternaFold), orthogonality heuristics, similarity to
                    known suppressors, MD fluctuation (OpenMM backend, RMSF per domain), and a cis-context penalty
                    derived from real termination annotations (TransTermHP/APPRIS). Candidates loop through rank →
                    wet-lab validation → model updates, targeting India-first clinical translation.
                  </p>
                </GlassCard>

                <div className="mb-12">
                  <TRNAEngineFlow />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-12"
                >
                  <GlassCard hover={false}>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      tRNA Molecular Architecture
                    </h3>
                    <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                      Each tRNA molecule is a precisely folded three-dimensional structure. Our AI platform 
                      analyzes these molecular architectures to design suppressor variants that maintain 
                      structural integrity while enabling stop codon readthrough.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: 'Arginine tRNA', file: 'tRNA blue.png', description: 'Wild-type structure' },
                        { name: 'Serine tRNA', file: 'tRNA green .png', description: 'Modified anticodon' },
                        { name: 'Glutamine tRNA', file: 'tRNA purple.png', description: 'Suppressor variant' },
                        { name: 'Tryptophan tRNA', file: 'tRNA red.png', description: 'Optimized design' },
                      ].map((trna, index) => (
                        <motion.div
                          key={trna.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="bg-white/5 rounded-xl p-4 mb-3 hover:bg-white/10 transition-colors">
                            <img
                              src={`/${trna.file}`}
                              alt={trna.name}
                              className="w-full h-24 object-contain mx-auto"
                            />
                          </div>
                          <h4 className="text-sm font-semibold text-white mb-1">{trna.name}</h4>
                          <p className="text-xs text-gray-400">{trna.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {designFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <GlassCard className="text-center h-full">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                            style={{
                              background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                              border: `1px solid ${feature.color}40`,
                            }}
                          >
                            <Icon className="w-8 h-8" style={{ color: feature.color }} />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="network" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard hover={false} className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Translation Small-World AI Platform
                  </h2>
                  <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                    The Small-World Translation Model maps all major determinants of human mRNA translation
                    as interconnected "local worlds": initiation (eIFs, 5′UTR context), elongation (tRNA pool,
                    codon optimality, mRNA structure), termination/NMD, and mRNA stability/decay. Each world
                    is densely linked internally and sparsely linked across worlds, reflecting real cellular
                    coupling (e.g., codon optimality ↔ decay; ISR ↔ eIF2α). This graph serves as a research-grade,
                    extensible scaffold to prioritize interventions and predict translation outcomes under disease
                    stressors or therapy.
                  </p>
                </GlassCard>

                <SmallWorldGraph translationFactors={translationFactors} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {networkFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <GlassCard className="text-center h-full">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                            style={{
                              background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                              border: `1px solid ${feature.color}40`,
                            }}
                          >
                            <Icon className="w-8 h-8" style={{ color: feature.color }} />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center text-xs text-gray-500">
            <p>
              Notes: Nonsense/PTC share ≈10–11% across diseases; TP53 truncations are frequent in cancer.
              India context follows NPRD 2021 policy with 1,118 beneficiaries reported (Aug 9, 2024).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}