import Link from 'next/link';
import { Github, Linkedin, Twitter, Dna } from 'lucide-react';
import { ap } from '@/lib/assets';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/problem', label: 'Problem' },
  { href: '/technology', label: 'Technology' },
  { href: '/impact', label: 'Impact' },
  { href: '/updates', label: 'Updates' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/LOGO.png"
                alt="KritRNA"
                className="h-6"
              />
              <span className="text-lg font-semibold text-white">
                KritRNA
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Engineering the language of life through AI-driven suppressor tRNA therapeutics for rare genetic diseases.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-pink transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg glass glass-hover"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} KritRNA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-brand-pink transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-brand-pink transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
