'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState('10000');
  const [variableCost, setVariableCost] = useState('5');
  const [revenuePerUnit, setRevenuePerUnit] = useState('50');
  const [currentRevenue, setCurrentRevenue] = useState('');

  const result = useMemo(() => {
    const fc = parseFloat(fixedCosts) || 0;
    const vc = parseFloat(variableCost) || 0;
    const rpu = parseFloat(revenuePerUnit) || 0;
    const cr = parseFloat(currentRevenue) || 0;

    const contributionMargin = rpu - vc;
    const contributionMarginPct = rpu > 0 ? (contributionMargin / rpu) * 100 : 0;
    const breakEvenUnits = contributionMargin > 0 ? fc / contributionMargin : 0;
    const breakEvenRevenue = contributionMargin > 0 ? fc / (contributionMargin / rpu) : 0;

    const hasCurrentRevenue = currentRevenue.trim() !== '' && cr > 0;
    const distanceToBreakEven = hasCurrentRevenue ? Math.max(breakEvenRevenue - cr, 0) : null;
    const safetyMargin = hasCurrentRevenue && cr > breakEvenRevenue && breakEvenRevenue > 0
      ? ((cr - breakEvenRevenue) / cr) * 100
      : null;

    // Progress: how far current revenue is toward break-even target
    const progressPct = hasCurrentRevenue && breakEvenRevenue > 0
      ? Math.min((cr / breakEvenRevenue) * 100, 100)
      : 0;

    return {
      contributionMargin,
      contributionMarginPct,
      breakEvenUnits,
      breakEvenRevenue,
      distanceToBreakEven,
      safetyMargin,
      progressPct,
      hasCurrentRevenue,
      currentRevenue: cr,
      isProfitable: hasCurrentRevenue && cr > breakEvenRevenue,
    };
  }, [fixedCosts, variableCost, revenuePerUnit, currentRevenue]);

  function progressColor(pct: number) {
    if (pct >= 100) return '#22c55e';
    if (pct >= 70) return '#f26b4e';
    return '#ef4444';
  }

  const metrics = [
    {
      label: 'Break-Even Units',
      val: result.breakEvenUnits > 0 ? result.breakEvenUnits.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '—',
      sub: 'customers / units needed',
      color: COLOR,
      show: true,
    },
    {
      label: 'Break-Even Revenue',
      val: result.breakEvenRevenue > 0 ? fmt(result.breakEvenRevenue) : '—',
      sub: 'monthly revenue to cover all costs',
      color: COLOR,
      show: true,
    },
    {
      label: 'Contribution Margin',
      val: result.contributionMargin > 0 ? fmt(result.contributionMargin) : '—',
      sub: 'profit per unit after variable cost',
      color: '#22c55e',
      show: true,
    },
    {
      label: 'Contribution Margin %',
      val: result.contributionMarginPct > 0 ? `${result.contributionMarginPct.toFixed(1)}%` : '—',
      sub: 'efficiency per unit of revenue',
      color: '#22c55e',
      show: true,
    },
    {
      label: 'Distance to Break-Even',
      val: result.distanceToBreakEven !== null
        ? result.distanceToBreakEven === 0
          ? 'Reached!'
          : fmt(result.distanceToBreakEven)
        : '—',
      sub: 'revenue gap remaining',
      color: result.distanceToBreakEven === 0 ? '#22c55e' : '#ef4444',
      show: result.hasCurrentRevenue,
    },
    {
      label: 'Safety Margin',
      val: result.safetyMargin !== null ? `${result.safetyMargin.toFixed(1)}%` : '—',
      sub: 'buffer above break-even',
      color: '#22c55e',
      show: result.isProfitable,
    },
  ];

  const visibleMetrics = metrics.filter((m) => m.show);

  return (
    <div className="flex flex-col gap-5">
      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Fixed Costs per Month ($)', val: fixedCosts, set: setFixedCosts, ph: '10000' },
          { label: 'Variable Cost per Unit ($)', val: variableCost, set: setVariableCost, ph: '5' },
          { label: 'Revenue per Unit ($)', val: revenuePerUnit, set: setRevenuePerUnit, ph: '50' },
          { label: 'Current Monthly Revenue ($)', val: currentRevenue, set: setCurrentRevenue, ph: 'Optional — e.g. 30000' },
        ].map(({ label, val, set, ph }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
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

      {/* Metric cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visibleMetrics.map(({ label, val, sub, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold leading-tight" style={{ color }}>{val}</span>
            <span className="text-[11px] text-[#9ca3af]">{sub}</span>
          </div>
        ))}
      </div>

      {/* Progress bar — Distance to Break-Even */}
      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-[#0F1112]">Progress to Break-Even</span>
          <span className="text-[13px] font-semibold" style={{ color: progressColor(result.progressPct) }}>
            {result.hasCurrentRevenue
              ? result.isProfitable
                ? 'Profitable'
                : `${result.progressPct.toFixed(0)}% there`
              : 'Enter current revenue'}
          </span>
        </div>
        <div className="h-2.5 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${result.hasCurrentRevenue ? result.progressPct : 0}%`,
              background: progressColor(result.progressPct),
            }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1.5">
          <span>$0</span>
          <span>
            Break-Even:{' '}
            {result.breakEvenRevenue > 0 ? fmt(result.breakEvenRevenue) : '—'}
          </span>
        </div>
        {result.hasCurrentRevenue && !result.isProfitable && result.distanceToBreakEven !== null && result.distanceToBreakEven > 0 && (
          <p className="mt-2 text-[12px] text-[#6b7280]">
            You need{' '}
            <strong className="text-[#0F1112]">{fmt(result.distanceToBreakEven)}</strong> more in
            monthly revenue to reach break-even.
          </p>
        )}
        {result.isProfitable && result.safetyMargin !== null && (
          <p className="mt-2 text-[12px] text-[#6b7280]">
            You are{' '}
            <strong style={{ color: '#22c55e' }}>{result.safetyMargin.toFixed(1)}% above break-even</strong>.
            Your business covers all costs with a healthy safety buffer.
          </p>
        )}
      </div>
    </div>
  );
}
