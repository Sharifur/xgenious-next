import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

type StackItem =
  | { name: string; role: string; logo: string; icon?: never }
  | { name: string; role: string; icon: React.ReactNode; logo?: never };

const STACK: StackItem[] = [
  { name: 'Laravel', role: 'Backend Framework', logo: '/tech/laravel.svg' },
  { name: 'PHP 8.3+', role: 'Server Language', logo: '/tech/php.svg' },
  { name: 'MySQL 8+', role: 'Database', logo: '/tech/mysql.svg' },
  {
    name: 'Bootstrap',
    role: 'Frontend UI',
    icon: (
      <svg width="32" height="32" viewBox="0 0 118 94" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.484 2.28 14.437 2.066 20.577C12.794 88.307 17.776 94.2 24.51 94.2h69.08c6.732 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.093 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.303 5.893 100.321 0 93.589 0H24.51zM79.47 41.972c0 6.437-4.582 9.87-11.452 9.87H52.736V24.793h14.336c6.54 0 10.82 3.224 10.82 8.544 0 3.75-2.075 6.563-5.323 8.006 4.16.883 6.9 3.893 6.9 8.629zm-14.97-13.153H57.73v9.26h6.77c4.49 0 6.9-1.766 6.9-4.723 0-3.047-2.19-4.537-6.9-4.537zm.81 13.063H57.73v10.244h7.58c4.935 0 7.453-1.877 7.453-5.164 0-3.288-2.518-5.08-7.453-5.08z" fill="#7952B3"/>
      </svg>
    ),
  },
  { name: 'Linux', role: 'Server OS', logo: '/tech/linux.svg' },
  {
    name: 'Flutter',
    role: 'Mobile Apps',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12 6 15.7 21.706 0h-7.392zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z" fill="#40C4FF"/>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    role: 'Push Notifications',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" fill="#FFA000"/>
      </svg>
    ),
  },
  {
    name: 'REST API',
    role: 'Postman Collection',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  { name: 'Pusher', role: 'Real-Time Events', logo: '/tech/pusher.svg' },
  {
    name: 'Google Maps',
    role: 'Location Services',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="pt-[100px] pb-16 sm:pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Built on Modern Stack
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Production-Ready Technology
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Qixer runs on Laravel 12 for the backend and Flutter for the cross-platform mobile apps — with Firebase push notifications, Pusher for real-time events, and Google Maps for location services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {item.logo ? (
                  <Image src={item.logo} alt={item.name} width={40} height={40} className="object-contain" />
                ) : (
                  item.icon
                )}
              </div>
              <p className="text-[14px] font-bold text-[#0F1112]">{item.name}</p>
              <p className="text-[11px] text-[#9ca3af]">{item.role}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#E5E7EC] bg-white px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[15px] font-bold text-[#0F1112] mb-1">Server Requirements</p>
            <p className="text-[13px] text-[#6b7280]">PHP 8.3+, MySQL 8+, cPanel compatible — free admin panel cPanel installation included with purchase.</p>
          </div>
          <a
            href="https://docs.bytesed.com/docs/qixer-service-marketplace-and-service-finder/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-5 py-2.5 border-2 flex-shrink-0 transition-all hover:-translate-y-0.5"
            style={{ color: COLOR, borderColor: COLOR }}
          >
            View Requirements →
          </a>
        </div>

      </div>
    </section>
  );
}
