'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const TIMEZONES = [
  { label: 'UTC', offset: 0 },
  { label: 'New York (ET)', offset: -5 },
  { label: 'Chicago (CT)', offset: -6 },
  { label: 'Denver (MT)', offset: -7 },
  { label: 'Los Angeles (PT)', offset: -8 },
  { label: 'London (GMT/BST)', offset: 0 },
  { label: 'Paris / Berlin (CET)', offset: 1 },
  { label: 'Istanbul (TRT)', offset: 3 },
  { label: 'Dubai (GST)', offset: 4 },
  { label: 'Karachi / Dhaka (PKT/BST)', offset: 6 },
  { label: 'Mumbai / Kolkata (IST)', offset: 5.5 },
  { label: 'Singapore / KL (SGT)', offset: 8 },
  { label: 'Beijing / Shanghai (CST)', offset: 8 },
  { label: 'Tokyo / Seoul (JST/KST)', offset: 9 },
  { label: 'Sydney (AEDT)', offset: 11 },
];

interface Participant { name: string; tzIdx: number; }

function offsetToTime(baseHour: number, baseOffset: number, targetOffset: number): string {
  const diff = targetOffset - baseOffset;
  let total = baseHour + diff;
  const day = total < 0 ? ' (prev day)' : total >= 24 ? ' (next day)' : '';
  total = ((total % 24) + 24) % 24;
  const h = Math.floor(total);
  const m = (total % 1) * 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}${day}`;
}

function isWorkHour(baseHour: number, baseOffset: number, targetOffset: number): boolean {
  const diff = targetOffset - baseOffset;
  let h = ((baseHour + diff) % 24 + 24) % 24;
  return h >= 9 && h < 18;
}

export default function TimeZoneMeetingPlanner() {
  const [participants, setParticipants] = useState<Participant[]>([
    { name: 'Team A', tzIdx: 1 },
    { name: 'Team B', tzIdx: 10 },
    { name: 'Team C', tzIdx: 8 },
  ]);
  const [baseHour, setBaseHour] = useState(14);
  const [baseTzIdx, setBaseTzIdx] = useState(0);

  function addParticipant() { setParticipants((p) => [...p, { name: `Team ${String.fromCharCode(65 + p.length)}`, tzIdx: 0 }]); }
  function remove(i: number) { setParticipants((p) => p.filter((_, idx) => idx !== i)); }

  const baseOffset = TIMEZONES[baseTzIdx].offset;

  const goodHours = useMemo(() => {
    return Array.from({ length: 24 }, (_, h) => {
      const allWork = participants.every((p) => isWorkHour(h, baseOffset, TIMEZONES[p.tzIdx].offset));
      return { hour: h, allWork };
    }).filter((h) => h.allWork);
  }, [participants, baseOffset]);

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#F5F6F8] rounded-2xl p-5 flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Base Time Zone</label>
            <select value={baseTzIdx} onChange={(e) => setBaseTzIdx(+e.target.value)}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
              {TIMEZONES.map((tz, i) => <option key={i} value={i}>{tz.label} (UTC{tz.offset >= 0 ? '+' : ''}{tz.offset})</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Meeting Time: {String(baseHour).padStart(2, '0')}:00</label>
            <input type="range" min={0} max={23} value={baseHour} onChange={(e) => setBaseHour(+e.target.value)}
              className="w-full accent-[#f26b4e] mt-2" />
            <div className="flex justify-between text-[11px] text-[#9ca3af]"><span>00:00</span><span>23:00</span></div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F8] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#0F1112]">Participants</span>
          <button onClick={addParticipant} className="text-[12px] text-[#f26b4e] hover:underline">+ Add</button>
        </div>
        {participants.map((p, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={p.name} onChange={(e) => setParticipants((ps) => ps.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x))}
              className="flex-1 rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
            <select value={p.tzIdx} onChange={(e) => setParticipants((ps) => ps.map((x, idx) => idx === i ? { ...x, tzIdx: +e.target.value } : x))}
              className="flex-1 rounded-xl border border-[#E5E7EC] bg-white px-3 py-2.5 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
              {TIMEZONES.map((tz, j) => <option key={j} value={j}>{tz.label}</option>)}
            </select>
            {participants.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400 transition-colors">×</button>}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
        <div className="px-4 py-3 bg-[#F5F6F8] border-b border-[#E5E7EC]">
          <span className="text-[13px] font-medium text-[#0F1112]">Meeting time: {String(baseHour).padStart(2, '0')}:00 {TIMEZONES[baseTzIdx].label}</span>
        </div>
        {participants.map((p, i) => {
          const tz = TIMEZONES[p.tzIdx];
          const time = offsetToTime(baseHour, baseOffset, tz.offset);
          const work = isWorkHour(baseHour, baseOffset, tz.offset);
          return (
            <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-[#F5F6F8] last:border-0">
              <div>
                <span className="text-[13px] font-medium text-[#0F1112]">{p.name}</span>
                <span className="text-[12px] text-[#9ca3af] ml-2">{tz.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-mono font-semibold text-[#0F1112]">{time}</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={work ? { background: '#f0fdf4', color: '#22c55e' } : { background: '#fef2f2', color: '#ef4444' }}>
                  {work ? 'Work hours' : 'Out of hours'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {goodHours.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-[#0F1112]">Best Meeting Windows (all within work hours)</span>
          <div className="flex flex-wrap gap-2">
            {goodHours.map((h) => (
              <button
                key={h.hour}
                onClick={() => setBaseHour(h.hour)}
                className="px-3 py-1.5 rounded-full border text-[13px] font-mono font-medium transition-colors"
                style={h.hour === baseHour ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}
              >
                {String(h.hour).padStart(2, '0')}:00
              </button>
            ))}
          </div>
        </div>
      )}

      {goodHours.length === 0 && participants.length > 0 && (
        <div className="rounded-xl bg-[#fef2f2] p-4 text-[13px] text-[#ef4444]">
          No overlapping work hours found. Consider async communication or rotating meeting times.
        </div>
      )}
    </div>
  );
}
