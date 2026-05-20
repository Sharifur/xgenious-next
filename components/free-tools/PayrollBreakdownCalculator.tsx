'use client';
import { useState, useMemo } from 'react';

const COLOR = '#7c3aed';

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

interface Row { label: string; amount: number; pct?: number; isDeduction?: boolean; }

export default function PayrollBreakdownCalculator() {
  const [gross, setGross] = useState('');
  const [fedTax, setFedTax] = useState('22');
  const [stateTax, setStateTax] = useState('5');
  const [fica, setFica] = useState('7.65');
  const [other, setOther] = useState('0');
  const [period, setPeriod] = useState<'annual' | 'monthly' | 'biweekly' | 'weekly'>('annual');

  const PERIODS: Record<typeof period, number> = { annual: 1, monthly: 12, biweekly: 26, weekly: 52 };

  const result = useMemo(() => {
    const g = parseFloat(gross) || 0;
    if (!g) return null;
    const annual = g * PERIODS[period];
    const fedAmt = annual * (parseFloat(fedTax) / 100);
    const stateAmt = annual * (parseFloat(stateTax) / 100);
    const ficaAmt = annual * (parseFloat(fica) / 100);
    const otherAmt = parseFloat(other) || 0;
    const totalDed = fedAmt + stateAmt + ficaAmt + otherAmt;
    const net = annual - totalDed;
    return { annual, fedAmt, stateAmt, ficaAmt, otherAmt, totalDed, net };
  }, [gross, fedTax, stateTax, fica, other, period]);

  const rows: Row[] = result ? [
    { label: 'Gross Annual', amount: result.annual },
    { label: `Federal Income Tax (${fedTax}%)`, amount: result.fedAmt, pct: +fedTax, isDeduction: true },
    { label: `State Income Tax (${stateTax}%)`, amount: result.stateAmt, pct: +stateTax, isDeduction: true },
    { label: `FICA (Social Security + Medicare) (${fica}%)`, amount: result.ficaAmt, pct: +fica, isDeduction: true },
    { label: 'Other Deductions', amount: result.otherAmt, isDeduction: true },
    { label: 'Total Deductions', amount: result.totalDed, isDeduction: true },
    { label: 'Net Annual Pay', amount: result.net },
  ] : [];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Gross Salary</label>
          <div className="flex items-center rounded-xl border border-[#E5E7EC] bg-white overflow-hidden focus-within:border-[#6366f1] focus-within:ring-2 focus-within:ring-[#6366f1]/10 transition-colors">
            <span className="px-3 text-[#6b7280] text-[14px]">$</span>
            <input
              type="number" value={gross} onChange={(e) => setGross(e.target.value)}
              placeholder="75000" min={0}
              className="flex-1 py-3 bg-white text-[14px] text-[#0F1112] outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Pay Period</label>
          <select
            value={period} onChange={(e) => setPeriod(e.target.value as typeof period)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/10 transition-colors"
          >
            <option value="annual">Annual</option>
            <option value="monthly">Monthly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        {[
          { label: 'Federal Tax %', val: fedTax, set: setFedTax },
          { label: 'State Tax %', val: stateTax, set: setStateTax },
          { label: 'FICA %', val: fica, set: setFica },
          { label: 'Other Deductions ($)', val: other, set: setOther },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input
              type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/10 transition-colors"
            />
          </div>
        ))}
      </div>

      {result && (
        <div className="flex flex-col gap-3">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Gross Annual', val: result.annual, color: COLOR },
              { label: 'Total Deductions', val: result.totalDed, color: '#ef4444' },
              { label: 'Net Take-Home', val: result.net, color: '#22c55e' },
            ].map(({ label, val, color }) => (
              <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
                <span className="text-[12px] text-[#6b7280]">{label}</span>
                <span className="text-[24px] font-bold" style={{ color }}>{fmt(val)}</span>
                <span className="text-[11px] text-[#9ca3af]">{fmt(val / 12)} / month</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
            {rows.map((r, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-2.5 border-b border-[#F0F1F3] last:border-0 ${
                  r.label === 'Net Annual Pay' ? 'bg-[#f0fdf4]' : r.label === 'Total Deductions' ? 'bg-[#fef2f2]' : ''
                }`}
              >
                <span className="text-[13px] text-[#484848]">{r.label}</span>
                <span className={`text-[13px] font-semibold ${
                  r.label === 'Net Annual Pay' ? 'text-[#22c55e]' : r.isDeduction && r.label !== 'Total Deductions' ? 'text-[#ef4444]' : 'text-[#0F1112]'
                }`}>
                  {r.isDeduction ? '-' : ''}{fmt(r.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
