'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import MetricTile from '@/components/MetricTile';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import IndiaMap from '@/components/IndiaMap';
import FootnoteModal from '@/components/FootnoteModal';

const impactMetrics = [
  { label: 'Estimated Patients', value: 5000000, description: 'Globally affected by PTCs' },
  { label: 'Diagnosed', value: 15, suffix: '%', description: 'With molecular confirmation' },
  { label: 'Policy Initiatives', value: 12, description: 'Rare disease programs' },
  { label: 'Research Studies', value: 847, description: 'On PTC therapeutics' },
];

const faqItems = [
  {
    question: 'How is patient privacy protected?',
    answer: 'All genetic data is anonymized, encrypted, and stored in compliance with international standards including GDPR and HIPAA. Patients maintain full control over their data and can revoke consent at any time.',
  },
  {
    question: 'How do patients benefit from contributing data?',
    answer: 'Contributors gain access to our disease atlas, receive updates on relevant research, and may be eligible for early access to clinical trials. Your data accelerates therapeutic development for your condition.',
  },
  {
    question: 'Will this be commercialized?',
    answer: 'Yes, therapeutics will be commercialized to sustain R&D. However, data contributors receive priority access, and we commit to equitable pricing models in low-income regions.',
  },
  {
    question: 'How is India\'s genetic diversity being addressed?',
    answer: 'We partner with regional genetic centers across all states to ensure representation. Our platform accounts for population-specific variants and prioritizes underrepresented communities.',
  },
];

interface ImpactClientProps {
  indiaData: any;
}

export default function ImpactClient({ indiaData }: ImpactClientProps) {
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
            Our <span className="text-[#E1FF17]">Impact</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            India's genetic diversity is unmatched, yet a massive data gap exists. We're building
            infrastructure to bridge clinical care, research, and therapeutic development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {impactMetrics.map((metric, index) => (
            <MetricTile
              key={metric.label}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              description={metric.description}
              delay={index * 150}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            India's Rare Disease Landscape
          </h2>
          <IndiaMap indiaData={indiaData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Global vs India-Specific Gaps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#FF3B47]/20 rounded-full flex items-center justify-center">
                <span className="text-[#FF3B47] text-xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Gaps</h3>
              <p className="text-gray-400 text-sm">Limited PTC therapeutics pipeline</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#32E2E2]/20 rounded-full flex items-center justify-center">
                <span className="text-[#32E2E2] text-xl">🧬</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Diagnostic Gaps</h3>
              <p className="text-gray-400 text-sm">85% patients undiagnosed globally</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#E1FF17]/20 rounded-full flex items-center justify-center">
                <span className="text-[#E1FF17] text-xl">🇮🇳</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">India-Specific</h3>
              <p className="text-gray-400 text-sm">Fragmented genetic data across states</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#C99EED]/20 rounded-full flex items-center justify-center">
                <span className="text-[#C99EED] text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Access Gaps</h3>
              <p className="text-gray-400 text-sm">Regional disparities in care</p>
            </GlassCard>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Sources & References
          </h2>
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="nprd-sources" className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:text-[#32E2E2] transition-colors">
                  NPRD Policy & Government Data
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">
                  <div className="space-y-2">
                    {indiaData.summary.citations.map((citation: any, index: number) => (
                      <div key={index}>
                        <a
                          href={citation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#32E2E2] hover:text-[#32E2E2]/80 transition-colors"
                        >
                          {citation.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:text-[#32E2E2] transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}