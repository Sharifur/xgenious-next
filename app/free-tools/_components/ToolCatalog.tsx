'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type ToolCategory = 'developer' | 'hr' | 'school' | 'saas' | 'sales' | 'business' | 'image';

export type CatalogTool = {
  slug: string;
  title: string;
  tagline: string;
  category: ToolCategory;
  tier: 1 | 2 | 3 | 4;
  color: string;
  lightColor: string;
};

const CATEGORY_COLORS: Record<ToolCategory, { color: string; light: string }> = {
  developer: { color: '#3b82f6', light: '#eff6ff' },
  hr: { color: '#7c3aed', light: '#f5f3ff' },
  school: { color: '#4f46e5', light: '#eef2ff' },
  saas: { color: '#ec7161', light: '#fef2ef' },
  sales: { color: '#059669', light: '#f0fdf4' },
  business: { color: '#f59e0b', light: '#fffbeb' },
  image: { color: '#0ea5e9', light: '#f0f9ff' },
};

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'developer', label: 'Developer' },
  { key: 'hr', label: 'HR' },
  { key: 'school', label: 'School' },
  { key: 'saas', label: 'SaaS' },
  { key: 'sales', label: 'Sales' },
  { key: 'business', label: 'Business' },
  { key: 'image', label: 'Image' },
];

const VALID_CATEGORIES: ToolCategory[] = ['developer', 'hr', 'school', 'saas', 'sales', 'business', 'image'];

function ToolIcon({ color, lightColor }: { color: string; lightColor: string }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: lightColor }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke={color} strokeWidth="1.5" />
        <path
          d="M6.5 10l2.5 2.5 4.5-5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CategoryBadge({ category }: { category: ToolCategory }) {
  const palette = CATEGORY_COLORS[category];
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-full text-[11px] font-medium capitalize"
      style={{ background: palette.light, color: palette.color }}
    >
      {category}
    </span>
  );
}

function ToolCard({ tool }: { tool: CatalogTool }) {
  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolIcon color={tool.color} lightColor={tool.lightColor} />
        {tool.tier === 1 && (
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: tool.lightColor, color: tool.color }}
          >
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <h2 className="text-[15px] font-semibold text-[#0F1112] leading-[22px] group-hover:text-[#ec7161] transition-colors duration-200">
          {tool.title}
        </h2>
        <p className="text-[13px] text-[#484848] leading-[20px] flex-1">{tool.tagline}</p>
      </div>

      <div className="flex items-center justify-between pt-1">
        <CategoryBadge category={tool.category} />
        <span
          className="text-[12px] font-semibold flex items-center gap-1 transition-colors duration-200"
          style={{ color: tool.color }}
        >
          Try Free
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
            <path
              d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function CatalogBody({ tools, category }: { tools: CatalogTool[]; category: string | null }) {
  const activeCategory = category && category !== 'all' ? (category as ToolCategory) : null;
  const isValidCategory = activeCategory !== null && VALID_CATEGORIES.includes(activeCategory);
  const filtered = isValidCategory ? tools.filter((t) => t.category === activeCategory) : tools;

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
        {CATEGORIES.map(({ key, label }) => {
          const isActive = key === 'all' ? !activeCategory || !isValidCategory : activeCategory === key;

          return (
            <Link
              key={key}
              href={key === 'all' ? '/free-tools' : `/free-tools?category=${key}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200"
              style={
                isActive
                  ? { background: '#0F1112', color: '#ffffff', borderColor: '#0F1112' }
                  : { background: '#ffffff', color: '#484848', borderColor: '#E5E7EC' }
              }
            >
              {label}
            </Link>
          );
        })}
      </div>

      <p className="text-[13px] text-[#6b7280] mb-6">
        Showing {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
        {isValidCategory ? ` in ${activeCategory}` : ''}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </>
  );
}

function CatalogFromQuery({ tools }: { tools: CatalogTool[] }) {
  const category = useSearchParams().get('category');
  return <CatalogBody tools={tools} category={category} />;
}

export default function ToolCatalog({ tools }: { tools: CatalogTool[] }) {
  return (
    <Suspense fallback={<CatalogBody tools={tools} category={null} />}>
      <CatalogFromQuery tools={tools} />
    </Suspense>
  );
}
