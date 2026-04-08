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
  metadataBase: new URL('https://hellokritna.com'),
  title: {
    default: 'KritRNA | Suppressor tRNA Therapeutics for Rare Genetic Diseases in India',
    template: '%s | KritRNA'
  },
  description: 'KritRNA develops programmable suppressor tRNA therapies to treat nonsense mutation rare diseases — including Duchenne Muscular Dystrophy, Spinal Muscular Atrophy, and Gaucher disease — with a focus on India\'s 80 million rare disease patients.',
  keywords: [
    'suppressor tRNA', 'tRNA therapeutics', 'rare disease India',
    'nonsense mutation therapy', 'Duchenne Muscular Dystrophy treatment',
    'Spinal Muscular Atrophy India', 'Gaucher disease therapy',
    'premature stop codon readthrough', 'orphan drug India',
    'KritRNA', 'tRNA biology', 'genetic disease biotech India'
  ],
  authors: [{ name: 'KritRNA', url: 'https://hellokritna.com' }],
  creator: 'KritRNA',
  publisher: 'KritRNA',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hellokritna.com',
    siteName: 'KritRNA',
    title: 'KritRNA | Suppressor tRNA Therapeutics for Rare Genetic Diseases',
    description: 'Engineering the language of life. Programmable tRNA therapies for India\'s 80 million rare disease patients.',
    images: [{ url: '/assets/kritrna/LOGO.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KritRNA | tRNA Therapeutics for Rare Disease',
    description: 'Programmable suppressor tRNA to treat nonsense mutation diseases in India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 }
  },
  alternates: {
    canonical: 'https://hellokritna.com'
  },
  icons: {
    icon: '/LOGO.png',
    shortcut: '/LOGO.png',
    apple: '/LOGO.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KritRNA",
              "url": "https://hellokritna.com",
              "logo": "https://hellokritna.com/assets/kritrna/LOGO.png",
              "description": "KritRNA develops programmable suppressor tRNA therapeutics for rare genetic diseases caused by nonsense mutations, focused on India's rare disease population of 80 million patients.",
              "foundingDate": "2024",
              "areaServed": "India",
              "sameAs": [
                "https://github.com/transloka786/KritRNA-production-website"
              ],
              "knowsAbout": [
                "suppressor tRNA",
                "nonsense mutation readthrough",
                "premature termination codon",
                "Duchenne Muscular Dystrophy",
                "Spinal Muscular Atrophy",
                "Gaucher disease",
                "rare disease India",
                "orphan drug development",
                "tRNA biology",
                "Translation Small-World AI"
              ]
            })
          }}
        />
      </head>
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
