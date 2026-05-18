const EDGE_MASK = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  maskImage:       'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
};

const TECHS = [
  { name: 'Claude',      sub: 'Sonnet • Opus',    logo: '/tech-logos/claude.svg' },
  { name: 'OpenAI',      sub: 'GPT-4 • GPT-4o',   logo: '/tech-logos/openai.svg' },
  { name: 'LangChain',   sub: 'Orchestration',    logo: '/tech-logos/langchain.svg' },
  { name: 'Node.js',     sub: 'Runtime',          logo: '/tech-logos/nodejs.png' },
  { name: 'PostgreSQL',  sub: 'Database',         logo: '/tech-logos/postgresql.svg' },
  { name: 'Redis',       sub: 'Cache',            logo: '/tech-logos/redis.svg' },
  { name: 'Pinecone',    sub: 'Vector DB',        logo: '/tech-logos/pinecone.svg' },
  { name: 'Docker',      sub: 'Container',        logo: '/tech-logos/docker.svg' },
  { name: 'Laravel',     sub: 'Backend',          logo: '/tech-logos/laravel.svg' },
  { name: 'NestJS',      sub: 'API Framework',    logo: '/tech-logos/nestjs.svg' },
];

function TechCard({ name, sub, logo }: (typeof TECHS)[number]) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-[12px] flex-shrink-0"
      style={{ background: '#050608', border: '1px solid rgba(255,255,255,0.08)', minWidth: 200 }}
    >
      <div
        className="flex items-center justify-center rounded-[10px] flex-shrink-0"
        style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} width={28} height={28} className="object-contain" />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-white font-semibold text-[15px]">{name}</span>
        <span className="text-[#6b7280] text-[12px]">{sub}</span>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="pb-14 sm:pb-20 lg:pb-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Foundations</span>
          </div>
          <h2 className="font-bold text-white text-[24px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[48px] lg:leading-[58px]">
            A Modern AI Engineering Stack.
          </h2>
          <p className="text-[#9ca3af] text-[14px] sm:text-[16px] leading-6 max-w-[560px]">
            We&apos;re vendor-agnostic but opinionated. These are the tools we trust in production.
          </p>
        </div>

        {/* Marquee container */}
        <div
          className="rounded-[20px] py-8 px-2"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="overflow-hidden" style={EDGE_MASK}>
            <div className="flex gap-4 w-max" style={{ animation: 'marquee-left 40s linear infinite' }}>
              {[...TECHS, ...TECHS, ...TECHS].map((t, i) => (
                <TechCard key={i} {...t} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
