'use client';

import { type ReactNode } from 'react';

export default function ScrollToPricing({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  function scrollToPricing(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button onClick={scrollToPricing} className={className} style={style}>
      {children}
    </button>
  );
}
