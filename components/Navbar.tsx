'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ap } from '@/lib/assets';

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
];

export default function Navbar() {
  const pathname = usePathname();

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
        </div>
      </div>
    </motion.nav>
  );
}
