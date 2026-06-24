import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'AI That Understands — Not Just Matches',
    desc: 'Helpnest uses semantic vector similarity search powered by OpenAI and Anthropic Claude. The chatbot understands intent and context, not just keywords — resolving queries your FAQ never could.',
    img: '/products/helpnest-feature-ai.jpg',
    large: true,
  },
  {
    title: 'See Every Visitor in Real Time',
    desc: 'Live visitor maps show browsing history, current page, country, and address. Reach out proactively before they leave.',
    img: '/products/helpnest-feature-visitor-v2.jpg',
    large: true,
  },
  {
    title: 'Full Ticketing System Built In',
    desc: 'Ticket routing, priority management, SLA tracking, and team collaboration — everything a real help desk needs.',
    img: '/products/helpnest-feature-tickets-v2.jpg',
    bgColor: '#FDF4EF',
  },
  {
    title: 'Knowledge Base Your AI Learns From',
    desc: 'Create searchable documentation for customers and your AI simultaneously. Train the chatbot on your own product content.',
    img: '/products/helpnest-feature-client-v2.jpg',
    bgColor: '#F9EEF6',
  },
  {
    title: 'Widget Embeds in 2 Lines of Code',
    desc: 'Lightweight chat widget via CDN or npm. Copy, paste, done. Fully customisable — colours, position, triggers, and branding.',
    img: '/products/helpnest-feature-widget.jpg',
    bgColor: '#F6F4EF',
  },
  {
    title: 'Subscription Billing Already Wired',
    desc: 'Stripe and PayPal recurring billing, plan limits, invoices — ready to run your own SaaS chatbot business out of the box.',
    img: '/products/helpnest-feature-admin-v2.png',
    bgColor: '#EDF7F0',
  },
  {
    title: 'Multi-Tenant From Day One',
    desc: 'Each client gets their own isolated workspace with separate knowledge bases, agents, and billing. True SaaS architecture.',
    img: '/products/helpnest-feature-multitenant-v2.jpg',
    bgColor: '#FFF4E6',
  },
  {
    title: 'Unified Inbox for All Conversations',
    desc: 'Tickets, live chats, and email threads in one place. Assign to agents, add internal notes, and track SLA breaches.',
    img: '/products/helpnest-feature-inbox-v2.jpg',
    bgColor: '#EEF2FF',
  },
];

function FeatureCard({
  title,
  desc,
  img,
  large = false,
  bgColor,
}: {
  title: string;
  desc: string;
  img?: string;
  large?: boolean;
  bgColor?: string;
}) {
  const bg = bgColor ?? '#F5F6F8';

  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bg }}
    >
      <div
        className={`relative w-full overflow-hidden ${large ? 'h-[200px] sm:h-[260px] lg:h-[300px]' : 'h-[160px] sm:h-[190px] lg:h-[220px]'}`}
        style={{ padding: '16px 16px 0 16px' }}
      >
        {img ? (
          <>
            <Image
              src={img}
              alt={title}
              width={large ? 640 : 420}
              height={large ? 300 : 220}
              className="w-full h-full object-cover object-top rounded-t-xl"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[80px] pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-t-xl" style={{ background: bg }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke={COLOR} strokeWidth="1.5" />
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-4">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[24px] lg:text-[28px]' : 'text-[17px] sm:text-[20px] lg:text-[22px]'}`}>{title}</h3>
        <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6b7280] leading-6">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const topFeatures = FEATURES.slice(0, 2);
  const gridFeatures = FEATURES.slice(2);

  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Platform Features
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Everything You Need to Run an AI Support Business
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            From AI chatbot training to subscription billing — Helpnest ships every module your SaaS platform needs. No monthly fees, no hidden add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {topFeatures.map((f, i) => (
            <FeatureCard
              key={f.title}
              {...f}
              large
              bgColor={i === 0 ? '#EFF1FE' : '#D8F5F5'}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
