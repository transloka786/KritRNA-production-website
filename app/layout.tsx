import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import ChatLauncher from '@/components/ChatLauncher';
import RibosomeProgress from '@/components/RibosomeProgress';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hellokritrna.com'),
  title: {
    default: 'KritRNA | Precision Translation Therapeutics from India',
    template: '%s | KritRNA',
  },
  description:
    'KritRNA is an India-built biotechnology company developing evidence-led suppressor tRNA therapeutics for rare genetic diseases caused by premature stop codons.',
  keywords: [
    'suppressor tRNA',
    'tRNA therapeutics',
    'rare disease biotechnology India',
    'nonsense mutation therapy',
    'premature stop codon readthrough',
    'translation therapeutics',
    'KritRNA',
    'Transloka Bio',
    'tRNA biology',
  ],
  authors: [{ name: 'KritRNA', url: 'https://hellokritrna.com' }],
  creator: 'KritRNA',
  publisher: 'KritRNA',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hellokritrna.com',
    siteName: 'KritRNA',
    title: 'KritRNA | Precision Translation Therapeutics from India',
    description:
      'Engineering suppressor tRNA programmes through rigorous biology, evidence-led selection and an India-originated platform built for global relevance.',
    images: [{ url: '/assets/kritrna/LOGO.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KritRNA | Precision Translation Therapeutics',
    description:
      'An India-built suppressor tRNA biotechnology platform for rare genetic diseases caused by premature stop codons.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://hellokritrna.com',
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
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KritRNA',
              legalName: 'Transloka Bio Private Limited',
              url: 'https://hellokritrna.com',
              logo: 'https://hellokritrna.com/assets/kritrna/LOGO.png',
              description:
                'KritRNA is an India-built biotechnology company developing evidence-led suppressor tRNA therapeutics for rare genetic diseases caused by premature stop codons.',
              areaServed: 'Global',
              sameAs: ['https://github.com/transloka786/KritRNA-production-website'],
              knowsAbout: [
                'suppressor tRNA',
                'nonsense mutation readthrough',
                'premature termination codons',
                'rare genetic diseases',
                'tRNA biology',
                'translation therapeutics',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plex.variable} font-sans bg-gradient-to-br from-[#020617] via-[#0A0E18] to-[#1A1B3A] min-h-screen text-slate-300 relative`}
      >
        <InteractiveBackground />
        <RibosomeProgress />
        <div className="relative z-10">
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </div>
        <ChatLauncher />
      </body>
    </html>
  );
}
