'use client';
import { useState, useMemo } from 'react';

const COLOR = '#6366f1';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Tier { name: string; price: string; users: string; }

export default function SaasPricingCalculator() {
  const [tiers, setTiers] = useState<Tier[]>([
    { name: 'Starter', price: '29', users: '50' },
    { name: 'Growth', price: '99', users: '30' },
    { name: 'Pro', price: '299', users: '15' },
    { name: 'Enterprise', price: '999', users: '5' },
  ]);
  const [annualDiscount, setAnnualDiscount] = useState('20');
  const [churn, setChurn] = useState('3');

  function updateTier(i: number, f: keyof Tier, v: string) {
    setTiers((p) => p.map((t, idx) => idx === i ? { ...t, [f]: v } : t));
  }

  const result = useMemo(() => {
    const disc = (parseFloat(annualDiscount) || 0) / 100;
    const ch = (parseFloat(churn) || 0) / 100;

    const tierData = tiers.map((t) => {
      const price = parseFloat(t.price) || 0;
      const users = parseFloat(t.users) || 0;
      const mrr = price * users;
      const annualPrice = price * 12 * (1 - disc);
      return { ...t, price, users, mrr, annualPrice };
    });

    const totalMrr = tierData.reduce((s, t) => s + t.mrr, 0);
    const totalUsers = tierData.reduce((s, t) => s + t.users, 0);
    const arr = totalMrr * 12;
    const ltv = ch > 0 ? totalMrr / totalUsers / ch : 0;

    return { tierData, totalMrr, totalUsers, arr, ltv };
  }, [tiers, annualDiscount, churn]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h3 className="text-[14px] font-semibold text-[#0F1112]">Pricing Tiers</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]/50">
                <th className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">Tier Name</th>
                <th className="text-right py-2.5 pr-3 font-medium text-[#6b7280]">Price/mo ($)</th>
                <th className="text-right py-2.5 pr-3 font-medium text-[#6b7280]">Current Users</th>
                <th className="text-right py-2.5 font-medium text-[#6b7280]">MRR</th>
              </tr>
            </thead>
            <tbody>
              {result.tierData.map((t, i) => (
                <tr key={i} className="border-b border-[#F5F6F8]">
                  <td className="py-2 pr-3">
                    <input type="text" value={t.name} onChange={(e) => updateTier(i, 'name', e.target.value)}
                      className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#6366f1]" />
                  </td>
                  <td className="py-2 pr-3">
                    <input type="number" value={tiers[i].price} onChange={(e) => updateTier(i, 'price', e.target.value)} min={0}
                      className="w-24 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#6366f1]" />
                  </td>
                  <td className="py-2 pr-3">
                    <input type="number" value={tiers[i].users} onChange={(e) => updateTier(i, 'users', e.target.value)} min={0}
                      className="w-24 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#6366f1]" />
                  </td>
                  <td className="py-2 text-right font-medium" style={{ color: COLOR }}>{fmt(t.mrr)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Annual Plan Discount (%)</label>
          <input type="number" value={annualDiscount} onChange={(e) => setAnnualDiscount(e.target.value)} min={0} max={100}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Monthly Churn Rate (%)</label>
          <input type="number" value={churn} onChange={(e) => setChurn(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total MRR', val: fmt(result.totalMrr), color: COLOR },
          { label: 'ARR', val: fmt(result.arr), color: '#10b981' },
          { label: 'Total Users', val: result.totalUsers.toString(), color: '#f59e0b' },
          { label: 'Avg LTV', val: result.ltv > 0 ? fmt(result.ltv) : '—', color: '#6b7280' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Revenue by Tier</span>
        {result.tierData.map((t, i) => {
          const pct = result.totalMrr > 0 ? (t.mrr / result.totalMrr) * 100 : 0;
          const COLORS = [COLOR, '#10b981', '#f59e0b', '#ef4444'];
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] text-[#6b7280] w-20 shrink-0">{t.name}</span>
              <div className="flex-1 h-4 bg-[#F5F6F8] rounded-full overflow-hidden">
                <div className="h-full rounded-full flex items-center px-2 transition-all" style={{ width: `${Math.max(pct, 2)}%`, background: COLORS[i % COLORS.length] }}>
                  <span className="text-[10px] text-white font-medium">{pct.toFixed(0)}%</span>
                </div>
              </div>
              <span className="text-[12px] font-medium text-[#0F1112] w-20 text-right shrink-0">{fmt(t.mrr)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
