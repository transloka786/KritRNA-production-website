'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const nodeColors = {
  'Initiation': '#32E2E2',
  'Elongation': '#E1FF17',
  'Termination & NMD': '#C99EED',
  'mRNA Stability/Decay': '#38B6FF',
};

interface SmallWorldGraphProps {
  translationFactors: any;
}

export default function SmallWorldGraph({ translationFactors }: SmallWorldGraphProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const initialNodes: Node[] = [];
    const initialEdges: Edge[] = [];

    // Create nodes for each group
    translationFactors.groups.forEach((group: any, groupIndex: number) => {
      const centerX = (groupIndex % 2) * 400 + 200;
      const centerY = Math.floor(groupIndex / 2) * 300 + 150;
      
      // Main group node
      initialNodes.push({
        id: `group-${groupIndex}`,
        type: 'default',
        position: { x: centerX, y: centerY },
        data: { 
          label: group.name,
          group: group.name,
          isGroupNode: true
        },
        style: {
          background: nodeColors[group.name as keyof typeof nodeColors] || '#666',
          color: '#000',
          border: '2px solid #fff',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 'bold',
          width: 150,
          height: 60,
        },
      });

      // Example nodes around the group
      group.examples.forEach((example: string, exampleIndex: number) => {
        const angle = (exampleIndex / group.examples.length) * 2 * Math.PI;
        const radius = 120;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        initialNodes.push({
          id: `${groupIndex}-${exampleIndex}`,
          type: 'default',
          position: { x, y },
          data: { 
            label: example,
            group: group.name
          },
          style: {
            background: 'rgba(255,255,255,0.1)',
            color: '#fff',
            border: `1px solid ${nodeColors[group.name as keyof typeof nodeColors] || '#666'}`,
            borderRadius: '8px',
            fontSize: '10px',
            width: 100,
            height: 40,
          },
        });

        // Connect example to group
        initialEdges.push({
          id: `edge-${groupIndex}-${exampleIndex}`,
          source: `group-${groupIndex}`,
          target: `${groupIndex}-${exampleIndex}`,
          style: { 
            stroke: nodeColors[group.name as keyof typeof nodeColors] || '#666',
            strokeWidth: 1,
            opacity: 0.6
          },
          animated: false,
        });
      });
    });

    // Add cross-group connections (sparse)
    initialEdges.push(
      {
        id: 'cross-1',
        source: 'group-0',
        target: 'group-1',
        style: { stroke: '#FF4D9A', strokeWidth: 2, strokeDasharray: '5,5' },
        animated: true,
        label: 'ISR ↔ eIF2α',
      },
      {
        id: 'cross-2',
        source: 'group-1',
        target: 'group-3',
        style: { stroke: '#FF4D9A', strokeWidth: 2, strokeDasharray: '5,5' },
        animated: true,
        label: 'Codon ↔ Decay',
      }
    );

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [translationFactors]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl border border-slate-600/50 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
        className="bg-transparent"
      >
        <Background color="#334155" gap={20} />
        <Controls className="bg-slate-800 border-slate-600" />
      </ReactFlow>
      
      <div className="absolute top-4 left-4 bg-slate-800/90 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-2">Translation Small-World</h3>
        <div className="space-y-1 text-xs">
          {Object.entries(nodeColors).map(([group, color]) => (
            <div key={group} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-300">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}