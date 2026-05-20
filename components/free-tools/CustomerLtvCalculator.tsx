'use client';
import { useState, useMemo } from 'react';

const COLOR = '#6366f1';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function CustomerLtvCalculator() {
  const [model, setModel] = useState<'simple' | 'advanced'>('simple');
  const [arpu, setArpu] = useState('50');
  const [churn, setChurn] = useState('5');
  const [grossMargin, setGrossMargin] = useState('70');
  const [cac, setCac] = useState('200');
  const [discountRate, setDiscountRate] = useState('10');

  const result = useMemo(() => {
    const a = parseFloat(arpu) || 0;
    const ch = parseFloat(churn) / 100 || 0.05;
    const gm = parseFloat(grossMargin) / 100 || 0.7;
    const cacVal = parseFloat(cac) || 0;
    const dr = parseFloat(discountRate) / 100 || 0.1;

    const avgLifeMonths = ch > 0 ? 1 / ch : 0;
    const simpleLtv = ch > 0 ? (a / ch) : 0;
    const marginLtv = simpleLtv * gm;
    const discountedLtv = dr > 0 ? (a * gm) / (ch + dr / 12) : 0;
    const ltvCacRatio = cacVal > 0 ? marginLtv / cacVal : 0;
    const paybackMonths = cacVal > 0 && a > 0 ? cacVal / (a * gm) : 0;

    return { avgLifeMonths, simpleLtv, marginLtv, discountedLtv, ltvCacRatio, paybackMonths };
  }, [arpu, churn, grossMargin, cac, discountRate]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex rounded-lg border border-[#E5E7EC] overflow-hidden self-start">
        {(['simple', 'advanced'] as const).map((m) => (
          <button key={m} onClick={() => setModel(m)}
            className="px-5 py-2 text-[13px] font-medium capitalize transition-colors"
            style={model === m ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
            {m}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Avg Revenue Per User ($/mo)', val: arpu, set: setArpu, ph: '50' },
          { label: 'Monthly Churn Rate (%)', val: churn, set: setChurn, ph: '5' },
          { label: 'Gross Margin (%)', val: grossMargin, set: setGrossMargin, ph: '70' },
          { label: 'Customer Acquisition Cost ($)', val: cac, set: setCac, ph: '200' },
          ...(model === 'advanced' ? [{ label: 'Annual Discount Rate (%)', val: discountRate, set: setDiscountRate, ph: '10' }] : []),
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0} placeholder={ph}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: 'Simple LTV', val: fmt(result.simpleLtv), color: COLOR, note: 'ARPU / churn rate' },
          { label: 'LTV (with margin)', val: fmt(result.marginLtv), color: '#10b981', note: `at ${grossMargin}% gross margin` },
          ...(model === 'advanced' ? [{ label: 'Discounted LTV', val: fmt(result.discountedLtv), color: '#f59e0b', note: `${discountRate}% discount rate` }] : []),
          { label: 'Avg Customer Lifetime', val: `${result.avgLifeMonths.toFixed(1)} months`, color: '#6b7280', note: '' },
          { label: 'LTV:CAC Ratio', val: result.ltvCacRatio.toFixed(2) + '×', color: result.ltvCacRatio >= 3 ? '#22c55e' : result.ltvCacRatio >= 1 ? '#f59e0b' : '#ef4444', note: 'target: 3×' },
          { label: 'CAC Payback Period', val: `${result.paybackMonths.toFixed(1)} months`, color: '#0ea5e9', note: '' },
        ].map(({ label, val, color, note }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
            {note && <span className="text-[11px] text-[#9ca3af]">{note}</span>}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] p-4 text-[13px] text-[#484848]">
        <strong>LTV:CAC ratio {result.ltvCacRatio.toFixed(1)}×</strong> — {
          result.ltvCacRatio >= 3
            ? 'Healthy unit economics. Your revenue per customer well exceeds acquisition cost.'
            : result.ltvCacRatio >= 1
            ? 'Marginal. Consider reducing churn or CAC to reach the 3× benchmark.'
            : 'Below breakeven. Each customer costs more to acquire than they generate.'
        }
      </div>
    </div>
  );
}
