'use client';
import { useState, useMemo } from 'react';

const COLOR = '#06b6d4';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface FeeRow { label: string; amount: string; frequency: 'monthly' | 'annual' | 'one-time'; included: boolean; }

export default function SchoolFeeCalculator() {
  const [fees, setFees] = useState<FeeRow[]>([
    { label: 'Tuition', amount: '500', frequency: 'monthly', included: true },
    { label: 'Registration / Admission', amount: '200', frequency: 'one-time', included: true },
    { label: 'Books & Stationery', amount: '300', frequency: 'annual', included: true },
    { label: 'Uniform', amount: '150', frequency: 'annual', included: true },
    { label: 'Transport', amount: '80', frequency: 'monthly', included: true },
    { label: 'Extracurricular Activities', amount: '50', frequency: 'monthly', included: false },
    { label: 'Exam Fees', amount: '100', frequency: 'annual', included: true },
    { label: 'Lab / Technology Fee', amount: '200', frequency: 'annual', included: false },
  ]);
  const [months, setMonths] = useState('12');
  const [siblings, setSiblings] = useState('1');
  const [discount, setDiscount] = useState('0');

  function toggle(i: number) { setFees((f) => f.map((r, idx) => idx === i ? { ...r, included: !r.included } : r)); }
  function update(i: number, f: keyof FeeRow, v: string) {
    setFees((p) => p.map((r, idx) => idx === i ? { ...r, [f]: v } : r));
  }

  const result = useMemo(() => {
    const mo = parseFloat(months) || 12;
    const sib = parseFloat(siblings) || 1;
    const disc = parseFloat(discount) / 100;

    const included = fees.filter((f) => f.included);
    const monthly = included.filter((f) => f.frequency === 'monthly').reduce((s, f) => s + (parseFloat(f.amount) || 0), 0);
    const annual = included.filter((f) => f.frequency === 'annual').reduce((s, f) => s + (parseFloat(f.amount) || 0), 0);
    const onceOff = included.filter((f) => f.frequency === 'one-time').reduce((s, f) => s + (parseFloat(f.amount) || 0), 0);

    const perChild = monthly * mo + annual + onceOff;
    const total = perChild * sib * (1 - disc);
    const totalDiscount = perChild * sib - total;

    return { monthly, annual, onceOff, perChild, total, totalDiscount };
  }, [fees, months, siblings, discount]);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-3 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Academic Months', val: months, set: setMonths },
          { label: 'Number of Children', val: siblings, set: setSiblings },
          { label: 'Sibling Discount (%)', val: discount, set: setDiscount },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]">
              {['Include', 'Fee Type', 'Amount ($)', 'Frequency'].map((h) => (
                <th key={h} className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fees.map((f, i) => (
              <tr key={i} className={`border-b border-[#F5F6F8] ${!f.included ? 'opacity-50' : ''}`}>
                <td className="py-2 pr-3">
                  <input type="checkbox" checked={f.included} onChange={() => toggle(i)} className="w-4 h-4 accent-[#06b6d4]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="text" value={f.label} onChange={(e) => update(i, 'label', e.target.value)}
                    className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#06b6d4]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="number" value={f.amount} onChange={(e) => update(i, 'amount', e.target.value)} min={0}
                    className="w-24 outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#06b6d4]" />
                </td>
                <td className="py-2">
                  <select value={f.frequency} onChange={(e) => update(i, 'frequency', e.target.value as FeeRow['frequency'])}
                    className="rounded-lg border border-[#E5E7EC] px-2 py-1.5 text-[12px] text-[#0F1112] outline-none">
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual</option>
                    <option value="one-time">One-time</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
          {[
            { label: `Monthly Fees × ${months} months`, val: fmt(result.monthly * (parseFloat(months) || 12)) },
            { label: 'Annual Fees', val: fmt(result.annual) },
            { label: 'One-time Fees', val: fmt(result.onceOff) },
            { label: 'Per Child Total', val: fmt(result.perChild) },
          ].map((r, i) => (
            <div key={i} className="flex justify-between px-4 py-3 border-b border-[#F5F6F8] last:border-0 last:font-semibold">
              <span className="text-[13px] text-[#484848]">{r.label}</span>
              <span className="text-[13px] text-[#0F1112]">{r.val}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[#F5F6F8] border-2 p-6 flex flex-col items-center gap-2" style={{ borderColor: COLOR }}>
          <span className="text-[13px] text-[#6b7280]">Total for {siblings} child{+siblings !== 1 ? 'ren' : ''}</span>
          <span className="text-[42px] font-bold" style={{ color: COLOR }}>{fmt(result.total)}</span>
          {result.totalDiscount > 0 && (
            <span className="text-[13px] text-[#22c55e]">Saved {fmt(result.totalDiscount)} with sibling discount</span>
          )}
          <span className="text-[12px] text-[#9ca3af]">over {months} months</span>
        </div>
      </div>
    </div>
  );
}
