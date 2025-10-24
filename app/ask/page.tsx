'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ChatWidget from '@/components/chat/ChatWidget';
import '@/lib/i18n';

const exampleQuestions = [
  {
    category: 'Public',
    question: 'What are premature termination codons?',
  },
  {
    category: 'Clinician',
    question: 'How do I refer a patient for genetic testing?',
  },
  {
    category: 'Researcher',
    question: 'Can I access the Translation Small-World platform?',
  },
  {
    category: 'Investor',
    question: 'What is your competitive advantage in tRNA therapeutics?',
  },
];

export default function AskPage() {
  useEffect(() => {
    // Initialize i18n on component mount
  }, []);

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
            Ask <span className="text-[#E1FF17]">KritRNA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers about our technology, research, or partnership opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-8">
            Example Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exampleQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-[#E1FF17] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-[#E1FF17] font-semibold mb-2 uppercase tracking-wider">
                        {item.category}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.question}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Chat with Us</h2>
              <p className="text-gray-400">Ask your question below</p>
            </div>

            <ChatWidget />

            <div className="mt-6 text-center text-xs text-gray-500">
              Educational purposes only — this does not constitute medical advice
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
