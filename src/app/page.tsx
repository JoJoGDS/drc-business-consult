'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);

    // Handle hash-based scrolling
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      
      // Handle OAuth callback
      if (window.location.hash.includes('access_token')) {
        // Store the hash in session storage and clean the URL
        sessionStorage.setItem('oauth_hash', window.location.hash);
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

      // Handle regular hash links
      const hash = window.location.hash;
      if (hash) {
        try {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (e) {
          console.error('Invalid selector:', hash);
        }
      }
    };

    // Handle OAuth callback from session storage
    const oauthHash = sessionStorage.getItem('oauth_hash');
    if (oauthHash) {
      // Process the OAuth hash here if needed
      console.log('OAuth callback received:', oauthHash);
      sessionStorage.removeItem('oauth_hash');
    }

    handleHash();
    window.addEventListener('hashchange', handleHash);
    
    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [pathname, searchParams]);

  // Don't render anything until mounted on the client
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

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
        </div>
      </main>
    </div>
  );
}