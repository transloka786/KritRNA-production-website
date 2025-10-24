'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info, ExternalLink } from 'lucide-react';
import { Citation } from '@/lib/citations';

interface FootnoteModalProps {
  title: string;
  citations: Citation[];
  children?: React.ReactNode;
}

export default function FootnoteModal({ title, citations, children }: FootnoteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#32E2E2]/20 text-[#32E2E2] hover:bg-[#32E2E2]/30 transition-colors">
            <Info className="w-3 h-3" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-[#0A0E18] border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {citations.map((citation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
              <span className="text-[#32E2E2] font-mono text-sm flex-shrink-0">
                [{index + 1}]
              </span>
              <div className="flex-1">
                <p className="text-gray-300 text-sm mb-2">{citation.label}</p>
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[#32E2E2] hover:text-[#32E2E2]/80 text-xs transition-colors"
                >
                  <span>View Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}