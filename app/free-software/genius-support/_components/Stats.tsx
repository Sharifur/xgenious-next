import { COLOR } from './constants';

const STATS = [
  { value: '6', label: 'Modules' },
  { value: '3', label: 'User Roles' },
  { value: 'IMAP', label: 'Email-to-Ticket' },
  { value: 'WebSocket', label: 'Real-Time' },
  { value: 'PHP 8.2+', label: 'Backend' },
  { value: 'Free', label: 'Forever' },
];

export default function Stats() {
  return (
    <section className="py-10 bg-white border-b border-[#E5E7EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[900px] mx-auto text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-[24px] font-bold" style={{ color: COLOR }}>{s.value}</p>
              <p className="text-[12px] text-[#6b7280] font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
