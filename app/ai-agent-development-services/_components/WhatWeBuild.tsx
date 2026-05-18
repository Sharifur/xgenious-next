import SectionBadge from '@/components/ui/SectionBadge';

function SupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4C8.477 4 4 8.477 4 14v4a3 3 0 003 3h1a1 1 0 001-1v-5a1 1 0 00-1-1H7v-1c0-3.866 3.134-7 7-7s7 3.134 7 7v1h-1a1 1 0 00-1 1v5a1 1 0 001 1h1a3 3 0 003-3v-4c0-5.523-4.477-10-10-10z" stroke="#484848" strokeWidth="1.5"/>
    </svg>
  );
}

function SalesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 20l6-6 4 4 8-10" stroke="#484848" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="6" r="2.5" stroke="#484848" strokeWidth="1.4"/>
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="#484848" strokeWidth="1.6"/>
      <path d="M8 10h12M8 14h8M8 18h5" stroke="#484848" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.5"/>
      <rect x="15" y="4" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.5"/>
      <rect x="4" y="15" width="9" height="9" rx="2" stroke="#484848" strokeWidth="1.5"/>
      <path d="M19.5 15v9M15 19.5h9" stroke="#484848" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="6" cy="14" r="2.5" stroke="#484848" strokeWidth="1.5"/>
      <circle cx="14" cy="6" r="2.5" stroke="#484848" strokeWidth="1.5"/>
      <circle cx="14" cy="22" r="2.5" stroke="#484848" strokeWidth="1.5"/>
      <circle cx="22" cy="14" r="2.5" stroke="#484848" strokeWidth="1.5"/>
      <path d="M8.5 14h3M14 8.5v3M14 16.5v3M16.5 14h3" stroke="#484848" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function VoiceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="10" y="3" width="8" height="14" rx="4" stroke="#484848" strokeWidth="1.6"/>
      <path d="M6 14a8 8 0 0016 0" stroke="#484848" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M14 22v3M11 25h6" stroke="#484848" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

const cards = [
  {
    icon: <SupportIcon />,
    title: 'Customer Support Agents',
    description: 'AI agents that handle tier-1 support, answer FAQs, escalate complex issues, and resolve tickets — across chat, email, and WhatsApp.',
    tags: ['24/7 availability', 'Multi-channel', 'Auto-escalation'],
  },
  {
    icon: <SalesIcon />,
    title: 'Sales & Lead Qualification',
    description: 'Agents that engage inbound leads, qualify them against your ICP, book discovery calls, and push qualified leads into your CRM automatically.',
    tags: ['Lead scoring', 'CRM sync', 'Calendar booking'],
  },
  {
    icon: <ContentIcon />,
    title: 'Content & Copywriting Agents',
    description: 'Generate SEO articles, product descriptions, social posts, and ad copy in your brand voice — at scale, with human review checkpoints.',
    tags: ['Brand voice', 'SEO-ready', 'Human-in-loop'],
  },
  {
    icon: <DataIcon />,
    title: 'Data Analysis Agents',
    description: 'Connect to your database or spreadsheets, run queries in plain English, surface insights, and deliver automated reports to your inbox.',
    tags: ['Natural language queries', 'Auto-reports', 'SQL generation'],
  },
  {
    icon: <WorkflowIcon />,
    title: 'Workflow Automation Agents',
    description: 'Multi-step agents that orchestrate complex business processes — approvals, notifications, data sync — across your entire tool stack.',
    tags: ['Multi-step logic', 'API integrations', 'Error recovery'],
  },
  {
    icon: <VoiceIcon />,
    title: 'Voice & Conversational AI',
    description: 'Phone and voice agents that handle inbound calls, triage requests, collect information, and hand off to human agents with full context.',
    tags: ['Inbound calls', 'Transcription', 'Human handoff'],
  },
];

type CardProps = (typeof cards)[number];

function Card({ icon, title, description, tags }: CardProps) {
  return (
    <div className="group flex flex-col gap-5 p-6 rounded-[12px] border border-[#e4e4e7] bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f5f0e8] group-hover:bg-[#ec7161] transition-colors duration-300 shrink-0 [&_svg_path]:transition-all [&_svg_path]:duration-300 [&_svg_circle]:transition-all [&_svg_circle]:duration-300 [&_svg_rect]:transition-all [&_svg_rect]:duration-300 group-hover:[&_svg_path]:stroke-white group-hover:[&_svg_circle]:stroke-white group-hover:[&_svg_rect]:stroke-white">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-[#181818] text-[18px] leading-[26px]">{title}</h3>
        <p className="font-normal text-[#484848] text-[14px] leading-[21px]">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
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
  );
}

export default function WhatWeBuild() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[64px]">

        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px]">
              AI Agents for Every{' '}<br />Business Function
            </h2>
          </div>
          <p className="font-normal text-[#484848] text-[16px] leading-6 max-w-[360px] pb-1">
            From customer-facing chatbots to back-office automation — purpose-built agents that integrate with your existing stack.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
