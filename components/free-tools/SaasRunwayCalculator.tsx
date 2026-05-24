'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function SaasRunwayCalculator() {
  const [cash, setCash] = useState('500000');
  const [mrr, setMrr] = useState('20000');
  const [burn, setBurn] = useState('45000');
  const [growthRate, setGrowthRate] = useState('10');

  const result = useMemo(() => {
    const c = parseFloat(cash) || 0;
    const m = parseFloat(mrr) || 0;
    const b = parseFloat(burn) || 0;
    const gr = (parseFloat(growthRate) || 0) / 100;
    const netBurn = b - m;

    if (netBurn <= 0) {
      return { runway: Infinity, breakeven: 0, cashAtBreakeven: c, netBurn, mrrAtBreakeven: m, projections: [] };
    }

    let currentCash = c;
    let currentMrr = m;
    let month = 0;
    const projections: { month: number; cash: number; mrr: number; burn: number }[] = [];

    while (currentCash > 0 && month < 120) {
      month++;
      currentMrr = currentMrr * (1 + gr);
      const net = b - currentMrr;
      currentCash = currentCash - net;
      projections.push({ month, cash: Math.max(currentCash, 0), mrr: currentMrr, burn: b });
      if (currentCash <= 0) break;
    }

    const runway = month >= 120 ? Infinity : month;
    const beMonth = projections.findIndex((p) => p.mrr >= b);
    const breakeven = beMonth >= 0 ? beMonth + 1 : -1;

    return { runway, breakeven, netBurn, projections };
  }, [cash, mrr, burn, growthRate]);

  const runwayColor = (r: number) => r === Infinity ? '#22c55e' : r >= 18 ? '#22c55e' : r >= 12 ? '#f26b4e' : '#ef4444';

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Current Cash / Bank Balance ($)', val: cash, set: setCash },
          { label: 'Current MRR ($)', val: mrr, set: setMrr },
          { label: 'Monthly Burn Rate ($)', val: burn, set: setBurn },
          { label: 'MRR Growth Rate (%/mo)', val: growthRate, set: setGrowthRate },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          {
            label: 'Runway',
            val: result.runway === Infinity ? 'Profitable' : `${result.runway} months`,
            color: runwayColor(result.runway as number),
          },
          {
            label: 'Net Burn / mo',
            val: result.netBurn > 0 ? fmt(result.netBurn) : 'Cash flow positive',
            color: result.netBurn > 0 ? '#ef4444' : '#22c55e',
          },
          {
            label: 'Breakeven',
            val: result.breakeven === -1 ? 'Not in 10yr' : result.breakeven === 0 ? 'Already profitable' : `Month ${result.breakeven}`,
            color: result.breakeven === -1 ? '#ef4444' : '#22c55e',
          },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      {result.projections.length > 0 && (
        <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
          <span className="text-[13px] font-semibold text-[#0F1112]">Cash Runway Projection</span>
          <div className="flex items-end gap-0.5 h-36">
            {result.projections.slice(0, 36).map((p) => {
              const maxCash = parseFloat(cash) || 1;
              const pct = (p.cash / maxCash) * 100;
              return (
                <div key={p.month} className="flex-1 flex flex-col items-center group relative">
                  <div
                    className="w-full rounded-sm transition-all"
                    style={{ height: `${Math.max(pct, 1)}%`, background: COLOR + '70', borderTop: `2px solid ${COLOR}` }}
                  />
                  <div className="absolute bottom-full mb-1 hidden group-hover:flex bg-[#0F1112] text-white text-[9px] rounded px-1.5 py-0.5 whitespace-nowrap z-10">
                    M{p.month}: {fmt(p.cash)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-[11px] text-[#9ca3af]">
            <span>Month 1</span><span>Month {Math.min(result.projections.length, 36)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
