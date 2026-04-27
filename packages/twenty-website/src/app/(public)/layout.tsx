import { type Metadata } from 'next';
import { PublicEnvScript } from 'next-runtime-env';
import { Gabarito, IBM_Plex_Sans } from 'next/font/google';

import { AppHeader } from '@/app/_components/ui/layout/header';

import { FooterDesktop } from '../_components/ui/layout/FooterDesktop';

import './layout.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mobius.com',
  description: 'Open Source CRM',
  icons: '/images/core/logo.svg',
};

const gabarito = Gabarito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-gabarito',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-ibm-plex-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable} ${ibmPlexSans.variable}`}>
      <body>
        <PublicEnvScript />
        <AppHeader />
        <div className="container">{children}</div>
        <FooterDesktop />
      </body>
    </html>
  );
}
