"use client"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Défile la fenêtre en haut à chaque changement de route
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
};


