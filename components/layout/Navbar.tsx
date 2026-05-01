'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  servicesDropdown,
  productsDropdown,
  companyDropdown,
  type DropdownItem,
} from '@/data/nav';

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
}: {
  label: string;
  items: DropdownItem[];
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className={`flex items-center gap-1.5 text-[14px] font-medium leading-5 transition-colors py-1 ${
          active ? 'text-[#F26B4E]' : 'text-[#2F2F2F] hover:text-[#0F1112]'
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

  const isServicesActive = pathname?.startsWith('/services');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 lg:px-8">
      <div
        className={`max-w-[1100px] mx-auto bg-white rounded-full border border-[#E5E7EC] transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_12px_32px_rgba(15,17,18,0.10)]'
            : 'shadow-[0_4px_18px_rgba(15,17,18,0.06)]'
        }`}
      >
        <div className="px-5 h-[60px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/xgenious-logo.svg"
              alt="Xgenious"
              width={130}
              height={36}
              priority
              className="h-[34px] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Dropdown label="Services" items={servicesDropdown} active={isServicesActive} />
            <Dropdown label="Product" items={productsDropdown} />
            <Dropdown label="Company" items={companyDropdown} />
            <Link
              href="/work"
              className="text-[14px] font-medium leading-5 text-[#2F2F2F] hover:text-[#0F1112] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-[14px] font-medium leading-5 text-[#2F2F2F] hover:text-[#0F1112] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium leading-5 text-[#2F2F2F] hover:text-[#0F1112] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Primary — dark pill with shimmer sweep + lift */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center h-[38px] px-[20px] rounded-full bg-[#0F1112] text-white text-[13px] font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(15,17,18,0.25)] active:translate-y-0"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
              />
              <span className="relative">Contact Us</span>
            </Link>

            {/* Icon CTA — coral with soft halo + arrow nudge */}
            <Link
              href="/contact"
              aria-label="Get in touch"
              className="group relative w-[38px] h-[38px] rounded-full bg-[#F26B4E] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(242,107,78,0.45)] active:translate-y-0"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-[#F26B4E] opacity-0 scale-100 group-hover:scale-[1.45] group-hover:opacity-30 transition-all duration-500 ease-out"
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 15"
                fill="none"
                className="relative transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 flex flex-col gap-1.5 ml-auto"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#0F1112] transition-all origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0F1112] transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0F1112] transition-all origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 max-w-[1100px] mx-auto bg-white rounded-3xl border border-[#E5E7EC] shadow-lg px-6 py-5 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {[
            { label: 'Services', items: servicesDropdown },
            { label: 'Product', items: productsDropdown },
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

          <Link href="/work" className="text-[14px] font-medium text-[#2F2F2F]" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link href="/blog" className="text-[14px] font-medium text-[#2F2F2F]" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="text-[14px] font-medium text-[#2F2F2F]" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0F1112] text-white text-[13px] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
