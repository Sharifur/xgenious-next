import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'AI That Understands — Not Just Matches',
    desc: 'HelpNest uses semantic vector similarity search powered by OpenAI and Anthropic Claude. The chatbot understands intent and context, not just keywords — resolving queries your FAQ never could.',
    img: '/products/helpnest-feature-ai.jpg',
    large: true,
  },
  {
    title: 'See Every Visitor in Real Time',
    desc: 'Live visitor maps show browsing history, current page, country, and address. Reach out proactively before they leave.',
    img: '/products/helpnest-feature-visitor.jpg',
    large: true,
  },
  {
    title: 'Full Ticketing System Built In',
    desc: 'Ticket routing, priority management, SLA tracking, and team collaboration — everything a real help desk needs.',
    img: '/products/helpnest-feature-tickets.jpg',
  },
  {
    title: 'Knowledge Base Your AI Learns From',
    desc: 'Create searchable documentation for customers and your AI simultaneously. Train the chatbot on your own product content.',
    img: '/products/helpnest-feature-kb.jpg',
  },
  {
    title: 'Widget Embeds in 2 Lines of Code',
    desc: 'Lightweight chat widget via CDN or npm. Copy, paste, done. Fully customisable — colours, position, triggers, and branding.',
    img: '/products/helpnest-feature-widget.jpg',
  },
  {
    title: 'Subscription Billing Already Wired',
    desc: 'Stripe and PayPal recurring billing, plan limits, invoices — ready to run your own SaaS chatbot business out of the box.',
    img: '/products/helpnest-feature-billing.jpg',
  },
  {
    title: 'Multi-Tenant From Day One',
    desc: 'Each client gets their own isolated workspace with separate knowledge bases, agents, and billing. True SaaS architecture.',
    img: '/products/helpnest-feature-multitenant.jpg',
  },
  {
    title: 'Unified Inbox for All Conversations',
    desc: 'Tickets, live chats, and email threads in one place. Assign to agents, add internal notes, and track SLA breaches.',
    img: '/products/helpnest-feature-inbox.jpg',
  },
];

function FeatureCard({ title, desc, img, large }: { title: string; desc: string; img: string; large?: boolean }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col ${large ? 'md:col-span-2' : ''}`}
      style={{ background: '#F5F6F8' }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: large ? '16/7' : '4/3' }}>
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover object-top"
          sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        />
      </div>
      <div className="px-[30px] pb-[30px] pt-5">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[28px]' : 'text-[24px]'}`}>{title}</h3>
        <p className="text-[16px] text-[#6b7280] leading-6">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const large = FEATURES.filter((f) => f.large);
  const grid = FEATURES.filter((f) => !f.large);

  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

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
            From AI chatbot training to subscription billing — HelpNest ships every module your SaaS platform needs. No monthly fees, no hidden add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {large.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {grid.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
