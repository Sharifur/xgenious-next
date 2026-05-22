import { auth } from '@/auth';
import Link from 'next/link';

export const metadata = { title: 'Dashboard — My Account' };

async function getTickets(email: string) {
  try {
    const res = await fetch(
      `https://public-api.taskip.net/api/public-v1/support-ticket?limit=5&search=${encodeURIComponent(email)}`,
      { headers: { 'X-Secret-Key': process.env.TASKIP_SECRET_KEY! }, cache: 'no-store' }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? data ?? [];
  } catch { return []; }
}

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-50 text-blue-700',
  'in-progress': 'bg-amber-50 text-amber-700',
  resolved: 'bg-green-50 text-green-700',
  closed: 'bg-gray-100 text-gray-500',
};

const STATUS_DOT: Record<string, string> = {
  open: 'bg-blue-500',
  'in-progress': 'bg-amber-500',
  resolved: 'bg-green-500',
  closed: 'bg-gray-400',
};

export default async function DashboardPage() {
  const session = await auth();
  const email = session!.wpEmail ?? session!.user?.email ?? '';
  const firstName = session!.user?.name?.split(' ')[0] ?? 'there';

  const tickets = await getTickets(email);

  const quickLinks = [
    {
      href: '/my-account/licenses',
      label: 'My Licenses',
      desc: 'View keys, manage domains',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      accent: 'group-hover:bg-violet-50 group-hover:border-violet-200',
      iconColor: 'text-violet-500 bg-violet-50 group-hover:bg-violet-100',
    },
    {
      href: '/my-account/downloads',
      label: 'Downloads',
      desc: 'Get the latest product files',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      accent: 'group-hover:bg-blue-50 group-hover:border-blue-200',
      iconColor: 'text-blue-500 bg-blue-50 group-hover:bg-blue-100',
    },
    {
      href: '/my-account/support/new',
      label: 'Open a Ticket',
      desc: 'Get help from our team',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      accent: 'group-hover:bg-orange-50 group-hover:border-orange-200',
      iconColor: 'text-orange-500 bg-orange-50 group-hover:bg-orange-100',
    },
    {
      href: '/my-account/purchases',
      label: 'Purchase History',
      desc: 'View orders and payments',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      accent: 'group-hover:bg-emerald-50 group-hover:border-emerald-200',
      iconColor: 'text-emerald-500 bg-emerald-50 group-hover:bg-emerald-100',
    },
  ];

  return (
    <div className="space-y-5">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#0F1112] to-[#2a2a2a] rounded-2xl p-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec7161]/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-[#ec7161]/5 rounded-full translate-y-1/2 pointer-events-none" />
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ec7161] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl select-none">
            {firstName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#ec7161]/80 uppercase tracking-widest mb-0.5">Welcome back</p>
            <h1 className="text-xl font-bold text-white leading-tight truncate">{firstName}</h1>
            <p className="text-sm text-white/50 truncate">{email}</p>
          </div>
          <div className="ml-auto flex-shrink-0">
            <Link
              href="/my-account/profile"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded-lg transition-colors"
            >
              Edit profile
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">Quick actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ href, label, desc, icon, accent, iconColor }) => (
            <Link
              key={href}
              href={href}
              className={`group bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-sm transition-all ${accent}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${iconColor}`}>
                {icon}
              </div>
              <p className="text-sm font-semibold text-[#0F1112] mb-0.5">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent tickets */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-[#0F1112]">Recent Tickets</h2>
          <Link href="/my-account/support" className="text-xs text-[#ec7161] hover:underline font-medium">
            View all
          </Link>
        </div>
        {tickets.length === 0 ? (
          <div className="py-10 text-center">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-sm text-gray-400 mb-3">No support tickets yet.</p>
            <Link href="/my-account/support/new" className="text-xs text-[#ec7161] font-medium hover:underline">
              Open your first ticket
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {tickets.slice(0, 5).map((t: any) => (
              <Link
                key={t.id}
                href={`/my-account/support/${t.id}`}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${STATUS_DOT[t.status] ?? 'bg-gray-400'}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#0F1112] truncate">{t.subject}</p>
                  <p className="text-xs text-gray-400 mt-0.5">#{t.id}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize flex-shrink-0 ${STATUS_COLORS[t.status] ?? 'bg-gray-100 text-gray-600'}`}>
                  {t.status}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
