import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This layout provides the <main> wrapper for the /telecom page.
// Note: We don't add <Header /> or <Footer /> here because they are
// already rendered by the root layout in app/layout.tsx.
export default function TelecomLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="font-['Work_Sans','Noto_Sans',sans-serif] bg-white min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}

