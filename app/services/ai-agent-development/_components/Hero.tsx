'use client';

import Button, { ArrowIcon } from '@/components/ui/Button';

// ── Agent dashboard mockup ────────────────────────────────────────────────────

function AgentDot({ color }: { color: string }) {
  return <span className="relative flex h-2 w-2"><span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color}`} /><span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} /></span>;
}

function LogLine({ time, type, text }: { time: string; type: string; text: string }) {
  const colors: Record<string, string> = {
    reasoning: 'text-[#4ade80]',
    memory: 'text-[#60a5fa]',
    tool: 'text-[#fbbf24]',
    action: 'text-[#c084fc]',
  };
  return (
    <div className="flex gap-3 text-[11px] leading-5 font-mono">
      <span className="text-[#4b5563] shrink-0">{time}</span>
      <span className={`font-semibold shrink-0 ${colors[type] ?? 'text-white'}`}>[{type}]</span>
      <span className="text-[#9ca3af] truncate">{text}</span>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="w-full max-w-[820px] mx-auto rounded-[14px] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]" style={{ background: '#0d1117' }}>

      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style={{ background: '#161b22' }}>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[#6b7280] text-[11px] font-mono">xgenious.cloud · live agent ops</span>
        <div className="flex items-center gap-2 text-[11px]">
          <AgentDot color="bg-[#ef4444]" />
          <span className="text-[#ef4444] font-medium">3 agents running</span>
          <span className="text-[#4b5563]">·</span>
          <span className="text-[#6b7280]">14 tools active</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[340px]">

        {/* Sidebar */}
        <div className="w-[180px] shrink-0 border-r border-white/[0.06] p-4 flex flex-col gap-5" style={{ background: '#0d1117' }}>
          <div className="flex flex-col gap-2">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-1">Active Agents</p>
            {[
              { abbr: 'SA', label: 'Sales Agent', active: true },
              { abbr: 'SP', label: 'Support Agent', active: false },
              { abbr: 'RS', label: 'Research Agent', active: false },
              { abbr: 'VE', label: 'Voice Agent', active: false },
            ].map((a) => (
              <div key={a.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-[6px] ${a.active ? 'bg-white/[0.06]' : ''}`}>
                <span className="text-[10px] font-bold text-[#ec7161] w-5">{a.abbr}</span>
                <span className="text-[11px] text-[#d1d5db]">{a.label}</span>
                {a.active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ef4444]" />}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-1">Connected Tools</p>
            {[
              { icon: 'P', label: 'Pinecone', color: 'text-[#60a5fa]' },
              { icon: 'S', label: 'Stripe API', color: 'text-[#4ade80]' },
              { icon: 'H', label: 'HubSpot CRM', color: 'text-[#fb923c]' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 px-2 py-1">
                <span className={`text-[10px] font-bold ${t.color}`}>{t.icon}</span>
                <span className="text-[11px] text-[#9ca3af]">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col p-5 gap-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white font-semibold text-[14px]">Sales Agent · qualifying lead #4127</p>
              <p className="text-[#6b7280] text-[11px] mt-0.5">Triggered by webhook · Calendly booking</p>
            </div>
            <span className="text-[#6b7280] text-[11px] font-mono">runtime · 1:84s</span>
          </div>

          {/* Log */}
          <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
            <LogLine time="14:02:18" type="reasoning" text="Identifying lead intent and budget signal..." />
            <LogLine time="14:02:19" type="memory" text="Retrieved 3 prior interactions from vector store" />
            <LogLine time="14:02:21" type="tool" text='hubspot.create_deal({stage: "qualified"})' />
            <LogLine time="14:02:23" type="tool" text='calendly.schedule({slot: "Thu 3pm"})' />
            <LogLine time="14:02:20" type="action" text="Drafted personalised follow-up email" />
          </div>

          {/* Tech chips */}
          <div className="flex gap-3">
            {[
              { label: 'GPT-4 Turbo', sub: 'primary llm', color: 'bg-[#1e3a5f]' },
              { label: 'LangGraph', sub: 'orchestration', color: 'bg-[#2d1f47]' },
              { label: 'Vector RAG', sub: '128k context', color: 'bg-[#1a2e1a]' },
            ].map((c) => (
              <div key={c.label} className={`flex flex-col px-3 py-2 rounded-[8px] ${c.color} flex-1`}>
                <span className="text-white text-[11px] font-semibold">{c.label}</span>
                <span className="text-[#6b7280] text-[10px]">{c.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats panel */}
        <div className="w-[170px] shrink-0 border-l border-white/[0.06] p-4 flex flex-col gap-4" style={{ background: '#0d1117' }}>
          <div className="flex flex-col gap-1 p-3 rounded-[8px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Conversations Today</p>
            <p className="text-white text-[20px] font-bold leading-none mt-1">12,847</p>
            <p className="text-[#4ade80] text-[10px] mt-0.5">↑ 23% vs yesterday</p>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-[8px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Resolution Rate</p>
            <p className="text-white text-[20px] font-bold leading-none mt-1">94.2%</p>
            <div className="flex gap-0.5 mt-2">
              {[4,5,3,6,5,7,6,5,7,8].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#ec7161]" style={{ height: h * 3 }} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-[8px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Tokens / Hr</p>
            <p className="text-white text-[20px] font-bold leading-none mt-1">2.4M</p>
            <p className="text-[#6b7280] text-[10px] mt-0.5">Avg cost: $0.0021</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-[80px]" style={{ background: '#070b14' }}>

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          [12,8],[25,18],[38,5],[55,12],[70,7],[85,15],[93,9],[8,35],[20,42],[45,28],[62,38],[78,22],[90,33],[15,55],[30,62],[50,48],[68,58],[82,45],[95,52],[5,72],[22,78],[40,68],[58,75],[76,65],[88,70],[10,88],[28,92],[48,82],[65,88],[80,80],[92,86],
        ].map(([x, y], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${x}%`, top: `${y}%`, width: i % 4 === 0 ? 2 : 1, height: i % 4 === 0 ? 2 : 1, opacity: 0.2 + (i % 5) * 0.1 }}
          />
        ))}
      </div>

      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[500px]">
        <div className="absolute inset-0 rounded-full blur-[80px] opacity-60" style={{ background: 'radial-gradient(ellipse at 40% 40%, #e85d8a 0%, #f97316 35%, #06b6d4 70%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="container-page flex flex-col items-center text-center gap-8 relative z-10">
        <h1 className="text-white font-bold text-[72px] leading-[82px] max-w-[780px]">
          Your AI-Powered Digital
          <br />
          <em className="font-semibold italic">Workforce</em>
        </h1>
        <p className="text-[#9ca3af] font-normal text-[18px] leading-[27px] max-w-[560px]">
          Xgenious designs and deploys automations AI agents, multi-agent systems, and workflow automation — production grade, enterprise secure, and trained on your business logic.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Start Your AI Project
          </Button>
          <Button href="#pricing" variant="outline" icon={<ArrowIcon />}>
            View Packages
          </Button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="container-page mt-14 relative z-10">
        <AgentDashboard />
      </div>

    </section>
  );
}

function AgentDashboard() {
  return <DashboardMockup />;
}
