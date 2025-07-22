import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UIProvider } from '@/contexts/UIContext';
import { Providers } from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DRC Business Consult',
  description: 'Empowering Your Business Journey',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set lang to "fr" for French, or "en" for English
    <html lang="fr" className={inter.className}>
      <body className="font-body text-[#111418] overflow-x-hidden">
        {/* Wrap with Providers to handle client-side rendering */}
        <Providers>
          {/* Wrap with UIProvider to provide context to Header and others */}
          <UIProvider>
            <Header />
            {children}
            <Footer />
          </UIProvider>
        </Providers>
      </body>
    </html>
  );
}

// Make sure your layout file is in the correct location:
// It should be at: /home/nocodedev/Documents/drc-business-consult/src/app/layout.tsx
// not in /app/layout.tsx at the project root.

// If this file is not in src/app/layout.tsx, move it there.
