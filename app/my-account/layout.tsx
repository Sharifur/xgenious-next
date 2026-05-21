import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import AccountSidebar from './_components/AccountSidebar';

export const metadata = { title: 'My Account' };

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect('/login');

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto flex gap-6">
        <AccountSidebar name={session.user?.name} />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
