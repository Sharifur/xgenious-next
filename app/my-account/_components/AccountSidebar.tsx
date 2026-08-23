'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const nav = [
  {
    href: '/my-account',
    label: 'Dashboard',
    exact: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/my-account/licenses',
    label: 'My Licenses',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    href: '/my-account/downloads',
    label: 'Downloads',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    href: '/my-account/purchases',
    label: 'Purchase History',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    href: '/my-account/addons',
    label: 'Renew & Add-ons',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    href: '/my-account/support',
    label: 'Support Tickets',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    href: '/my-account/profile',
    label: 'Edit Profile',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function AccountSidebar({ name }: { name?: string | null }) {
  const pathname = usePathname();

  function isActive(href: string, exact = false) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <>
      {/* Mobile: horizontal scrollable tab bar */}
      <div className="md:hidden">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Account</p>
              <p className="text-sm font-semibold text-[#0F1112] truncate">{name ?? 'Account'}</p>
            </div>
            <button
              onClick={async () => { await signOut({ redirect: false }); window.location.href = '/'; }}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium"
            >
              Sign out
            </button>
          </div>
          <div className="overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <nav className="flex px-3 py-2 gap-1 min-w-max">
              {nav.map(({ href, label, exact, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(href, exact)
                      ? 'bg-[#ec7161]/10 text-[#ec7161]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F1112]'
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop: vertical card sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-6">
          <div className="px-4 pt-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#ec7161] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm select-none">
                {name?.charAt(0)?.toUpperCase() ?? 'U'}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 leading-none mb-0.5">Account</p>
                <p className="text-sm font-semibold text-[#0F1112] truncate">{name ?? 'Account'}</p>
              </div>
            </div>
          </div>

          <nav className="p-2 space-y-0.5">
            {nav.map(({ href, label, exact, icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive(href, exact)
                    ? 'bg-[#ec7161]/10 text-[#ec7161]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F1112]'
                }`}
              >
                <span className={isActive(href, exact) ? 'text-[#ec7161]' : 'text-gray-400'}>
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>

          <div className="p-2 border-t border-gray-100">
            <button
              onClick={async () => { await signOut({ redirect: false }); window.location.href = '/'; }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
