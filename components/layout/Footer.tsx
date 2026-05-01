import Link from 'next/link';
import { footerLinks } from '@/data/nav';

const socialIcons = {
  facebook: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0E] text-white relative overflow-hidden">
      <div className="container-page pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#F26B4E] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[18px] font-semibold tracking-tight">Xgenious</span>
            </div>
            <p className="mt-5 text-[13px] text-[#A6A6A6] leading-[20px]">
              SaaS &amp; Marketplace Development Studio
            </p>
            <div className="flex items-center gap-2 mt-5">
              {(Object.entries(socialIcons) as [string, React.ReactNode][]).map(([name, icon], i) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                    i === 0
                      ? 'bg-[#F26B4E] text-white hover:bg-[#EC7161]'
                      : 'bg-[#1F2127] text-[#A6A6A6] hover:bg-[#F26B4E] hover:text-white'
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-5">Important Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Work', href: '/work' },
                { label: 'Process', href: '#process' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-5">Others</h4>
            <ul className="space-y-3">
              {[
                { label: 'Support', href: '#' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Refund Policy', href: '/refund' },
                { label: 'Terms Of Service', href: '/terms' },
                { label: 'License System', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#A6A6A6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1F2127] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#8A8F99]">© {new Date().getFullYear()} Xgenious. All Rights Reserved.</p>
          <p className="text-[12px] text-[#8A8F99]">Terms &amp; conditions</p>
        </div>

        {/* Big wordmark */}
        <div
          className="text-center select-none mt-8 -mb-8"
          aria-hidden
          style={{
            fontSize: 'clamp(80px, 17vw, 260px)',
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(180deg, rgba(31,33,39,0.85) 0%, rgba(12,12,14,0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          XGENIOUS
        </div>
      </div>
    </footer>
  );
}
