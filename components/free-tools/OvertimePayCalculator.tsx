'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f59e0b';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export default function OvertimePayCalculator() {
  const [payType, setPayType] = useState<'hourly' | 'salary'>('hourly');
  const [baseWage, setBaseWage] = useState('25');
  const [annualSalary, setAnnualSalary] = useState('52000');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [regularHours, setRegularHours] = useState('40');
  const [totalHours, setTotalHours] = useState('48');
  const [otMultiplier, setOtMultiplier] = useState('1.5');

  const result = useMemo(() => {
    const std = parseFloat(regularHours) || 40;
    const total = parseFloat(totalHours) || 0;
    const mult = parseFloat(otMultiplier) || 1.5;

    let hourly: number;
    if (payType === 'hourly') {
      hourly = parseFloat(baseWage) || 0;
    } else {
      const annual = parseFloat(annualSalary) || 0;
      const weeks = parseFloat(hoursPerWeek) || 40;
      hourly = annual / (52 * weeks);
    }

    const otHours = Math.max(total - std, 0);
    const regularPay = Math.min(total, std) * hourly;
    const otRate = hourly * mult;
    const otPay = otHours * otRate;
    const totalPay = regularPay + otPay;
    const weeklyRegular = std * hourly;

    return { hourly, otHours, regularPay, otRate, otPay, totalPay, weeklyRegular };
  }, [payType, baseWage, annualSalary, hoursPerWeek, regularHours, totalHours, otMultiplier]);

  const MULTIPLIERS = [
    { label: '1.5× (Standard OT)', val: '1.5', note: 'US Federal FLSA, most EU' },
    { label: '2× (Double Time)', val: '2.0', note: 'California 12hr+/day, holidays' },
    { label: '2.5× (Public Holiday)', val: '2.5', note: 'Some countries on public holidays' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden self-start">
        {(['hourly', 'salary'] as const).map((t) => (
          <button key={t} onClick={() => setPayType(t)}
            className="px-5 py-2.5 text-[13px] font-medium capitalize transition-colors active:scale-95"
            style={payType === t ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
            {t === 'hourly' ? 'Hourly Employee' : 'Salaried Employee'}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {payType === 'hourly' ? (
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Hourly Wage ($)</label>
            <input type="number" value={baseWage} onChange={(e) => setBaseWage(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#0F1112]">Annual Salary ($)</label>
              <input type="number" value={annualSalary} onChange={(e) => setAnnualSalary(e.target.value)} min={0}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#0F1112]">Standard Hours / Week</label>
              <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} min={1}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
            </div>
          </>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Regular Hours Threshold</label>
          <input type="number" value={regularHours} onChange={(e) => setRegularHours(e.target.value)} min={1}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Total Hours Worked This Week</label>
          <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Overtime Rate</label>
          <div className="flex flex-wrap gap-2">
            {MULTIPLIERS.map((m) => (
              <button key={m.val} onClick={() => setOtMultiplier(m.val)}
                className="flex flex-col items-start px-3 py-2 rounded-xl border text-left transition-colors active:scale-95"
                style={otMultiplier === m.val ? { borderColor: COLOR, background: `${COLOR}12` } : { borderColor: '#E5E7EC' }}>
                <span className="text-[12px] font-semibold text-[#0F1112]">{m.label}</span>
                <span className="text-[11px] text-[#9ca3af]">{m.note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Regular Pay', val: fmt(result.regularPay), color: '#6b7280' },
          { label: 'OT Hours', val: `${result.otHours}h`, color: COLOR },
          { label: 'OT Rate', val: `${fmt(result.otRate)}/hr`, color: '#6366f1' },
          { label: 'Total Weekly Pay', val: fmt(result.totalPay), color: '#22c55e' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      {result.otHours > 0 && (
        <div className="rounded-xl border border-[#E5E7EC] overflow-hidden text-[13px]">
          {[
            { label: 'Base Hourly Rate', val: `${fmt(result.hourly)}/hr` },
            { label: `Regular Pay (${Math.min(parseFloat(totalHours), parseFloat(regularHours))}h × ${fmt(result.hourly)})`, val: fmt(result.regularPay) },
            { label: `OT Pay (${result.otHours}h × ${fmt(result.otRate)})`, val: fmt(result.otPay) },
            { label: 'Total Weekly Pay', val: fmt(result.totalPay) },
          ].map((r, i) => (
            <div key={i} className={`flex justify-between px-4 py-2.5 border-b border-[#F0F1F3] last:border-0 ${i === 3 ? 'font-bold bg-[#F5F6F8]' : ''}`}>
              <span className="text-[#484848]">{r.label}</span>
              <span className="text-[#0F1112]">{r.val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
