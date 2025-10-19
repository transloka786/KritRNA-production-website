'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-pink hover:bg-brand-pink/90 rounded-full flex items-center justify-center shadow-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-transparent border-0">
          <div className="relative w-full h-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <iframe
              src="https://t-rna-chatbot.vercel.app/"
              width="100%"
              height="100%"
              className="rounded-xl border-0 shadow-lg w-full h-full"
              loading="lazy"
              title="KritRNA Chat Assistant"
              allow="microphone; camera; geolocation; encrypted-media"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}