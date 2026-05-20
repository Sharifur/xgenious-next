'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f59e0b';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

interface Attendee { role: string; hourlyRate: string; }

export default function MeetingCostCalculator() {
  const [attendees, setAttendees] = useState<Attendee[]>([
    { role: 'Manager', hourlyRate: '80' },
    { role: 'Engineer', hourlyRate: '60' },
    { role: 'Designer', hourlyRate: '55' },
  ]);
  const [duration, setDuration] = useState('60');
  const [freq, setFreq] = useState<'once' | 'daily' | 'weekly' | 'monthly'>('once');

  function addAttendee() { setAttendees((p) => [...p, { role: '', hourlyRate: '50' }]); }
  function remove(i: number) { setAttendees((p) => p.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Attendee, v: string) {
    setAttendees((p) => p.map((a, idx) => idx === i ? { ...a, [f]: v } : a));
  }

  const result = useMemo(() => {
    const hrs = (parseFloat(duration) || 0) / 60;
    const costPerMeeting = attendees.reduce((s, a) => s + (parseFloat(a.hourlyRate) || 0) * hrs, 0);
    const MULT: Record<typeof freq, { label: string; times: number }> = {
      once: { label: 'one-time', times: 1 },
      daily: { label: 'per day × 250 workdays', times: 250 },
      weekly: { label: 'per week × 52', times: 52 },
      monthly: { label: 'per month × 12', times: 12 },
    };
    const annual = costPerMeeting * MULT[freq].times;
    return { costPerMeeting, annual, label: MULT[freq].label };
  }, [attendees, duration, freq]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Meeting Duration (minutes)</label>
            <input
              type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min={5} step={5}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Frequency</label>
            <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden">
              {(['once', 'daily', 'weekly', 'monthly'] as const).map((f) => (
                <button key={f} onClick={() => setFreq(f)}
                  className="flex-1 py-3 text-[12px] font-medium capitalize transition-colors active:scale-95"
                  style={freq === f ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Attendees</label>
            <button onClick={addAttendee} className="text-[12px] text-[#f59e0b] hover:underline">+ Add</button>
          </div>
          {attendees.map((a, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input type="text" value={a.role} onChange={(e) => update(i, 'role', e.target.value)}
                placeholder={`Attendee ${i + 1}`}
                className="flex-1 rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors" />
              <div className="flex items-center rounded-xl border border-[#E5E7EC] bg-white overflow-hidden w-32 focus-within:border-[#f59e0b] focus-within:ring-2 focus-within:ring-[#f59e0b]/10 transition-colors">
                <span className="px-2.5 text-[#9ca3af] text-[13px]">$/hr</span>
                <input type="number" value={a.hourlyRate} onChange={(e) => update(i, 'hourlyRate', e.target.value)} min={0}
                  className="flex-1 py-2.5 bg-white text-[14px] text-[#0F1112] outline-none" />
              </div>
              {attendees.length > 1 && (
                <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400 transition-colors">×</button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: 'Cost Per Meeting', val: fmt(result.costPerMeeting), color: COLOR },
          { label: freq === 'once' ? 'One-Time Cost' : 'Annual Cost', val: fmt(result.annual), color: '#ef4444' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col items-center gap-2">
            <span className="text-[13px] text-[#6b7280]">{label}</span>
            <span className="text-[32px] font-bold" style={{ color }}>{val}</span>
            <span className="text-[11px] text-[#9ca3af]">{result.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[12px] text-[#9ca3af]">
        Rule of thumb: a 1-hour meeting with 5 people at $60/hr average costs as much as a half-day of solo work.
      </p>
    </div>
  );
}
