'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f59e0b';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function FreelanceRateCalculator() {
  const [annualIncome, setAnnualIncome] = useState('80000');
  const [billableWeeks, setBillableWeeks] = useState('46');
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState('30');
  const [taxRate, setTaxRate] = useState('25');
  const [businessExpenses, setBusinessExpenses] = useState('5000');
  const [healthInsurance, setHealthInsurance] = useState('3600');
  const [vacationWeeks, setVacationWeeks] = useState('4');
  const [buffer, setBuffer] = useState('20');

  const result = useMemo(() => {
    const income = parseFloat(annualIncome) || 0;
    const weeks = parseFloat(billableWeeks) || 46;
    const hrs = parseFloat(billableHoursPerWeek) || 30;
    const tax = parseFloat(taxRate) / 100;
    const expenses = parseFloat(businessExpenses) || 0;
    const health = parseFloat(healthInsurance) || 0;
    const bufferPct = parseFloat(buffer) / 100;

    const totalNeeded = income + expenses + health;
    const afterTax = totalNeeded / (1 - tax);
    const withBuffer = afterTax * (1 + bufferPct);
    const totalBillableHours = weeks * hrs;
    const minRate = totalBillableHours > 0 ? withBuffer / totalBillableHours : 0;
    const annualHours = 52 * 40;
    const utilization = (totalBillableHours / annualHours) * 100;

    return { totalNeeded, afterTax, withBuffer, totalBillableHours, minRate, utilization };
  }, [annualIncome, billableWeeks, billableHoursPerWeek, taxRate, businessExpenses, healthInsurance, buffer]);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Target Annual Take-Home ($)', val: annualIncome, set: setAnnualIncome },
          { label: 'Tax Rate (%)', val: taxRate, set: setTaxRate },
          { label: 'Billable Weeks / Year', val: billableWeeks, set: setBillableWeeks },
          { label: 'Billable Hours / Week', val: billableHoursPerWeek, set: setBillableHoursPerWeek },
          { label: 'Annual Business Expenses ($)', val: businessExpenses, set: setBusinessExpenses },
          { label: 'Annual Health Insurance ($)', val: healthInsurance, set: setHealthInsurance },
          { label: 'Vacation Weeks', val: vacationWeeks, set: setVacationWeeks },
          { label: 'Buffer / Uncertainty (%)', val: buffer, set: setBuffer },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col items-center gap-2">
        <span className="text-[14px] text-[#6b7280]">Minimum Hourly Rate</span>
        <span className="text-[56px] font-bold" style={{ color: COLOR }}>${result.minRate.toFixed(0)}/hr</span>
        <span className="text-[13px] text-[#6b7280]">to meet your income goals</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'Gross Revenue Needed', val: fmt(result.withBuffer), color: COLOR },
          { label: 'Billable Hours / Year', val: result.totalBillableHours.toString(), color: '#6366f1' },
          { label: 'Utilization Rate', val: `${result.utilization.toFixed(0)}%`, color: '#10b981' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] overflow-hidden text-[13px]">
        {[
          { label: 'Target Take-Home', val: fmt(parseFloat(annualIncome) || 0) },
          { label: 'Business Expenses', val: fmt(parseFloat(businessExpenses) || 0) },
          { label: 'Health Insurance', val: fmt(parseFloat(healthInsurance) || 0) },
          { label: 'Pre-tax Total Needed', val: fmt(result.totalNeeded) },
          { label: `Tax Gross-up (${taxRate}%)`, val: fmt(result.afterTax - result.totalNeeded) },
          { label: `Buffer (${buffer}%)`, val: fmt(result.withBuffer - result.afterTax) },
          { label: 'Gross Revenue Target', val: fmt(result.withBuffer) },
        ].map((r, i) => (
          <div key={i} className={`flex justify-between px-4 py-2.5 border-b border-[#F0F1F3] last:border-0 ${i === 6 ? 'font-bold bg-[#F5F6F8]' : ''}`}>
            <span className="text-[#484848]">{r.label}</span>
            <span className="text-[#0F1112]">{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
