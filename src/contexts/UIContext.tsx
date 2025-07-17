"use client";
import { createContext, useState, useContext, ReactNode } from 'react';

interface UIContextType {
  isServicesMenuOpen: boolean;
  toggleServicesMenu: () => void;
  openServicesMenu: () => void;
  closeServicesMenu: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleServicesMenu = () => setServicesMenuOpen(prev => !prev);
  const openServicesMenu = () => setServicesMenuOpen(true);
  const closeServicesMenu = () => setServicesMenuOpen(false);

  return (
    <UIContext.Provider value={{ isServicesMenuOpen, toggleServicesMenu, openServicesMenu, closeServicesMenu }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
