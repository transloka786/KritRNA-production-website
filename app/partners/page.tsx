'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Rocket, Database, Key } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import MetricTile from '@/components/MetricTile';

const partnerStats = [
  { label: 'Fewer False Starts', value: 60, suffix: '%', description: 'Improved candidate quality' },
  { label: 'Portfolio Growth', value: 3, suffix: '×', description: 'Therapeutic programs' },
  { label: 'Faster Triage', value: 40, suffix: '%', description: 'Decision timeline' },
];

const collaborationTypes = [
  {
    icon: Beaker,
    title: 'Pilot Program',
    description: 'Test our platform on 3-5 targets with full technical support',
    color: '#32E2E2',
  },
  {
    icon: Rocket,
    title: 'Co-Development',
    description: 'Joint IP creation and shared economics on therapeutic programs',
    color: '#E1FF17',
  },
  {
    icon: Database,
    title: 'Data Partnership',
    description: 'Contribute patient data to accelerate atlas development',
    color: '#C99EED',
  },
  {
    icon: Key,
    title: 'License',
    description: 'Full platform access with custom deployment and training',
    color: '#38B6FF',
  },
];

const workflowSteps = [
  { label: 'Input', x: 50, y: 100 },
  { label: 'Design', x: 250, y: 50 },
  { label: 'Rank', x: 250, y: 150 },
  { label: 'Validate', x: 450, y: 100 },
];

export default function PartnersPage() {
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
            Partner with <span className="text-[#C99EED]">KritRNA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Accelerate your rare disease programs with AI-driven tRNA design and translation modeling
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {partnerStats.map((stat, index) => (
            <MetricTile
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Workflow</h2>
          <GlassCard hover={false} className="max-w-3xl mx-auto">
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 500 200">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#32E2E2" />
                    <stop offset="33%" stopColor="#E1FF17" />
                    <stop offset="66%" stopColor="#C99EED" />
                    <stop offset="100%" stopColor="#38B6FF" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M 100 100 L 200 50 L 200 150 L 400 100"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                />

                {workflowSteps.map((step, index) => (
                  <g key={step.label}>
                    <motion.circle
                      cx={step.x}
                      cy={step.y}
                      r="30"
                      fill="rgba(50, 226, 226, 0.1)"
                      stroke="#32E2E2"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    />
                    <text
                      x={step.x}
                      y={step.y + 5}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="14"
                      fontWeight="600"
                    >
                      {step.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Collaboration Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationTypes.map((collab, index) => {
              const Icon = collab.icon;
              return (
                <motion.div
                  key={collab.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full text-center">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${collab.color}30, ${collab.color}10)`,
                        border: `1px solid ${collab.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: collab.color }} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{collab.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{collab.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-[#32E2E2] text-[#020617] font-semibold text-lg transition-all duration-300 hover:bg-[#32E2E2]/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(50,226,226,0.5)]">
            <span>Book a 15-minute discovery call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
