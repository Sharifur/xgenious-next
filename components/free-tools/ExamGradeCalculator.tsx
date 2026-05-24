'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const GRADE_SCALES: Record<string, { min: number; max: number; letter: string; gpa: number }[]> = {
  'Standard US': [
    { min: 90, max: 100, letter: 'A', gpa: 4.0 },
    { min: 80, max: 89, letter: 'B', gpa: 3.0 },
    { min: 70, max: 79, letter: 'C', gpa: 2.0 },
    { min: 60, max: 69, letter: 'D', gpa: 1.0 },
    { min: 0, max: 59, letter: 'F', gpa: 0.0 },
  ],
  'UK Degree': [
    { min: 70, max: 100, letter: 'First Class (1st)', gpa: 4.0 },
    { min: 60, max: 69, letter: 'Upper Second (2:1)', gpa: 3.3 },
    { min: 50, max: 59, letter: 'Lower Second (2:2)', gpa: 2.7 },
    { min: 40, max: 49, letter: 'Third Class', gpa: 2.0 },
    { min: 0, max: 39, letter: 'Fail', gpa: 0.0 },
  ],
  'Pass/Fail (50%)': [
    { min: 50, max: 100, letter: 'Pass', gpa: 4.0 },
    { min: 0, max: 49, letter: 'Fail', gpa: 0.0 },
  ],
};

interface Component { name: string; score: string; maxScore: string; weight: string; }

export default function ExamGradeCalculator() {
  const [scale, setScale] = useState('Standard US');
  const [components, setComponents] = useState<Component[]>([
    { name: 'Midterm Exam', score: '78', maxScore: '100', weight: '30' },
    { name: 'Final Exam', score: '85', maxScore: '100', weight: '50' },
    { name: 'Assignments', score: '45', maxScore: '50', weight: '20' },
  ]);

  function addRow() { setComponents((c) => [...c, { name: '', score: '', maxScore: '100', weight: '' }]); }
  function remove(i: number) { setComponents((c) => c.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Component, v: string) {
    setComponents((p) => p.map((r, idx) => idx === i ? { ...r, [f]: v } : r));
  }

  const result = useMemo(() => {
    const totalWeight = components.reduce((s, c) => s + (parseFloat(c.weight) || 0), 0);
    const weightedScore = components.reduce((s, c) => {
      const pct = parseFloat(c.maxScore) ? (parseFloat(c.score) / parseFloat(c.maxScore)) * 100 : 0;
      return s + pct * ((parseFloat(c.weight) || 0) / 100);
    }, 0);

    const finalPct = totalWeight > 0 ? (weightedScore / totalWeight) * 100 : 0;
    const grade = GRADE_SCALES[scale]?.find((g) => finalPct >= g.min && finalPct <= g.max);

    return { finalPct, totalWeight, grade };
  }, [components, scale]);

  function pctColor(p: number) {
    if (p >= 80) return '#22c55e';
    if (p >= 60) return '#f26b4e';
    return '#ef4444';
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">Grading Scale</label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(GRADE_SCALES).map((s) => (
            <button key={s} onClick={() => setScale(s)}
              className="px-3 py-1.5 rounded-full border text-[12px] font-medium transition-colors"
              style={scale === s ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]">
              {['Component', 'Score', 'Max Score', 'Weight (%)', 'Result', ''].map((h) => (
                <th key={h} className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {components.map((c, i) => {
              const pct = parseFloat(c.maxScore) ? (parseFloat(c.score) / parseFloat(c.maxScore)) * 100 : 0;
              return (
                <tr key={i} className="border-b border-[#F5F6F8]">
                  <td className="py-2 pr-3">
                    <input type="text" value={c.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder={`Component ${i + 1}`}
                      className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#f26b4e]" />
                  </td>
                  <td className="py-2 pr-3">
                    <input type="number" value={c.score} onChange={(e) => update(i, 'score', e.target.value)} min={0}
                      className="w-16 outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#f26b4e]" />
                  </td>
                  <td className="py-2 pr-3">
                    <input type="number" value={c.maxScore} onChange={(e) => update(i, 'maxScore', e.target.value)} min={1}
                      className="w-16 outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#f26b4e]" />
                  </td>
                  <td className="py-2 pr-3">
                    <input type="number" value={c.weight} onChange={(e) => update(i, 'weight', e.target.value)} min={0} max={100}
                      className="w-16 outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#f26b4e]" />
                  </td>
                  <td className="py-2 pr-3 font-medium" style={{ color: pctColor(pct) }}>{pct.toFixed(1)}%</td>
                  <td className="py-2">
                    {components.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400">×</button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={addRow}
        className="self-start text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] transition-colors">
        + Add Component
      </button>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[#F5F6F8] border-2 p-5 flex flex-col items-center gap-1" style={{ borderColor: pctColor(result.finalPct) }}>
          <span className="text-[12px] text-[#6b7280]">Final Score</span>
          <span className="text-[40px] font-bold" style={{ color: pctColor(result.finalPct) }}>{result.finalPct.toFixed(1)}%</span>
        </div>
        <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col items-center gap-1">
          <span className="text-[12px] text-[#6b7280]">Letter Grade</span>
          <span className="text-[28px] font-bold text-[#0F1112]">{result.grade?.letter ?? '—'}</span>
        </div>
        <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col items-center gap-1">
          <span className="text-[12px] text-[#6b7280]">GPA Points</span>
          <span className="text-[28px] font-bold text-[#f26b4e]">{result.grade?.gpa.toFixed(1) ?? '—'}</span>
        </div>
      </div>

      {result.totalWeight !== 100 && (
        <p className="text-[12px] text-[#f26b4e]">Weights sum to {result.totalWeight}% (should be 100% for accurate results)</p>
      )}

      <div className="rounded-xl border border-[#E5E7EC] overflow-hidden text-[12px]">
        <div className="px-4 py-2 bg-[#F5F6F8] font-medium text-[#6b7280]">Grade Scale — {scale}</div>
        {GRADE_SCALES[scale].map((g, i) => (
          <div key={i} className={`flex justify-between px-4 py-2 border-t border-[#F5F6F8] ${result.grade?.letter === g.letter ? 'bg-[#F5F6F8]' : ''}`}>
            <span className="font-medium text-[#0F1112]">{g.letter}</span>
            <span className="text-[#6b7280]">{g.min}–{g.max}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
