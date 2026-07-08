'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const fmtPct = (n: number) => `${n.toFixed(2)}%`;

function nrrColor(nrr: number) {
  if (nrr > 120) return '#16a34a';
  if (nrr >= 100) return '#f26b4e';
  if (nrr >= 80) return '#ef4444';
  return '#dc2626';
}

type Benchmark = { label: string; color: string; interpretation: string };
function getBenchmark(nrr: number): Benchmark {
  if (nrr > 120) return { label: 'World-class', color: '#16a34a', interpretation: 'Your existing customers are growing — you can scale without replacing churned revenue.' };
  if (nrr >= 110) return { label: 'Great', color: '#22c55e', interpretation: 'Strong expansion revenue is outpacing churn. Keep investing in upsell and cross-sell.' };
  if (nrr >= 100) return { label: 'Good', color: '#84cc16', interpretation: 'You retain all revenue and grow a little from expansions. Aim to push past 110%.' };
  if (nrr >= 95) return { label: 'Average', color: '#eab308', interpretation: 'Revenue is roughly flat from existing customers. Reducing churn or increasing expansions will unlock growth.' };
  if (nrr >= 80) return { label: 'Below average', color: '#f97316', interpretation: 'Existing customers are contracting overall. Prioritise retention and reduce downgrade pressure.' };
  return { label: 'Critical', color: '#ef4444', interpretation: 'Significant revenue is leaking from your existing customer base. Immediate churn and contraction reduction is needed.' };
}

export default function NrrCalculator() {
  const [startMrr, setStartMrr] = useState('100000');
  const [expansionMrr, setExpansionMrr] = useState('15000');
  const [contractionMrr, setContractionMrr] = useState('5000');
  const [churnedMrr, setChurnedMrr] = useState('8000');

  const result = useMemo(() => {
    const start = parseFloat(startMrr) || 0;
    const expansion = parseFloat(expansionMrr) || 0;
    const contraction = parseFloat(contractionMrr) || 0;
    const churned = parseFloat(churnedMrr) || 0;

    const endMrr = start + expansion - contraction - churned;
    const nrr = start > 0 ? (endMrr / start) * 100 : 0;
    const grr = start > 0 ? Math.min(((start - contraction - churned) / start) * 100, 100) : 0;
    const netMrrChange = endMrr - start;
    const revenueLost = contraction + churned;

    return { nrr, grr, endMrr, expansion, revenueLost, netMrrChange };
  }, [startMrr, expansionMrr, contractionMrr, churnedMrr]);

  const benchmark = getBenchmark(result.nrr);

  // Clamp the progress bar: 0–150% range mapped to 0–100% width
  const barWidth = Math.min(Math.max((result.nrr / 150) * 100, 0), 100);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'MRR at Start of Period ($)', val: startMrr, set: setStartMrr, ph: '100000' },
          { label: 'Expansion MRR ($)', val: expansionMrr, set: setExpansionMrr, ph: '15000' },
          { label: 'Contraction MRR ($)', val: contractionMrr, set: setContractionMrr, ph: '5000' },
          { label: 'Churned MRR ($)', val: churnedMrr, set: setChurnedMrr, ph: '8000' },
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input
              type="number"
              value={val}
              onChange={(e) => set(e.target.value)}
              min={0}
              placeholder={ph}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: 'Net Revenue Retention (NRR)', val: fmtPct(result.nrr), color: nrrColor(result.nrr) },
          { label: 'Gross Revenue Retention (GRR)', val: fmtPct(result.grr), color: '#22c55e' },
          { label: 'MRR at End of Period', val: fmt(result.endMrr), color: COLOR },
          { label: 'Expansion Revenue', val: fmt(result.expansion), color: '#22c55e' },
          { label: 'Revenue Lost', val: fmt(result.revenueLost), color: '#ef4444' },
          {
            label: 'Net MRR Change',
            val: (result.netMrrChange >= 0 ? '+' : '') + fmt(result.netMrrChange),
            color: result.netMrrChange >= 0 ? '#22c55e' : '#ef4444',
          },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-[#0F1112]">NRR Benchmark</span>
          <span className="text-[13px] font-semibold" style={{ color: benchmark.color }}>
            {benchmark.label} — {fmtPct(result.nrr)}
          </span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{
          background: 'linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #84cc16 55%, #22c55e 70%, #16a34a 100%)',
        }}>
          <div className="h-full w-0.5 bg-white/80 rounded-full transition-all" style={{ marginLeft: `calc(${barWidth}% - 1px)` }} />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1.5">
          <span>&lt;80% Critical</span>
          <span>100% Baseline</span>
          <span>&gt;120% World-class</span>
        </div>
        <p className="mt-3 text-[13px] text-[#4b5563] leading-relaxed">
          {benchmark.interpretation}
        </p>
      </div>
    </div>
  );
}
