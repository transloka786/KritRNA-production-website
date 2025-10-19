'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Filter } from 'lucide-react';
import UpdateCard from '@/components/UpdateCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const updates = [
  {
    tag: 'FDA',
    title: 'FDA Grants Rare Pediatric Disease Designation for PTC Therapy',
    summary: 'Novel suppressor tRNA approach receives regulatory milestone for Duchenne muscular dystrophy treatment.',
    link: '#',
    date: '2025-09-15',
  },
  {
    tag: 'Trials',
    title: 'Phase 2 Clinical Trial Initiated for Cystic Fibrosis PTC Patients',
    summary: 'Multi-center study enrolling 120 patients with nonsense mutations in CFTR gene.',
    link: '#',
    date: '2025-09-01',
  },
  {
    tag: 'PubMed',
    title: 'Nature: AI-Designed tRNAs Show 40% Improved Suppression Efficiency',
    summary: 'Machine learning models predict context-dependent suppressor tRNA performance in mammalian cells.',
    link: '#',
    date: '2025-08-22',
  },
  {
    tag: 'EMA',
    title: 'EMA Issues Draft Guidance on tRNA Therapeutics',
    summary: 'European regulatory framework addresses safety, manufacturing, and clinical endpoints for genetic medicines.',
    link: '#',
    date: '2025-08-10',
  },
  {
    tag: 'PubMed',
    title: 'Cell: Translation Small-World Networks Reveal Drug Targets',
    summary: 'Systems biology approach identifies 23 novel intervention points in cellular translation machinery.',
    link: '#',
    date: '2025-07-28',
  },
  {
    tag: 'Trials',
    title: 'India Launches National Rare Disease Registry',
    summary: 'Government initiative aims to catalog genetic variants across all states, enabling precision medicine.',
    link: '#',
    date: '2025-07-15',
  },
];

export default function UpdatesPage() {
  const [sourceFilter, setSourceFilter] = useState<string>('all');

  const filteredUpdates = sourceFilter === 'all'
    ? updates
    : updates.filter((update) => update.tag === sourceFilter);

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
            Latest <span className="text-[#38B6FF]">Updates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed on regulatory milestones, clinical trials, and breakthrough research
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-12 space-y-4 sm:space-y-0"
        >
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-gray-400" />
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-48 glass border-white/10 text-white">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0E18] border-white/10">
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="FDA">FDA</SelectItem>
                <SelectItem value="EMA">EMA</SelectItem>
                <SelectItem value="Trials">Trials</SelectItem>
                <SelectItem value="PubMed">PubMed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg glass glass-hover font-semibold text-white"
          >
            Send us an update
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredUpdates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <UpdateCard {...update} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
