import Link from 'next/link';
import Image from 'next/image';

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/xgenious', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/xgenious', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )},
  { label: 'Twitter', href: 'https://twitter.com/xgenious1', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/xgenious_official/', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )},
];

const SERVICES = [
  { label: 'Web App Development', href: '/web-app-development-company' },
  { label: 'Mobile App Development', href: '/mobile-app-development' },
  { label: 'SaaS Development', href: '/custom-saas-development-company' },
  { label: 'AI Agent Development', href: '/ai-agent-development-services' },
];

const LINKS = [
  { label: 'Free Tools', href: '/free-tools' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Support Policy', href: '/support-policy' },
  { label: 'Terms Of Service', href: '/terms-of-service' },
];

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'My Account', href: 'https://xgenious.com/my-account/' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0E] text-white relative overflow-hidden">
      {/* Background wordmark */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          style={{
            fontSize: 'clamp(60px, 15vw, 220px)',
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            fontFamily: 'var(--font-nunito-sans), "Nunito Sans", sans-serif',
            background: 'linear-gradient(180deg, rgba(31,33,39,0.7) 0%, rgba(12,12,14,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          XGENIOUS
        </span>
      </div>

      <div className="container-page px-4 sm:px-6 lg:px-0 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Say Hello */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="inline-flex bg-white rounded-xl px-3 py-2 w-fit">
              <Image
                src="/xgenious-logo.svg"
                alt="Xgenious"
                width={120}
                height={30}
                className="h-[26px] w-auto"
              />
            </div>

            <p className="text-[13px] text-[#A6A6A6] leading-6">
              Let&apos;s grow your brand together with effective solutions to make your vision a reality.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                    i === 0
                      ? 'bg-[#F26B4E] text-white hover:bg-[#EC7161]'
                      : 'bg-[#1F2127] text-[#A6A6A6] hover:bg-[#F26B4E] hover:text-white'
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Company profile download */}
            <a
              href="/xgenious-company-profile.pdf"
              download
              className="inline-flex items-center gap-2 border border-[#2a2d35] text-[#A6A6A6] hover:border-[#F26B4E] hover:text-white text-[12px] font-medium rounded-lg px-4 py-2.5 transition-colors w-fit"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Company Profile
            </a>

            {/* Badges */}
            <div className="flex items-center gap-2">
              {/* Clutch badge */}
              <a
                href="https://clutch.co/profile/xgenious"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#1F2127] hover:bg-[#2a2d35] rounded-lg px-3 py-2 transition-colors"
                aria-label="Clutch"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#E8392A"/>
                  <path d="M16 12a4 4 0 11-4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="9" height="9" viewBox="0 0 10 10" fill="#E8392A">
                      <path d="M5 0l1.12 3.45H9.76L6.82 5.58l1.12 3.45L5 7.01 2.06 9.03l1.12-3.45L.24 3.45H3.88z"/>
                    </svg>
                  ))}
                </div>
              </a>

              {/* Trustpilot badge */}
              <a
                href="https://www.trustpilot.com/review/xgenious.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#1F2127] hover:bg-[#2a2d35] rounded-lg px-3 py-2 transition-colors"
                aria-label="Trustpilot"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#00b67a"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="9" height="9" viewBox="0 0 10 10" fill="#00b67a">
                      <path d="M5 0l1.12 3.45H9.76L6.82 5.58l1.12 3.45L5 7.01 2.06 9.03l1.12-3.45L.24 3.45H3.88z"/>
                    </svg>
                  ))}
                </div>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[15px] font-semibold text-white mb-5">Links</h3>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[15px] font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[15px] font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#1F2127] pt-6 flex justify-center">
          <p className="text-[12px] text-[#8A8F99] text-center">
            © 2017 - 2026 All Right Reserved By Xgenious
          </p>
        </div>
      </div>
    </footer>
  );
}
