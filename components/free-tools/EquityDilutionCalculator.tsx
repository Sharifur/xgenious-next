'use client';
import { useState, useMemo } from 'react';

const COLOR = '#6366f1';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Round { name: string; investment: string; preMoneyVal: string; }

export default function EquityDilutionCalculator() {
  const [founderShares, setFounderShares] = useState('8000000');
  const [rounds, setRounds] = useState<Round[]>([
    { name: 'Seed', investment: '500000', preMoneyVal: '3000000' },
    { name: 'Series A', investment: '3000000', preMoneyVal: '10000000' },
  ]);

  function addRound() { setRounds((r) => [...r, { name: `Series ${String.fromCharCode(65 + r.length + 1)}`, investment: '', preMoneyVal: '' }]); }
  function removeRound(i: number) { setRounds((r) => r.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Round, v: string) {
    setRounds((p) => p.map((r, idx) => idx === i ? { ...r, [f]: v } : r));
  }

  const result = useMemo(() => {
    let totalShares = parseFloat(founderShares) || 0;
    const founderInitial = totalShares;
    const history: { round: string; newShares: number; totalShares: number; founderPct: number; price: number; postMoney: number }[] = [];

    for (const r of rounds) {
      const inv = parseFloat(r.investment) || 0;
      const preMoney = parseFloat(r.preMoneyVal) || 0;
      if (!inv || !preMoney) continue;
      const postMoney = preMoney + inv;
      const pricePerShare = preMoney / totalShares;
      const newShares = inv / pricePerShare;
      totalShares += newShares;
      const founderPct = (founderInitial / totalShares) * 100;
      history.push({ round: r.name, newShares, totalShares, founderPct, price: pricePerShare, postMoney });
    }

    const founderPct = founderInitial > 0 ? (founderInitial / totalShares) * 100 : 100;
    const lastPostMoney = history[history.length - 1]?.postMoney ?? 0;
    const founderValue = lastPostMoney * (founderPct / 100);

    return { history, founderPct, founderInitial, totalShares, founderValue, lastPostMoney };
  }, [founderShares, rounds]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">Founder Shares at Incorporation</label>
        <input type="number" value={founderShares} onChange={(e) => setFounderShares(e.target.value)} min={0}
          className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[#0F1112]">Funding Rounds</h3>
          <button onClick={addRound} className="text-[12px] text-[#6366f1] hover:underline">+ Add Round</button>
        </div>
        {rounds.map((r, i) => (
          <div key={i} className="grid sm:grid-cols-3 gap-3 items-end p-4 rounded-xl border border-[#E5E7EC]">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-[#0F1112]">Round Name</label>
              <input type="text" value={r.name} onChange={(e) => update(i, 'name', e.target.value)}
                className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-[#0F1112]">Investment ($)</label>
              <input type="number" value={r.investment} onChange={(e) => update(i, 'investment', e.target.value)} min={0}
                className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[12px] text-[#0F1112]">Pre-Money Valuation ($)</label>
                <input type="number" value={r.preMoneyVal} onChange={(e) => update(i, 'preMoneyVal', e.target.value)} min={0}
                  className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
              </div>
              {rounds.length > 1 && (
                <button onClick={() => removeRound(i)} className="text-[#9ca3af] hover:text-red-400 transition-colors pb-2 text-[16px]">×</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'Founder Ownership', val: `${result.founderPct.toFixed(2)}%`, color: COLOR },
          { label: 'Last Post-Money Valuation', val: result.lastPostMoney > 0 ? fmt(result.lastPostMoney) : '—', color: '#10b981' },
          { label: "Founder's Share Value", val: result.founderValue > 0 ? fmt(result.founderValue) : '—', color: '#f59e0b' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      {result.history.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]/50">
                {['Round', 'Investment', 'Post-Money', 'Price/Share', 'New Shares', 'Founder %'].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 font-medium text-[#6b7280]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.history.map((h, i) => (
                <tr key={i} className="border-b border-[#F5F6F8]">
                  <td className="py-2 pr-4 font-medium text-[#0F1112]">{h.round}</td>
                  <td className="py-2 pr-4 text-[#484848]">{fmt(parseFloat(rounds[i]?.investment) || 0)}</td>
                  <td className="py-2 pr-4 text-[#484848]">{fmt(h.postMoney)}</td>
                  <td className="py-2 pr-4 text-[#484848]">${h.price.toFixed(4)}</td>
                  <td className="py-2 pr-4 text-[#484848]">{Math.round(h.newShares).toLocaleString()}</td>
                  <td className="py-2 font-bold" style={{ color: COLOR }}>{h.founderPct.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
