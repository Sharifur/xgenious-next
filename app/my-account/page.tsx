import { auth } from '@/auth';
import Link from 'next/link';

export const metadata = { title: 'Dashboard — My Account' };

async function getTickets(wpEmail: string) {
  try {
    const res = await fetch(
      `https://public-api.taskip.net/api/public-v1/support-ticket?limit=5&search=${encodeURIComponent(wpEmail)}`,
      {
        headers: { 'X-Secret-Key': process.env.TASKIP_SECRET_KEY! },
        cache: 'no-store',
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? data ?? [];
  } catch {
    return [];
  }
}

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-50 text-blue-700',
  'in-progress': 'bg-yellow-50 text-yellow-700',
  resolved: 'bg-green-50 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
};

export default async function DashboardPage() {
  const session = await auth();
  const tickets = await getTickets(session!.wpEmail ?? session!.user?.email ?? '');

  const quickLinks = [
    { href: '/my-account/licenses', label: 'My Licenses', desc: 'View and manage your product licenses' },
    { href: '/my-account/downloads', label: 'Downloads', desc: 'Download your purchased products' },
    { href: '/my-account/support/new', label: 'Open a Ticket', desc: 'Get help from our support team' },
    { href: '/my-account/purchases', label: 'Purchase History', desc: 'View your orders and payments' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h1 className="text-xl font-bold text-[#0F1112] mb-1">
          Welcome back, {session!.user?.name?.split(' ')[0] ?? 'there'}
        </h1>
        <p className="text-sm text-gray-500">{session!.wpEmail ?? session!.user?.email}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {quickLinks.map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-[#ec7161]/40 hover:shadow-sm transition-all group"
          >
            <p className="text-sm font-semibold text-[#0F1112] group-hover:text-[#ec7161] transition-colors mb-1">
              {label}
            </p>
            <p className="text-xs text-gray-500">{desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-[#0F1112]">Recent Tickets</h2>
          <Link href="/my-account/support" className="text-xs text-[#ec7161] hover:underline font-medium">
            View all
          </Link>
        </div>
        {tickets.length === 0 ? (
          <p className="text-sm text-gray-400 py-4 text-center">No tickets yet.</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {tickets.slice(0, 5).map((t: any) => (
              <Link
                key={t.id}
                href={`/my-account/support/${t.id}`}
                className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-[#0F1112]">{t.subject}</p>
                  <p className="text-xs text-gray-400 mt-0.5">#{t.id}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${
                    STATUS_COLORS[t.status] ?? 'bg-gray-100 text-gray-600'
                  }`}
                >
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
