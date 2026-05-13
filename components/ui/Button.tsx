'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'coral' | 'outline';
type Size = 'sm' | 'md';

const variants: Record<Variant, { base: string; shimmer: string; shadow: string; fill?: string }> = {
  primary: {
    base: 'bg-[#0F1112] text-white',
    shimmer: 'bg-white/15',
    shadow: 'hover:shadow-[0_8px_22px_rgba(15,17,18,0.25)]',
  },
  coral: {
    base: 'bg-[#ec7161] text-white',
    shimmer: 'bg-white/20',
    shadow: 'hover:shadow-[0_8px_22px_rgba(236,113,97,0.45)]',
  },
  outline: {
    base: 'bg-white text-[#181818] border border-[#181818] hover:border-[#ec7161] hover:text-white',
    shimmer: '',
    shadow: 'hover:shadow-[0_8px_22px_rgba(236,113,97,0.30)]',
    fill: 'bg-[#ec7161]',
  },
};

const sizes: Record<Size, string> = {
  sm: 'h-[38px] px-[20px] text-[13px]',
  md: 'px-[20px] py-[10px] text-[16px]',
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = 'coral',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const { base, shimmer, shadow, fill } = variants[variant];

  const cls = `group relative inline-flex items-center gap-2 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${shadow} active:translate-y-0 ${base} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {shimmer && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 ${shimmer} opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100`}
        />
      )}
      {fill && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${fill} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
        />
      )}
      <span className="relative">{children}</span>
      {icon && <span className="relative flex items-center">{icon}</span>}
    </>
  );

  if (href) {
    return <Link href={href} className={cls} onClick={onClick}>{inner}</Link>;
  }

  return <button type="button" className={cls} onClick={onClick}>{inner}</button>;
}

export function ArrowIcon({ rotate = false }: { rotate?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 15 15"
      fill="none"
      className={`transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${rotate ? '-rotate-45' : ''}`}
    >
      <path
        d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
