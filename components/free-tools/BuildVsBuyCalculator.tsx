'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function BuildVsBuyCalculator() {
  const [build, setBuild] = useState({ devCost: '50000', annualMaint: '10000', timeMo: '6', opportunity: '5000' });
  const [buy, setBuy] = useState({ setup: '5000', annual: '15000', training: '2000', integration: '3000' });
  const [years, setYears] = useState(3);

  const result = useMemo(() => {
    const bDevCost = parseFloat(build.devCost) || 0;
    const bMaint = parseFloat(build.annualMaint) || 0;
    const bOppty = (parseFloat(build.opportunity) || 0) * (parseFloat(build.timeMo) || 0);
    const buildTotal = bDevCost + bOppty + bMaint * years;

    const buySetup = parseFloat(buy.setup) || 0;
    const buyAnnual = parseFloat(buy.annual) || 0;
    const buyTraining = parseFloat(buy.training) || 0;
    const buyIntegration = parseFloat(buy.integration) || 0;
    const buyTotal = buySetup + buyTraining + buyIntegration + buyAnnual * years;

    const savings = Math.abs(buildTotal - buyTotal);
    const winner = buildTotal < buyTotal ? 'build' : 'buy';
    return { buildTotal, buyTotal, savings, winner };
  }, [build, buy, years]);

  function field(label: string, val: string, set: (v: string) => void, prefix = '$') {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-[12px] font-semibold text-[#0F1112]">{label}</label>
        <div className="flex items-center rounded-lg border border-[#E5E7EC] bg-white overflow-hidden focus-within:border-[#f26b4e] focus-within:ring-2 focus-within:ring-[#f26b4e]/20 transition-colors">
          <span className="px-2.5 text-[#9ca3af] text-[13px]">{prefix}</span>
          <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0} className="flex-1 py-2 text-[14px] text-[#0F1112] outline-none bg-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <label className="text-[13px] font-medium text-[#0F1112]">Comparison over</label>
        {[1, 2, 3, 5].map((y) => (
          <button
            key={y}
            onClick={() => setYears(y)}
            className="px-3 py-1.5 rounded-lg border border-[#E5E7EC] text-[13px] font-medium transition-colors active:scale-95"
            style={years === y ? { background: COLOR, color: '#fff', borderColor: COLOR } : { color: '#484848' }}
          >
            {y}yr
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 p-5 rounded-2xl border-2 border-[#E5E7EC]">
          <h3 className="text-[14px] font-semibold text-[#0F1112]">Build In-House</h3>
          {field('Dev / Agency Cost', build.devCost, (v) => setBuild((p) => ({ ...p, devCost: v })))}
          {field('Annual Maintenance', build.annualMaint, (v) => setBuild((p) => ({ ...p, annualMaint: v })))}
          {field('Build Time (months)', build.timeMo, (v) => setBuild((p) => ({ ...p, timeMo: v })), '')}
          {field('Lost Revenue / month during build', build.opportunity, (v) => setBuild((p) => ({ ...p, opportunity: v })))}
        </div>
        <div className="flex flex-col gap-3 p-5 rounded-2xl border-2 border-[#E5E7EC]">
          <h3 className="text-[14px] font-semibold text-[#0F1112]">Buy / SaaS</h3>
          {field('Setup / Onboarding Fee', buy.setup, (v) => setBuy((p) => ({ ...p, setup: v })))}
          {field('Annual Subscription', buy.annual, (v) => setBuy((p) => ({ ...p, annual: v })))}
          {field('Training Cost', buy.training, (v) => setBuy((p) => ({ ...p, training: v })))}
          {field('Integration Cost', buy.integration, (v) => setBuy((p) => ({ ...p, integration: v })))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: `Build Total (${years}yr)`, val: result.buildTotal, color: '#f26b4e', winner: result.winner === 'build' },
          { label: `Buy Total (${years}yr)`, val: result.buyTotal, color: '#f26b4e', winner: result.winner === 'buy' },
          { label: 'You Save', val: result.savings, color: '#22c55e', winner: true },
        ].map(({ label, val, color, winner }) => (
          <div
            key={label}
            className="rounded-xl bg-[#F5F6F8] border-2 p-4 sm:p-5 flex flex-col gap-1.5 transition-all"
            style={{ borderColor: winner ? color : '#E5E7EC' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#6b7280]">{label}</span>
              {winner && label !== 'You Save' && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: color }}>WINNER</span>
              )}
            </div>
            <span className="text-[24px] font-bold" style={{ color }}>{fmt(val)}</span>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-4 text-[14px] font-medium"
        style={result.winner === 'build'
          ? { background: '#ede9fe', color: '#f26b4e' }
          : { background: '#e0f2fe', color: '#f26b4e' }
        }
      >
        Recommendation: <strong>{result.winner === 'build' ? 'Build in-house' : 'Buy / SaaS'}</strong> saves {fmt(result.savings)} over {years} year{years !== 1 ? 's' : ''}.
      </div>
    </div>
  );
}
