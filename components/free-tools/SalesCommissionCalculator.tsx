'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Deal { name: string; value: string; closed: boolean; }

export default function SalesCommissionCalculator() {
  const [model, setModel] = useState<'flat' | 'tiered' | 'accelerator'>('flat');
  const [baseSalary, setBaseSalary] = useState('60000');
  const [quota, setQuota] = useState('500000');
  const [achieved, setAchieved] = useState('420000');
  const [flatRate, setFlatRate] = useState('5');
  const [deals, setDeals] = useState<Deal[]>([
    { name: 'Deal A', value: '50000', closed: true },
    { name: 'Deal B', value: '120000', closed: true },
    { name: 'Deal C', value: '80000', closed: false },
  ]);

  const result = useMemo(() => {
    const base = parseFloat(baseSalary) || 0;
    const q = parseFloat(quota) || 1;
    const a = parseFloat(achieved) || 0;
    const rate = (parseFloat(flatRate) || 0) / 100;
    const attainment = (a / q) * 100;

    let commission = 0;
    if (model === 'flat') {
      commission = a * rate;
    } else if (model === 'tiered') {
      const t1 = Math.min(a, q * 0.5);
      const t2 = Math.min(Math.max(a - q * 0.5, 0), q * 0.25);
      const t3 = Math.max(a - q * 0.75, 0);
      commission = t1 * 0.04 + t2 * 0.06 + t3 * 0.08;
    } else {
      const base_rate = rate;
      const accel_rate = attainment > 100 ? rate * 1.5 : base_rate;
      if (attainment <= 100) {
        commission = a * base_rate;
      } else {
        commission = q * base_rate + (a - q) * accel_rate;
      }
    }

    const total = base + commission;
    const ote = base + q * rate;
    return { commission, total, attainment, ote };
  }, [model, baseSalary, quota, achieved, flatRate]);

  const closedDealsTotal = deals.filter((d) => d.closed).reduce((s, d) => s + (parseFloat(d.value) || 0), 0);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex rounded-lg border border-[#E5E7EC] overflow-hidden self-start">
        {([['flat', 'Flat Rate'], ['tiered', 'Tiered'], ['accelerator', 'Accelerator']] as const).map(([v, l]) => (
          <button key={v} onClick={() => setModel(v)}
            className="px-4 py-2 text-[13px] font-medium transition-colors"
            style={model === v ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
            {l}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Base Salary ($)', val: baseSalary, set: setBaseSalary },
          { label: 'Annual Quota ($)', val: quota, set: setQuota },
          { label: 'Revenue Achieved ($)', val: achieved, set: setAchieved },
          { label: model === 'flat' ? 'Commission Rate (%)' : 'Base Rate (%)', val: flatRate, set: setFlatRate },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Commission Earned', val: fmt(result.commission), color: COLOR },
          { label: 'Total Comp', val: fmt(result.total), color: '#f26b4e' },
          { label: 'Quota Attainment', val: `${result.attainment.toFixed(0)}%`, color: result.attainment >= 100 ? '#22c55e' : result.attainment >= 80 ? '#f26b4e' : '#ef4444' },
          { label: 'OTE (100% quota)', val: fmt(result.ote), color: '#6b7280' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-[#0F1112]">Quota Attainment</span>
          <span className="text-[13px]" style={{ color: result.attainment >= 100 ? '#22c55e' : '#f26b4e' }}>{result.attainment.toFixed(1)}%</span>
        </div>
        <div className="h-3 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{
            width: `${Math.min(result.attainment, 100)}%`,
            background: result.attainment >= 100 ? COLOR : '#f26b4e'
          }} />
        </div>
        {model === 'tiered' && (
          <p className="text-[12px] text-[#6b7280]">Tiers: 4% on first 50% · 6% on 50–75% · 8% above 75%</p>
        )}
        {model === 'accelerator' && (
          <p className="text-[12px] text-[#6b7280]">Accelerator: {flatRate}% up to quota · {(parseFloat(flatRate) * 1.5).toFixed(1)}% above quota</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-[#0F1112]">Deal Tracker</span>
          <button onClick={() => setDeals((d) => [...d, { name: `Deal ${String.fromCharCode(65 + d.length)}`, value: '', closed: false }])} className="text-[12px] text-[#22c55e] hover:underline">+ Add Deal</button>
        </div>
        {deals.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <input type="checkbox" checked={d.closed} onChange={() => setDeals((p) => p.map((x, idx) => idx === i ? { ...x, closed: !x.closed } : x))} className="w-4 h-4 accent-[#22c55e]" />
            <input type="text" value={d.name} onChange={(e) => setDeals((p) => p.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x))}
              className="flex-1 rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-colors" />
            <input type="number" value={d.value} onChange={(e) => setDeals((p) => p.map((x, idx) => idx === i ? { ...x, value: e.target.value } : x))}
              placeholder="Value"
              className="w-28 rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-colors" />
          </div>
        ))}
        <div className="text-[13px] font-medium text-[#0F1112]">Closed deals total: <span style={{ color: COLOR }}>{fmt(closedDealsTotal)}</span></div>
      </div>
    </div>
  );
}
