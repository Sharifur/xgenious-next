// ── Workflow diagram visual (card 2) ─────────────────────────────────────────

function WorkflowDiagram() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-5 px-8 py-6">
      {/* Top row — 3 input nodes */}
      <div className="flex items-center justify-between w-full gap-3">
        {['Visitor Message', 'Site & Agent Keys', 'Knowledge Base'].map((label) => (
          <div
            key={label}
            className="flex-1 flex items-center justify-center h-9 rounded-[6px] border border-white/10 text-[11px] text-[#9ca3af] font-medium"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Connecting lines */}
      <svg viewBox="0 0 400 40" className="w-full h-8" preserveAspectRatio="none">
        <line x1="66" y1="0" x2="200" y2="40" stroke="rgba(236,113,97,0.4)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="40" stroke="rgba(236,113,97,0.4)" strokeWidth="1" />
        <line x1="334" y1="0" x2="200" y2="40" stroke="rgba(236,113,97,0.4)" strokeWidth="1" />
        <circle cx="66" cy="0" r="3" fill="#ec7161" />
        <circle cx="200" cy="0" r="3" fill="#ec7161" />
        <circle cx="334" cy="0" r="3" fill="#ec7161" />
      </svg>

      {/* Central orchestration node */}
      <div
        className="flex flex-col items-center justify-center w-[220px] h-[60px] rounded-full text-center"
        style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #0f1320 100%)', border: '1px solid rgba(236,113,97,0.3)', boxShadow: '0 0 24px rgba(236,113,97,0.15)' }}
      >
        <span className="text-white text-[12px] font-semibold">Multi-Layer Orchestration</span>
        <span className="text-[#6b7280] text-[9px] mt-0.5">reason · plan · act · loop · log</span>
      </div>

      {/* Bottom connecting line */}
      <svg viewBox="0 0 400 24" className="w-full h-5" preserveAspectRatio="none">
        <line x1="200" y1="0" x2="200" y2="24" stroke="rgba(236,113,97,0.4)" strokeWidth="1" />
        <circle cx="200" cy="24" r="3" fill="#ec7161" />
      </svg>

      {/* Output node */}
      <div
        className="flex items-center justify-center h-9 px-6 rounded-[6px] border border-[#ec7161]/30 text-[11px] text-[#ec7161] font-medium"
        style={{ background: 'rgba(236,113,97,0.08)' }}
      >
        Automated Action Output
      </div>
    </div>
  );
}

// ── Agent robot visual (card 1) ───────────────────────────────────────────────

function AgentVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #061424 100%)' }}>
      {/* Glow rings */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-[#22d3ee]/10" />
      <div className="absolute w-[150px] h-[150px] rounded-full border border-[#22d3ee]/15" />
      <div className="absolute w-[100px] h-[100px] rounded-full border border-[#22d3ee]/20" />
      {/* Robot icon */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="12" y="18" width="32" height="26" rx="6" fill="#0e7490" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="20" y="24" width="6" height="6" rx="2" fill="#22d3ee"/>
          <rect x="30" y="24" width="6" height="6" rx="2" fill="#22d3ee"/>
          <rect x="20" y="34" width="16" height="3" rx="1.5" fill="#164e63"/>
          <rect x="23" y="34" width="10" height="3" rx="1.5" fill="#22d3ee" opacity="0.6"/>
          <rect x="25" y="10" width="6" height="8" rx="2" fill="#0e7490" stroke="#22d3ee" strokeWidth="1"/>
          <circle cx="28" cy="9" r="2.5" fill="#22d3ee"/>
          <rect x="6" y="24" width="4" height="14" rx="2" fill="#0e7490" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="46" y="24" width="4" height="14" rx="2" fill="#0e7490" stroke="#22d3ee" strokeWidth="1"/>
        </svg>
        <div className="flex gap-1.5">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-1.5 rounded-sm bg-[#22d3ee]" style={{ height: 6 + i * 3, opacity: 0.4 + i * 0.12 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Customer support visual (card 3) ─────────────────────────────────────────

function SupportVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1a2e 100%)' }}>
      {/* Simulated dashboard */}
      <div className="absolute inset-4 rounded-[8px] overflow-hidden" style={{ background: '#111827' }}>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            {['#3b82f6','#10b981','#f59e0b','#ef4444'].map((c, i) => (
              <div key={i} className="flex-1 h-10 rounded-[4px]" style={{ background: c + '22', border: `1px solid ${c}44` }}>
                <div className="h-1.5 rounded-full mx-2 mt-2" style={{ background: c, width: `${40 + i * 15}%` }} />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-[#ec7161]" style={{ height: h * 0.5, opacity: 0.3 + i * 0.08 }} />
            ))}
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {[80, 60, 90].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Chatbot visual (card 4) ───────────────────────────────────────────────────

function ChatbotVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0a1628 50%, #071020 100%)' }}>
      <div className="absolute w-[240px] h-[240px] rounded-full blur-[60px] opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Chat bubbles */}
        <div className="flex gap-2 items-end">
          <div className="px-3 py-2 rounded-[10px] rounded-bl-none text-[10px] text-white" style={{ background: 'rgba(59,130,246,0.3)', border: '1px solid rgba(59,130,246,0.4)' }}>
            How can I help you?
          </div>
        </div>
        {/* Robot face */}
        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1d4ed8, #1e40af)', border: '1px solid rgba(96,165,250,0.4)' }}>
          <div className="flex gap-2 mb-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]" />
          </div>
          <div className="w-5 h-1 rounded-full bg-[#93c5fd]" />
        </div>
        <div className="flex gap-2 items-end">
          <div className="px-3 py-2 rounded-[10px] rounded-br-none text-[10px] text-white" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            I need support with my order
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Custom AI Agent Development',
    desc: 'Domain-specific agents trained on your data, business rules, and tone — purpose-built from architecture to deployment.',
    visual: <AgentVisual />,
    tall: true,
  },
  {
    title: 'AI Workflow Automation',
    desc: 'Replace fragile if-this-then-that automation with agents that handle exceptions, edge cases, and judgement calls.',
    visual: <WorkflowDiagram />,
    tall: true,
  },
  {
    title: 'AI Customer Support',
    desc: 'Conversational agents with memory, context-awareness, and tool access — across web, WhatsApp, Slack, and voice.',
    visual: <SupportVisual />,
    tall: false,
  },
  {
    title: 'AI Chatbot Systems',
    desc: 'Conversational agents with memory, context-awareness, and tool access — across web, WhatsApp, Slack, and voice.',
    visual: <ChatbotVisual />,
    tall: false,
  },
];

function Card({ title, desc, visual, tall }: (typeof services)[number]) {
  return (
    <div
      className="flex flex-col rounded-[12px] overflow-hidden"
      style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-semibold text-white text-[18px] leading-[26px]">{title}</h3>
        <p className="font-normal text-[#9ca3af] text-[14px] leading-[21px]">{desc}</p>
      </div>
      <div className={`w-full ${tall ? 'h-[220px]' : 'h-[200px]'}`}>
        {visual}
      </div>
    </div>
  );
}

export default function AIServices() {
  return (
    <section className="py-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page flex flex-col gap-[64px]">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Services</span>
          </div>
          <h2 className="font-bold text-white text-[44px] leading-[54px] max-w-[680px]">
            Build Intelligent AI Agents for Modern Business Operations.
          </h2>
          <p className="font-normal text-[#9ca3af] text-[16px] leading-6 max-w-[560px]">
            Custom built, production ready AI agents engineered for real workflow. Not chatbots — autonomous systems that use tools, reason over data and complete entire jobs.
          </p>
        </div>

        {/* Row 1 — asymmetric */}
        <div className="grid grid-cols-[2fr_3fr] gap-5">
          <Card {...services[0]} />
          <Card {...services[1]} />
        </div>

        {/* Row 2 — equal */}
        <div className="grid grid-cols-2 gap-5 -mt-[44px]">
          <Card {...services[2]} />
          <Card {...services[3]} />
        </div>

      </div>
    </section>
  );
}
