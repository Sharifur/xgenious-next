const PLUGINS = [
  {
    bg: '#EEF2FF',
    border: '#C7D2FE',
    accent: '#4F46E5',
    title: 'Hourly Plugin',
    tagline: 'Hire freelancers by the hour with automatic time tracking',
    does:
      'Lets clients hire freelancers on an hourly basis instead of a fixed price. Logged work hours are tracked automatically and billed transparently.',
    how: [
      'Freelancer starts the timer when work begins on an hourly contract',
      'The plugin records every tracked hour against the project',
      'Client is billed for the exact hours worked — no guesswork',
    ],
    icon: (
      <path d="M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    bg: '#FEF2F2',
    border: '#FECACA',
    accent: '#DC2626',
    title: 'Security Plugin',
    tagline: 'Keep deals on-platform and moderate bad actors',
    does:
      'Filters specific words in chat to stop users sharing email or phone numbers off-platform. Admins can ban users and restrict clients or freelancers.',
    how: [
      'Admin sets a blocklist of words, emails, and phone patterns',
      'Chat messages are scanned in real time and flagged content is blocked',
      'Violating users get banned or restricted from the dashboard',
    ],
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4zm-2 9l1.5 1.5L15 9" />
    ),
  },
  {
    bg: '#F0F9FF',
    border: '#BAE6FD',
    accent: '#0284C7',
    title: 'Cloud Storage Plugin',
    tagline: 'Store files on AWS, Cloudflare R2 and more',
    does:
      'Offload file storage to a cloud provider instead of your own server. Supports AWS S3, Cloudflare R2, and other S3-compatible buckets.',
    how: [
      'Admin connects cloud provider keys in settings',
      'Uploaded files route straight to the cloud bucket',
      'Server disk stays light while storage scales infinitely',
    ],
    icon: (
      <path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 18H7z" />
    ),
  },
  {
    bg: '#F0FDF4',
    border: '#BBF7D0',
    accent: '#16A34A',
    title: 'Community Plugin',
    tagline: 'Run a built-in Q&A community for your platform',
    does:
      'Adds a community space where users and clients can post questions and get answers — turning your marketplace into an engaged community.',
    how: [
      'Members post questions or topics to the community feed',
      'Other freelancers and clients reply with answers',
      'Best answers surface knowledge and keep users coming back',
    ],
    icon: (
      <path d="M17 8h2a2 2 0 012 2v8l-3-2H9a2 2 0 01-2-2M3 4h11a2 2 0 012 2v6a2 2 0 01-2 2H7l-4 3V6a2 2 0 012-2z" />
    ),
  },
  {
    bg: '#FFF7ED',
    border: '#FED7AA',
    accent: '#EA580C',
    title: 'Promotional Plugin',
    tagline: 'Paid boosts for freelancer profiles and projects',
    does:
      'Lets freelancers promote their profile or projects for extra visibility — an added revenue stream for the platform admin.',
    how: [
      'Freelancer picks a profile or project to promote',
      'They pay to boost it to the top of listings and search',
      'Admin earns revenue while the freelancer gets more leads',
    ],
    icon: (
      <path d="M3 11l18-5v12L3 13v-2zm0 0v6m8-7.5v9" />
    ),
  },
  {
    bg: '#FDF4FF',
    border: '#E9D5FF',
    accent: '#9333EA',
    title: 'Freelancer Level Plugin',
    tagline: 'Gamified levels that unlock as freelancers grow',
    does:
      'Define freelancer level tiers that unlock automatically based on your rules — giving freelancers clear goals to become high-value members.',
    how: [
      'Admin sets level categories and unlock criteria',
      'Freelancers level up automatically as they hit targets',
      'Higher levels reward top performers and motivate the rest',
    ],
    icon: (
      <path d="M12 15a7 7 0 100-14 7 7 0 000 14zm0 0v6m-4 0h8M9 8l3 3 3-4" />
    ),
  },
];

export default function PremiumPlugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-[#FAFAFB]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-semibold tracking-wide uppercase text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE] rounded-full px-4 py-1.5 mb-4">
            Premium Add-ons
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Premium Plugins to<br className="hidden sm:block" /> Extend Your Marketplace
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[600px] mx-auto">
            Bolt on extra power as you grow. Each plugin installs into Xilancer and adds a new revenue stream or trust feature — no core code changes needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLUGINS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border p-[28px] flex flex-col gap-5"
              style={{ background: p.bg, borderColor: p.border }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: '#fff', border: `1px solid ${p.border}` }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={p.accent}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </div>
                <h3 className="text-[21px] font-semibold leading-[1.25]" style={{ color: '#252C38' }}>
                  {p.title}
                </h3>
              </div>

              <p className="text-[14px] font-medium" style={{ color: p.accent }}>
                {p.tagline}
              </p>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] mb-1.5">
                  What it does
                </p>
                <p className="text-[15px] leading-6 text-[#374253]">{p.does}</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] mb-2">
                  How it works
                </p>
                <ol className="flex flex-col gap-2">
                  {p.how.map((step, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-6 text-[#374253]">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center mt-0.5"
                        style={{ background: p.accent }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
