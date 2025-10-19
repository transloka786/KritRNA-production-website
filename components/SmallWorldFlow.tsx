'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const leftNodes = [
  { id: 'cis', label: 'Cis-Context', x: 80, y: 80, tooltip: 'Local sequence context around the PTC' },
  { id: 'trna-wt', label: 'tRNA (WT)', x: 80, y: 250, tooltip: 'Wild-type tRNA structure and function' },
  { id: 'aars', label: 'aaRS', x: 220, y: 165, tooltip: 'Aminoacyl-tRNA synthetases' },
  { id: 'ribosome-init', label: 'Ribosome: Initiation', x: 360, y: 80, tooltip: 'Translation initiation complex' },
  { id: 'ribosome-elong', label: 'Ribosome: Elongation', x: 360, y: 250, tooltip: 'Translation elongation machinery' },
  { id: 'termination', label: 'Termination (eRF1/eRF3)', x: 500, y: 165, tooltip: 'Translation termination factors' },
  { id: 'qc', label: 'QC/NGD/RQC', x: 520, y: 80, tooltip: 'Quality control pathways' },
  { id: 'isr', label: 'ISR', x: 520, y: 250, tooltip: 'Integrated stress response' },
];

const rightNodes = [
  { id: 'supp-trna', label: 'Suppressor tRNA', x: 80, y: 165, tooltip: 'Engineered suppressor tRNA candidates' },
  { id: 'folding', label: 'ΔG/Folding', x: 220, y: 100, tooltip: 'Thermodynamic stability analysis' },
  { id: 'rmsf', label: 'RMSF/MD', x: 220, y: 230, tooltip: 'Molecular dynamics simulations' },
  { id: 'orthogonality', label: 'Orthogonality', x: 360, y: 80, tooltip: 'Specificity and cross-reactivity' },
  { id: 'mrna-context', label: 'mRNA Context', x: 360, y: 250, tooltip: 'Target mRNA sequence context' },
  { id: 'readthrough', label: 'Readthrough Score', x: 500, y: 120, tooltip: 'Predicted suppression efficiency' },
  { id: 'off-target', label: 'Off-target Risk', x: 500, y: 210, tooltip: 'Potential adverse effects' },
];

const edges = [
  { from: 'cis', to: 'ribosome-init' },
  { from: 'trna-wt', to: 'aars' },
  { from: 'aars', to: 'ribosome-elong' },
  { from: 'ribosome-init', to: 'ribosome-elong' },
  { from: 'ribosome-elong', to: 'termination' },
  { from: 'termination', to: 'qc' },
  { from: 'qc', to: 'isr' },
  { from: 'supp-trna', to: 'folding' },
  { from: 'supp-trna', to: 'rmsf' },
  { from: 'folding', to: 'orthogonality' },
  { from: 'rmsf', to: 'mrna-context' },
  { from: 'orthogonality', to: 'readthrough' },
  { from: 'mrna-context', to: 'off-target' },
];

