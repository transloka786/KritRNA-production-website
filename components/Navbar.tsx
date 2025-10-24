'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ap } from '@/lib/assets';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/problem', label: 'Problem' },
  { href: '/technology', label: 'Technology' },
  { href: '/impact', label: 'Impact' },
  { href: '/updates', label: 'Updates' },
  { href: '/partners', label: 'Partners' },
  { href: '/ask', label: 'Ask' },
  { href: '/contact', label: 'Contact' },
  { href: '/founder', label: 'Founder' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <img
              src="/LOGO.png"
              alt="KritRNA"
              className="h-8 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              KritRNA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-end">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-normal text-gray-300 transition-colors duration-300 hover:text-brand-pink group tracking-wide"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-brand-pink/0 via-brand-pink/70 to-brand-pink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-2 bg-black/40 backdrop-blur-xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E1FF17]/10 text-[#E1FF17] border border-[#E1FF17]/20'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
