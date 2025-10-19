import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import ChatLauncher from '@/components/ChatLauncher';
import RibosomeProgress from '@/components/RibosomeProgress';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'KritRNA - Engineering the Language of Life',
  description: 'AI-driven suppressor tRNA therapeutics for rare genetic diseases caused by premature termination codons.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gradient-to-br from-[#020617] via-[#0A0E18] to-[#1A1B3A] min-h-screen text-slate-300 relative`}>
        <InteractiveBackground />
        <RibosomeProgress />
        <div className="relative z-10">
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
        <ChatLauncher />
      </body>
    </html>
  );
}
