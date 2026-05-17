import SectionBadge from '@/components/ui/SectionBadge';

type Card = {
  bg: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    bg: '#e8e2d6',
    image: '/images/web-app-dev/card-internal.jpg',
    alt: 'MVP strategy planning',
    title: 'MVP Strategy & Planning',
    description:
      'Sharpen scope, define metrics, and build a realistic 6–12 week launch roadmap.',
  },
  {
    bg: '#d2d5d9',
    image: '/images/web-app-dev/card-b2b.jpg',
    alt: 'SaaS MVP development',
    title: 'SaaS MVP Development',
    description:
      'Multi-tenant architecture, subscriptions, role-based access — everything a SaaS needs from day one.',
  },
  {
    bg: '#c9e8d4',
    image: '/images/web-app-dev/card-enterprise.jpg',
    alt: 'Web app development',
    title: 'Web App Development',
    description:
      'Modern React/Next.js frontends paired with robust APIs — fast, responsive, production-ready.',
  },
  {
    bg: '#e8e2d6',
    image: '/images/web-app-dev/card-third-party.jpg',
    alt: 'API integration',
    title: 'API Integration',
    description:
      'Stripe, Twilio, OpenAI, custom partner APIs — wired correctly the first time.',
  },
  {
    bg: '#c8dce8',
    image: '/images/web-app-dev/card-pwa.jpg',
    alt: 'AI MVP solutions',
    title: 'AI MVP Solutions',
    description:
      'LLM-powered features, AI agents, RAG pipelines — ship intelligent products that actually work.',
  },
  {
    bg: '#e8e2d6',
    image: '/images/web-app-dev/card-legacy.jpg',
    alt: 'Product scaling',
    title: 'Product Scaling',
    description:
      'Take your validated MVP to v2: performance, infrastructure, security, and growth features.',
  },
];

function Card({ bg, image, alt, title, description }: Card) {
  return (
    <div className="bg-white rounded-[16px] overflow-hidden flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="h-[200px] sm:h-[220px] overflow-hidden" style={{ background: bg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <p className="font-semibold text-[#0f1112] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px]">
          {title}
        </p>
        <p className="text-[#484848] text-[13px] leading-[20px] sm:text-[14px] sm:leading-[21px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[64px] items-center">

        <div className="flex flex-col items-center gap-4 text-center max-w-[680px]">
          <SectionBadge>What we Build</SectionBadge>
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px]">
            MVP Development Services<br className="hidden sm:block" />for Modern Startups
          </h2>
          <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px] max-w-[560px]">
            End-to-end product capabilities, delivered by a senior team that
            thinks like founders and ships like operators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>

      </div>
    </section>
  );
}
