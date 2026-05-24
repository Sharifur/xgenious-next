'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

const GRADE_POINTS: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0,
};

interface Course { name: string; grade: string; credits: string; }

function gpaColor(gpa: number) {
  if (gpa >= 3.7) return '#22c55e';
  if (gpa >= 3.0) return '#f26b4e';
  if (gpa >= 2.0) return '#f26b4e';
  return '#ef4444';
}

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { name: '', grade: 'A', credits: '3' },
    { name: '', grade: 'B+', credits: '3' },
  ]);

  function addRow() { setCourses((c) => [...c, { name: '', grade: 'A', credits: '3' }]); }
  function removeRow(i: number) { setCourses((c) => c.filter((_, idx) => idx !== i)); }
  function update(i: number, field: keyof Course, val: string) {
    setCourses((c) => c.map((row, idx) => idx === i ? { ...row, [field]: val } : row));
  }

  const valid = courses.filter((c) => c.credits && !isNaN(+c.credits) && +c.credits > 0);
  const totalCredits = valid.reduce((sum, c) => sum + +c.credits, 0);
  const totalPoints = valid.reduce((sum, c) => sum + (GRADE_POINTS[c.grade] ?? 0) * +c.credits, 0);
  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]">
              <th className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">Course (optional)</th>
              <th className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">Grade</th>
              <th className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">Credits</th>
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i} className="border-b border-[#F5F6F8]">
                <td className="py-2 pr-3">
                  <input
                    type="text" value={c.name} onChange={(e) => update(i, 'name', e.target.value)}
                    placeholder={`Course ${i + 1}`}
                    className="w-full rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors"
                  />
                </td>
                <td className="py-2 pr-3">
                  <select
                    value={c.grade} onChange={(e) => update(i, 'grade', e.target.value)}
                    className="w-full rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors"
                  >
                    {Object.keys(GRADE_POINTS).map((g) => <option key={g} value={g}>{g} ({GRADE_POINTS[g].toFixed(1)})</option>)}
                  </select>
                </td>
                <td className="py-2 pr-3">
                  <input
                    type="number" value={c.credits} onChange={(e) => update(i, 'credits', e.target.value)}
                    min={0} max={12} step={0.5}
                    className="w-20 rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors"
                  />
                </td>
                <td className="py-2">
                  {courses.length > 1 && (
                    <button onClick={() => removeRow(i)} className="text-[#9ca3af] hover:text-[#0F1112] transition-colors text-[16px] leading-none">×</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={addRow}
        className="self-start text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] transition-colors"
      >
        + Add Course
      </button>

      {totalCredits > 0 && (
        <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-6 flex flex-col items-center gap-2">
          <span className="text-[13px] text-[#6b7280]">Cumulative GPA</span>
          <span className="text-[56px] font-bold" style={{ color: gpaColor(gpa) }}>{gpa.toFixed(2)}</span>
          <div className="flex gap-6 text-[13px] text-[#6b7280]">
            <span>Total Credits: <strong className="text-[#0F1112]">{totalCredits}</strong></span>
            <span>Quality Points: <strong className="text-[#0F1112]">{totalPoints.toFixed(1)}</strong></span>
          </div>
          <div className="w-full max-w-xs h-2 bg-[#E5E7EC] rounded-full overflow-hidden mt-2">
            <div className="h-full rounded-full transition-all" style={{ width: `${(gpa / 4.0) * 100}%`, background: gpaColor(gpa) }} />
          </div>
        </div>
      )}
    </div>
  );
}
