'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function SaasValuationCalculator() {
  const [arr, setArr] = useState('1000000');
  const [mrrGrowth, setMrrGrowth] = useState('10');
  const [nrr, setNrr] = useState('110');
  const [grossMargin, setGrossMargin] = useState('75');
  const [churn, setChurn] = useState('2');

  const result = useMemo(() => {
    const arrVal = parseFloat(arr) || 0;
    const growth = parseFloat(mrrGrowth) || 0;
    const nrrVal = parseFloat(nrr) || 100;
    const gm = parseFloat(grossMargin) || 0;
    const churnVal = parseFloat(churn) || 0;

    // --- ARR Multiple range ---
    let multLow: number;
    let multHigh: number;
    if (growth < 5) { multLow = 3; multHigh = 5; }
    else if (growth < 10) { multLow = 6; multHigh = 8; }
    else if (growth <= 20) { multLow = 8; multHigh = 12; }
    else { multLow = 12; multHigh = 20; }

    // NRR adjustment
    let nrrAdj = 0;
    if (nrrVal > 120) nrrAdj = 0.20;
    else if (nrrVal > 110) nrrAdj = 0.10;
    else if (nrrVal < 90) nrrAdj = -0.20;

    const adjMultLow = multLow * (1 + nrrAdj);
    const adjMultHigh = multHigh * (1 + nrrAdj);
    const valuationLow = arrVal * adjMultLow;
    const valuationHigh = arrVal * adjMultHigh;
    const multUsedLow = adjMultLow;
    const multUsedHigh = adjMultHigh;

    // --- Projected ARR (12 months) ---
    const projectedARR = arrVal * Math.pow(1 + growth / 100, 12) * (nrrVal / 100);
    const projectedValuation = projectedARR * adjMultLow;

    // --- Rule of 40 ---
    const annualizedGrowth = growth * 12;
    const ebitdaProxy = gm - 40;
    const ruleOf40Score = annualizedGrowth + ebitdaProxy;

    // Rule of 40 valuation adjustment
    let ruleAdj = 0;
    if (ruleOf40Score > 40) ruleAdj = 0.20;
    else if (ruleOf40Score < 20) ruleAdj = -0.20;

    // Final adjusted range (apply Rule of 40)
    const finalLow = valuationLow * (1 + ruleAdj);
    const finalHigh = valuationHigh * (1 + ruleAdj);

    // NRR quality label
    let nrrQuality: string;
    if (nrrVal >= 120) nrrQuality = 'Excellent';
    else if (nrrVal >= 100) nrrQuality = 'Good';
    else nrrQuality = 'Needs Work';

    // Valuation grade
    let grade: string;
    const avgMult = (multUsedLow + multUsedHigh) / 2 * (1 + ruleAdj) * (1 + nrrAdj);
    if (ruleOf40Score > 60 && nrrVal >= 120 && churnVal < 1) grade = 'A+';
    else if (ruleOf40Score > 40 && nrrVal >= 110 && churnVal < 2) grade = 'A';
    else if (ruleOf40Score > 20 && nrrVal >= 100) grade = 'B';
    else grade = 'C';
    // suppress unused warning
    void avgMult;

    return {
      valuationLow: finalLow,
      valuationHigh: finalHigh,
      multUsedLow: adjMultLow * (1 + ruleAdj),
      multUsedHigh: adjMultHigh * (1 + ruleAdj),
      ruleOf40Score,
      projectedARR,
      projectedValuation,
      nrrQuality,
      grade,
      // driver quality signals
      growthSignal: growth >= 10 ? 'green' : growth >= 5 ? 'orange' : 'red',
      nrrSignal: nrrVal >= 110 ? 'green' : nrrVal >= 100 ? 'orange' : 'red',
      gmSignal: gm >= 70 ? 'green' : gm >= 55 ? 'orange' : 'red',
      churnSignal: churnVal < 2 ? 'green' : churnVal < 5 ? 'orange' : 'red',
    };
  }, [arr, mrrGrowth, nrr, grossMargin, churn]);

  const signalColor = (s: string) =>
    s === 'green' ? '#22c55e' : s === 'orange' ? COLOR : '#ef4444';
  const signalBg = (s: string) =>
    s === 'green' ? '#f0fdf4' : s === 'orange' ? '#fff7f5' : '#fef2f2';
  const signalBorder = (s: string) =>
    s === 'green' ? '#bbf7d0' : s === 'orange' ? '#fcd9cd' : '#fecaca';
  const signalLabel = (s: string) =>
    s === 'green' ? 'Strong' : s === 'orange' ? 'Average' : 'Weak';

  const gradeColor = (g: string) =>
    g === 'A+' ? '#22c55e' : g === 'A' ? '#16a34a' : g === 'B' ? COLOR : '#ef4444';

  const nrrQualityColor = (q: string) =>
    q === 'Excellent' ? '#22c55e' : q === 'Good' ? COLOR : '#ef4444';

  return (
    <div className="flex flex-col gap-5">
      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Annual Recurring Revenue — ARR ($)', val: arr, set: setArr, ph: '1000000' },
          { label: 'MRR Growth Rate (% per month)', val: mrrGrowth, set: setMrrGrowth, ph: '10' },
          { label: 'Net Revenue Retention — NRR (%)', val: nrr, set: setNrr, ph: '110' },
          { label: 'Gross Margin (%)', val: grossMargin, set: setGrossMargin, ph: '75' },
          { label: 'Monthly Churn Rate (%)', val: churn, set: setChurn, ph: '2' },
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

      {/* Key output metric cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          {
            label: 'Estimated Valuation Range',
            val: `${fmt(result.valuationLow)} – ${fmt(result.valuationHigh)}`,
            color: COLOR,
          },
          {
            label: 'ARR Multiple Used',
            val: `${result.multUsedLow.toFixed(1)}x – ${result.multUsedHigh.toFixed(1)}x`,
            color: COLOR,
          },
          {
            label: 'Rule of 40 Score',
            val: `${result.ruleOf40Score.toFixed(1)}`,
            color: result.ruleOf40Score >= 40 ? '#22c55e' : result.ruleOf40Score >= 20 ? COLOR : '#ef4444',
          },
          {
            label: 'Projected ARR (12 months)',
            val: fmt(result.projectedARR),
            color: '#6366f1',
          },
          {
            label: 'NRR Quality',
            val: result.nrrQuality,
            color: nrrQualityColor(result.nrrQuality),
          },
          {
            label: 'Valuation Grade',
            val: result.grade,
            color: gradeColor(result.grade),
          },
        ].map(({ label, val, color }) => (
          <div
            key={label}
            className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5"
          >
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[22px] font-bold leading-tight" style={{ color }}>
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* Rule of 40 health bar */}
      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-[#0F1112]">Rule of 40 Health</span>
          <span
            className="text-[13px] font-semibold"
            style={{
              color:
                result.ruleOf40Score >= 40
                  ? '#22c55e'
                  : result.ruleOf40Score >= 20
                  ? COLOR
                  : '#ef4444',
            }}
          >
            {result.ruleOf40Score >= 40
              ? 'Premium'
              : result.ruleOf40Score >= 20
              ? 'Standard'
              : 'Below Average'}
          </span>
        </div>
        <div className="h-2.5 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${Math.min(Math.max(result.ruleOf40Score, 0) * (100 / 80), 100)}%`,
              background:
                result.ruleOf40Score >= 40
                  ? '#22c55e'
                  : result.ruleOf40Score >= 20
                  ? COLOR
                  : '#ef4444',
            }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1">
          <span>&lt;20 Discount</span>
          <span>20–40 Standard</span>
          <span>&gt;40 Premium</span>
        </div>
      </div>

      {/* Valuation Drivers */}
      <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] p-4">
        <p className="text-[13px] font-semibold text-[#0F1112] mb-3">Valuation Drivers</p>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Growth Rate', signal: result.growthSignal },
            { name: 'NRR', signal: result.nrrSignal },
            { name: 'Gross Margin', signal: result.gmSignal },
            { name: 'Churn', signal: result.churnSignal },
          ].map(({ name, signal }) => (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold border"
              style={{
                color: signalColor(signal),
                background: signalBg(signal),
                borderColor: signalBorder(signal),
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: signalColor(signal) }}
              />
              {name}: {signalLabel(signal)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
