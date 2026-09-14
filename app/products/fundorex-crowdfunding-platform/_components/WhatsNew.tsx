import { COLOR, LIGHT_COLOR, CHANGELOG, CHANGELOG_URL } from './constants';

export default function WhatsNew() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[900px] mx-auto">

        <div className="text-center mb-10 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Actively Maintained
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F1112] leading-tight mb-4">
            What&apos;s New in Fundorex
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Fundorex ships regular updates with lifetime free upgrades included on every license.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
          {CHANGELOG.map((entry, i) => (
            <div
              key={entry.version}
              className={`flex flex-col sm:flex-row gap-2 sm:gap-6 px-6 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'} ${i !== 0 ? 'border-t border-[#F0F1F3]' : ''}`}
            >
              <div className="flex items-center gap-3 sm:w-[180px] flex-shrink-0">
                <span
                  className="text-[12px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {entry.version === 'Latest' ? entry.version : `v${entry.version}`}
                </span>
                <span className="text-[12px] text-[#9ca3af]">{entry.date}</span>
              </div>
              <p className="text-[13.5px] text-[#374151] leading-6">{entry.summary}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href={CHANGELOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold underline underline-offset-2"
            style={{ color: COLOR }}
          >
            View the full changelog →
          </a>
        </div>

      </div>
    </section>
  );
}
