'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { servicesDropdown, productsDropdown, companyDropdown } from '@/data/nav';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

function Dropdown({ label, items, active }: { label: string; items: DropdownItem[]; active?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className={`flex items-center gap-1 text-[14px] font-medium leading-5 transition-colors py-1 ${
          active ? 'text-[#F26B4E]' : 'text-[#2F2F2F] hover:text-[#0F1112]'
        }`}
        onClick={() => setOpen(!open)}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 py-2 z-50 min-w-52">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-gray-800">{item.label}</span>
              {item.description && (
                <span className="text-xs text-gray-400 mt-0.5 leading-tight">{item.description}</span>
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isProductActive = pathname?.startsWith('/product');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 lg:px-8">
      <div
        className={`max-w-[1080px] mx-auto bg-white rounded-full border border-gray-100 transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/10' : 'shadow-md shadow-black/6'
        }`}
      >
        <div className="px-5 h-[60px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/xgenious-logo.svg"
              alt="Xgenious"
              width={130}
              height={38}
              priority
              className="h-[34px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Dropdown label="Services" items={servicesDropdown} />
            <Dropdown label="Product" items={productsDropdown} active={isProductActive} />
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

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center h-[38px] px-[22px] rounded-full bg-[#0F1112] text-white text-[14px] font-semibold hover:bg-[#222] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              aria-label="Get in touch"
              className="w-[38px] h-[38px] rounded-full bg-[#F26B4E] flex items-center justify-center hover:bg-[#EC7161] transition-colors flex-shrink-0"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 max-w-[1080px] mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg px-6 py-5 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <details className="group">
            <summary className="text-sm font-medium text-gray-700 cursor-pointer list-none flex items-center justify-between">
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-open:rotate-180 transition-transform">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-2 pl-3 flex flex-col gap-2">
              {servicesDropdown.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-gray-500 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group">
            <summary className="text-sm font-medium text-gray-700 cursor-pointer list-none flex items-center justify-between">
              Product
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-open:rotate-180 transition-transform">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-2 pl-3 flex flex-col gap-2">
              {productsDropdown.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-gray-500 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group">
            <summary className="text-sm font-medium text-gray-700 cursor-pointer list-none flex items-center justify-between">
              Company
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-open:rotate-180 transition-transform">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-2 pl-3 flex flex-col gap-2">
              {companyDropdown.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-gray-500 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/work" className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0F1112] text-white text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
