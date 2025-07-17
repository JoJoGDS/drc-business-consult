'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-[#f9fafb] to-[#f0f2f5] min-h-screen antialiased w-full">
      <Header />
      <div className="min-h-[58px] md:min-h-[64px]" />
      <main className="overflow-x-hidden">
        <div className="max-w-[100vw]">
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
