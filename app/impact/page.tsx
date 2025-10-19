'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import MetricTile from '@/components/MetricTile';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

export default function ImpactPage() {
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
            Transforming the Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard hover={false}>
              <h3 className="text-2xl font-semibold text-[#FF3B47] mb-6">Today's Reality</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF3B47] font-bold">•</span>
                  <span>Fragmented genetic data across isolated centers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF3B47] font-bold">•</span>
                  <span>85% of rare disease patients undiagnosed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF3B47] font-bold">•</span>
                  <span>Limited therapeutic options for PTC diseases</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF3B47] font-bold">•</span>
                  <span>Regional disparities in access to genetic testing</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-2xl font-semibold text-[#32E2E2] mb-6">Our Plan</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#32E2E2] font-bold">✓</span>
                  <span>Unified genetic database with federated architecture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#32E2E2] font-bold">✓</span>
                  <span>AI-powered diagnosis and therapeutic matching</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#32E2E2] font-bold">✓</span>
                  <span>Pipeline of suppressor tRNA candidates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#32E2E2] font-bold">✓</span>
                  <span>Equitable access through partnerships nationwide</span>
                </li>
              </ul>
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
            Frequently Asked Questions
          </h2>
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
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
