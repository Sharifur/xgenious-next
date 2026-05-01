import Link from 'next/link';
import { footerLinks } from '@/data/nav';

const socialIcons = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* CTA banner */}
      <div className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-white">Book a free consultation</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Let&apos;s grow your brand together. 24-hour response, fixed-price contracts, no hidden fees.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-7 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Say Hello column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Xgenious
            </Link>
            <h4 className="mt-6 text-sm font-semibold text-white">Say Hello</h4>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Let&apos;s grow your brand together with effective solutions.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {(Object.entries(socialIcons) as [string, React.ReactNode][]).map(([name, icon]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2017 - {new Date().getFullYear()} All Right Reserved By Xgenious
          </p>
        </div>
      </div>
    </footer>
  );
}
