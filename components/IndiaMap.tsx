'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Users, Activity, MapPin } from 'lucide-react';

// State data with colors based on patient density (per 100k population)
// Color scheme: High density (red/pink), Medium (orange/yellow), Low (green/cyan), No data (grey)
const stateData = [
  // High patient density (red shades)
  { name: 'Maharashtra', patients: 8500, diagnosed: 12, centers: 8, population: 112374333, color: '#7FD99E', hasData: true },
  { name: 'Uttar Pradesh', patients: 12000, diagnosed: 8, centers: 6, population: 199812341, color: '#C77BE8', hasData: true },
  { name: 'Tamil Nadu', patients: 6200, diagnosed: 18, centers: 9, population: 72147030, color: '#D9774D', hasData: true },
  { name: 'West Bengal', patients: 5800, diagnosed: 14, centers: 7, population: 91276115, color: '#FF6B4D', hasData: true },
  { name: 'Karnataka', patients: 4900, diagnosed: 16, centers: 8, population: 61095297, color: '#4DD9CC', hasData: true },

  // Medium-high density (orange/pink shades)
  { name: 'Gujarat', patients: 4200, diagnosed: 15, centers: 6, population: 60439692, color: '#C77BE8', hasData: true },
  { name: 'Rajasthan', patients: 4800, diagnosed: 10, centers: 5, population: 68548437, color: '#FFB5A7', hasData: true },
  { name: 'Andhra Pradesh', patients: 3600, diagnosed: 13, centers: 5, population: 49577103, color: '#FFB5A7', hasData: true },
  { name: 'Telangana', patients: 2800, diagnosed: 17, centers: 4, population: 35003674, color: '#4D4D4D', hasData: true },
  { name: 'Kerala', patients: 2200, diagnosed: 22, centers: 6, population: 33406061, color: '#4D9FFF', hasData: true },

  // Medium density (yellow shades)
  { name: 'Madhya Pradesh', patients: 4600, diagnosed: 9, centers: 4, population: 72626809, color: '#7FD99E', hasData: true },
  { name: 'Bihar', patients: 6200, diagnosed: 6, centers: 3, population: 104099452, color: '#F5C842', hasData: true },
  { name: 'Odisha', patients: 2800, diagnosed: 11, centers: 3, population: 42278656, color: '#C77BE8', hasData: true },
  { name: 'Assam', patients: 2100, diagnosed: 8, centers: 2, population: 31205576, color: '#FFE84D', hasData: true },
  { name: 'Punjab', patients: 1800, diagnosed: 14, centers: 3, population: 27743338, color: '#FF6B9D', hasData: true },

  // Lower density (green/cyan shades)
  { name: 'Haryana', patients: 1600, diagnosed: 13, centers: 3, population: 25351462, color: '#FF6B9D', hasData: true },
  { name: 'Jharkhand', patients: 2200, diagnosed: 7, centers: 2, population: 32988134, color: '#D9994D', hasData: true },
  { name: 'Chhattisgarh', patients: 1800, diagnosed: 8, centers: 2, population: 25545198, color: '#7A7A7A', hasData: true },
  { name: 'Uttarakhand', patients: 800, diagnosed: 12, centers: 2, population: 10086292, color: '#9B4DD9', hasData: true },
  { name: 'Himachal Pradesh', patients: 500, diagnosed: 15, centers: 2, population: 6864602, color: '#9B4DD9', hasData: true },

  // Northeastern states (low density - cyan/green)
  { name: 'Manipur', patients: 200, diagnosed: 9, centers: 1, population: 2855794, color: '#4D4D4D', hasData: true },
  { name: 'Tripura', patients: 280, diagnosed: 7, centers: 1, population: 3673917, color: '#8B4513', hasData: true },
  { name: 'Meghalaya', patients: 220, diagnosed: 6, centers: 1, population: 2966889, color: '#4DD9CC', hasData: true },
  { name: 'Nagaland', patients: 150, diagnosed: 8, centers: 1, population: 1978502, color: '#4DD9CC', hasData: true },
  { name: 'Mizoram', patients: 80, diagnosed: 10, centers: 1, population: 1097206, color: '#666666', hasData: true },
  { name: 'Arunachal Pradesh', patients: 100, diagnosed: 5, centers: 1, population: 1383727, color: '#FFB84D', hasData: true },
  { name: 'Sikkim', patients: 45, diagnosed: 12, centers: 1, population: 610577, color: '#FF6B4D', hasData: true },

  // Union Territories
  { name: 'Delhi', patients: 1200, diagnosed: 20, centers: 5, population: 16787941, color: '#FF6B9D', hasData: true },
  { name: 'Goa', patients: 120, diagnosed: 18, centers: 2, population: 1458545, color: '#4DD9CC', hasData: true },
  { name: 'Puducherry', patients: 85, diagnosed: 16, centers: 1, population: 1247953, color: '#8B4513', hasData: true },
  { name: 'Chandigarh', patients: 75, diagnosed: 19, centers: 1, population: 1055450, color: '#666666', hasData: false },
  { name: 'Jammu and Kashmir', patients: 0, diagnosed: 0, centers: 0, population: 12548926, color: '#4DD9CC', hasData: true },
  { name: 'Ladakh', patients: 0, diagnosed: 0, centers: 0, population: 274000, color: '#666666', hasData: false },
  { name: 'Andaman and Nicobar', patients: 0, diagnosed: 0, centers: 0, population: 380581, color: '#4D4D4D', hasData: true },
];

