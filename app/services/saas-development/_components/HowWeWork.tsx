export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-[120px]" style={{ background: '#050406' }}>
      <div className="container-page relative z-10 flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <div
            className="inline-flex items-center self-start px-4 py-[6px] rounded-[165px]"
            style={{ background: '#2f2f2f' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              How We Work
            </span>
          </div>
          <h2 className="text-white font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
            {'From Idea to '}
            <em className="font-normal" style={{ fontStyle: 'italic' }}>Execution</em>
          </h2>
        </div>
        <p
          className="font-normal max-w-[438px]"
          style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}
        >
          SaaS products, custom web platforms, mobile apps, and AI agents. From-scratch builds with published
          scope, fixed pricing, and a committed delivery date.
        </p>
      </div>

      <div className="container-page relative z-10 mt-16 flex flex-col items-center">
        <div className="relative flex items-center justify-center" style={{ width: 554, height: 554 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/saas-dev/how-we-work-bg.svg"
            alt=""
            width={554}
            height={554}
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-[356px]">
            <h3 className="text-white font-semibold" style={{ fontSize: 72, lineHeight: '80px' }}>
              01. Ideate
            </h3>
            <p className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}>
              Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a
              single line of code is written.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
