'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

interface Task { name: string; optimistic: string; likely: string; pessimistic: string; dependency: string; }

export default function ProjectTimelineEstimator() {
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Requirements & Discovery', optimistic: '3', likely: '5', pessimistic: '10', dependency: '' },
    { name: 'UI/UX Design', optimistic: '5', likely: '8', pessimistic: '14', dependency: '1' },
    { name: 'Backend Development', optimistic: '10', likely: '15', pessimistic: '25', dependency: '2' },
    { name: 'Frontend Development', optimistic: '8', likely: '12', pessimistic: '20', dependency: '2' },
    { name: 'QA & Testing', optimistic: '5', likely: '8', pessimistic: '14', dependency: '3,4' },
    { name: 'Deployment & Launch', optimistic: '2', likely: '3', pessimistic: '6', dependency: '5' },
  ]);
  const [buffer, setBuffer] = useState('20');

  function addTask() { setTasks((t) => [...t, { name: '', optimistic: '', likely: '', pessimistic: '', dependency: '' }]); }
  function remove(i: number) { setTasks((t) => t.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Task, v: string) {
    setTasks((p) => p.map((t, idx) => idx === i ? { ...t, [f]: v } : t));
  }

  const result = useMemo(() => {
    const buff = parseFloat(buffer) / 100;
    const taskData = tasks.map((t, i) => {
      const o = parseFloat(t.optimistic) || 0;
      const m = parseFloat(t.likely) || 0;
      const p = parseFloat(t.pessimistic) || 0;
      const pert = (o + 4 * m + p) / 6;
      const stdDev = (p - o) / 6;
      return { ...t, id: i + 1, pert, stdDev };
    });

    const totalPert = taskData.reduce((s, t) => s + t.pert, 0);
    const totalVariance = taskData.reduce((s, t) => s + t.stdDev ** 2, 0);
    const stdDevTotal = Math.sqrt(totalVariance);
    const withBuffer = totalPert * (1 + buff);
    const p90 = totalPert + 1.28 * stdDevTotal;

    return { taskData, totalPert, stdDevTotal, withBuffer, p90 };
  }, [tasks, buffer]);

  return (
    <div className="flex flex-col gap-5">
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-[#E5E7EC]">
              {['#', 'Task', 'Optimistic', 'Likely', 'Pessimistic', 'PERT Days', 'Depends On', ''].map((h) => (
                <th key={h} className="text-left py-2 pr-2 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.taskData.map((t, i) => (
              <tr key={i} className="border-b border-[#F5F6F8]">
                <td className="py-2 pr-2 text-[#9ca3af]">{i + 1}</td>
                <td className="py-2 pr-2">
                  <input type="text" value={t.name} onChange={(e) => update(i, 'name', e.target.value)}
                    className="w-36 outline-none text-[14px] text-[#0F1112] border-b border-transparent focus:border-[#f26b4e]" />
                </td>
                {(['optimistic', 'likely', 'pessimistic'] as const).map((f) => (
                  <td key={f} className="py-2 pr-2">
                    <input type="number" value={tasks[i][f]} onChange={(e) => update(i, f, e.target.value)} min={0}
                      className="w-14 text-right outline-none text-[14px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#f26b4e]" />
                  </td>
                ))}
                <td className="py-2 pr-2 font-medium" style={{ color: COLOR }}>{t.pert.toFixed(1)}d</td>
                <td className="py-2 pr-2">
                  <input type="text" value={t.dependency} onChange={(e) => update(i, 'dependency', e.target.value)}
                    placeholder="e.g. 1,2"
                    className="w-16 outline-none text-[13px] text-[#6b7280] border-b border-[#E5E7EC] focus:border-[#f26b4e]" />
                </td>
                <td className="py-2">
                  {tasks.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400">×</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={addTask}
          className="text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] active:scale-95 transition-colors">
          + Add Task
        </button>
        <div className="flex items-center gap-2">
          <label className="text-[13px] font-semibold text-[#6b7280]">Risk Buffer:</label>
          <input type="number" value={buffer} onChange={(e) => setBuffer(e.target.value)} min={0} max={100}
            className="w-16 rounded-lg border border-[#E5E7EC] bg-white px-3 py-1.5 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
          <span className="text-[13px] text-[#6b7280]">%</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'PERT Estimate', val: `${result.totalPert.toFixed(1)} days`, sub: 'weighted average', color: COLOR },
          { label: 'With Buffer', val: `${result.withBuffer.toFixed(1)} days`, sub: `+${buffer}% risk buffer`, color: '#f26b4e' },
          { label: '90% Confidence', val: `${result.p90.toFixed(1)} days`, sub: 'statistical upper bound', color: '#f26b4e' },
        ].map(({ label, val, sub, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
            <span className="text-[11px] text-[#9ca3af]">{sub}</span>
          </div>
        ))}
      </div>

      <div className="text-[12px] text-[#9ca3af]">
        PERT formula: (Optimistic + 4×Likely + Pessimistic) ÷ 6. Σ of all tasks gives sequential duration estimate.
      </div>
    </div>
  );
}
