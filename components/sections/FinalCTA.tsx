export default function FinalCTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          Let's Build Together
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Build Your SaaS or{' '}
          <span className="text-accent italic">Marketplace?</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          From idea to production in weeks, not months. Let's talk about what
          you're building and how we can help you ship it.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-orange-900/30"
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-dark-border text-gray-300 font-semibold text-sm hover:border-gray-600 hover:text-white transition-colors"
          >
            View Our Work
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: '7000+', label: 'Projects' },
            { value: '100%', label: 'Satisfaction' },
            { value: '24h', label: 'Response' },
            { value: '5★', label: 'Rating' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
