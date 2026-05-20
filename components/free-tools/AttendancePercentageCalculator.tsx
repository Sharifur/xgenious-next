'use client';
import { useState, useMemo } from 'react';

const COLOR = '#10b981';

interface SubjectRow { name: string; attended: string; total: string; }

export default function AttendancePercentageCalculator() {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { name: 'Mathematics', attended: '28', total: '35' },
    { name: 'Physics', attended: '22', total: '30' },
    { name: 'Chemistry', attended: '25', total: '30' },
    { name: 'English', attended: '20', total: '25' },
  ]);
  const [required, setRequired] = useState('75');

  function addRow() { setSubjects((s) => [...s, { name: '', attended: '', total: '' }]); }
  function remove(i: number) { setSubjects((s) => s.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof SubjectRow, v: string) {
    setSubjects((p) => p.map((r, idx) => idx === i ? { ...r, [f]: v } : r));
  }

  const data = useMemo(() => {
    const req = parseFloat(required) / 100;
    return subjects.map((s) => {
      const att = parseFloat(s.attended) || 0;
      const tot = parseFloat(s.total) || 0;
      const pct = tot > 0 ? (att / tot) * 100 : 0;
      const meetsReq = pct >= (req * 100);

      let canSkip = 0;
      let needMore = 0;
      if (tot > 0) {
        if (meetsReq) {
          let futureAtt = att, futureTot = tot;
          while ((futureAtt / (futureTot + 1)) * 100 >= req * 100) { futureTot++; canSkip++; if (canSkip > 100) break; }
        } else {
          let futureAtt = att, futureTot = tot;
          while ((futureAtt / futureTot) * 100 < req * 100) { futureAtt++; futureTot++; needMore++; if (needMore > 500) { needMore = -1; break; } }
        }
      }
      return { ...s, att, tot, pct, meetsReq, canSkip, needMore };
    });
  }, [subjects, required]);

  const totalAtt = data.reduce((s, d) => s + d.att, 0);
  const totalClasses = data.reduce((s, d) => s + d.tot, 0);
  const overallPct = totalClasses > 0 ? (totalAtt / totalClasses) * 100 : 0;

  function pctColor(p: number) {
    const req = parseFloat(required);
    if (p >= req) return '#22c55e';
    if (p >= req - 5) return '#f59e0b';
    return '#ef4444';
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5 max-w-xs">
          <label className="text-[13px] font-semibold text-[#0F1112]">Required Attendance (%)</label>
          <input type="number" value={required} onChange={(e) => setRequired(e.target.value)} min={0} max={100}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10 transition-colors" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]">
              {['Subject', 'Attended', 'Total', '%', 'Status', ''].map((h) => (
                <th key={h} className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b border-[#E5E7EC]">
                <td className="py-2 pr-3">
                  <input type="text" value={d.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder={`Subject ${i + 1}`}
                    className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#10b981]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="number" value={subjects[i].attended} onChange={(e) => update(i, 'attended', e.target.value)} min={0}
                    className="w-16 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#10b981]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="number" value={subjects[i].total} onChange={(e) => update(i, 'total', e.target.value)} min={0}
                    className="w-16 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#10b981]" />
                </td>
                <td className="py-2 pr-3 font-medium" style={{ color: pctColor(d.pct) }}>{d.pct.toFixed(1)}%</td>
                <td className="py-2 pr-3 text-[12px]">
                  {d.tot > 0 && (d.meetsReq
                    ? <span className="text-[#22c55e]">Can skip {d.canSkip} more</span>
                    : <span className="text-[#ef4444]">{d.needMore === -1 ? 'Not achievable' : `Attend ${d.needMore} more`}</span>
                  )}
                </td>
                <td className="py-2">
                  {subjects.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400">×</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={addRow}
        className="self-start text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#10b981] hover:text-[#10b981] transition-colors">
        + Add Subject
      </button>

      <div className="rounded-2xl bg-[#F5F6F8] border-2 p-6 flex flex-col items-center gap-2" style={{ borderColor: pctColor(overallPct) }}>
        <span className="text-[13px] text-[#6b7280]">Overall Attendance</span>
        <span className="text-[52px] font-bold" style={{ color: pctColor(overallPct) }}>{overallPct.toFixed(1)}%</span>
        <span className="text-[13px] text-[#6b7280]">{totalAtt} classes attended out of {totalClasses}</span>
        <div className="w-full max-w-sm h-2 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(overallPct, 100)}%`, background: pctColor(overallPct) }} />
        </div>
      </div>
    </div>
  );
}
