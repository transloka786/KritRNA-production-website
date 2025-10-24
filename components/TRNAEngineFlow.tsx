'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleCheck as CheckCircle, CircleAlert as AlertCircle, Zap, Database, Cpu, FlaskConical, Microscope, Stethoscope } from 'lucide-react';

const stages = [
  {
    id: 'input',
    number: '01',
    title: 'Input',
    subtitle: 'Gene + PTC position',
    description: 'Target gene sequence with premature termination codon location',
    icon: Database,
    color: '#32E2E2',
    details: 'Input target gene sequence, PTC position, and cellular context requirements'
  },
  {
    id: 'generation',
    number: '02', 
    title: 'Generation',
    subtitle: 'Candidate tRNAs',
    description: 'AI generates diverse suppressor tRNA sequences',
    icon: Cpu,
    color: '#FF4D9A',
    details: 'Machine learning models generate candidate suppressor tRNAs based on structural templates'
  },
  {
    id: 'hard-filters',
    number: '03',
    title: 'Hard Filters',
    subtitle: 'Viability checks',
    description: 'Basic tRNA functionality and recognition filters',
    icon: AlertCircle,
    color: '#E1FF17',
    details: 'tRNAscan-SE validation, SPOT-RNA2 structure checks, CCA site integrity, aaRS identity elements'
  },
  {
    id: 'thermodynamics',
    number: '04',
    title: 'Thermodynamics',
    subtitle: 'ΔG folding',
    description: 'Free energy calculations for structural stability',
    icon: Zap,
    color: '#38B6FF',
    details: 'ViennaRNA/EternaFold ΔG calculations, ensemble folding predictions, structural viability'
  },
  {
    id: 'md-simulation',
    number: '05',
    title: 'MD Simulation',
    subtitle: 'RMSF analysis',
    description: 'Molecular dynamics simulations for flexibility',
    icon: FlaskConical,
    color: '#C99EED',
    details: 'OpenMM backend molecular dynamics, RMSF per domain, structural fluctuation analysis'
  },
  {
    id: 'similarity',
    number: '06',
    title: 'Similarity',
    subtitle: 'Known suppressors',
    description: 'Comparison with validated suppressor tRNAs',
    icon: Database,
    color: '#FF3B47',
    details: 'Similarity scoring against known functional suppressor tRNAs, orthogonality heuristics'
  },
  {
    id: 'cis-context',
    number: '07',
    title: 'Cis-Context',
    subtitle: 'Local penalties',
    description: 'Local sequence context penalty scoring',
    icon: AlertCircle,
    color: '#32E2E2',
    details: 'TransTermHP/APPRIS-derived cis-context penalties, local sequence environment analysis'
  },
  {
    id: 'ranking',
    number: '08',
    title: 'Ranking',
    subtitle: 'Score & explain',
    description: 'Final scoring and interpretable rankings',
    icon: CheckCircle,
    color: '#E1FF17',
    details: 'Integrated scoring, SHAP-like feature analysis, interpretable candidate rankings'
  },
  {
    id: 'preclinical',
    number: '09',
    title: 'Pre-clinical',
    subtitle: 'Wet-lab validation',
    description: 'Experimental validation of top candidates',
    icon: Microscope,
    color: '#FF4D9A',
    details: 'Cell-based assays, suppression efficiency testing, off-target analysis'
  },
  {
    id: 'clinical',
    number: '10',
    title: 'Clinical',
    subtitle: 'Translation ready',
    description: 'Clinical development pathway',
    icon: Stethoscope,
    color: '#38B6FF',
    details: 'IND-enabling studies, clinical trial design, regulatory pathway for India-first translation'
  },
];

const dataFlowConnections = [
  { from: 0, to: 1, type: 'primary' },
  { from: 1, to: 2, type: 'filter' },
  { from: 2, to: 3, type: 'analysis' },
  { from: 3, to: 4, type: 'analysis' },
  { from: 4, to: 5, type: 'analysis' },
  { from: 5, to: 6, type: 'analysis' },
  { from: 6, to: 7, type: 'scoring' },
  { from: 7, to: 8, type: 'validation' },
  { from: 8, to: 9, type: 'clinical' },
  // Feedback loops
  { from: 8, to: 1, type: 'feedback' }, // Model updates from validation
  { from: 9, to: 1, type: 'feedback' }, // Clinical feedback to generation
];

