'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, Users, Lightbulb } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

export default function AboutMePage() {
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
            About the <span className="text-brand-pink">Founder</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building India's first AI-driven tRNA therapeutics platform
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">Professional Links</h2>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 glass glass-hover rounded-lg"
                  >
                    <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">in</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">LinkedIn Profile</div>
                      <div className="text-gray-400 text-sm">Professional background & network</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                  
                  <a
                    href="https://scholar.google.com/citations?user=your-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 glass glass-hover rounded-lg"
                  >
                    <div className="w-10 h-10 bg-[#4285F4] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">GS</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Google Scholar</div>
                      <div className="text-gray-400 text-sm">Research publications & citations</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <blockquote className="text-xl italic text-white leading-relaxed">
                  <span className="text-[#32E2E2] text-3xl">"</span>
                  India has the genetic diversity to lead the world in precision medicine. 
                  We're not just building therapeutics—we're creating a movement where 
                  every genetic message gets read to completion.
                  <span className="text-[#32E2E2] text-3xl">"</span>
                </blockquote>
                <div className="text-gray-400 text-sm">
                  — Founder, KritRNA
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#32E2E2]/20 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-[#32E2E2]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Research Collaboration</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Partner with us on cutting-edge tRNA research, clinical studies, 
                and AI model development for rare genetic diseases.
              </p>
              <a
                href="mailto:trnaativetransloka@gmail.com?subject=Research Collaboration Inquiry"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#32E2E2] text-[#020617] rounded-lg font-semibold hover:bg-[#32E2E2]/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Discuss Research</span>
              </a>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#E1FF17]/20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-[#E1FF17]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partnership</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Join us in building India's genetic medicine ecosystem through 
                strategic investments, technology partnerships, and market expansion.
              </p>
              <a
                href="mailto:trnaativetransloka@gmail.com?subject=Strategic Partnership Inquiry"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#E1FF17] text-[#020617] rounded-lg font-semibold hover:bg-[#E1FF17]/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Explore Partnership</span>
              </a>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}