'use client';
import { useState, useMemo } from 'react';

const COLOR = '#6366f1';

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Stage { name: string; leads: string; convRate: string; avgDeal: string; }

export default function SalesPipelineCalculator() {
  const [stages, setStages] = useState<Stage[]>([
    { name: 'Prospecting', leads: '500', convRate: '20', avgDeal: '' },
    { name: 'Qualified', leads: '', convRate: '30', avgDeal: '' },
    { name: 'Proposal', leads: '', convRate: '50', avgDeal: '' },
    { name: 'Negotiation', leads: '', convRate: '70', avgDeal: '' },
    { name: 'Closed Won', leads: '', convRate: '100', avgDeal: '5000' },
  ]);

  const chain = useMemo(() => {
    let prev = parseFloat(stages[0].leads) || 0;
    return stages.map((s, i) => {
      const leads = i === 0 ? prev : Math.round(prev * (parseFloat(stages[i - 1].convRate) / 100));
      prev = leads;
      const rate = parseFloat(s.convRate) || 0;
      const deal = parseFloat(s.avgDeal) || 0;
      const converted = Math.round(leads * rate / 100);
      const revenue = deal > 0 ? converted * deal : 0;
      return { ...s, computedLeads: leads, converted, revenue };
    });
  }, [stages]);

  const totalRevenue = chain.reduce((s, c) => s + c.revenue, 0);
  const finalConv = chain.length > 0 && (parseFloat(stages[0].leads) || 0) > 0
    ? chain[chain.length - 1].computedLeads / (parseFloat(stages[0].leads) || 1) * 100
    : 0;

  function update(i: number, f: keyof Stage, v: string) {
    setStages((p) => p.map((s, idx) => idx === i ? { ...s, [f]: v } : s));
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC]">
              <th className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">Stage</th>
              <th className="text-right py-2.5 pr-3 font-medium text-[#6b7280]">Leads In</th>
              <th className="text-right py-2.5 pr-3 font-medium text-[#6b7280]">Conv. %</th>
              <th className="text-right py-2.5 pr-3 font-medium text-[#6b7280]">Avg Deal ($)</th>
              <th className="text-right py-2.5 font-medium text-[#6b7280]">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {chain.map((s, i) => (
              <tr key={i} className="border-b border-[#F5F6F8]">
                <td className="py-2 pr-3">
                  <input type="text" value={s.name} onChange={(e) => update(i, 'name', e.target.value)}
                    className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#059669]" />
                </td>
                <td className="py-2 pr-3 text-right">
                  {i === 0 ? (
                    <input type="number" value={stages[0].leads} onChange={(e) => update(0, 'leads', e.target.value)}
                      className="w-20 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#059669]" />
                  ) : (
                    <span className="text-[#6b7280]">{s.computedLeads}</span>
                  )}
                </td>
                <td className="py-2 pr-3 text-right">
                  <input type="number" value={s.convRate} onChange={(e) => update(i, 'convRate', e.target.value)} min={0} max={100}
                    className="w-16 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#059669]" />
                </td>
                <td className="py-2 pr-3 text-right">
                  <input type="number" value={s.avgDeal} onChange={(e) => update(i, 'avgDeal', e.target.value)} min={0}
                    placeholder="—"
                    className="w-24 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#059669] placeholder:text-[#9ca3af]" />
                </td>
                <td className="py-2 text-right text-[13px] font-medium" style={{ color: s.revenue > 0 ? COLOR : '#9ca3af' }}>
                  {s.revenue > 0 ? fmt(s.revenue) : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'Pipeline Revenue', val: fmt(totalRevenue), color: COLOR },
          { label: 'End-to-End Conv.', val: `${finalConv.toFixed(1)}%`, color: '#22c55e' },
          { label: 'Closed Won', val: String(chain[chain.length - 1]?.converted ?? 0), color: '#f59e0b' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Pipeline Funnel</span>
        {chain.map((s, i) => {
          const maxLeads = parseFloat(stages[0].leads) || 1;
          const pct = Math.max((s.computedLeads / maxLeads) * 100, 2);
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] text-[#6b7280] w-28 shrink-0">{s.name}</span>
              <div className="flex-1 h-6 bg-white rounded-lg overflow-hidden">
                <div className="h-full rounded-lg flex items-center px-2 transition-all" style={{ width: `${pct}%`, background: COLOR + '30', borderLeft: `3px solid ${COLOR}` }}>
                  <span className="text-[11px] font-medium" style={{ color: COLOR }}>{s.computedLeads}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
