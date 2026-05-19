import Image from 'next/image';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';

type Stat = { value: string; label: string };
type CaseStudy = {
  title: string;
  description: string;
  stats: Stat[];
  tags: string[];
  href: string;
  image: string;
  imageBg: string;
  imageRight: boolean;
};

const CASES: CaseStudy[] = [
  {
    title: 'AI-Powered Customer Support SaaS Platform',
    description:
      'A self-hostable, multi-tenant Laravel platform with semantic AI chatbots, support ticketing, knowledge base builder, and Stripe billing — a full alternative to Intercom and Crisp that clients own outright.',
    stats: [
      { value: '40–60%', label: 'AI Deflection Rate' },
      { value: 'Multi-tenant', label: 'Architecture' },
      { value: 'GPT-4', label: 'AI Engine' },
    ],
    tags: ['Laravel', 'AI / LLM', 'SaaS'],
    href: '/case-studies/ai-support-saas-platform',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#E8EDF8',
    imageRight: true,
  },
  {
    title: 'Client Portal Software for Agencies and Freelancers',
    description:
      'Taskip is the all-in-one agency management platform and client portal software that helps freelancers and digital agencies run their entire business.',
    stats: [
      { value: '3.4×', label: 'Faster Onboarding' },
      { value: '1k+', label: 'Active Workspaces' },
      { value: '62%', label: 'LCP Score' },
    ],
    tags: ['Client Portal', 'Agencies', 'Freelancers'],
    href: 'https://taskip.net',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#C8EDE6',
    imageRight: true,
  },
  {
    title: 'Multi-Vendor Marketplace Built for Scale',
    description:
      'A multi-tenant eCommerce SaaS where every seller gets their own storefront, subdomain, and dashboard — 19+ payment gateways, Flutter mobile apps, and custom domain per tenant.',
    stats: [
      { value: '50+', label: 'Active Stores' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '3×', label: 'Revenue Growth' },
    ],
    tags: ['eCommerce', 'Multi-Tenant', 'SaaS'],
    href: '/case-studies/multi-tenant-ecommerce-saas',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#F5E8DC',
    imageRight: false,
  },
  {
    title: 'Beauty Room Booking Platform with Smart Access',
    description:
      'A Flutter mobile platform that lets independent beauty and wellness professionals book premium treatment rooms daily, with digital smart lock access, Stripe payments, and zero on-site staff required.',
    stats: [
      { value: '100%', label: 'Unmanned Operations' },
      { value: '< 3min', label: 'Avg Booking Time' },
      { value: '0', label: 'Key Handovers' },
    ],
    tags: ['Flutter', 'Smart Access', 'Beauty & Wellness'],
    href: '/case-studies/beauty-room-booking-app',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#F0ECE4',
    imageRight: false,
  },
  {
    title: 'Freelance Marketplace Platform Launched in 8 Weeks',
    description:
      'A fully operational freelance platform with escrow payments, bidding, dispute resolution, real-time chat, and Flutter mobile apps — shipped on schedule in 8 weeks.',
    stats: [
      { value: '8wk', label: 'Time to Launch' },
      { value: '500+', label: 'Active Freelancers' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    tags: ['Marketplace', 'Payments', 'Freelancers'],
    href: '/case-studies/freelancer-marketplace-platform',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#D8E4F0',
    imageRight: true,
  },
  {
    title: 'Crowdfunding & Donation Platform with Event Ticketing',
    description:
      'A Laravel crowdfunding platform with drag-and-drop campaign builder, event ticket sales, 10+ payment gateways, and a configurable platform fee model — built for full operator control.',
    stats: [
      { value: '10+', label: 'Payment Gateways' },
      { value: 'D&D', label: 'Campaign Builder' },
      { value: 'Events', label: 'Ticket Module' },
    ],
    tags: ['Crowdfunding', 'Donations', 'Laravel'],
    href: '/case-studies/crowdfunding-platform',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#D4E8D8',
    imageRight: false,
  },
  {
    title: 'On-Demand Home Service Marketplace',
    description:
      'A location-aware marketplace connecting homeowners with service providers — Google Maps matching, real-time chat, WhatsApp notifications, multi-service cart, and Flutter mobile apps.',
    stats: [
      { value: '20+', label: 'Payment Gateways' },
      { value: 'Spatial', label: 'Provider Matching' },
      { value: 'WhatsApp', label: 'Order Notifications' },
    ],
    tags: ['Home Services', 'Flutter', 'Marketplace'],
    href: '/case-studies/on-demand-home-service-app',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#DDD0F0',
    imageRight: true,
  },
  {
    title: 'Car Service & Mechanic Booking Marketplace',
    description:
      'A vehicle-aware booking marketplace connecting car owners with mechanics — vehicle model matching, real-time order tracking, 19+ payment gateways, and an Android mobile app.',
    stats: [
      { value: '19+', label: 'Payment Methods' },
      { value: 'Live', label: 'Order Tracking' },
      { value: 'Android', label: 'Mobile App' },
    ],
    tags: ['Automotive', 'Marketplace', 'Android'],
    href: '/case-studies/car-service-marketplace',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#E8E8E0',
    imageRight: false,
  },
  {
    title: 'Classified Ads Platform with Live Chat',
    description:
      'A full classified ads platform with location-based discovery, real-time buyer-seller chat, membership tiers, seller wallet, and a drag-and-drop CMS — trusted by 2,000+ brands.',
    stats: [
      { value: '2K+', label: 'Brands Onboarded' },
      { value: 'Live', label: 'Buyer-Seller Chat' },
      { value: 'Dual', label: 'Revenue Streams' },
    ],
    tags: ['Classifieds', 'Marketplace', 'Laravel'],
    href: '/case-studies/classified-ads-platform',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#C8D8F0',
    imageRight: true,
  },
  {
    title: 'eCommerce Platform with Built-In Courier',
    description:
      'A complete eCommerce platform with automated courier label generation, fraud detection, dynamic variant matrix, multi-currency checkout, and multi-language storefront — no third-party logistics tools.',
    stats: [
      { value: 'Auto', label: 'Label Generation' },
      { value: 'Dynamic', label: 'Variant Matrix' },
      { value: 'Global', label: 'Multi-Currency & Language' },
    ],
    tags: ['eCommerce', 'Courier Integration', 'Multi-Language'],
    href: '/case-studies/ecommerce-platform-with-courier',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#F0D8C8',
    imageRight: false,
  },
];

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[24px] font-medium text-[#0F1112] leading-none">{stat.value}</span>
      <span className="text-[12px] text-[#717179] leading-none">{stat.label}</span>
    </div>
  );
}

function CaseCard({ cs }: { cs: CaseStudy }) {
  const content = (
    <div className="flex flex-col gap-6 flex-1 p-8 lg:p-10 lg:pr-[60px]">
      <div>
        <h3 className="text-[26px] font-bold text-[#0F1112] leading-[34px] mb-3">{cs.title}</h3>
        <p className="text-[14px] text-[#484848] leading-[22px]">{cs.description}</p>
      </div>

      <div className="flex gap-8 mt-[20px]">
        {cs.stats.map((s) => (
          <StatBlock key={s.label} stat={s} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {cs.tags.map((tag, i) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-[12px] font-medium text-[#52525b]"
            style={{
              border: '1.5px solid transparent',
              background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #D4D4D8 0%, #ec7161 30%, #D4D4D8 60%) border-box',
              backgroundSize: 'auto, 300% 100%',
              animation: 'tagBorderSweep 8s linear infinite',
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={cs.href}
        target={cs.href.startsWith('http') ? '_blank' : undefined}
        rel={cs.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="group inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-[#0F1112] text-white text-[13px] font-semibold mt-[60px] hover:bg-[#ec7161] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(236,113,97,0.35)] transition-all duration-300"
      >
        Read Full Case Study
        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
          <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );

  const visual = (
    <div
      className="w-full lg:w-[45%] flex-shrink-0 flex items-center justify-center overflow-hidden p-8 lg:p-10"
      style={{
        background: '#fff',
        borderRadius: cs.imageRight ? '0 16px 16px 0' : '16px 0 0 16px',
      }}
    >
      <Image
        src={cs.image}
        alt={cs.title}
        width={480}
        height={360}
        className="w-full h-auto rounded-lg object-contain"
      />
    </div>
  );

  return (
    <div
      className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
      style={{ background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04)' }}
    >
      {cs.imageRight ? (
        <>{content}{visual}</>
      ) : (
        <>{visual}{content}</>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-14 sm:py-20 lg:py-[120px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-14">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-[480px]">
            <SectionBadge className="self-start">Case Studies</SectionBadge>
            <h2 className="text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Where Code Meets{' '}
              <em className="font-medium italic">Conversion.</em>
            </h2>
          </div>
          <div className="max-w-[380px] lg:pt-2">
            <p className="text-[15px] leading-[24px] text-[#484848]">
              Custom-built websites with measurable outcomes. From-scratch builds with published
              scope, fixed pricing, and a committed delivery date — shipped, scaled, and proven
              in production.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {CASES.map((cs) => (
            <CaseCard key={cs.title} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
