'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function EmployeeCostCalculator() {
  const [salary, setSalary] = useState('60000');
  const [fica, setFica] = useState('7.65');
  const [health, setHealth] = useState('6000');
  const [retirement, setRetirement] = useState('3');
  const [pto, setPto] = useState('15');
  const [training, setTraining] = useState('1500');
  const [equipment, setEquipment] = useState('2000');
  const [office, setOffice] = useState('3000');
  const [overhead, setOverhead] = useState('5');

  const result = useMemo(() => {
    const s = parseFloat(salary) || 0;
    const ficaAmt = s * (parseFloat(fica) / 100);
    const healthAmt = parseFloat(health) || 0;
    const retireAmt = s * (parseFloat(retirement) / 100);
    const ptoDays = parseFloat(pto) || 0;
    const ptoAmt = (s / 260) * ptoDays;
    const trainingAmt = parseFloat(training) || 0;
    const equipAmt = parseFloat(equipment) || 0;
    const officeAmt = parseFloat(office) || 0;
    const overheadAmt = s * (parseFloat(overhead) / 100);
    const total = s + ficaAmt + healthAmt + retireAmt + ptoAmt + trainingAmt + equipAmt + officeAmt + overheadAmt;
    const multiplier = s > 0 ? total / s : 0;
    const hourly = total / 2080;
    return { s, ficaAmt, healthAmt, retireAmt, ptoAmt, trainingAmt, equipAmt, officeAmt, overheadAmt, total, multiplier, hourly };
  }, [salary, fica, health, retirement, pto, training, equipment, office, overhead]);

  const rows = [
    { label: 'Base Salary', val: result.s },
    { label: `FICA (${fica}%)`, val: result.ficaAmt },
    { label: 'Health Insurance', val: result.healthAmt },
    { label: `Retirement Match (${retirement}%)`, val: result.retireAmt },
    { label: `PTO (${pto} days)`, val: result.ptoAmt },
    { label: 'Training & Development', val: result.trainingAmt },
    { label: 'Equipment & Devices', val: result.equipAmt },
    { label: 'Office / Remote Cost', val: result.officeAmt },
    { label: `Overhead (${overhead}%)`, val: result.overheadAmt },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-3 gap-3 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Annual Base Salary ($)', val: salary, set: setSalary },
          { label: 'Employer FICA (%)', val: fica, set: setFica },
          { label: 'Annual Health Insurance ($)', val: health, set: setHealth },
          { label: '401k / Retirement Match (%)', val: retirement, set: setRetirement },
          { label: 'PTO Days / year', val: pto, set: setPto },
          { label: 'Annual Training ($)', val: training, set: setTraining },
          { label: 'Equipment / Devices ($)', val: equipment, set: setEquipment },
          { label: 'Office / Remote Cost ($)', val: office, set: setOffice },
          { label: 'General Overhead (%)', val: overhead, set: setOverhead },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold text-[#0F1112]">{label}</label>
            <input
              type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors"
            />
          </div>
        ))}
      </div>

      {result.s > 0 && (
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Total Annual Cost', val: fmt(result.total), color: COLOR },
              { label: 'Cost Multiplier', val: `${result.multiplier.toFixed(2)}×`, color: '#f26b4e' },
              { label: 'True Hourly Rate', val: `${fmt(result.hourly)}/hr`, color: '#f26b4e' },
            ].map(({ label, val, color }) => (
              <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
                <span className="text-[12px] text-[#6b7280]">{label}</span>
                <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-[#F0F1F3] last:border-0">
                <span className="text-[13px] text-[#484848]">{r.label}</span>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-1.5 bg-[#E5E7EC] rounded-full overflow-hidden hidden sm:block">
                    <div className="h-full rounded-full" style={{ width: `${Math.min((r.val / result.total) * 100 * 3, 100)}%`, background: COLOR }} />
                  </div>
                  <span className="text-[13px] font-medium text-[#0F1112] min-w-[80px] text-right">{fmt(r.val)}</span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f0fdf4]">
              <span className="text-[13px] font-bold text-[#0F1112]">Total Cost</span>
              <span className="text-[15px] font-bold" style={{ color: COLOR }}>{fmt(result.total)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
