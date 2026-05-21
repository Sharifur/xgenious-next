'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const nav = [
  { href: '/my-account', label: 'Dashboard', exact: true },
  { href: '/my-account/licenses', label: 'My Licenses' },
  { href: '/my-account/downloads', label: 'Downloads' },
  { href: '/my-account/purchases', label: 'Purchase History' },
  { href: '/my-account/support', label: 'Support Tickets' },
  { href: '/my-account/profile', label: 'Edit Profile' },
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
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium"
            >
              Sign out
            </button>
          </div>
          <div className="overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <nav className="flex px-3 py-2 gap-1 min-w-max">
              {nav.map(({ href, label, exact }) => (
                <Link
                  key={href}
                  href={href}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(href, exact)
                      ? 'bg-[#ec7161]/10 text-[#ec7161]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F1112]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop: vertical card sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-6">
          <div className="px-3 py-3 mb-3 border-b border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Account</p>
            <p className="text-sm font-semibold text-[#0F1112] truncate">{name ?? 'Account'}</p>
          </div>
          <nav className="space-y-0.5">
            {nav.map(({ href, label, exact }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(href, exact)
                    ? 'bg-[#ec7161]/10 text-[#ec7161]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F1112]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-red-600 transition-colors text-left"
            >
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
