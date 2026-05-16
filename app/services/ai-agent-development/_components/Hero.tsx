'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';

// ── Types ──────────────────────────────────────────────────────────────────────

type LogEntry = { id: number; time: string; type: string; text: string };
type AgentId = 'sales' | 'support' | 'research' | 'voice';

// ── Agent meta ─────────────────────────────────────────────────────────────────

const AGENT_COLOR: Record<AgentId, string> = {
  sales:    '#ec7161',
  support:  '#60a5fa',
  research: '#4ade80',
  voice:    '#c084fc',
};

const AGENT_LABEL: Record<AgentId, string> = {
  sales:    'Sales',
  support:  'Support',
  research: 'Research',
  voice:    'Voice',
};

// ── Log pool per agent ─────────────────────────────────────────────────────────

const LOG_POOL: Record<AgentId, Omit<LogEntry, 'id'>[]> = {
  sales: [
    { time: '14:02:18', type: 'reasoning', text: 'Identifying lead intent and budget signal...' },
    { time: '14:02:19', type: 'memory',    text: 'Retrieved 3 prior interactions from vector store' },
    { time: '14:02:21', type: 'tool',      text: 'hubspot.create_deal({stage: "qualified"})' },
    { time: '14:02:23', type: 'tool',      text: 'calendly.schedule({slot: "Thu 3pm"})' },
    { time: '14:02:25', type: 'action',    text: 'Drafted personalised follow-up email ✓' },
    { time: '14:02:27', type: 'reasoning', text: 'Lead score: 87/100 — flagging as hot' },
  ],
  support: [
    { time: '09:14:02', type: 'memory',    text: 'Loaded customer #8821 — 2 open tickets' },
    { time: '09:14:04', type: 'reasoning', text: 'Issue classified: billing dispute, severity medium' },
    { time: '09:14:06', type: 'tool',      text: 'stripe.fetch_invoice({id: "inv_9Kd2"})' },
    { time: '09:14:08', type: 'tool',      text: 'gmail.send({to: "customer@co.com", template: "refund"})' },
    { time: '09:14:10', type: 'action',    text: 'Issued $14 refund — ticket #8821 closed' },
  ],
  research: [
    { time: '11:30:01', type: 'reasoning', text: 'Query: competitor pricing in MENA SaaS market' },
    { time: '11:30:03', type: 'tool',      text: 'pinecone.query({top_k: 20, namespace: "market"})' },
    { time: '11:30:07', type: 'memory',    text: 'Cross-referenced 12 sources from vector store' },
    { time: '11:30:09', type: 'action',    text: 'Report drafted — 4 charts generated' },
  ],
  voice: [
    { time: '16:05:11', type: 'reasoning', text: 'Inbound call: intent = booking, language = EN' },
    { time: '16:05:13', type: 'tool',      text: 'calendly.check_availability({date: "today"})' },
    { time: '16:05:15', type: 'action',    text: 'Slot confirmed · SMS confirmation sent' },
    { time: '16:05:16', type: 'reasoning', text: 'Call complete — duration 42s, CSAT queued' },
  ],
};

// ── Task queue ─────────────────────────────────────────────────────────────────

const TASK_LIST: { id: string; agentId: AgentId; label: string; trigger: string }[] = [
  { id: 't1', agentId: 'sales',    label: 'Qualifying lead #4127',   trigger: 'webhook · Calendly' },
  { id: 't2', agentId: 'support',  label: 'Resolving ticket #8821',  trigger: 'email · billing' },
  { id: 't3', agentId: 'sales',    label: 'Following up deal #2891', trigger: 'schedule · 14:00' },
  { id: 't4', agentId: 'research', label: 'MENA SaaS market report', trigger: 'schedule · 11:30' },
  { id: 't5', agentId: 'support',  label: 'Processing refund #1192', trigger: 'email · payment' },
  { id: 't6', agentId: 'voice',    label: 'Handling inbound call',   trigger: 'inbound · +1 669…' },
  { id: 't7', agentId: 'sales',    label: 'Enriching contact #5501', trigger: 'webhook · HubSpot' },
  { id: 't8', agentId: 'research', label: 'Competitor pricing audit', trigger: 'manual trigger' },
  { id: 't9', agentId: 'support',  label: 'Answering FAQ query',      trigger: 'live chat' },
];

