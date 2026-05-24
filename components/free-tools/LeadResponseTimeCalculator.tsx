'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function LeadResponseTimeCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState('200');
  const [currentResponseMin, setCurrentResponseMin] = useState('60');
  const [targetResponseMin, setTargetResponseMin] = useState('5');
  const [closeRate, setCloseRate] = useState('10');
  const [avgDeal, setAvgDeal] = useState('3000');
  const [salesReps, setSalesReps] = useState('3');

  const result = useMemo(() => {
    const leads = parseFloat(monthlyLeads) || 0;
    const curMin = parseFloat(currentResponseMin) || 0;
    const tgtMin = parseFloat(targetResponseMin) || 5;
    const deal = parseFloat(avgDeal) || 0;
    const cr = parseFloat(closeRate) / 100;

    const curDeals = leads * cr;
    const curRevenue = curDeals * deal;

    const speedFactor = curMin <= 5 ? 1 : curMin <= 30 ? 1.4 : curMin <= 60 ? 1.65 : curMin <= 240 ? 1.8 : 2.0;
    const improvFactor = tgtMin <= 5 ? 1 : tgtMin <= 30 ? 0.86 : tgtMin <= 60 ? 0.76 : 0.67;
    const newCr = Math.min(cr * (speedFactor / improvFactor), 0.8);

    const newDeals = leads * newCr;
    const newRevenue = newDeals * deal;
    const additionalRevenue = newRevenue - curRevenue;
    const lostPerDay = (curRevenue - newRevenue < 0 ? 0 : (curRevenue - newRevenue)) / 30;

    return { curDeals, curRevenue, newDeals, newRevenue, additionalRevenue, lostPerDay, curCr: cr * 100, newCr: newCr * 100 };
  }, [monthlyLeads, currentResponseMin, targetResponseMin, closeRate, avgDeal]);

  const RESPONSE_BENCHMARKS = [
    { time: '< 1 min', lift: '+391% more likely to qualify', status: 'best' },
    { time: '< 5 min', lift: '+21× more likely vs 30 min', status: 'good' },
    { time: '5–30 min', lift: 'Acceptable for warm leads', status: 'ok' },
    { time: '30–60 min', lift: 'Significant drop in conversion', status: 'warn' },
    { time: '> 1 hour', lift: 'High risk of losing lead', status: 'bad' },
  ];

  const statusColor: Record<string, string> = { best: '#22c55e', good: '#f26b4e', ok: '#f26b4e', warn: '#ef4444', bad: '#dc2626' };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Monthly Inbound Leads', val: monthlyLeads, set: setMonthlyLeads },
          { label: 'Current Response Time (minutes)', val: currentResponseMin, set: setCurrentResponseMin },
          { label: 'Target Response Time (minutes)', val: targetResponseMin, set: setTargetResponseMin },
          { label: 'Current Close Rate (%)', val: closeRate, set: setCloseRate },
          { label: 'Average Deal Value ($)', val: avgDeal, set: setAvgDeal },
          { label: 'Number of Sales Reps', val: salesReps, set: setSalesReps },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: 'Current Monthly Revenue', val: fmt(result.curRevenue), sub: `${result.curDeals.toFixed(1)} deals closed`, color: '#6b7280' },
          { label: 'Projected Revenue (new speed)', val: fmt(result.newRevenue), sub: `${result.newDeals.toFixed(1)} deals closed`, color: COLOR },
          { label: 'Additional Monthly Revenue', val: fmt(result.additionalRevenue), sub: 'by responding faster', color: '#22c55e' },
          { label: 'Annual Revenue Potential', val: fmt(result.additionalRevenue * 12), sub: 'at this improvement rate', color: '#f26b4e' },
        ].map(({ label, val, sub, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-0.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
            <span className="text-[11px] text-[#9ca3af]">{sub}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-semibold text-[#0F1112]">Response Time Benchmarks (MIT / HBR Study)</span>
        {RESPONSE_BENCHMARKS.map((b, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#E5E7EC]">
            <span className="w-20 text-[13px] font-mono font-medium" style={{ color: statusColor[b.status] }}>{b.time}</span>
            <span className="text-[13px] text-[#484848]">{b.lift}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
