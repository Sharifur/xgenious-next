import { COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  {
    number: '01',
    title: 'Install on Your Server',
    desc: 'Download Genius Support and run the guided installer on Ubuntu 22.04 LTS. The script configures PHP 8.2+, MySQL 8.0, Nginx, Node.js 20, and Supervisor automatically. Setup takes under 30 minutes.',
  },
  {
    number: '02',
    title: 'Configure Email and Departments',
    desc: 'Connect your IMAP inbox so incoming customer emails automatically create tickets. Create departments, assign agents, and set up reply email templates — all from the admin panel.',
  },
  {
    number: '03',
    title: 'Go Live',
    desc: 'Share the customer portal URL. Customers submit and track tickets; agents resolve them in real time. The WebSocket server (Laravel Reverb) delivers instant updates to every open browser tab — no polling, no page refresh.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            How It Works
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            From Download to Live in 3 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-[18px]"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                {step.number}
              </div>
              <h3 className="text-[17px] font-semibold text-[#0F1112]">{step.title}</h3>
              <p className="text-[14px] text-[#484848] leading-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
