import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const STACK = [
  {
    name: 'Laravel 12',
    role: 'Backend framework',
    logo: '/products/logos/laravel.svg',
    bg: '#FF2D2015',
  },
  {
    name: 'PHP 8.3+',
    role: 'Server runtime',
    logo: '/products/logos/php.svg',
    bg: '#777BB415',
  },
  {
    name: 'PostgreSQL 16+',
    role: 'Primary database',
    logo: '/products/logos/postgresql.svg',
    bg: '#33679115',
  },
  {
    name: 'pgvector',
    role: 'Vector embeddings for RAG',
    logo: '/products/logos/postgresql.svg',
    bg: '#33679115',
    badge: 'Extension',
  },
  {
    name: 'OpenAI GPT',
    role: 'AI language model (BYOK)',
    logo: '/products/logos/openai.svg',
    bg: '#10A37F15',
  },
  {
    name: 'Redis',
    role: 'Queue & caching layer',
    logo: '/products/logos/redis.svg',
    bg: '#DC382D15',
  },
  {
    name: 'Tesseract OCR',
    role: 'Image-to-text extraction',
    logo: null,
    bg: '#3DA63915',
    full: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DA639" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M7 8h10M9 12h6M10 16h4"/>
      </svg>
    ),
  },
];

const REQUIREMENTS = [
  'PHP 8.3+',
  'PostgreSQL 16+ with pgvector extension',
  'Redis',
  'OpenAI API key',
  'Linux VPS or cPanel hosting',
  'Composer 2.x',
];

export default function TechStack() {
  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Technical Foundation
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Modern, Production-Ready Stack
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Built on battle-tested open-source tools. PostgreSQL 16+ with pgvector powers the RAG engine — no external vector database subscription required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="grid grid-cols-2 gap-4">
            {STACK.map((s) => (
              <div
                key={s.name}
                className={`bg-white rounded-2xl border border-[#E5E7EC] p-4 flex flex-col gap-3 hover:border-[#D0D5DD] hover:shadow-sm transition-all${s.full ? ' col-span-2' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.bg }}
                  >
                    {s.logo ? (
                      <Image
                        src={s.logo}
                        alt={s.name}
                        width={22}
                        height={22}
                        className="w-[22px] h-[22px] object-contain"
                      />
                    ) : (
                      s.icon
                    )}
                  </div>
                  {s.badge && (
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: `${COLOR}15`, color: COLOR }}
                    >
                      {s.badge}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0F1112] leading-5">{s.name}</p>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">{s.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-7 flex flex-col gap-5"
            style={{ background: '#0d0f14' }}
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: `${COLOR}99` }}>
                Server Requirements
              </p>
              <div className="flex flex-col gap-3">
                {REQUIREMENTS.map((r) => (
                  <div key={r} className="flex items-center gap-2.5">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                      <circle cx="10" cy="10" r="10" fill={`${COLOR}25`}/>
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-white/70">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-xl p-4 text-[12px] leading-5 mt-auto"
              style={{ background: `${COLOR}15`, color: '#a5b4fc', border: `1px solid ${COLOR}30` }}
            >
              <strong style={{ color: '#c7d2fe' }}>Note:</strong> <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener noreferrer" style={{ color: COLOR, textDecoration: 'underline' }}>pgvector</a> must be enabled on your PostgreSQL instance. Most modern VPS providers support it. Uses <a href="https://platform.openai.com/docs/guides/embeddings" target="_blank" rel="noopener noreferrer" style={{ color: COLOR, textDecoration: 'underline' }}>OpenAI embeddings API</a> for vector generation. Free setup assistance included with purchase.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