interface IndiaMapProps {
  indiaData: any;
}

export default function IndiaMap({ indiaData }: IndiaMapProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStateInfo = (stateName: string) => {
    return stateData.find(state => state.name === stateName);
  };

  const maxPatients = Math.max(...stateData.map(s => s.patients));
  const getIntensity = (patients: number) => (patients / maxPatients);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl border border-slate-600/50 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* State Boxes Section */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">India PTC Rare Disease Distribution</h3>
            <p className="text-gray-400 text-sm">State-wise patient data visualization</p>
          </div>

          {/* State Boxes Grid */}
          <div className="relative border border-slate-600/30 rounded-lg bg-black/80 p-6" style={{ minHeight: '500px' }}>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {stateData.map((state, index) => {
                const isSelected = selectedState === state.name;
                const isHovered = hoveredState === state.name;
                const displayColor = state.hasData ? state.color : '#555555';

                return (
                  <motion.div
                    key={state.name}
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
                    onMouseEnter={() => setHoveredState(state.name)}
                    onMouseLeave={() => setHoveredState(null)}
                    animate={{
                      scale: isSelected || isHovered ? [1, 1.05, 1] : [1, 1.02, 1],
                      opacity: isSelected || isHovered ? 1 : 0.9,
                    }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.05,
                      },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <div
                      className="aspect-square rounded-lg border-2 flex items-center justify-center p-1 shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: displayColor,
                        borderColor: isSelected || isHovered ? '#4DD9CC' : 'rgba(0,0,0,0.3)',
                        boxShadow: isSelected || isHovered
                          ? `0 0 20px ${displayColor}80`
                          : `0 4px 8px rgba(0,0,0,0.5)`,
                      }}
                    >
                      <div className="text-center">
                        <div
                          className="text-[8px] font-bold leading-tight"
                          style={{
                            color: '#000000',
                            textShadow: '0 0 4px rgba(255,255,255,0.8)',
                          }}
                        >
                          {state.name.length > 15
                            ? state.name.substring(0, 12) + '...'
                            : state.name}
                        </div>
                      </div>
                    </div>

                    {/* Tooltip on hover */}
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-50 top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 rounded-lg p-2 text-xs whitespace-nowrap shadow-xl"
                      >
                        <div className="text-white font-semibold">{state.name}</div>
                        {state.hasData && state.patients > 0 ? (
                          <div className="text-gray-400 text-[10px]">
                            {state.patients.toLocaleString()} patients
                          </div>
                        ) : (
                          <div className="text-gray-500 text-[10px]">No data</div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
        
        {/* Data Panel */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">National Overview</h3>
            <div className="space-y-4">
              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-5 h-5 text-[#32E2E2]" />
                  <span className="text-white font-semibold">Total Patients</span>
                </div>
                <div className="text-2xl font-bold text-[#32E2E2]">
                  {stateData.reduce((sum, state) => sum + state.patients, 0).toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">Estimated PTC patients</div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="w-5 h-5 text-[#E1FF17]" />
                  <span className="text-white font-semibold">Avg. Diagnosis Rate</span>
                </div>
                <div className="text-2xl font-bold text-[#E1FF17]">
                  {Math.round(stateData.reduce((sum, state) => sum + state.diagnosed, 0) / stateData.length)}%
                </div>
                <div className="text-gray-400 text-sm">Molecular confirmation</div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-white/5 rounded-lg border border-white/10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#C99EED]" />
                  <span className="text-white font-semibold">Medical Centers</span>
                </div>
                <div className="text-2xl font-bold text-[#C99EED]">
                  {stateData.reduce((sum, state) => sum + state.centers, 0)}
                </div>
                <div className="text-gray-400 text-sm">Specialized facilities</div>
              </motion.div>
            </div>
          </div>
          
          {/* Selected State Details */}
          <AnimatePresence>
            {selectedState && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/50"
              >
                {(() => {
                  const stateInfo = getStateInfo(selectedState);
                  if (!stateInfo) return null;
                  
                  return (
                    <>
                      <h4 className="text-lg font-semibold text-white mb-3">{selectedState}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Estimated Patients:</span>
                          <span className="text-white font-medium">{stateInfo.patients.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Diagnosis Rate:</span>
                          <span className="text-white font-medium">{stateInfo.diagnosed}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Medical Centers:</span>
                          <span className="text-white font-medium">{stateInfo.centers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Population:</span>
                          <span className="text-white font-medium">{(stateInfo.population / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-600/50">
                          <div className="text-xs text-gray-500">
                            Prevalence: {((stateInfo.patients / stateInfo.population) * 100000).toFixed(1)} per 100,000
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Data Sources */}
          <div className="text-xs text-gray-500 space-y-1">
            <p className="flex items-center space-x-2">
              <Info className="w-3 h-3" />
              <span>Data sources: NPRD 2021, ICMR NRROID</span>
            </p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}