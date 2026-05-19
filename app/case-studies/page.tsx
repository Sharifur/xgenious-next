import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Case Studies — Client Projects | Xgenious',
  description:
    'Real projects. Measurable outcomes. Explore how Xgenious builds SaaS platforms, marketplaces, mobile apps, and eCommerce systems — from problem brief to production.',
};

type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  accentBg: string;
};

const CASES: CaseStudy[] = [
  {
    title: 'AI-Powered Customer Support SaaS Platform',
    description:
      'A self-hostable, multi-tenant Laravel platform with semantic AI chatbots, ticketing, knowledge base builder, and Stripe billing — 40–60% AI deflection rate.',
    tags: ['Laravel', 'AI / LLM', 'SaaS'],
    href: '/case-studies/ai-support-saas-platform',
    accentBg: '#E8EDF8',
  },
  {
    title: 'Beauty Room Booking App with Smart Access',
    description:
      'Flutter mobile platform for beauty professionals to book premium treatment rooms — digital smart lock access, Stripe payments, zero on-site staff required.',
    tags: ['Flutter', 'Smart Access', 'Beauty & Wellness'],
    href: '/case-studies/beauty-room-booking-app',
    accentBg: '#F0ECE4',
  },
  {
    title: 'Freelance Marketplace Platform',
    description:
      'Full-stack freelancer marketplace with escrow payments, bidding, dispute resolution, real-time chat, and Flutter mobile apps — shipped in 8 weeks.',
    tags: ['Marketplace', 'Escrow Payments', 'Flutter'],
    href: '/case-studies/freelancer-marketplace-platform',
    accentBg: '#D8E4F0',
  },
  {
    title: 'Multi-Tenant eCommerce SaaS',
    description:
      'A single Laravel instance powering 50+ independent online stores — custom domains, 19+ payment gateways, Flutter mobile apps, and per-tenant branding.',
    tags: ['eCommerce', 'Multi-Tenant', 'SaaS'],
    href: '/case-studies/multi-tenant-ecommerce-saas',
    accentBg: '#F5E8DC',
  },
  {
    title: 'Crowdfunding & Donation Platform',
    description:
      'Laravel crowdfunding platform with drag-and-drop campaign builder, event ticket sales, 10+ payment gateways, and a configurable platform fee model.',
    tags: ['Crowdfunding', 'Donations', 'Laravel'],
    href: '/case-studies/crowdfunding-platform',
    accentBg: '#D4E8D8',
  },
  {
    title: 'On-Demand Home Service Marketplace',
    description:
      'Location-aware service marketplace with Google Maps provider matching, WhatsApp order notifications, multi-service cart, and Flutter mobile apps.',
    tags: ['Home Services', 'Flutter', 'Marketplace'],
    href: '/case-studies/on-demand-home-service-app',
    accentBg: '#DDD0F0',
  },
  {
    title: 'Car Service & Mechanic Booking Marketplace',
    description:
      'Vehicle-aware booking marketplace — car model matching, real-time order tracking, 19+ payment gateways, REST API, and Android mobile app.',
    tags: ['Automotive', 'Marketplace', 'Android'],
    href: '/case-studies/car-service-marketplace',
    accentBg: '#E8E8E0',
  },
  {
    title: 'Classified Ads Platform with Live Chat',
    description:
      'Full classified ads platform — location-based discovery, real-time buyer-seller chat, membership tiers, seller wallet, and drag-and-drop CMS. 2K+ brands.',
    tags: ['Classifieds', 'Marketplace', 'Laravel'],
    href: '/case-studies/classified-ads-platform',
    accentBg: '#C8D8F0',
  },
  {
    title: 'eCommerce Platform with Built-In Courier',
    description:
      'Complete eCommerce platform with automated courier label generation, fraud detection, dynamic variant matrix, multi-currency checkout, and multi-language storefront.',
    tags: ['eCommerce', 'Courier Integration', 'Multi-Language'],
    href: '/case-studies/ecommerce-platform-with-courier',
    accentBg: '#F0D8C8',
  },
];

function CaseCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={cs.href}
      className="group flex flex-col rounded-2xl overflow-hidden border border-[#e5e7ec] bg-white hover:border-[#d0d4dc] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
    >
      {/* Accent visual */}
      <div
        className="w-full flex items-center justify-center"
        style={{ background: cs.accentBg, height: 200 }}
      >
        <span className="text-[12px] text-[#00000040]">Project screenshot</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[#6b7280] bg-[#f5f6f8] border border-[#e5e7ec]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-[17px] font-semibold text-[#0F1112] leading-[26px] group-hover:text-[#ec7161] transition-colors duration-200">
          {cs.title}
        </h2>

        <p className="text-[13px] text-[#6b7280] leading-[21px] flex-1">
          {cs.description}
        </p>

        <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0F1112] group-hover:text-[#ec7161] transition-colors duration-200 mt-2">
          Read Case Study
          <svg width="13" height="13" viewBox="0 0 15 15" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-5 max-w-[680px]">
            <SectionBadge className="self-start">Case Studies</SectionBadge>
            <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[60px] lg:leading-[68px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Real Projects.{' '}
              <em className="font-medium italic">Measurable Outcomes.</em>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848] max-w-[520px]">
              From-scratch builds with published scope, fixed pricing, and a committed delivery
              date — shipped, scaled, and proven in production.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20 lg:pb-[120px]" style={{ background: '#F5F6F8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((cs) => (
              <CaseCard key={cs.href} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
