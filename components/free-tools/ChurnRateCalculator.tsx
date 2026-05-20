'use client';
import { useState, useMemo } from 'react';

const COLOR = '#ef4444';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function ChurnRateCalculator() {
  const [customers, setCustomers] = useState('1000');
  const [churned, setChurned] = useState('50');
  const [mrr, setMrr] = useState('50000');
  const [arpu, setArpu] = useState('50');

  const result = useMemo(() => {
    const c = parseFloat(customers) || 0;
    const ch = parseFloat(churned) || 0;
    const m = parseFloat(mrr) || 0;
    const a = parseFloat(arpu) || 0;

    const churnRate = c > 0 ? (ch / c) * 100 : 0;
    const retentionRate = 100 - churnRate;
    const mrrLost = ch * a;
    const mrrChurnRate = m > 0 ? (mrrLost / m) * 100 : 0;
    const avgLifeMonths = churnRate > 0 ? 100 / churnRate : Infinity;
    const ltv = a > 0 && churnRate > 0 ? a / (churnRate / 100) : 0;

    return { churnRate, retentionRate, mrrLost, mrrChurnRate, avgLifeMonths, ltv };
  }, [customers, churned, mrr, arpu]);

  function churnColor(rate: number) {
    if (rate < 2) return '#22c55e';
    if (rate < 5) return '#f59e0b';
    return '#ef4444';
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Customers at Start of Period', val: customers, set: setCustomers, ph: '1000' },
          { label: 'Customers Churned This Period', val: churned, set: setChurned, ph: '50' },
          { label: 'MRR ($)', val: mrr, set: setMrr, ph: '50000' },
          { label: 'Average Revenue Per User ($/mo)', val: arpu, set: setArpu, ph: '50' },
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0} placeholder={ph}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ef4444] focus:ring-2 focus:ring-[#ef4444]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: 'Customer Churn Rate', val: `${result.churnRate.toFixed(2)}%`, color: churnColor(result.churnRate) },
          { label: 'Retention Rate', val: `${result.retentionRate.toFixed(2)}%`, color: '#22c55e' },
          { label: 'MRR Lost', val: fmt(result.mrrLost), color: COLOR },
          { label: 'MRR Churn Rate', val: `${result.mrrChurnRate.toFixed(2)}%`, color: churnColor(result.mrrChurnRate) },
          { label: 'Avg Customer Lifetime', val: isFinite(result.avgLifeMonths) ? `${result.avgLifeMonths.toFixed(1)} mo` : '∞', color: '#6366f1' },
          { label: 'Customer LTV', val: result.ltv > 0 ? fmt(result.ltv) : '—', color: '#10b981' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-[#0F1112]">Churn Health</span>
          <span className="text-[13px]" style={{ color: churnColor(result.churnRate) }}>
            {result.churnRate < 2 ? 'Healthy' : result.churnRate < 5 ? 'Caution' : 'Critical'}
          </span>
        </div>
        <div className="h-2.5 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{
            width: `${Math.min(result.churnRate * 10, 100)}%`,
            background: churnColor(result.churnRate)
          }} />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1">
          <span>&lt;2% Excellent</span><span>2–5% Acceptable</span><span>&gt;5% At Risk</span>
        </div>
      </div>
    </div>
  );
}
