import SectionBadge from '@/components/ui/SectionBadge';

// ── Inline icons ──────────────────────────────────────────────────────────────

function DatabaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="7" rx="9" ry="3.5" stroke="#484848" strokeWidth="1.6" />
      <path d="M5 7v7c0 1.933 4.03 3.5 9 3.5s9-1.567 9-3.5V7" stroke="#484848" strokeWidth="1.6" />
      <path d="M5 14v7c0 1.933 4.03 3.5 9 3.5s9-1.567 9-3.5v-7" stroke="#484848" strokeWidth="1.6" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.6" />
      <rect x="15" y="4" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.6" />
      <rect x="4" y="15" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.6" />
      <rect x="15" y="15" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.6" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="4" width="22" height="15" rx="2" stroke="#484848" strokeWidth="1.6" />
      <path d="M10 24h8M14 19v5" stroke="#484848" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FileCodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 3h10l6 6v16a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="#484848" strokeWidth="1.6" />
      <path d="M17 3v6h6" stroke="#484848" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11 15l-2 2 2 2M17 15l2 2-2 2" stroke="#484848" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="7" width="16" height="13" rx="2" stroke="#484848" strokeWidth="1.6" />
      <rect x="19" y="10" width="6" height="9" rx="1.5" stroke="#484848" strokeWidth="1.4" />
      <path d="M9 22v2M11 22v2M13 22v2" stroke="#484848" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="3" stroke="#484848" strokeWidth="1.6" />
      <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="#484848" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.05 7.05l2.83 2.83M18.12 18.12l2.83 2.83M7.05 20.95l2.83-2.83M18.12 9.88l2.83-2.83" stroke="#484848" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const cards = [
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-b2b-new.svg" alt="" width={28} height={28} />,
    title: 'B2B Client Portals',
    description: 'Branded portals for suppliers, partners vendors and clients. Invoicing, document sharing, approvals and real time status tracking.',
    tags: ['Supplier portal', 'Client Portal', 'Partner portal'],
    img: '/images/web-app-dev/card-b2b.jpg',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-internal.svg" alt="" width={28} height={28} />,
    title: 'Internal Tools and Dashboards',
    description: 'Retool-style internal tools built to your exact data model. Ops consoles, back-office workflow, approval pipelines, reporting.',
    tags: ['Ops consoles', 'Workflow engines', 'Reporting dashboards'],
    img: '/images/web-app-dev/card-internal.jpg',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-enterprise-new.svg" alt="" width={28} height={28} />,
    title: 'Enterprise Web Platforms',
    description: "Custom CRMs, HR system, ERP extensions and specialized platforms where off the shelf SaaS doesn't fit your process.",
    tags: ['Custom CRM', 'Custom HRIS', 'Metered billing'],
    img: '/images/web-app-dev/card-enterprise.jpg',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-legacy.svg" alt="" width={28} height={28} />,
    title: 'Legacy Modernization',
    description: 'Rescue ageing PHP, ASP.NET or Rails apps. Rebuild on a modern stack with no feature regression and a controlled cutover plan.',
    tags: ['PHP-React', 'ASP.NET-Next.Js', 'Zero-downtime cutover'],
    img: '/images/web-app-dev/card-legacy.jpg',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-pwa.svg" alt="" width={28} height={28} />,
    title: 'Progressive Web Apps',
    description: 'Installable, offline-capable, push-notifications ready web apps — the fastest path to mobile feel without an App Store submission.',
    tags: ['Offline-first', 'Push notifications', 'Installable'],
    img: '/images/web-app-dev/card-pwa.jpg',
  },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/images/web-app-dev/icon-third-party.jpg" alt="" width={28} height={28} className="object-contain" />,
    title: 'Third-party Integration',
    description: 'Salesforce, HubSpot, Shopify, Xero, QuickBooks, Slack, Zapier and custom REST/GraphQL APIs wired into your platform.',
    tags: ['Salesforce / HubSpot', 'Stripe / Xero', 'Custom APIs'],
    img: '/images/web-app-dev/card-third-party.jpg',
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────

type CardProps = (typeof cards)[number];

function Card({ icon, title, description, tags, img }: CardProps) {
  return (
    <div className="group flex flex-col rounded-[12px] border border-[#e4e4e7] bg-white overflow-hidden">
      {/* Content */}
      <div className="flex flex-col gap-5 p-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f5f0e8] group-hover:bg-[#ec7161] transition-colors duration-300 shrink-0 [&_img]:group-hover:[filter:brightness(0)_invert(1)] [&_svg_path]:group-hover:stroke-white [&_svg_rect]:group-hover:stroke-white [&_svg_circle]:group-hover:stroke-white">
          {icon}
        </div>
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[#181818] text-[18px] leading-[26px]">{title}</h3>
          <p className="font-normal text-[#484848] text-[14px] leading-[21px]">{description}</p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-[6px] px-3 py-1 rounded-[99px] border border-[#e4e4e7] text-[#52525b] text-[12px] font-medium leading-[18px] bg-white transition-all duration-300 group-hover:border-[#ec7161] group-hover:shadow-[0_0_0_2px_rgba(236,113,97,0.15)]"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#ec7161] shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className="mt-auto px-5 pb-5">
        <div className="overflow-hidden rounded-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={title} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function WhatWeBuild() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[64px]">

        {/* Header — split */}
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <SectionBadge>Services</SectionBadge>
            <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px]">
              What We Build
            </h2>
          </div>
          <p className="font-normal text-[#484848] text-[16px] leading-6 max-w-[360px] pb-1">
            Six capability lines across the full web app lifecycle. Pick one or work with us across all six.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
