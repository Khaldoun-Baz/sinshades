import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const sans = Manrope({
  variable: '--font-sans-custom',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sinshade.shop'),
  title: 'SinShade — Soft on skin. Loud in color.',
  description:
    'SinShade organic-inspired eyeshadow, lip gloss and blush are blooming soon. Join the first drop at sinshade.shop.',
  openGraph: {
    title: 'SinShade — Soft on skin. Loud in color.',
    description:
      'Organic-inspired beauty made for your most radiant self. Coming soon.',
    type: 'website',
    siteName: 'SinShade',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1732,
        height: 909,
        alt: 'SinShade — Soft on skin. Loud in color.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SinShade — Soft on skin. Loud in color.',
    description:
      'Organic-inspired beauty made for your most radiant self. Coming soon.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
