'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const FEATURES = [
  { key: 'auth', label: 'User Authentication', hours: 16 },
  { key: 'dashboard', label: 'Dashboard / Analytics', hours: 24 },
  { key: 'payments', label: 'Payment Integration', hours: 20 },
  { key: 'notifications', label: 'Email / Push Notifications', hours: 12 },
  { key: 'admin', label: 'Admin Panel', hours: 32 },
  { key: 'api', label: 'REST API', hours: 24 },
  { key: 'mobile', label: 'Mobile Responsive', hours: 16 },
  { key: 'search', label: 'Search & Filters', hours: 12 },
  { key: 'fileUpload', label: 'File / Image Upload', hours: 8 },
  { key: 'chat', label: 'Chat / Messaging', hours: 40 },
  { key: 'multitenant', label: 'Multi-tenancy', hours: 32 },
  { key: 'i18n', label: 'Internationalization (i18n)', hours: 16 },
];

const REGIONS = [
  { label: 'US / Canada', rate: 150 },
  { label: 'Western Europe', rate: 120 },
  { label: 'Eastern Europe', rate: 60 },
  { label: 'South Asia', rate: 35 },
  { label: 'Southeast Asia', rate: 40 },
  { label: 'Latin America', rate: 50 },
];

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function MvpCostEstimator() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['auth', 'dashboard']));
  const [regionIdx, setRegionIdx] = useState(3);
  const [complexity, setComplexity] = useState<'simple' | 'moderate' | 'complex'>('moderate');
  const [team, setTeam] = useState(2);

  const complexityMult = { simple: 0.8, moderate: 1.0, complex: 1.4 }[complexity];
  const rate = REGIONS[regionIdx].rate;

  const { totalHours, cost, timeline } = useMemo(() => {
    const base = FEATURES.filter((f) => selected.has(f.key)).reduce((s, f) => s + f.hours, 0);
    const totalHours = Math.round(base * complexityMult);
    const cost = totalHours * rate;
    const timeline = Math.ceil(totalHours / (team * 40));
    return { totalHours, cost, timeline };
  }, [selected, complexityMult, rate, team]);

  function toggle(key: string) {
    setSelected((s) => {
      const n = new Set(s);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h3 className="text-[14px] font-semibold text-[#0F1112]">Select Features</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {FEATURES.map((f) => (
            <label key={f.key} className="flex items-center gap-2.5 cursor-pointer bg-white p-3 rounded-xl border border-[#E5E7EC] hover:border-[#f26b4e] transition-colors">
              <input
                type="checkbox" checked={selected.has(f.key)} onChange={() => toggle(f.key)}
                className="w-4 h-4 accent-[#f26b4e] rounded flex-shrink-0"
              />
              <div className="flex-1 flex items-center justify-between gap-2">
                <span className="text-[13px] text-[#0F1112]">{f.label}</span>
                <span className="text-[11px] text-[#9ca3af] shrink-0">~{f.hours}h</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Developer Region</label>
          <select
            value={regionIdx} onChange={(e) => setRegionIdx(+e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors"
          >
            {REGIONS.map((r, i) => <option key={i} value={i}>{r.label} (~${r.rate}/hr)</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Project Complexity</label>
          <div className="flex rounded-xl border border-[#E5E7EC] bg-white overflow-hidden">
            {(['simple', 'moderate', 'complex'] as const).map((c) => (
              <button
                key={c} onClick={() => setComplexity(c)}
                className="flex-1 py-2.5 text-[12px] font-medium capitalize transition-colors active:scale-95"
                style={complexity === c ? { background: COLOR, color: '#fff' } : { color: '#484848' }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#0F1112]">Team Size: {team}</label>
          <input
            type="range" min={1} max={8} value={team} onChange={(e) => setTeam(+e.target.value)}
            className="w-full accent-[#f26b4e] mt-2"
          />
          <div className="flex justify-between text-[11px] text-[#6b7280]"><span>1 dev</span><span>8 devs</span></div>
        </div>
      </div>

      {selected.size > 0 && (
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Estimated Hours', val: `${totalHours}h`, sub: `${(totalHours / 8).toFixed(0)} working days`, color: '#6366f1' },
            { label: 'Estimated Cost', val: fmt(cost), sub: `${fmt(cost * 0.85)}–${fmt(cost * 1.15)} range`, color: COLOR },
            { label: 'Timeline', val: `${timeline} week${timeline !== 1 ? 's' : ''}`, sub: `with ${team} developer${team !== 1 ? 's' : ''}`, color: '#22c55e' },
          ].map(({ label, val, sub, color }) => (
            <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
              <span className="text-[12px] text-[#6b7280]">{label}</span>
              <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
              <span className="text-[11px] text-[#9ca3af]">{sub}</span>
            </div>
          ))}
        </div>
      )}

      <p className="text-[12px] text-[#9ca3af]">Estimates are ballpark figures. Actual cost varies by requirements, complexity, and team experience.</p>
    </div>
  );
}
