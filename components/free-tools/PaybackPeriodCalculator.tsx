'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function PaybackPeriodCalculator() {
  const [cac, setCac] = useState('1200');
  const [arpu, setArpu] = useState('100');
  const [grossMargin, setGrossMargin] = useState('75');
  const [churnRate, setChurnRate] = useState('');
  const [salesCycle, setSalesCycle] = useState('');

  const result = useMemo(() => {
    const cacVal = parseFloat(cac) || 0;
    const arpuVal = parseFloat(arpu) || 0;
    const gm = parseFloat(grossMargin) || 0;
    const churn = parseFloat(churnRate) || 0;
    const cycle = parseFloat(salesCycle) || 0;

    const monthlyContribution = arpuVal * (gm / 100);
    const paybackMonths = monthlyContribution > 0 ? cacVal / monthlyContribution : 0;
    const adjustedPayback = paybackMonths + cycle;
    const ltv = arpuVal > 0 && churn > 0 ? arpuVal / (churn / 100) : 0;
    const ltvCac = ltv > 0 && cacVal > 0 ? ltv / cacVal : 0;
    const ltvCacGm = ltv > 0 && cacVal > 0 ? (ltv * (gm / 100)) / cacVal : 0;
    const annualRoi = cacVal > 0 ? ((monthlyContribution * 12 - cacVal) / cacVal) * 100 : 0;

    return {
      paybackMonths,
      adjustedPayback,
      monthlyContribution,
      ltv,
      ltvCac,
      ltvCacGm,
      annualRoi,
      hasChurn: churn > 0,
      hasCycle: cycle > 0,
    };
  }, [cac, arpu, grossMargin, churnRate, salesCycle]);

  function paybackColor(months: number) {
    if (months < 12) return '#22c55e';
    if (months < 18) return '#f26b4e';
    return '#ef4444';
  }

  function ltvCacColor(ratio: number) {
    if (ratio >= 3) return '#22c55e';
    if (ratio >= 1) return '#f26b4e';
    return '#ef4444';
  }

  function paybackLabel(months: number) {
    if (months < 6) return { label: 'Exceptional', color: '#16a34a' };
    if (months < 12) return { label: 'Best-in-class', color: '#22c55e' };
    if (months < 18) return { label: 'Acceptable', color: '#f26b4e' };
    if (months < 24) return { label: 'Needs Attention', color: '#ef4444' };
    return { label: 'Critical', color: '#dc2626' };
  }

  function paybackInterpretation(months: number): string {
    if (months <= 0) return 'Enter your inputs above to calculate the CAC payback period.';
    if (months < 6) return `You recover each customer's acquisition cost in under 6 months — exceptional capital efficiency.`;
    if (months < 12) return `A ${months.toFixed(1)}-month payback is best-in-class; most top SaaS companies target under 12 months.`;
    if (months < 18) return `At ${months.toFixed(1)} months, payback is acceptable but consider optimising ARPU or reducing CAC.`;
    if (months < 24) return `A ${months.toFixed(1)}-month payback needs attention — increase gross margin or lower acquisition costs.`;
    return `A ${months.toFixed(1)}-month payback is critical; you are at risk of burning cash faster than you can recover it.`;
  }

  const { label: benchmarkLabel, color: benchmarkColor } = paybackLabel(result.paybackMonths);
  const barPct = result.paybackMonths > 0 ? Math.min((result.paybackMonths / 24) * 100, 100) : 0;

  const metricCards = [
    {
      label: 'CAC Payback Period',
      val: result.paybackMonths > 0 ? `${result.paybackMonths.toFixed(1)} mo` : '—',
      color: result.paybackMonths > 0 ? paybackColor(result.paybackMonths) : COLOR,
      show: true,
    },
    {
      label: 'Adjusted Payback (incl. Sales Cycle)',
      val: result.adjustedPayback > 0 ? `${result.adjustedPayback.toFixed(1)} mo` : '—',
      color: result.adjustedPayback > 0 ? paybackColor(result.adjustedPayback) : COLOR,
      show: result.hasCycle,
    },
    {
      label: 'Monthly Revenue Contribution',
      val: result.monthlyContribution > 0 ? fmt(result.monthlyContribution) : '—',
      color: COLOR,
      show: true,
    },
    {
      label: 'Annual ROI (Year 1)',
      val: result.annualRoi !== 0 ? `${result.annualRoi.toFixed(1)}%` : '—',
      color: result.annualRoi >= 0 ? '#22c55e' : '#ef4444',
      show: true,
    },
    {
      label: 'Customer LTV',
      val: result.ltv > 0 ? fmt(result.ltv) : '—',
      color: COLOR,
      show: result.hasChurn,
    },
    {
      label: 'LTV:CAC Ratio',
      val: result.ltvCac > 0 ? `${result.ltvCac.toFixed(1)}x` : '—',
      color: result.ltvCac > 0 ? ltvCacColor(result.ltvCac) : COLOR,
      show: result.hasChurn,
    },
  ].filter((c) => c.show);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Customer Acquisition Cost (CAC) ($)', val: cac, set: setCac, ph: '1200', hint: 'Total sales + marketing cost per new customer' },
          { label: 'Average Revenue Per User (ARPU) ($/month)', val: arpu, set: setArpu, ph: '100', hint: 'Monthly subscription revenue per customer' },
          { label: 'Gross Margin (%)', val: grossMargin, set: setGrossMargin, ph: '75', hint: 'Revenue minus COGS as a percentage' },
          { label: 'Monthly Churn Rate (%) — optional', val: churnRate, set: setChurnRate, ph: '2', hint: 'Used to calculate LTV and LTV:CAC' },
          { label: 'Sales Cycle Length (months) — optional', val: salesCycle, set: setSalesCycle, ph: '3', hint: 'Added to payback for full time-to-revenue' },
        ].map(({ label, val, set, ph, hint }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            {hint && <span className="text-[11px] text-[#9ca3af]">{hint}</span>}
            <input
              type="number"
              value={val}
              onChange={(e) => set(e.target.value)}
              min={0}
              placeholder={ph}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {metricCards.map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-[#0F1112]">Payback Period Benchmark</span>
          <span className="text-[13px] font-semibold" style={{ color: benchmarkColor }}>
            {result.paybackMonths > 0 ? benchmarkLabel : '—'}
          </span>
        </div>
        <div className="h-2.5 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${barPct}%`, background: benchmarkColor }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1">
          <span>&lt;6 mo Exceptional</span>
          <span>12 mo Best-in-class</span>
          <span>18 mo Acceptable</span>
          <span>24+ mo Critical</span>
        </div>
      </div>

      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <p className="text-[13px] text-[#374151] leading-relaxed">
          {paybackInterpretation(result.paybackMonths)}
        </p>
      </div>
    </div>
  );
}
