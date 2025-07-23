"use client";
import React, { useState, useEffect, useRef } from "react";
import { useUI } from "@/contexts/UIContext";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from '@/contexts/AuthContext';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isServicesMenuOpen, toggleServicesMenu, closeServicesMenu } = useUI();
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    
    getUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    
    return () => subscription.unsubscribe();
  }, []);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    closeServicesMenu();
    setMobileSubMenu(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeServicesMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeServicesMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex items-center px-4 sm:px-6 md:px-10 py-2 md:py-2.5 min-h-[58px] md:min-h-[64px] bg-white/95 backdrop-blur-sm shadow-md">

      {/* Logo + company name */}
      <div className="flex items-center md:flex-col md:items-start min-w-0">
        <Link href="/" className="rounded-full bg-white/90 border border-[#f0f2f5] shadow-sm p-1 transition-transform transition-shadow duration-200 hover:scale-105 hover:brightness-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0c7ff2]" tabIndex={0} aria-label="Accueil DRC Business Consult">
          <Image
            src="/images/logo.png"
            alt="DRC Business Consult logo"
            width={80}
            height={80}
            className="w-[44px] h-auto sm:w-[64px] md:w-[80px] flex-shrink-0"
            style={{ display: 'block', height: 'auto', maxWidth: '100%' }}
          />
        </Link>
        <span className="hidden md:block mt-1 text-[#111418] text-[10px] sm:text-xs md:text-xs lg:text-sm font-semibold tracking-widest uppercase drop-shadow-sm text-left" style={{letterSpacing: '0.13em'}}>
          DRC BUSINESS CONSULT
        </span>
      </div>
      <span className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#111418] text-[11px] font-semibold tracking-widest uppercase drop-shadow-sm text-center pointer-events-none select-none whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]" style={{letterSpacing: '0.13em'}}>
        DRC BUSINESS CONSULT
      </span>

      {/* Hamburger button */}
      <button
        className="md:hidden flex items-center justify-center ml-auto p-3 rounded-full shadow-md bg-white transition-all duration-200 hover:bg-[#f0f2f5] active:bg-[#e6e9ef] focus:outline-none focus:ring-2 focus:ring-[#0c7ff2] z-50"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
        style={{ 
          boxShadow: '0 2px 8px rgba(12,127,242,0.09)',
          position: 'relative',
          minWidth: '44px',
          minHeight: '44px',
          touchAction: 'manipulation'
        }}
      >
        <div className="relative w-7 h-7 flex items-center justify-center">
          <div className="absolute w-7 h-7 top-0 left-0 flex flex-col justify-center items-center">
            <div className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[12px]' : ''}`} style={{ boxShadow: menuOpen ? '0 2px 8px rgba(12,127,242,0.09)' : undefined }}></div>
            <div className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out my-1 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-7 h-1 rounded-full bg-[#111418] transition-all duration-400 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-[12px]' : ''}`} style={{ boxShadow: menuOpen ? '0 2px 8px rgba(12,127,242,0.09)' : undefined }}></div>
          </div>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
          <Link href="/#about" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">À propos</Link>
          
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleServicesMenu} className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500] flex items-center gap-1">
              Nos Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isServicesMenuOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                <Link href="/visit" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visiter la RDC</Link>
                <Link href="/business" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faire des affaires</Link>
                <Link href="/transport" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Transport</Link>
                <Link href="/telecom" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Télécommunications</Link>
                <Link href="/mines" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mines</Link>
                <Link href="/hydrocarbure" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hydrocarbures</Link>
                <Link href="/energies" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Énergies</Link>
                <Link href="/assurances" onClick={closeServicesMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Assurances</Link>
              </div>
            )}
          </div>

          <Link href="/#why" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Pourquoi nous choisir</Link>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/my-reservations" className="text-gray-700 hover:text-orange-600">
                  Mes Réservations
                </Link>
                <span className="text-gray-600">Bonjour, {user?.first_name || user?.username}</span>
                <button 
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link href="/auth" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Se connecter
              </Link>
            )}
          </div>
          <Link href="/#contact" className="text-xs font-light text-[#111418] tracking-wide px-1 py-1 transition-all duration-200 hover:text-[#F05E0E] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#FFA500]">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!menuOpen}>
        <div className="fixed inset-0 top-[64px] w-full h-[calc(100vh-64px)] bg-black/50 backdrop-blur-lg" onClick={closeAllMenus}></div>
        <div className={`fixed left-0 right-0 w-full bg-white shadow-lg p-6 rounded-b-xl transform transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{ top: '58px', zIndex: 40, overflow: 'hidden' }}>
          <div className={`transition-transform duration-300 ease-in-out ${mobileSubMenu ? '-translate-x-full' : 'translate-x-0'}`}>
            <nav className="flex flex-col gap-2 w-full">
              <Link href="/#about" className="text-lg font-medium text-gray-900 hover:text-[#F05E0E] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>À propos</Link>
              
              <button 
                className="w-full flex justify-between items-center text-lg font-medium text-gray-900 hover:text-[#F05E0E] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileSubMenu(true)}
              >
                Nos Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>

              <Link href="/#why" className="text-lg font-medium text-gray-900 hover:text-[#F05E0E] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Pourquoi nous choisir</Link>
              <Link href="/#contact" className="text-lg font-medium text-gray-900 hover:text-[#F05E0E] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Contact</Link>
            </nav>
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white p-0 transition-transform duration-300 ease-in-out ${
              mobileSubMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ minWidth: '100vw', width: '100vw', maxWidth: '100vw', zIndex: 100 }}
          >
            <div className="p-6 h-full flex flex-col">
              <button
                className="w-full flex items-center text-lg font-medium text-gray-900 hover:text-[#F05E0E] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 mb-4"
                onClick={() => setMobileSubMenu(false)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              <nav
                className="flex flex-col gap-1 pl-2 pr-2 overflow-y-auto"
                style={{
                  maxHeight: 'calc(100vh - 120px)',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#FFA500 #f0f2f5'
                }}
              >
                <Link href="/visit" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Visiter la RDC</Link>
                <Link href="/business" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Faire des affaires</Link>
                <Link href="/transport" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Transport</Link>
                <Link href="/telecom" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Télécommunications</Link>
                <Link href="/mines" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Mines</Link>
                <Link href="/hydrocarbure" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Hydrocarbures</Link>
                <Link href="/energies" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Énergies</Link>
                <Link href="/assurances" className="block text-base font-medium text-gray-700 hover:text-[#F05E0E] transition-colors py-3 px-3 rounded-lg hover:bg-gray-50" onClick={closeAllMenus}>Assurances</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}