'use client';
import { useState, useMemo } from 'react';

const COLOR = '#10b981';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function MrrGrowthSimulator() {
  const [startMrr, setStartMrr] = useState('5000');
  const [newMrr, setNewMrr] = useState('2000');
  const [churnRate, setChurnRate] = useState('3');
  const [expansionRate, setExpansionRate] = useState('1');
  const [months, setMonths] = useState(12);

  const data = useMemo(() => {
    let mrr = parseFloat(startMrr) || 0;
    const newM = parseFloat(newMrr) || 0;
    const churn = (parseFloat(churnRate) || 0) / 100;
    const expansion = (parseFloat(expansionRate) || 0) / 100;
    const rows = [];
    for (let i = 1; i <= months; i++) {
      const churnedMrr = mrr * churn;
      const expansionMrr = mrr * expansion;
      const netNew = newM - churnedMrr + expansionMrr;
      mrr = mrr + netNew;
      rows.push({ month: i, mrr: Math.max(mrr, 0), netNew, churnedMrr, expansionMrr });
    }
    return rows;
  }, [startMrr, newMrr, churnRate, expansionRate, months]);

  const maxMrr = Math.max(...data.map((d) => d.mrr), 1);
  const finalMrr = data[data.length - 1]?.mrr ?? 0;
  const startMrrVal = parseFloat(startMrr) || 0;
  const growth = startMrrVal > 0 ? ((finalMrr - startMrrVal) / startMrrVal) * 100 : 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Starting MRR ($)', val: startMrr, set: setStartMrr },
          { label: 'New MRR / month ($)', val: newMrr, set: setNewMrr },
          { label: 'Monthly Churn Rate (%)', val: churnRate, set: setChurnRate },
          { label: 'Expansion MRR Rate (%)', val: expansionRate, set: setExpansionRate },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20 transition-colors" />
          </div>
        ))}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Simulate for {months} months</label>
          <input type="range" min={3} max={36} value={months} onChange={(e) => setMonths(+e.target.value)}
            className="w-full accent-[#10b981]" />
          <div className="flex justify-between text-[11px] text-[#6b7280]"><span>3 mo</span><span>36 mo</span></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: `MRR at Month ${months}`, val: fmt(finalMrr), color: COLOR },
          { label: 'ARR Projection', val: fmt(finalMrr * 12), color: '#6366f1' },
          { label: 'Total Growth', val: `${growth.toFixed(0)}%`, color: growth >= 0 ? '#22c55e' : '#ef4444' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">MRR Growth Chart</span>
        <div className="flex items-end gap-1 h-36">
          {data.map((d) => {
            const pct = (d.mrr / maxMrr) * 100;
            return (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div
                  className="w-full rounded-t transition-all"
                  style={{ height: `${pct}%`, minHeight: 2, background: COLOR + '80', borderTop: `2px solid ${COLOR}` }}
                />
                <div className="absolute bottom-full mb-1 hidden group-hover:flex bg-[#0F1112] text-white text-[10px] rounded px-2 py-1 whitespace-nowrap">
                  M{d.month}: {fmt(d.mrr)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-[11px] text-[#6b7280]">
          <span>Month 1</span><span>Month {months}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]/50">
              {['Month', 'MRR', 'New', 'Churned', 'Expansion'].map((h) => (
                <th key={h} className="text-left py-2 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.month} className="border-b border-[#F5F6F8]">
                <td className="py-1.5 pr-3 text-[#484848]">{d.month}</td>
                <td className="py-1.5 pr-3 font-medium" style={{ color: COLOR }}>{fmt(d.mrr)}</td>
                <td className="py-1.5 pr-3 text-[#22c55e]">+{fmt(parseFloat(newMrr) || 0)}</td>
                <td className="py-1.5 pr-3 text-[#ef4444]">-{fmt(d.churnedMrr)}</td>
                <td className="py-1.5 pr-3 text-[#6366f1]">+{fmt(d.expansionMrr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
