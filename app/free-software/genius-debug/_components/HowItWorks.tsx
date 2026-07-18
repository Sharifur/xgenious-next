import { COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  {
    number: '01',
    title: 'Your App Keeps Its Sentry SDK',
    desc: 'No SDK swap. @sentry/nextjs (or any Sentry client) keeps sending its standard envelopes — you just repoint the DSN and tunnel route at your own server.',
  },
  {
    number: '02',
    title: 'Ingest, Queue, Process',
    desc: 'A thin ingest endpoint authenticates, rate-limits, and enqueues onto Redis (BullMQ). Workers normalize, symbolicate, fingerprint, and group events into issues — ingest itself stays fast so your app is never blocked.',
  },
  {
    number: '03',
    title: 'Triage in the Dashboard',
    desc: 'Issues, traces, and session replays land in Postgres + R2 and surface in the React dashboard. Filter, search (⌘K), merge, assign, and set alert rules — email delivered via AWS SES.',
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
            Client → Ingest → Workers → Dashboard
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[620px] mx-auto leading-7">
            Four services, one docker compose file. The ingest path is async and best-effort by design — Genius Debug never sits in your app&apos;s critical path.
          </p>
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
