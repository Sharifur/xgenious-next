'use client';
import { useEffect } from 'react';

export default function ForceWhiteNav() {
  useEffect(() => {
    document.documentElement.dataset.navWhite = '1';
    return () => { delete document.documentElement.dataset.navWhite; };
  }, []);
  return null;
}