export default function SmallWorldFlow() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeEdge, setActiveEdge] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  useEffect(() => {
    const edgeInterval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % edges.length);
    }, 2000);

    const flowInterval = setInterval(() => {
      setDataFlow((prev) => (prev + 1) % 100);
    }, 100);

    return () => {
      clearInterval(edgeInterval);
      clearInterval(flowInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl border border-slate-600/50 overflow-hidden backdrop-blur-sm">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
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

      <div className="absolute top-6 left-6 z-10">
        <h2 className="text-2xl font-bold text-white mb-2">AI Engine Map</h2>
        <p className="text-sm text-slate-400">Real-time translation network analysis</p>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setShowLegend(!showLegend)}
          className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg text-sm text-slate-300 flex items-center space-x-2 transition-all duration-300 backdrop-blur-sm border border-slate-600/50"
        >
          <Info className="w-4 h-4" />
          <span>System Status</span>
        </button>
      </div>

      {showLegend && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-16 right-4 z-10 bg-slate-800/95 backdrop-blur-md rounded-lg p-6 border border-slate-600/50 shadow-2xl"
        >
          <h4 className="text-lg font-semibold text-slate-200 mb-4">Network Status</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-slate-300">Translation Engine</span>
              </div>
              <span className="text-green-400 font-mono">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-brand-pink animate-pulse"></div>
                <span className="text-slate-300">tRNA Designer</span>
              </div>
              <span className="text-green-400 font-mono">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="text-slate-300">Data Flow</span>
              </div>
              <span className="text-cyan-400 font-mono">{dataFlow}%</span>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-2 h-full pt-20">
        {/* Left Panel - Translation Small-World */}
        <div className="relative p-8 border-r border-slate-600/50">
          <div className="absolute top-4 left-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-1">Translation Engine</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400 font-mono">PROCESSING</span>
            </div>
          </div>
          
          <svg className="w-full h-full" viewBox="0 0 600 350">
            <defs>
              <linearGradient id="leftFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="1" />
                <stop offset="100%" stopColor="#0e7490" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {edges.filter(edge => 
              leftNodes.find(n => n.id === edge.from) && leftNodes.find(n => n.id === edge.to)
            ).map((edge, index) => {
              const fromNode = leftNodes.find(n => n.id === edge.from)!;
              const toNode = leftNodes.find(n => n.id === edge.to)!;
              const isActive = index === activeEdge % edges.length;
              
              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <motion.path
                    d={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 30} ${toNode.x} ${toNode.y}`}
                    stroke="url(#leftFlowGradient)"
                    strokeWidth={isActive ? "3" : "2"}
                    fill="none"
                    filter={isActive ? "url(#glow)" : "none"}
                    animate={{
                      opacity: isActive ? [0.4, 1, 0.4] : 0.6,
                      strokeWidth: isActive ? [2, 4, 2] : 2,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {isActive && (
                    <motion.circle
                      r="4"
                      fill="#06b6d4"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 30} ${toNode.x} ${toNode.y}`}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}
            
            {leftNodes.map((node, index) => (
              <g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="35"
                  fill="rgba(6, 182, 212, 0.15)"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  filter="url(#glow)"
                  animate={{
                    scale: hoveredNode === node.id ? 1.15 : [1, 1.05, 1],
                    opacity: hoveredNode === node.id ? 1 : 0.8,
                  }}
                  transition={{
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                />
                
                <motion.text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  className="text-sm fill-white font-semibold pointer-events-none"
                  animate={{
                    scale: hoveredNode === node.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {node.label}
                </motion.text>
                
                {hoveredNode === node.id && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect
                      x={node.x - 80}
                      y={node.y - 70}
                      width="160"
                      height="40"
                      fill="rgba(15, 23, 42, 0.95)"
                      stroke="#06b6d4"
                      strokeWidth="1"
                      rx="8"
                      filter="url(#glow)"
                    />
                    <text
                      x={node.x}
                      y={node.y - 45}
                      textAnchor="middle"
                      className="text-xs fill-slate-300 font-medium"
                    >
                      {node.tooltip}
                    </text>
                  </motion.g>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Right Panel - tRNA Agent */}
        <div className="relative p-8">
          <div className="absolute top-4 left-8">
            <h3 className="text-xl font-bold text-brand-pink mb-1">tRNA Designer</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-pink rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400 font-mono">OPTIMIZING</span>
            </div>
          </div>
          
          <svg className="w-full h-full" viewBox="0 0 600 350">
            <defs>
              <linearGradient id="rightFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D9A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                <stop offset="100%" stopColor="#db2777" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {edges.filter(edge => 
              rightNodes.find(n => n.id === edge.from) && rightNodes.find(n => n.id === edge.to)
            ).map((edge, index) => {
              const fromNode = rightNodes.find(n => n.id === edge.from)!;
              const toNode = rightNodes.find(n => n.id === edge.to)!;
              const isActive = (index + 3) === activeEdge % edges.length;
              
              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <motion.path
                    d={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 30} ${toNode.x} ${toNode.y}`}
                    stroke="url(#rightFlowGradient)"
                    strokeWidth={isActive ? "3" : "2"}
                    fill="none"
                    filter={isActive ? "url(#glow)" : "none"}
                    animate={{
                      opacity: isActive ? [0.4, 1, 0.4] : 0.6,
                      strokeWidth: isActive ? [2, 4, 2] : 2,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {isActive && (
                    <motion.circle
                      r="4"
                      fill="#FF4D9A"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 30} ${toNode.x} ${toNode.y}`}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}
            
            {rightNodes.map((node, index) => (
              <g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="35"
                  fill="rgba(255, 77, 154, 0.15)"
                  stroke="#FF4D9A"
                  strokeWidth="2"
                  filter="url(#glow)"
                  animate={{
                    scale: hoveredNode === node.id ? 1.15 : [1, 1.05, 1],
                    opacity: hoveredNode === node.id ? 1 : 0.8,
                  }}
                  transition={{
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                />
                
                <motion.text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  className="text-sm fill-white font-semibold pointer-events-none"
                  animate={{
                    scale: hoveredNode === node.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {node.label}
                </motion.text>
                
                {hoveredNode === node.id && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect
                      x={node.x - 80}
                      y={node.y - 70}
                      width="160"
                      height="40"
                      fill="rgba(15, 23, 42, 0.95)"
                      stroke="#FF4D9A"
                      strokeWidth="1"
                      rx="8"
                      filter="url(#glow)"
                    />
                    <text
                      x={node.x}
                      y={node.y - 45}
                      textAnchor="middle"
                      className="text-xs fill-slate-300 font-medium"
                    >
                      {node.tooltip}
                    </text>
                  </motion.g>
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}