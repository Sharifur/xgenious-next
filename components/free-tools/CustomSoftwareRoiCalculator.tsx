'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function CustomSoftwareRoiCalculator() {
  const [devCost, setDevCost] = useState('80000');
  const [annualMaint, setAnnualMaint] = useState('12000');
  const [timeSavedHours, setTimeSavedHours] = useState('20');
  const [hourlyRate, setHourlyRate] = useState('50');
  const [employees, setEmployees] = useState('10');
  const [revenueBoost, setRevenueBoost] = useState('15000');
  const [errorReduction, setErrorReduction] = useState('5000');
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const dev = parseFloat(devCost) || 0;
    const maint = parseFloat(annualMaint) || 0;
    const hrs = parseFloat(timeSavedHours) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    const emps = parseFloat(employees) || 0;
    const revBoost = parseFloat(revenueBoost) || 0;
    const errSave = parseFloat(errorReduction) || 0;

    const annualTimeSavings = hrs * rate * emps * 52;
    const annualBenefits = annualTimeSavings + revBoost + errSave;
    const totalCost = dev + maint * years;
    const totalBenefits = annualBenefits * years;
    const netBenefit = totalBenefits - totalCost;
    const roi = totalCost > 0 ? (netBenefit / totalCost) * 100 : 0;
    const paybackMonths = annualBenefits > 0 ? (dev / annualBenefits) * 12 : -1;

    const annual = Array.from({ length: years }, (_, i) => {
      const yr = i + 1;
      const cumulativeBenefits = annualBenefits * yr;
      const cumulativeCosts = dev + maint * yr;
      return { yr, cumulativeBenefits, cumulativeCosts, net: cumulativeBenefits - cumulativeCosts };
    });

    return { annualTimeSavings, annualBenefits, totalCost, totalBenefits, netBenefit, roi, paybackMonths, annual };
  }, [devCost, annualMaint, timeSavedHours, hourlyRate, employees, revenueBoost, errorReduction, years]);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-3 pb-4 border-b border-[#E5E7EC]">
          <div className="text-[12px] font-semibold text-[#6b7280] uppercase tracking-wider sm:col-span-2">Costs</div>
          {[
            { label: 'Development / Vendor Cost ($)', val: devCost, set: setDevCost },
            { label: 'Annual Maintenance ($)', val: annualMaint, set: setAnnualMaint },
          ].map(({ label, val, set }) => (
            <div key={label} className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#0F1112]">{label}</label>
              <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
            </div>
          ))}
        </div>
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-3">
          <div className="text-[12px] font-semibold text-[#6b7280] uppercase tracking-wider sm:col-span-2">Annual Benefits</div>
          {[
            { label: 'Hours Saved / Employee / Week', val: timeSavedHours, set: setTimeSavedHours },
            { label: 'Avg Hourly Rate ($)', val: hourlyRate, set: setHourlyRate },
            { label: 'Number of Employees Benefitting', val: employees, set: setEmployees },
            { label: 'Annual Revenue Increase ($)', val: revenueBoost, set: setRevenueBoost },
            { label: 'Annual Error/Rework Savings ($)', val: errorReduction, set: setErrorReduction },
          ].map(({ label, val, set }) => (
            <div key={label} className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#0F1112]">{label}</label>
              <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
            </div>
          ))}
        </div>
        <div className="sm:col-span-2 flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#0F1112]">Analysis Period: {years} years</label>
          <input type="range" min={1} max={10} value={years} onChange={(e) => setYears(+e.target.value)}
            className="w-full accent-[#f26b4e]" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'ROI', val: `${result.roi.toFixed(0)}%`, color: result.roi > 100 ? '#22c55e' : result.roi > 0 ? '#f26b4e' : '#ef4444' },
          { label: 'Net Benefit', val: fmt(result.netBenefit), color: result.netBenefit > 0 ? '#22c55e' : '#ef4444' },
          { label: 'Payback Period', val: result.paybackMonths > 0 ? `${result.paybackMonths.toFixed(1)} mo` : 'Immediate', color: COLOR },
          { label: 'Annual Time Savings', val: fmt(result.annualTimeSavings), color: '#f26b4e' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Cumulative ROI Over {years} Years</span>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]/50">
                {['Year', 'Cumulative Benefits', 'Cumulative Costs', 'Net Benefit'].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 font-medium text-[#6b7280]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.annual.map((a) => (
                <tr key={a.yr} className="border-b border-[#F5F6F8]">
                  <td className="py-1.5 pr-4 text-[#484848]">Year {a.yr}</td>
                  <td className="py-1.5 pr-4 text-[#22c55e] font-medium">{fmt(a.cumulativeBenefits)}</td>
                  <td className="py-1.5 pr-4 text-[#ef4444]">{fmt(a.cumulativeCosts)}</td>
                  <td className="py-1.5 font-bold" style={{ color: a.net >= 0 ? '#22c55e' : '#ef4444' }}>{fmt(a.net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