// ── Right sidebar stats per agent ──────────────────────────────────────────────

type AgentStats = {
  s1: { label: string; value: number; note: string; noteColor: string };
  s2: { label: string; value: string; bars: number[] };
  s3: { label: string; value: number; sub: string };
  s4: { label: string; value: string; sub: string; subColor: string };
};

const AGENT_STATS: Record<AgentId, AgentStats> = {
  sales: {
    s1: { label: 'Leads Qualified',   value: 12847,   note: '↑ 23% vs yesterday',  noteColor: '#4ade80' },
    s2: { label: 'Conversion Rate',   value: '34.7%', bars: [4,5,3,7,5,8,6,5,7,9] },
    s3: { label: 'Tokens / Hr',       value: 2400000, sub: 'Avg cost: $0.0021' },
    s4: { label: 'Avg Response',      value: '1.2s',  sub: 'p95 · 2.8s',           subColor: '#60a5fa' },
  },
  support: {
    s1: { label: 'Tickets Resolved',  value: 2341,    note: '↑ 18% vs yesterday',  noteColor: '#4ade80' },
    s2: { label: 'CSAT Score',        value: '96.1%', bars: [7,6,8,9,7,9,8,9,8,10] },
    s3: { label: 'Tokens / Hr',       value: 1800000, sub: 'Avg cost: $0.0018' },
    s4: { label: 'Avg Response',      value: '1.8s',  sub: 'p95 · 3.6s',           subColor: '#60a5fa' },
  },
  research: {
    s1: { label: 'Reports Generated', value: 142,     note: '↑ 12 this week',       noteColor: '#4ade80' },
    s2: { label: 'Sources Indexed',   value: '12.4k', bars: [3,4,6,5,7,4,8,6,5,9] },
    s3: { label: 'Tokens / Hr',       value: 3200000, sub: 'Avg cost: $0.0031' },
    s4: { label: 'Avg Response',      value: '3.4s',  sub: 'p95 · 6.1s',           subColor: '#60a5fa' },
  },
  voice: {
    s1: { label: 'Calls Handled',     value: 384,     note: '↑ 8% vs yesterday',   noteColor: '#4ade80' },
    s2: { label: 'Booking Rate',      value: '71.2%', bars: [5,7,4,6,8,5,7,9,6,8] },
    s3: { label: 'Tokens / Hr',       value: 960000,  sub: 'Avg cost: $0.0009' },
    s4: { label: 'Avg Response',      value: '0.9s',  sub: 'p95 · 1.8s',           subColor: '#60a5fa' },
  },
};

// ── Connected tools + keyword detection ────────────────────────────────────────

const CONNECTED_TOOLS = [
  { icon: 'P', label: 'Pinecone',    color: '#60a5fa' },
  { icon: 'S', label: 'Stripe API',  color: '#4ade80' },
  { icon: 'H', label: 'HubSpot CRM', color: '#fb923c' },
  { icon: 'C', label: 'Calendly',    color: '#c084fc' },
  { icon: 'G', label: 'Gmail API',   color: '#f87171' },
];

const TOOL_KEYWORDS: [string, string][] = [
  ['pinecone',  'Pinecone'],
  ['stripe',    'Stripe API'],
  ['hubspot',   'HubSpot CRM'],
  ['calendly',  'Calendly'],
  ['gmail',     'Gmail API'],
];

function detectTool(text: string): string | null {
  const lower = text.toLowerCase();
  for (const [kw, label] of TOOL_KEYWORDS) {
    if (lower.includes(kw)) return label;
  }
  return null;
}

