'use client';
import { useState, useMemo } from 'react';

const COLOR = '#6366f1';

interface Sprint { label: string; planned: string; completed: string; }

export default function SprintVelocityCalculator() {
  const [sprints, setSprints] = useState<Sprint[]>([
    { label: 'Sprint 1', planned: '40', completed: '35' },
    { label: 'Sprint 2', planned: '40', completed: '38' },
    { label: 'Sprint 3', planned: '42', completed: '40' },
    { label: 'Sprint 4', planned: '40', completed: '44' },
  ]);
  const [backlogPoints, setBacklogPoints] = useState('200');
  const [sprintDays, setSprintDays] = useState('14');

  function addSprint() {
    setSprints((s) => [...s, { label: `Sprint ${s.length + 1}`, planned: '40', completed: '' }]);
  }
  function remove(i: number) { setSprints((s) => s.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Sprint, v: string) {
    setSprints((p) => p.map((s, idx) => idx === i ? { ...s, [f]: v } : s));
  }

  const result = useMemo(() => {
    const valid = sprints.filter((s) => s.completed !== '').map((s) => parseFloat(s.completed) || 0);
    if (!valid.length) return null;
    const avg = valid.reduce((a, b) => a + b, 0) / valid.length;
    const backlog = parseFloat(backlogPoints) || 0;
    const sprintsNeeded = avg > 0 ? Math.ceil(backlog / avg) : 0;
    const daysNeeded = sprintsNeeded * (parseFloat(sprintDays) || 14);
    const trend = valid.length >= 2 ? valid[valid.length - 1] - valid[0] : 0;

    const plannedAvg = sprints.reduce((a, s) => a + (parseFloat(s.planned) || 0), 0) / sprints.length;
    const completionRate = plannedAvg > 0 ? (avg / plannedAvg) * 100 : 0;

    return { avg, sprintsNeeded, daysNeeded, trend, completionRate };
  }, [sprints, backlogPoints, sprintDays]);

  const maxCompleted = Math.max(...sprints.map((s) => parseFloat(s.completed) || 0), 1);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[#0F1112]">Sprint History</h3>
          <button onClick={addSprint} className="text-[12px] text-[#6366f1] hover:underline">+ Add Sprint</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[#E5E7EC]">
                {['Sprint', 'Planned (pts)', 'Completed (pts)', '% Done', ''].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 font-medium text-[#6b7280]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sprints.map((s, i) => {
                const planned = parseFloat(s.planned) || 0;
                const done = parseFloat(s.completed) || 0;
                const pct = planned > 0 ? (done / planned) * 100 : 0;
                return (
                  <tr key={i} className="border-b border-[#F5F6F8]">
                    <td className="py-2 pr-4">
                      <input type="text" value={s.label} onChange={(e) => update(i, 'label', e.target.value)}
                        className="outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#6366f1] w-20" />
                    </td>
                    <td className="py-2 pr-4">
                      <input type="number" value={s.planned} onChange={(e) => update(i, 'planned', e.target.value)} min={0}
                        className="w-16 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#6366f1]" />
                    </td>
                    <td className="py-2 pr-4">
                      <input type="number" value={s.completed} onChange={(e) => update(i, 'completed', e.target.value)} min={0}
                        className="w-16 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#6366f1]" />
                    </td>
                    <td className="py-2 pr-4 text-[13px] font-medium" style={{ color: pct >= 100 ? '#22c55e' : pct >= 80 ? '#f59e0b' : '#ef4444' }}>
                      {planned > 0 ? `${pct.toFixed(0)}%` : '—'}
                    </td>
                    <td className="py-2">
                      {sprints.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400">×</button>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Remaining Backlog (points)</label>
          <input type="number" value={backlogPoints} onChange={(e) => setBacklogPoints(e.target.value)} min={0}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Sprint Duration (days)</label>
          <input type="number" value={sprintDays} onChange={(e) => setSprintDays(e.target.value)} min={1}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-colors" />
        </div>
      </div>

      {result && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Avg Velocity', val: `${result.avg.toFixed(1)} pts/sprint`, color: COLOR },
            { label: 'Completion Rate', val: `${result.completionRate.toFixed(0)}%`, color: result.completionRate >= 90 ? '#22c55e' : '#f59e0b' },
            { label: 'Sprints to Clear Backlog', val: `${result.sprintsNeeded}`, color: '#f26b4e' },
            { label: 'Days to Release', val: `~${result.daysNeeded} days`, color: '#6b7280' },
          ].map(({ label, val, color }) => (
            <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
              <span className="text-[12px] text-[#6b7280]">{label}</span>
              <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Velocity Chart</span>
        {!result ? (
          <p className="text-[13px] text-[#9ca3af] text-center py-4">Enter at least one sprint result above to see velocity forecast.</p>
        ) : (
        <div className="flex items-end gap-2 h-24">
          {sprints.map((s, i) => {
            const done = parseFloat(s.completed) || 0;
            const pct = (done / maxCompleted) * 100;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div className="w-full rounded-t transition-all" style={{
                  height: `${Math.max(pct, 2)}%`,
                  background: COLOR + '50',
                  borderTop: `2px solid ${COLOR}`
                }} />
                <span className="text-[10px] text-[#9ca3af]">{s.label.replace('Sprint ', 'S')}</span>
                <div className="absolute bottom-6 hidden group-hover:flex bg-[#0F1112] text-white text-[10px] rounded px-2 py-1 whitespace-nowrap z-10">
                  {done} pts
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
}
