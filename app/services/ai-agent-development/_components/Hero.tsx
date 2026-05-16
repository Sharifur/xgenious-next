'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';

// ── Types ──────────────────────────────────────────────────────────────────────

type LogEntry = { id: number; time: string; type: string; text: string; agentId: string };
type AgentId = 'sales' | 'support' | 'research' | 'voice';

// ── Log pool per agent ─────────────────────────────────────────────────────────

const LOG_POOL: Record<AgentId, Omit<LogEntry, 'id'>[]> = {
  sales: [
    { time: '14:02:18', type: 'reasoning', text: 'Identifying lead intent and budget signal...', agentId: 'sales' },
    { time: '14:02:19', type: 'memory',    text: 'Retrieved 3 prior interactions from vector store', agentId: 'sales' },
    { time: '14:02:21', type: 'tool',      text: 'hubspot.create_deal({stage: "qualified"})', agentId: 'sales' },
    { time: '14:02:23', type: 'tool',      text: 'calendly.schedule({slot: "Thu 3pm"})', agentId: 'sales' },
    { time: '14:02:25', type: 'action',    text: 'Drafted personalised follow-up email ✓', agentId: 'sales' },
    { time: '14:02:27', type: 'reasoning', text: 'Lead score: 87/100 — flagging as hot', agentId: 'sales' },
  ],
  support: [
    { time: '09:14:02', type: 'memory',    text: 'Loaded customer #8821 — 2 open tickets', agentId: 'support' },
    { time: '09:14:04', type: 'reasoning', text: 'Issue classified: billing dispute, severity medium', agentId: 'support' },
    { time: '09:14:06', type: 'tool',      text: 'stripe.fetch_invoice({id: "inv_9Kd2"})', agentId: 'support' },
    { time: '09:14:08', type: 'action',    text: 'Issued $14 refund — notified customer via email', agentId: 'support' },
    { time: '09:14:10', type: 'action',    text: 'Ticket #8821 closed — satisfaction ping queued', agentId: 'support' },
  ],
  research: [
    { time: '11:30:01', type: 'reasoning', text: 'Query: competitor pricing in MENA SaaS market', agentId: 'research' },
    { time: '11:30:03', type: 'tool',      text: 'web.search("SaaS pricing benchmark MENA 2025")', agentId: 'research' },
    { time: '11:30:07', type: 'memory',    text: 'Cross-referenced 12 sources in vector store', agentId: 'research' },
    { time: '11:30:09', type: 'action',    text: 'Report drafted — 4 charts generated', agentId: 'research' },
  ],
  voice: [
    { time: '16:05:11', type: 'reasoning', text: 'Inbound call: intent = booking, language = EN', agentId: 'voice' },
    { time: '16:05:13', type: 'tool',      text: 'calendly.check_availability({date: "today"})', agentId: 'voice' },
    { time: '16:05:15', type: 'action',    text: 'Slot confirmed · SMS confirmation sent', agentId: 'voice' },
    { time: '16:05:16', type: 'reasoning', text: 'Call complete — duration 42s, CSAT queued', agentId: 'voice' },
  ],
};

const AGENT_META: Record<AgentId, { abbr: string; label: string; task: string; trigger: string }> = {
  sales:    { abbr: 'SA', label: 'Sales Agent',    task: 'qualifying lead #4127',   trigger: 'webhook · Calendly booking' },
  support:  { abbr: 'SP', label: 'Support Agent',  task: 'resolving ticket #8821',  trigger: 'email · billing dispute' },
  research: { abbr: 'RS', label: 'Research Agent', task: 'market research report',  trigger: 'schedule · daily 11:30' },
  voice:    { abbr: 'VE', label: 'Voice Agent',    task: 'handling inbound call',   trigger: 'inbound call · +1 669 …' },
};

const AGENT_IDS: AgentId[] = ['sales', 'support', 'research', 'voice'];

// ── Type colors ────────────────────────────────────────────────────────────────

const TYPE_COLOR: Record<string, string> = {
  reasoning: 'text-[#4ade80]',
  memory:    'text-[#60a5fa]',
  tool:      'text-[#fbbf24]',
  action:    'text-[#c084fc]',
};

// ── Subcomponents ──────────────────────────────────────────────────────────────

function PulseDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {active && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75" />}
      <span className={`relative inline-flex rounded-full h-2 w-2 ${active ? 'bg-[#ef4444]' : 'bg-[#374151]'}`} />
    </span>
  );
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const step = Math.ceil(target / 40);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [target]);
  return <>{val.toLocaleString()}{suffix}</>;
}

// ── Main workspace ─────────────────────────────────────────────────────────────

export function AgentWorkspace() {
  const AGENTS = AGENT_IDS;
  const [activeAgent, setActiveAgent] = useState<AgentId>('sales');
  const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([]);
  const [runtime, setRuntime] = useState(0);
  const idRef = useRef(0);
  const logPoolIdx = useRef(0);

  // Stream log lines
  useEffect(() => {
    setVisibleLogs([]);
    logPoolIdx.current = 0;
    setRuntime(0);

    const pool = LOG_POOL[activeAgent];
    const addLine = () => {
      const entry = pool[logPoolIdx.current % pool.length];
      setVisibleLogs((prev) => [...prev.slice(-6), { ...entry, id: ++idRef.current }]);
      logPoolIdx.current++;
    };

    addLine();
    const t = setInterval(addLine, 1800);
    const rt = setInterval(() => setRuntime((r) => r + 1), 1000);
    return () => { clearInterval(t); clearInterval(rt); };
  }, [activeAgent]);

  const meta = AGENT_META[activeAgent];
  const mins = String(Math.floor(runtime / 60)).padStart(1, '0');
  const secs = String(runtime % 60).padStart(2, '0');

  return (
    <div
      className="w-full rounded-[16px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
      style={{ background: '#0d1117' }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]" style={{ background: '#161b22' }}>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="text-[#6b7280] text-[11px] font-mono ml-3">xgenious.cloud · live agent ops</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <PulseDot active />
          <span className="text-[#ef4444] font-medium">4 agents running</span>
          <span className="text-[#4b5563]">·</span>
          <span className="text-[#6b7280]">18 tools active</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex" style={{ minHeight: 380 }}>

        {/* Sidebar */}
        <div className="w-[220px] shrink-0 border-r border-white/[0.06] p-4 flex flex-col gap-5" style={{ background: '#0d1117' }}>
          <div className="flex flex-col gap-1">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Active Agents</p>
            {AGENTS.map((id) => {
              const m = AGENT_META[id];
              const isActive = id === activeAgent;
              return (
                <button
                  key={id}
                  onClick={() => setActiveAgent(id)}
                  className={`flex items-center gap-2 px-2 py-2 rounded-[6px] w-full text-left transition-colors ${isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'}`}
                >
                  <span className="text-[10px] font-bold text-[#ec7161] w-5 shrink-0">{m.abbr}</span>
                  <span className={`text-[11px] flex-1 ${isActive ? 'text-white' : 'text-[#9ca3af]'}`}>{m.label}</span>
                  <PulseDot active={isActive} />
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Connected Tools</p>
            {[
              { icon: 'P', label: 'Pinecone',    color: 'text-[#60a5fa]' },
              { icon: 'S', label: 'Stripe API',  color: 'text-[#4ade80]' },
              { icon: 'H', label: 'HubSpot CRM', color: 'text-[#fb923c]' },
              { icon: 'C', label: 'Calendly',    color: 'text-[#c084fc]' },
              { icon: 'G', label: 'Gmail API',   color: 'text-[#f87171]' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 px-2 py-1.5">
                <span className={`text-[10px] font-bold ${t.color} w-3`}>{t.icon}</span>
                <span className="text-[11px] text-[#6b7280]">{t.label}</span>
                <span className="ml-auto w-1 h-1 rounded-full bg-[#4ade80]" />
              </div>
            ))}
          </div>
        </div>

        {/* Log panel */}
        <div className="flex-1 flex flex-col p-5 gap-4 border-r border-white/[0.06]">
          {/* Task header */}
          <div className="flex items-start justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-semibold text-[14px]">{meta.label} · {meta.task}</p>
                <p className="text-[#6b7280] text-[11px] mt-0.5">Triggered by {meta.trigger}</p>
              </motion.div>
            </AnimatePresence>
            <span className="text-[#6b7280] text-[11px] font-mono shrink-0 ml-4">
              runtime · {mins}:{secs}
            </span>
          </div>

          {/* Streaming log */}
          <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleLogs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-3 text-[11px] leading-5 font-mono"
                >
                  <span className="text-[#374151] shrink-0">{log.time}</span>
                  <span className={`font-semibold shrink-0 ${TYPE_COLOR[log.type] ?? 'text-white'}`}>[{log.type}]</span>
                  <span className="text-[#9ca3af] truncate">{log.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {/* Blinking cursor */}
            <div className="flex gap-1 items-center mt-1">
              <span className="text-[#374151] text-[11px] font-mono">›</span>
              <motion.span
                className="inline-block w-1.5 h-3.5 bg-[#ec7161] rounded-sm"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Tech chips */}
          <div className="flex gap-3">
            {[
              { label: 'GPT-4o',     sub: 'primary llm',    bg: '#1e3a5f' },
              { label: 'LangGraph',  sub: 'orchestration',  bg: '#2d1f47' },
              { label: 'Vector RAG', sub: '128k context',   bg: '#1a2e1a' },
              { label: 'Tool Use',   sub: 'function calls', bg: '#3b1f1a' },
            ].map((c) => (
              <div key={c.label} className="flex flex-col px-3 py-2 rounded-[8px] flex-1" style={{ background: c.bg }}>
                <span className="text-white text-[11px] font-semibold">{c.label}</span>
                <span className="text-[#6b7280] text-[10px]">{c.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats panel */}
        <div className="w-[220px] shrink-0 p-4 flex flex-col gap-3" style={{ background: '#0d1117' }}>
          {/* Conversations */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Conversations Today</p>
            <p className="text-white text-[22px] font-bold leading-none mt-1">
              <AnimatedCounter target={12847} />
            </p>
            <p className="text-[#4ade80] text-[10px] mt-0.5">↑ 23% vs yesterday</p>
          </div>

          {/* Resolution bar chart */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Resolution Rate</p>
            <p className="text-white text-[22px] font-bold leading-none mt-1">94.2%</p>
            <div className="flex items-end gap-0.5 mt-2 h-8">
              {[4,5,3,7,5,8,6,5,7,9].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm bg-[#ec7161]"
                  initial={{ height: 0 }}
                  animate={{ height: h * 3.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                />
              ))}
            </div>
          </div>

          {/* Tokens */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Tokens / Hr</p>
            <p className="text-white text-[22px] font-bold leading-none mt-1">
              <AnimatedCounter target={2400000} />
            </p>
            <p className="text-[#6b7280] text-[10px] mt-0.5">Avg cost: $0.0021</p>
          </div>

          {/* Avg response time */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px]" style={{ background: '#161b22' }}>
            <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">Avg Response</p>
            <p className="text-white text-[22px] font-bold leading-none mt-1">1.4s</p>
            <p className="text-[#60a5fa] text-[10px] mt-0.5">p95 · 3.2s</p>
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
      <div className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px]">
        <div className="absolute inset-0 rounded-full blur-[90px] opacity-50" style={{ background: 'radial-gradient(ellipse at 40% 40%, #e85d8a 0%, #f97316 35%, #06b6d4 70%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="container-page flex flex-col items-center text-center gap-8 relative z-10">
        <h1 className="text-white font-bold text-[72px] leading-[82px] max-w-[850px]">
          Your AI-Powered Digital
          <br />
          <em className="font-semibold italic">Workforce</em>
        </h1>
        <p className="text-[#9ca3af] font-normal text-[18px] leading-[27px] max-w-[560px]">
          Xgenious designs and deploys AI agents, multi-agent systems, and workflow automation — production grade, enterprise secure, and trained on your business logic.
        </p>
        <div className="flex items-center gap-[17px] flex-wrap justify-center">
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Start Your AI Project
          </Button>
          <Button href="#pricing" variant="outline" icon={<ArrowIcon />} className="!border-white/40 !text-white hover:!border-[#ec7161]">
            View Packages
          </Button>
        </div>
      </div>

      {/* Agent workspace */}
      <div className="container-page mt-14 relative z-10">
        <AgentWorkspace />
      </div>

    </section>
  );
}
