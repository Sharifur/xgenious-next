'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

export default function LeaveAccrualCalculator() {
  const [annualDays, setAnnualDays] = useState('20');
  const [accrualType, setAccrualType] = useState<'annual' | 'monthly' | 'biweekly'>('monthly');
  const [usedDays, setUsedDays] = useState('5');
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10));
  const [asOfDate, setAsOfDate] = useState(new Date().toISOString().slice(0, 10));

  const result = useMemo(() => {
    const total = parseFloat(annualDays) || 0;
    const used = parseFloat(usedDays) || 0;

    const start = new Date(startDate);
    const asOf = new Date(asOfDate);
    if (isNaN(start.getTime()) || isNaN(asOf.getTime()) || asOf < start) {
      return null;
    }

    const msPerDay = 86400000;
    const daysPassed = (asOf.getTime() - start.getTime()) / msPerDay;

    let accrued: number;
    if (accrualType === 'annual') {
      accrued = total;
    } else if (accrualType === 'monthly') {
      const monthsPassed = (asOf.getFullYear() - start.getFullYear()) * 12 + (asOf.getMonth() - start.getMonth());
      accrued = (total / 12) * monthsPassed;
    } else {
      const biweeksPassed = Math.floor(daysPassed / 14);
      accrued = (total / 26) * biweeksPassed;
    }

    accrued = Math.min(accrued, total);
    const remaining = Math.max(accrued - used, 0);
    const perPeriod = accrualType === 'annual' ? total : accrualType === 'monthly' ? total / 12 : total / 26;
    const pendingDays = total - accrued;
    const pct = total > 0 ? (accrued / total) * 100 : 0;

    return { accrued, used, remaining, perPeriod, pendingDays, pct };
  }, [annualDays, accrualType, usedDays, startDate, asOfDate]);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Annual Leave Entitlement (days)</label>
          <input type="number" value={annualDays} onChange={(e) => setAnnualDays(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Days Already Used</label>
          <input type="number" value={usedDays} onChange={(e) => setUsedDays(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Accrual Period Start</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Calculate As Of</label>
          <input type="date" value={asOfDate} onChange={(e) => setAsOfDate(e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Accrual Frequency</label>
          <div className="flex rounded-xl border border-[#E5E7EC] bg-white overflow-hidden self-start">
            {([['annual', 'Annual'], ['monthly', 'Monthly'], ['biweekly', 'Bi-weekly']] as const).map(([v, l]) => (
              <button key={v} onClick={() => setAccrualType(v)}
                className="px-5 py-2.5 text-[13px] font-medium transition-colors"
                style={accrualType === v ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result ? (
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Accrued to Date', val: result.accrued.toFixed(1), unit: 'days', color: COLOR },
              { label: 'Used', val: result.used.toFixed(1), unit: 'days', color: '#f26b4e' },
              { label: 'Remaining Balance', val: result.remaining.toFixed(1), unit: 'days', color: '#f26b4e' },
            ].map(({ label, val, unit, color }) => (
              <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
                <span className="text-[12px] text-[#6b7280]">{label}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-bold" style={{ color }}>{val}</span>
                  <span className="text-[13px] text-[#6b7280]">{unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-[#6b7280]">Accrual progress</span>
              <span className="font-medium text-[#0F1112]">{result.accrued.toFixed(1)} / {annualDays} days ({result.pct.toFixed(0)}%)</span>
            </div>
            <div className="h-3 bg-[#E5E7EC] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${result.pct}%`, background: COLOR }} />
            </div>
          </div>

          <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4 grid sm:grid-cols-2 gap-3 text-[13px]">
            <div><span className="text-[#6b7280]">Accrues </span><strong className="text-[#0F1112]">{result.perPeriod.toFixed(2)} days</strong><span className="text-[#6b7280]"> per {accrualType === 'biweekly' ? 'fortnight' : accrualType === 'monthly' ? 'month' : 'year'}</span></div>
            <div><span className="text-[#6b7280]">Still to accrue: </span><strong className="text-[#0F1112]">{result.pendingDays.toFixed(1)} days</strong></div>
          </div>
        </div>
      ) : (
        <p className="text-[13px] text-red-500">Check that start date is before as-of date.</p>
      )}
    </div>
  );
}
