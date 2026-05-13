import { ReactNode } from 'react';

interface SectionBadgeProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SectionBadge({ children, variant = 'light', className = '' }: SectionBadgeProps) {
  const styles =
    variant === 'dark'
      ? 'bg-[#2f2f2f] text-[#ec7161]'
      : 'bg-[#FFE8E1] text-[#F26B4E]';

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-[12px] font-medium ${styles} ${className}`}>
      {children}
    </span>
  );
}
