'use client';
import { useState, useEffect } from 'react';

function utc6Now() {
  return new Date(Date.now() + 6 * 60 * 60 * 1000);
}

// 'upcoming' = May 23–25, 'active' = May 26–June 2, null = outside period
function eidState(d: Date): 'upcoming' | 'active' | null {
  const m   = d.getUTCMonth();
  const day = d.getUTCDate();
  if (m === 4 && day >= 26) return 'active';   // May 26–31
  if (m === 5 && day <= 2)  return 'active';   // June 1–2
  if (m === 4 && day >= 23) return 'upcoming'; // May 23–25
  return null;
}

function offHoursReason(d: Date): string | null {
  const dow  = d.getUTCDay();
  const hour = d.getUTCHours();
  if (dow === 5) return 'Friday';
  if (dow === 6) return 'Saturday';
  if (hour < 10)  return 'before 10 AM';
  if (hour >= 18) return 'after 6 PM';
  return null;
}

function isWeekend(d: Date) {
  return d.getUTCDay() === 5 || d.getUTCDay() === 6;
}

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarnIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

type ChipColor = 'gray' | 'amber' | 'orange' | 'blue' | 'red';
function Chip({ children, color = 'gray' }: { children: React.ReactNode; color?: ChipColor }) {
  const cls: Record<ChipColor, string> = {
    gray:   'bg-gray-100 text-gray-600',
    amber:  'bg-amber-100 text-amber-700',
    orange: 'bg-orange-100 text-orange-700',
    blue:   'bg-blue-50 text-blue-700',
    red:    'bg-red-100 text-red-700',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${cls[color]}`}>
      {children}
    </span>
  );
}

export default function SupportNotices() {
  const [state, setState] = useState<{
    eid: 'upcoming' | 'active' | null;
    offHours: string | null;
    weekend: boolean;
  } | null>(null);

  useEffect(() => {
    const now = utc6Now();
    setState({
      eid:      eidState(now),
      offHours: offHoursReason(now),
      weekend:  isWeekend(now),
    });
  }, []);

  if (!state) return null;

  const { eid, offHours, weekend } = state;
  const isOffline = !!offHours;

  return (
    <div className="space-y-2.5">

      {/* ─── Eid: upcoming (May 23–25) — blue/info tone ─── */}
      {eid === 'upcoming' && (
        <div className="bg-white rounded-2xl border border-blue-200 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-indigo-400" />
          <div className="flex items-start gap-4 p-4">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-500">
              <MoonIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="text-sm font-semibold text-[#0F1112]">Upcoming Eid Holiday</p>
                <Chip color="blue">Starts 26 May</Chip>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our team will be on Eid holiday from <span className="font-medium text-gray-700">26 May to 2 June</span>. Tickets submitted during this period will receive a delayed response.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ─── Eid: active (May 26–June 2) — amber/red warning tone ─── */}
      {eid === 'active' && (
        <div className="bg-white rounded-2xl border border-red-200 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-red-400 to-orange-400" />
          <div className="flex items-start gap-4 p-4">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
              <StarIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="text-sm font-semibold text-[#0F1112]">Eid Holiday — Support Delayed</p>
                <Chip color="red">26 May – 2 June</Chip>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our team is currently on Eid holiday. Support ticket responses <span className="font-medium text-gray-700">will be delayed</span>. We appreciate your patience and will reply as soon as we return on <span className="font-medium text-gray-700">3 June</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ─── Working hours notice ─── */}
      {isOffline ? (
        <div className="bg-white rounded-2xl border border-orange-200 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-red-400" />
          <div className="flex items-start gap-4 p-4">
            <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
              <WarnIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0F1112] mb-1">
                {weekend ? 'Weekend — support offline' : 'Outside working hours'}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2.5">
                It is currently <span className="font-medium text-gray-700">{offHours}</span> (UTC+6). Our team is offline — you may experience a delay. We typically reply within 1 business day, sometimes 2–3 days near weekends.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip color="gray">Sun – Thu</Chip>
                <Chip color="gray">10 AM – 6 PM UTC+6</Chip>
                <Chip color="orange">Fri &amp; Sat offline</Chip>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-[#ec7161] to-orange-400" />
          <div className="flex items-start gap-4 p-4">
            <div className="w-9 h-9 rounded-xl bg-[#ec7161]/10 flex items-center justify-center flex-shrink-0 text-[#ec7161]">
              <ClockIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0F1112] mb-1">Support is online</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2.5">
                We normally reply within <span className="font-medium text-gray-700">1 business day</span>. Tickets submitted near the weekend may take 2–3 days.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip color="gray">Sun – Thu</Chip>
                <Chip color="gray">10 AM – 6 PM UTC+6</Chip>
                <Chip color="gray">Fri &amp; Sat weekend</Chip>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
