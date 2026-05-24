'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function SalaryHikeCalculator() {
  const [currentSalary, setCurrentSalary] = useState('60000');
  const [hikeType, setHikeType] = useState<'percent' | 'flat'>('percent');
  const [hikeValue, setHikeValue] = useState('10');
  const [years, setYears] = useState(5);
  const [annualGrowth, setAnnualGrowth] = useState('8');

  const result = useMemo(() => {
    const current = parseFloat(currentSalary) || 0;
    const hike = parseFloat(hikeValue) || 0;
    const growth = parseFloat(annualGrowth) / 100;

    const newSalary = hikeType === 'percent' ? current * (1 + hike / 100) : current + hike;
    const increase = newSalary - current;
    const pctIncrease = current > 0 ? (increase / current) * 100 : 0;

    const projection = Array.from({ length: years }, (_, i) => {
      const year = i + 1;
      const salary = newSalary * Math.pow(1 + growth, year);
      return { year, salary };
    });

    return { newSalary, increase, pctIncrease, projection };
  }, [currentSalary, hikeType, hikeValue, years, annualGrowth]);

  const maxProj = Math.max(...result.projection.map((p) => p.salary), result.newSalary);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Current Annual Salary ($)</label>
          <input type="number" value={currentSalary} onChange={(e) => setCurrentSalary(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Hike Type</label>
          <div className="flex rounded-xl border border-[#E5E7EC] bg-white overflow-hidden">
            {(['percent', 'flat'] as const).map((t) => (
              <button key={t} onClick={() => setHikeType(t)}
                className="flex-1 py-3 text-[13px] font-medium transition-colors active:scale-95"
                style={hikeType === t ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
                {t === 'percent' ? 'Percentage (%)' : 'Flat Amount ($)'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">
            {hikeType === 'percent' ? 'Hike Percentage (%)' : 'Hike Amount ($)'}
          </label>
          <input type="number" value={hikeValue} onChange={(e) => setHikeValue(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Annual Growth Rate (%)</label>
          <input type="number" value={annualGrowth} onChange={(e) => setAnnualGrowth(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Projection Years: {years}</label>
          <input type="range" min={1} max={10} value={years} onChange={(e) => setYears(+e.target.value)}
            className="w-full accent-[#f26b4e]" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'Current Salary', val: fmt(parseFloat(currentSalary) || 0), color: '#6b7280' },
          { label: 'New Salary', val: fmt(result.newSalary), color: COLOR },
          { label: 'Increase', val: `${fmt(result.increase)} (+${result.pctIncrease.toFixed(1)}%)`, color: '#22c55e' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[18px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Salary Projection at {annualGrowth}% annual growth</span>
        <div className="flex items-end gap-1 h-28">
          {[{ year: 0, salary: result.newSalary }, ...result.projection].map((p, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
              <div className="w-full rounded-t transition-all" style={{
                height: `${(p.salary / maxProj) * 100}%`,
                minHeight: 4,
                background: i === 0 ? '#E5E7EC' : COLOR + '80',
                borderTop: `2px solid ${i === 0 ? '#9ca3af' : COLOR}`
              }} />
              <div className="absolute bottom-full mb-1 hidden group-hover:flex bg-[#0F1112] text-white text-[10px] rounded px-2 py-1 whitespace-nowrap z-10">
                Year {p.year}: {fmt(p.salary)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af]">
          <span>Now</span><span>Year {years}</span>
        </div>
      </div>
    </div>
  );
}