// ── Type colors ────────────────────────────────────────────────────────────────

const TYPE_COLOR: Record<string, string> = {
  reasoning: 'text-[#4ade80]',
  memory:    'text-[#60a5fa]',
  tool:      'text-[#fbbf24]',
  action:    'text-[#c084fc]',
};

// ── Subcomponents ──────────────────────────────────────────────────────────────

function PulseDot({ active, color }: { active: boolean; color?: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {active && (
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: color ?? '#ef4444' }}
        />
      )}
      <span
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ background: active ? (color ?? '#ef4444') : '#374151' }}
      />
    </span>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    const step = Math.ceil(target / 50);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [target]);
  return <>{val.toLocaleString()}</>;
}

// ── Main workspace ─────────────────────────────────────────────────────────────

export function AgentWorkspace() {
  const [taskIdx, setTaskIdx] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([]);
  const [runtime, setRuntime] = useState(0);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const idRef = useRef(0);
  const logPoolIdx = useRef(0);

  const currentTask = TASK_LIST[taskIdx];
  const activeAgent = currentTask.agentId;
  const stats = AGENT_STATS[activeAgent];
  const agentColor = AGENT_COLOR[activeAgent];

  // Auto-advance tasks every 6 seconds
  useEffect(() => {
    const t = setInterval(() => setTaskIdx((i) => (i + 1) % TASK_LIST.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Restart log stream on task change
  useEffect(() => {
    setVisibleLogs([]);
    setActiveTool(null);
    logPoolIdx.current = 0;
    setRuntime(0);

    const pool = LOG_POOL[TASK_LIST[taskIdx].agentId];
    const addLine = () => {
      const entry = pool[logPoolIdx.current % pool.length];
      setVisibleLogs((prev) => [...prev.slice(-6), { ...entry, id: ++idRef.current }]);
      if (entry.type === 'tool') setActiveTool(detectTool(entry.text));
      logPoolIdx.current++;
    };

    addLine();
    const t = setInterval(addLine, 1800);
    const rt = setInterval(() => setRuntime((r) => r + 1), 1000);
    return () => { clearInterval(t); clearInterval(rt); };
  }, [taskIdx]); // eslint-disable-line react-hooks/exhaustive-deps

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
          <PulseDot active color="#ef4444" />
          <span className="text-[#ef4444] font-medium">4 agents running</span>
          <span className="text-[#4b5563]">·</span>
          <span className="text-[#6b7280]">18 tools active</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex" style={{ minHeight: 400 }}>

        {/* Left sidebar — task queue + connected tools */}
        <div className="w-[220px] shrink-0 border-r border-white/[0.06] p-4 flex flex-col gap-5" style={{ background: '#0d1117' }}>

          <div className="flex flex-col gap-0.5">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Task Queue</p>
            {TASK_LIST.map((task, idx) => {
              const isActive = idx === taskIdx;
              const color = AGENT_COLOR[task.agentId];
              return (
                <button
                  key={task.id}
                  onClick={() => setTaskIdx(idx)}
                  className={`flex items-start gap-2 px-2 py-2 rounded-[6px] w-full text-left transition-colors ${isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'}`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[4px] shrink-0 transition-all"
                    style={{ background: color, opacity: isActive ? 1 : 0.3, boxShadow: isActive ? `0 0 6px ${color}` : 'none' }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] leading-[16px] truncate transition-colors" style={{ color: isActive ? '#ffffff' : '#6b7280' }}>
                      {task.label}
                    </p>
                    {isActive && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[9px] text-[#4b5563] truncate mt-0.5">
                        {AGENT_LABEL[task.agentId]} · {task.trigger}
                      </motion.p>
                    )}
                  </div>
                  {isActive && <PulseDot active color={color} />}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-[#4b5563] text-[9px] font-semibold tracking-widest uppercase mb-2">Connected Tools</p>
            {CONNECTED_TOOLS.map((tool) => {
              const isLit = activeTool === tool.label;
              return (
                <div
                  key={tool.label}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-[4px] transition-all duration-300"
                  style={{ background: isLit ? `${tool.color}14` : 'transparent' }}
                >
                  <span className="text-[10px] font-bold w-3 transition-colors duration-300" style={{ color: isLit ? tool.color : '#4b5563' }}>
                    {tool.icon}
                  </span>
                  <span className="text-[11px] flex-1 transition-colors duration-300" style={{ color: isLit ? tool.color : '#6b7280' }}>
                    {tool.label}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{ background: isLit ? tool.color : '#374151', boxShadow: isLit ? `0 0 4px ${tool.color}` : 'none' }}
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* Log panel */}
        <div className="flex-1 flex flex-col p-5 gap-4 border-r border-white/[0.06]">
          <div className="flex items-start justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={taskIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-semibold text-[14px]">
                  <span style={{ color: agentColor }}>{AGENT_LABEL[activeAgent]} Agent</span>
                  {' · '}{currentTask.label}
                </p>
                <p className="text-[#6b7280] text-[11px] mt-0.5">Triggered by {currentTask.trigger}</p>
              </motion.div>
            </AnimatePresence>
            <span className="text-[#6b7280] text-[11px] font-mono shrink-0 ml-4">runtime · {mins}:{secs}</span>
          </div>

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
            <div className="flex gap-1 items-center mt-1">
              <span className="text-[#374151] text-[11px] font-mono">›</span>
              <motion.span
                className="inline-block w-1.5 h-3.5 rounded-sm"
                style={{ background: agentColor }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>

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

        {/* Right sidebar — live stats */}
        <div className="w-[220px] shrink-0 p-4 flex flex-col gap-3" style={{ background: '#0d1117' }}>

          {/* Stat 1 — primary count */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s1-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s1.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">
                  <AnimatedCounter key={`c1-${activeAgent}`} target={stats.s1.value} />
                </p>
                <p className="text-[10px] mt-0.5" style={{ color: stats.s1.noteColor }}>{stats.s1.note}</p>
              </motion.div>
            </AnimatePresence>
            {/* accent line */}
            <motion.div
              key={`accent1-${activeAgent}`}
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ background: agentColor }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          {/* Stat 2 — rate + bar chart */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s2-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s2.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">{stats.s2.value}</p>
                <div className="flex items-end gap-0.5 mt-2 h-8">
                  {stats.s2.bars.map((h, i) => (
                    <motion.div
                      key={`${activeAgent}-bar-${i}`}
                      className="flex-1 rounded-sm"
                      style={{ background: agentColor }}
                      initial={{ height: 0 }}
                      animate={{ height: h * 3.2 }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stat 3 — tokens */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s3-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s3.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">
                  <AnimatedCounter key={`c3-${activeAgent}`} target={stats.s3.value} />
                </p>
                <p className="text-[#6b7280] text-[10px] mt-0.5">{stats.s3.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stat 4 — response time */}
          <div className="flex flex-col gap-1 p-3 rounded-[10px] overflow-hidden relative" style={{ background: '#161b22' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`s4-${activeAgent}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[#6b7280] text-[9px] uppercase tracking-widest">{stats.s4.label}</p>
                <p className="text-white text-[22px] font-bold leading-none mt-1">{stats.s4.value}</p>
                <p className="text-[10px] mt-0.5" style={{ color: stats.s4.subColor }}>{stats.s4.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-0" style={{ background: '#070b14' }}>

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
          <Button href="#pricing" variant="outline" icon={<ArrowIcon />} className="!bg-transparent !border-white/40 !text-white hover:!border-[#ec7161]">
            View Packages
          </Button>
        </div>
      </div>

      {/* Agent workspace */}
      <div className="container-page mt-14 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <AgentWorkspace />
        </div>
      </div>

    </section>
  );
}
