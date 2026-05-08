type TechCardProps = {
  title: string;
  darkTags: string[];
  lightTags: string[];
  bgImage?: string;
};

function TechCard({ title, darkTags, lightTags, bgImage }: TechCardProps) {
  const allTags = [
    ...darkTags.map((t) => ({ label: t, dark: true })),
    ...lightTags.map((t) => ({ label: t, dark: false })),
  ];

  return (
    <div
      className="relative h-[356px] overflow-hidden rounded-[12px] flex-shrink-0 w-full"
      style={{ background: bgImage ? 'transparent' : 'rgba(255,255,255,0.24)' }}
    >
      {bgImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      )}
      <div className="absolute left-6 top-6 flex items-center gap-[9px]">
        <div className="w-2 h-2 rounded-[4px] flex-shrink-0" style={{ background: '#ec7161' }} />
        <span className="text-white font-semibold" style={{ fontSize: 20, lineHeight: '28px' }}>
          {title}
        </span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <span
            key={tag.label}
            className="px-[13px] py-[7px] rounded-[999px] font-medium"
            style={{
              fontSize: 13,
              lineHeight: '19.5px',
              background: tag.dark ? '#0c0c0e' : '#f5efff',
              color: tag.dark ? '#fff' : '#0c0c0e',
              border: `1px solid ${tag.dark ? '#0c0c0e' : '#e7e7e7'}`,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

const row1 = [
  {
    title: 'Frontend',
    bgImage: '/images/saas-dev/tech-frontend-bg.png',
    darkTags: ['React', 'Next.js'],
    lightTags: ['Tailwind CSS', 'TypeScript', 'Radix UI', 'shadcn/ui'],
  },
  {
    title: 'Backend',
    bgImage: undefined,
    darkTags: ['Laravel', 'Node.js'],
    lightTags: ['GraphQL / REST', 'PostgreSQL', 'Python (FastAPI)', 'Redis'],
  },
  {
    title: 'Mobile',
    bgImage: undefined,
    darkTags: ['Flutter'],
    lightTags: ['React Native', 'Swift (iOS native)', 'Kotlin (Android native)', 'Expo'],
  },
];

const row2 = [
  {
    title: 'AI & Data',
    bgImage: undefined,
    darkTags: ['Anthropic Claude', 'OpenAI'],
    lightTags: ['LangChain', 'LangGraph', 'Pinecone', 'pgvector'],
  },
  {
    title: 'Cloud',
    bgImage: undefined,
    darkTags: ['AWS'],
    lightTags: ['Azure', 'Cloudflare', 'Vercel', 'DigitalOcean', 'PostgreSQL'],
  },
  {
    title: 'DevOps',
    bgImage: undefined,
    darkTags: ['Docker', 'Kubernetes'],
    lightTags: ['Terraform', 'GraphQL / REST', 'GitHub Actions', 'Datadog', 'Sentry', 'PostHog'],
  },
];

export default function TechStack() {
  return (
    <section className="py-[120px]" style={{ background: '#090808' }}>
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[621px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Tech Stack
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-white font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Modern Stack, Optimized for Speed
            </h2>
            <p className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}>
              No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row1.map((c) => (
              <TechCard key={c.title} {...c} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row2.map((c) => (
              <TechCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
