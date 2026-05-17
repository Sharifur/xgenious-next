'use client';

import StatCounter from '@/components/ui/StatCounter';
import { stats } from '@/data/saas-page';

interface StatsGridProps {
  variant?: 'dark' | 'light';
}

export default function StatsGrid({ variant = 'dark' }: StatsGridProps) {
  const isDark = variant === 'dark';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-2xl p-7 flex flex-col ${
            isDark
              ? 'bg-[#161616] border border-[#1F2127]'
              : 'border border-[#E5E7EC]'
          }`}
          style={!isDark ? { background: 'rgba(255,255,255,0.01)' } : undefined}
        >
          <span className={`text-[12px] font-medium mb-[120px] ${isDark ? 'text-[#8A8F99]' : 'text-[#8A8F99]'}`}>
            {stat.number}/
          </span>
          <div className="flex items-baseline gap-1">
            <StatCounter
              value={stat.value}
              suffix=""
              label=""
              numberClass={isDark ? 'text-white' : 'text-[#0F1112]'}
            />
            <span className={`text-[28px] font-medium leading-none ${isDark ? 'text-[#A6A6A6]' : 'text-[#484848]'}`}>
              {stat.suffix}
            </span>
          </div>
          <span className={`mt-2 text-[13px] font-medium ${isDark ? 'text-[#A6A6A6]' : 'text-[#484848]'}`}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
