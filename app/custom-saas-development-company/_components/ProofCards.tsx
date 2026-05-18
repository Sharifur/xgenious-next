const CARDS = [
  {
    icon: '/images/saas-dev/rocket-icon.svg',
    title: '8–16 weeks',
    subtitle: "Launch, don't linger",
    body: 'SaaS MVP in 8–16 weeks, not 6 months. Fixed scope means day-one progress — no discovery tax, no moving targets.',
    glowDelay: '0s',
  },
  {
    icon: '/images/saas-dev/dollar-icon.svg',
    title: 'From $5k',
    subtitle: 'Transparent packages',
    body: 'Fixed-price SaaS builds starting at $5k. Scope published before a single line is written — no mid-sprint surprises.',
    glowDelay: '2s',
  },
  {
    icon: '/images/saas-dev/shield-icon.svg',
    title: 'SOC 2',
    subtitle: 'Compliance by default',
    body: 'GDPR and HIPAA-ready architectures on every build. DPA on every engagement. Not a checkbox — an architecture decision made on day one.',
    glowDelay: '4s',
  },
  {
    icon: '/images/saas-dev/code-icon.svg',
    title: 'Modern',
    subtitle: 'Stack that scales',
    body: 'React, Next.js, TypeScript, Laravel, Node, AWS, Flutter — with AI-native integration available on every tier.',
    glowDelay: '6s',
  },
];

export default function ProofCards() {
  return (
    <section className="bg-white py-16">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl p-5 sm:p-7 flex flex-col gap-4 sm:gap-5"
              style={{
                background: `
                  radial-gradient(ellipse 60% 55% at 22% 18%, rgba(255,252,245,0.11) 0%, transparent 65%),
                  #0C0C0E
                `,
              }}
            >
              {/* Radial glow — drifts slowly left to right */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: '70%',
                  aspectRatio: '1',
                  top: 0,
                  left: 0,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.10) 50%, transparent 70%)',
                  filter: 'blur(24px)',
                  animation: `cardSweep 22s linear ${card.glowDelay} infinite`,
                }}
              />

              {/* Icon */}
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.icon} alt="" width={20} height={20} />
              </div>

              {/* Title */}
              <p className="relative text-white font-bold text-[24px] leading-tight sm:text-[32px]">
                {card.title}
              </p>

              {/* Subtitle + body */}
              <div className="relative flex flex-col gap-2">
                <p className="text-white font-bold text-[16px] leading-snug sm:text-[20px]">
                  {card.subtitle}
                </p>
                <p className="text-[#A6A6A6] text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