export default function TRNAEngineFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [dataFlow, setDataFlow] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const flowInterval = setInterval(() => {
      setDataFlow((prev) => (prev + 1) % dataFlowConnections.length);
    }, 1500);
    
    return () => clearInterval(flowInterval);
  }, []);

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'primary': return '#32E2E2';
      case 'filter': return '#E1FF17';
      case 'analysis': return '#38B6FF';
      case 'scoring': return '#C99EED';
      case 'validation': return '#FF4D9A';
      case 'clinical': return '#FF3B47';
      case 'feedback': return '#666';
      default: return '#666';
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl border border-slate-600/50 p-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-pink rounded-full"
            initial={{
              x: Math.random() * 800,
              y: Math.random() * 600,
            }}
            animate={{
              x: Math.random() * 800,
              y: Math.random() * 600,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">tRNA Design Engine Pipeline</h2>
        <p className="text-xl text-gray-400 mb-6">AI-driven suppressor tRNA design and validation workflow</p>
        
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3 bg-brand-pink/20 hover:bg-brand-pink/30 rounded-lg text-brand-pink font-medium transition-colors text-lg"
          >
            {isPlaying ? 'Pause' : 'Play'} Animation
          </button>
          <div className="text-lg text-gray-500">
            Stage {activeStage + 1} of {stages.length}
          </div>
        </div>
      </div>

      {/* Pipeline Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 relative z-10">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = index === activeStage;
          const isSelected = selectedStage === index;
          const isCompleted = index < activeStage;
          
          return (
            <motion.div
              key={stage.id}
              className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-500 ${
                isActive
                  ? 'bg-brand-pink/20 border-brand-pink shadow-lg shadow-brand-pink/20 scale-105'
                  : isSelected
                  ? 'bg-white/10 border-white/30'
                  : isCompleted
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              onClick={() => setSelectedStage(selectedStage === index ? null : index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Stage Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                <span className="text-sm font-mono text-gray-400">{stage.number}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/10">
                <Icon 
                  className="w-8 h-8" 
                  style={{ color: isActive ? '#FF4D9A' : stage.color }}
                />
              </div>

              {/* Content */}
              <h4 className="text-white font-semibold text-lg mb-2 text-center">{stage.title}</h4>
              <p className="text-gray-400 text-sm text-center mb-3">{stage.subtitle}</p>
              
              {/* Progress Indicator */}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 h-2 bg-brand-pink"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              )}

              {/* Completion Check */}
              {isCompleted && (
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Data Flow Visualization */}
      <div className="relative h-32 mb-12">
        <svg className="w-full h-full" viewBox="0 0 1200 120">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#32E2E2" />
              <stop offset="25%" stopColor="#E1FF17" />
              <stop offset="50%" stopColor="#38B6FF" />
              <stop offset="75%" stopColor="#C99EED" />
              <stop offset="100%" stopColor="#FF4D9A" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          {dataFlowConnections.map((connection, index) => {
            const fromX = (connection.from / (stages.length - 1)) * 1100 + 50;
            const toX = (connection.to / (stages.length - 1)) * 1100 + 50;
            const isActive = index === dataFlow;
            const isFeedback = connection.type === 'feedback';
            
            return (
              <g key={index}>
                <motion.path
                  d={isFeedback 
                    ? `M ${fromX} 90 Q ${(fromX + toX) / 2} 30 ${toX} 90`
                    : `M ${fromX} 60 L ${toX} 60`
                  }
                  stroke={getConnectionColor(connection.type)}
                  strokeWidth={isActive ? 4 : 2}
                  fill="none"
                  strokeDasharray={isFeedback ? "5,5" : "none"}
                  opacity={isActive ? 1 : 0.3}
                  animate={{
                    opacity: isActive ? [0.3, 1, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Flow Particle */}
                {isActive && (
                  <motion.circle
                    r="5"
                    fill={getConnectionColor(connection.type)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  >
                    <animateMotion
                      dur="1.5s"
                      repeatCount="indefinite"
                      path={isFeedback 
                        ? `M ${fromX} 90 Q ${(fromX + toX) / 2} 30 ${toX} 90`
                        : `M ${fromX} 60 L ${toX} 60`
                      }
                    />
                  </motion.circle>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Stage Details Panel */}
      <AnimatePresence>
        {selectedStage !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-800/90 rounded-xl p-8 border border-slate-600/50 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {stages[selectedStage].title}
                </h3>
                <p className="text-brand-pink font-medium mb-3 text-lg">
                  {stages[selectedStage].subtitle}
                </p>
                <p className="text-gray-300 mb-6 text-lg">
                  {stages[selectedStage].description}
                </p>
              </div>
              <button
                onClick={() => setSelectedStage(null)}
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-3">Technical Details:</h4>
              <p className="text-base text-gray-400 leading-relaxed">
                {stages[selectedStage].details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Indicator */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-800/80 rounded-full">
          <motion.div 
            className="w-3 h-3 bg-brand-pink rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-gray-300 text-lg">
            Processing: {stages[activeStage].title}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#32E2E2]"></div>
          <span className="text-gray-400">Primary Flow</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#E1FF17]"></div>
          <span className="text-gray-400">Filtering</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#38B6FF]"></div>
          <span className="text-gray-400">Analysis</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#666] opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #666 2px, #666 4px)' }}></div>
          <span className="text-gray-400">Feedback Loop</span>
        </div>
      </div>
    </div>
  );
}