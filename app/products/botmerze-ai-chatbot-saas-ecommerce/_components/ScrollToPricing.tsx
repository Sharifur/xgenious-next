'use client';

export default function ScrollToPricing({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <button
      className={className}
      style={style}
      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {children}
    </button>
  );
}
