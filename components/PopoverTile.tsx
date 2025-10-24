'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ReactNode } from 'react';

interface PopoverTileProps {
  title: string;
  description: string;
  details: string;
  icon: ReactNode;
  color: string;
  children?: ReactNode;
}

export default function PopoverTile({ title, description, details, icon, color, children }: PopoverTileProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="glass p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 text-left w-full">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
            style={{
              background: `linear-gradient(135deg, ${color}30, ${color}10)`,
              border: `1px solid ${color}40`,
            }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-[#0A0E18] border-white/10">
        <div className="space-y-3">
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{details}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}