import { techStack } from '@/data/saas-page';

const techColors: Record<string, string> = {
  react: '#61DAFB',
  nextjs: '#0F1112',
  nodejs: '#68A063',
  laravel: '#F26B4E',
  postgres: '#336791',
  redis: '#DC382D',
  docker: '#2496ED',
  aws: '#F59E0B',
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 max-w-[680px] mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
            Technology
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Modern Stack, Optimized{' '}
            <span className="italic font-semibold">for Speed</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6 max-w-[520px] mx-auto">
            We choose proven, production-grade tools — not whatever is trending. Every choice is justified by your use case.
          </p>
        </div>

        {/* Horizontal connector flow */}
        <div className="relative">
          <div className="hidden md:flex items-center justify-between gap-2 mb-12">
            {['Idea', 'Architecture', 'Development', 'Testing', 'Deploy', 'Scale'].map(
              (step, i, arr) => {
                const isCenter = i === Math.floor(arr.length / 2) - 1;
                return (
                  <div key={step} className="flex items-center gap-2 flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-[12px] font-semibold transition-all ${
                          isCenter
                            ? 'bg-[#F26B4E] text-white shadow-lg shadow-[#F26B4E]/30'
                            : 'bg-white border border-[#E5E7EC] text-[#8A8F99]'
                        }`}
                      >
                        {isCenter ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
                          </svg>
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span className={`mt-3 text-[12px] font-medium ${isCenter ? 'text-[#0F1112]' : 'text-[#8A8F99]'}`}>
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="h-px flex-1 -translate-y-3.5"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(to right, #D8D8D8 0, #D8D8D8 4px, transparent 4px, transparent 8px)',
                        }}
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Tech icons grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#E5E7EC] flex items-center justify-center group-hover:shadow-md transition-shadow">
                <span
                  className="text-[18px] font-semibold"
                  style={{ color: techColors[tech.icon] ?? '#8A8F99' }}
                >
                  {tech.name[0]}
                </span>
              </div>
              <span className="text-[12px] text-[#484848] font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
