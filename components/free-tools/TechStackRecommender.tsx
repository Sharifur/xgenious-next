'use client';
import { useState } from 'react';

const COLOR = '#3b82f6';

interface Stack {
  name: string;
  frontend: string;
  backend: string;
  database: string;
  hosting: string;
  notes: string;
  score: number;
}

const STACKS: Record<string, Stack[]> = {
  'SaaS Web App': [
    { name: 'Next.js + Postgres', frontend: 'Next.js (React)', backend: 'Next.js API Routes', database: 'PostgreSQL + Drizzle', hosting: 'Vercel + Neon', notes: 'Fast to ship, great DX, scales well for SaaS', score: 95 },
    { name: 'Laravel + Vue', frontend: 'Vue 3 + Inertia', backend: 'Laravel PHP', database: 'MySQL / Postgres', hosting: 'Coolify / Forge', notes: 'Batteries-included, ideal for CRUD-heavy apps', score: 88 },
    { name: 'NestJS + React', frontend: 'React + Vite', backend: 'NestJS (Node)', database: 'Postgres + Prisma', hosting: 'Railway / Fly.io', notes: 'Enterprise-grade, scalable, TypeScript-first', score: 85 },
  ],
  'eCommerce': [
    { name: 'Next.js + Shopify', frontend: 'Next.js Storefront', backend: 'Shopify API', database: 'Shopify (managed)', hosting: 'Vercel', notes: 'Best for most eCommerce. Fast, scalable, no DB ops', score: 95 },
    { name: 'WooCommerce (WordPress)', frontend: 'WordPress Theme', backend: 'WordPress + PHP', database: 'MySQL', hosting: 'Cloudways / Kinsta', notes: 'Massive plugin ecosystem, easy to manage', score: 80 },
    { name: 'Laravel + Medusa', frontend: 'React / Next.js', backend: 'Medusa.js', database: 'Postgres', hosting: 'Railway / Render', notes: 'Open-source Shopify alternative, full control', score: 82 },
  ],
  'Mobile App': [
    { name: 'React Native + Expo', frontend: 'React Native', backend: 'Next.js API / Supabase', database: 'Supabase (Postgres)', hosting: 'Expo EAS + Vercel', notes: 'Cross-platform iOS + Android, one codebase', score: 92 },
    { name: 'Flutter + Firebase', frontend: 'Flutter (Dart)', backend: 'Firebase Functions', database: 'Firestore', hosting: 'Firebase Hosting', notes: 'Great UI, Google ecosystem, real-time built-in', score: 88 },
    { name: 'Native (Swift + Kotlin)', frontend: 'SwiftUI / Jetpack', backend: 'NestJS / Rails', database: 'Postgres', hosting: 'Render / Fly.io', notes: 'Best performance, highest effort, native UX', score: 75 },
  ],
  'Internal Tool / Dashboard': [
    { name: 'Next.js + Retool', frontend: 'Retool (no-code)', backend: 'Retool API Connector', database: 'Any existing DB', hosting: 'Retool Cloud', notes: 'Fastest for internal dashboards, no frontend work', score: 90 },
    { name: 'React + Supabase', frontend: 'React + shadcn/ui', backend: 'Supabase Auth + RLS', database: 'Postgres (Supabase)', hosting: 'Vercel + Supabase', notes: 'Open source, full control, great for auth', score: 85 },
    { name: 'Next.js + Prisma', frontend: 'Next.js', backend: 'tRPC / API Routes', database: 'Postgres + Prisma', hosting: 'Railway', notes: 'Type-safe end to end, excellent developer experience', score: 88 },
  ],
  'AI / ML Product': [
    { name: 'Next.js + Vercel AI SDK', frontend: 'Next.js + React', backend: 'Vercel AI SDK + OpenAI', database: 'Postgres + pgvector', hosting: 'Vercel + Neon', notes: 'Fastest way to build AI products with streaming', score: 94 },
    { name: 'FastAPI + React', frontend: 'React + Vite', backend: 'FastAPI (Python)', database: 'Postgres + Pinecone', hosting: 'Railway + Vercel', notes: 'Python ML ecosystem access, great for custom models', score: 88 },
    { name: 'LangChain + NestJS', frontend: 'React / Vue', backend: 'NestJS + LangChain', database: 'Postgres + Redis + pgvector', hosting: 'Fly.io / Render', notes: 'Complex AI agents, RAG pipelines, production-grade', score: 82 },
  ],
};

export default function TechStackRecommender() {
  const [projectType, setProjectType] = useState('SaaS Web App');
  const [priorities, setPriorities] = useState<Set<string>>(new Set(['speed', 'scalable']));
  const [team, setTeam] = useState<'solo' | 'small' | 'large'>('small');

  const PRIORITIES = [
    { key: 'speed', label: 'Ship Fast' },
    { key: 'scalable', label: 'Scalable' },
    { key: 'lowcost', label: 'Low Cost' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'python', label: 'Python / ML' },
    { key: 'opensource', label: 'Open Source' },
  ];

  function toggle(k: string) {
    setPriorities((p) => { const n = new Set(p); n.has(k) ? n.delete(k) : n.add(k); return n; });
  }

  const stacks = STACKS[projectType] ?? [];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Project Type</label>
          <select value={projectType} onChange={(e) => setProjectType(e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-colors">
            {Object.keys(STACKS).map((k) => <option key={k}>{k}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Team Size</label>
          <div className="flex rounded-xl border border-[#E5E7EC] bg-white overflow-hidden">
            {([['solo', 'Solo Dev'], ['small', 'Small Team'], ['large', 'Large Team']] as [typeof team, string][]).map(([v, l]) => (
              <button key={v} onClick={() => setTeam(v)}
                className="flex-1 py-3 text-[12px] font-medium transition-colors"
                style={team === v ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Priorities</label>
          <div className="flex flex-wrap gap-2">
            {PRIORITIES.map((p) => (
              <button key={p.key} onClick={() => toggle(p.key)}
                className="px-3 py-1.5 rounded-full border text-[12px] font-medium transition-colors"
                style={priorities.has(p.key) ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {stacks.map((stack, i) => (
          <div
            key={i}
            className="rounded-2xl border-2 p-5 flex flex-col gap-4 transition-all"
            style={{ borderColor: i === 0 ? COLOR : '#E5E7EC', background: i === 0 ? undefined : '#F5F6F8' }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  {i === 0 && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: COLOR }}>RECOMMENDED</span>}
                  <h3 className="text-[15px] font-bold text-[#0F1112]">{stack.name}</h3>
                </div>
                <p className="text-[13px] text-[#484848] mt-1">{stack.notes}</p>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <span className="text-[22px] font-bold" style={{ color: i === 0 ? COLOR : '#6b7280' }}>{stack.score}</span>
                <span className="text-[10px] text-[#9ca3af]">score</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 text-[12px]">
              {[
                { label: 'Frontend', val: stack.frontend },
                { label: 'Backend', val: stack.backend },
                { label: 'Database', val: stack.database },
                { label: 'Hosting', val: stack.hosting },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-2 bg-white rounded-lg px-3 py-2">
                  <span className="text-[#9ca3af] min-w-[60px]">{label}:</span>
                  <span className="font-medium text-[#0F1112]">{val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
