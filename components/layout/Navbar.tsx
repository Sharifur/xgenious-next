'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  servicesDropdown,
  productsDropdown,
  companyDropdown,
  freeSoftwareDropdown,
  type DropdownItem,
} from '@/data/nav';

const DARK_PAGES = [
  '/products/helpnest-ai-chatbot-support-script',
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path
        d="M2.5 4.5l3.5 3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dropdown({
  label,
  items,
  active,
  dark,
}: {
  label: string;
  items: DropdownItem[];
  active?: boolean;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  }

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        className={`flex items-center gap-1.5 text-[14px] font-medium leading-5 transition-colors py-1 cursor-pointer ${
          active
            ? 'text-[#F26B4E]'
            : dark
            ? 'text-[#EBECEE] hover:text-white'
            : 'text-[#1a1a2e] hover:text-[#000]'
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Chevron open={open} />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white border border-[#E5E7EC] rounded-2xl shadow-[0_18px_40px_rgba(15,17,18,0.10)] py-2 z-50 min-w-[240px]">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col px-4 py-2.5 hover:bg-[#F5F6F8] transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-[13px] font-medium text-[#0F1112]">{item.label}</span>
              {item.description && (
                <span className="text-[11px] text-[#8A8F99] mt-0.5 leading-tight">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = DARK_PAGES.some((p) => pathname?.startsWith(p));
  const isServicesActive = pathname?.startsWith('/services');

  const noSticky =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/forgot-password' ||
    pathname === '/verify-email' ||
    pathname?.startsWith('/reset-password') ||
    pathname?.startsWith('/my-account') ||
    pathname?.startsWith('/checkout');

  const linkClass = isDark
    ? 'text-[14px] font-medium leading-5 text-[#EBECEE] hover:text-white transition-colors'
    : 'text-[14px] font-medium leading-5 text-[#1a1a2e] hover:text-[#000] transition-colors';

  const hamburgerClass = isDark ? 'bg-[#EBECEE]' : 'bg-[#1a1a2e]';

  return (
    <header className={`${noSticky && !isDark ? 'relative' : isDark ? 'absolute top-0 left-0 right-0 z-50' : 'fixed top-0 left-0 right-0 z-50'} pt-3 px-3 lg:pt-4 lg:px-8`}>
      <div
        className={`max-w-[1320px] mx-auto rounded-full transition-shadow duration-300 ${isDark ? 'border border-[#3F3F3F]' : 'border-0'} ${
          scrolled
            ? 'shadow-[0_12px_32px_rgba(0,0,0,0.15)]'
            : 'shadow-[0_4px_18px_rgba(0,0,0,0.08)]'
        }`}
        style={{ background: isDark ? 'rgba(206,212,255,0.12)' : '#ffffff' }}
      >
        <div className="px-5 h-[60px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isDark ? '/xgenious-logo-white.png' : '/xgenious-logo.svg'}
              alt="Xgenious"
              className="h-[34px] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Dropdown label="Services" items={servicesDropdown} active={isServicesActive} dark={isDark} />
            <Dropdown label="Product" items={productsDropdown} dark={isDark} />
            <Dropdown label="Free Software" items={freeSoftwareDropdown} active={pathname?.startsWith('/free-software')} dark={isDark} />
            <Dropdown label="Company" items={companyDropdown} dark={isDark} />
            <Link href="https://xgenious.com/blog/" className={linkClass}>Blog</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Button href="/contact" variant="primary" size="sm">Contact Us</Button>

            <Link
              href="/my-account"
              aria-label="My Account"
              className="group relative w-[38px] h-[38px] rounded-full bg-[#F26B4E] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(242,107,78,0.45)] active:translate-y-0"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-[#F26B4E] opacity-0 scale-100 group-hover:scale-[1.45] group-hover:opacity-30 transition-all duration-500 ease-out"
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative">
                <path
                  d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 flex flex-col gap-1.5 ml-auto"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 ${hamburgerClass} transition-all origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 ${hamburgerClass} transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 ${hamburgerClass} transition-all origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 max-w-[1320px] mx-auto bg-white rounded-3xl border border-[#E5E7EC] shadow-lg px-6 py-5 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {[
            { label: 'Services', items: servicesDropdown },
            { label: 'Product', items: productsDropdown },
            { label: 'Free Software', items: freeSoftwareDropdown },
            { label: 'Company', items: companyDropdown },
          ].map((g) => (
            <details key={g.label} className="group">
              <summary className="text-[14px] font-medium text-[#2F2F2F] cursor-pointer list-none flex items-center justify-between">
                {g.label}
                <span className="group-open:rotate-180 transition-transform">
                  <Chevron open={false} />
                </span>
              </summary>
              <div className="mt-2 pl-3 flex flex-col gap-2">
                {g.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[13px] text-[#484848] hover:text-[#0F1112]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <Link href="https://xgenious.com/blog/" className="text-[14px] font-medium text-[#2F2F2F]" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="text-[14px] font-medium text-[#2F2F2F]" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Button href="/my-account" variant="primary" size="sm" onClick={() => setMenuOpen(false)}>
            My Account
          </Button>
        </div>
      )}
    </header>
  );
}
