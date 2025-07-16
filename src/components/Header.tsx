"use client";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center px-4 sm:px-6 md:px-10 py-2 md:py-2.5 sticky top-0 w-full min-h-[58px] md:min-h-[64px] bg-white/80 dark:bg-white/70 backdrop-blur-sm shadow-lg z-40">

  {/* Logo + company name at left on desktop/tablet; logo left, name centered on mobile */}
  <div className="flex items-center md:flex-col md:items-start min-w-0">
    <div className="rounded-full bg-white/90 border border-[#f0f2f5] shadow-sm p-1 transition-transform transition-shadow duration-200 hover:scale-105 hover:brightness-105 cursor-pointer">
      <img
        src="/images/logo.png"
        alt="DRC Business Consult logo"
        className="w-[44px] h-auto sm:w-[64px] md:w-[80px] flex-shrink-0"
        style={{ display: 'block', height: 'auto', maxWidth: '100%' }}
      />
    </div>
    <span className="hidden md:block mt-1 text-[#111418] text-[10px] sm:text-xs md:text-xs lg:text-sm font-semibold tracking-widest uppercase drop-shadow-sm text-left" style={{letterSpacing: '0.13em'}}>
      DRC BUSINESS CONSULT
    </span>
  </div>
  {/* Centered company name on mobile only */}
  <span className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#111418] text-xs font-semibold tracking-widest uppercase drop-shadow-sm text-center pointer-events-none select-none" style={{letterSpacing: '0.13em'}}>
    DRC BUSINESS CONSULT
  </span>
  {/* Hamburger menu at right on mobile */}
  <button
    className="md:hidden flex items-center justify-center ml-auto p-2 rounded-full shadow-md bg-white transition-all duration-300 hover:bg-[#f0f2f5] active:bg-[#e6e9ef] focus:outline-none focus:ring-2 focus:ring-[#0c7ff2] z-50"
    aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
    onClick={() => setMenuOpen((open) => !open)}
    style={{ boxShadow: '0 2px 8px rgba(12,127,242,0.09)', position: 'relative' }}
  >
    <div className="relative w-7 h-7 flex items-center justify-center">
      {/* Premium Hamburger/X animation */}
      <div className="absolute w-7 h-7 top-0 left-0 flex flex-col justify-center items-center">
        <div
          className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[12px]' : ''}`}
          style={{ boxShadow: menuOpen ? '0 2px 8px rgba(12,127,242,0.09)' : undefined }}
        ></div>
        <div
          className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out my-1 ${menuOpen ? 'opacity-0' : ''}`}
        ></div>
        <div
          className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-[12px]' : ''}`}
          style={{ boxShadow: menuOpen ? '0 2px 8px rgba(12,127,242,0.09)' : undefined }}
        ></div>
      </div>
    </div>
  </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-7">
          <a href="#about" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">À propos</a>
          <a href="#visit" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Visiter la RDC</a>
          <a href="#business" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Faire des affaires</a>
          <a href="#why" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Pourquoi nous choisir</a>
          <a href="#contact" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Contact</a>
        </nav>
      </div>



      {/* Dropdown Mobile Menu */}
      {/* Animated slide-down dropdown for mobile with backdrop blur */}
      {/* Blur the entire screen except header when menu is open */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        {/* Blur overlay below header */}
        <div
          className="fixed inset-0 top-[64px] w-full h-[calc(100vh-64px)] bg-black/50 backdrop-blur-lg transition-all duration-500 ease-in-out will-change-[opacity,backdrop-filter]"
          style={{ zIndex: 30 }}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* Mobile menu panel above blur */}
        <div
          className={`absolute left-0 w-full max-w-full bg-white shadow-lg p-6 flex flex-col gap-4 rounded-b-xl transform transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-4'} mt-[64px] sm:mt-[68px]`}
          style={{boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', top: '0', zIndex: 40}}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-3">
            <a href="#about" className="text-base font-medium text-[#111418] transition-all duration-200 rounded-lg px-2 py-2 hover:bg-[#f0f2f5] hover:text-[#0c7ff2] hover:scale-105 active:bg-[#e6e9ef]" onClick={() => setMenuOpen(false)}>À propos</a>
            <a href="#visit" className="text-base font-medium text-[#111418] transition-all duration-200 rounded-lg px-2 py-2 hover:bg-[#f0f2f5] hover:text-[#0c7ff2] hover:scale-105 active:bg-[#e6e9ef]" onClick={() => setMenuOpen(false)}>Visiter la RDC</a>
            <a href="#business" className="text-base font-medium text-[#111418] transition-all duration-200 rounded-lg px-2 py-2 hover:bg-[#f0f2f5] hover:text-[#0c7ff2] hover:scale-105 active:bg-[#e6e9ef]" onClick={() => setMenuOpen(false)}>Faire des affaires</a>
            <a href="#why" className="text-base font-medium text-[#111418] transition-all duration-200 rounded-lg px-2 py-2 hover:bg-[#f0f2f5] hover:text-[#0c7ff2] hover:scale-105 active:bg-[#e6e9ef]" onClick={() => setMenuOpen(false)}>Pourquoi nous choisir</a>
            <a href="#contact" className="text-base font-medium text-[#111418] transition-all duration-200 rounded-lg px-2 py-2 hover:bg-[#f0f2f5] hover:text-[#0c7ff2] hover:scale-105 active:bg-[#e6e9ef]" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Optional: Add this to your global CSS or Tailwind config for the slide-in animation:
// .animate-slide-in { animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
// @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }

  