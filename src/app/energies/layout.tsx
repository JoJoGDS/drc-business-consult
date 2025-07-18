import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EnergiesLayout({ children }: { children: React.ReactNode }) {
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
