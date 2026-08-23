import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Script from 'next/script';
import { FASTSPRING_SCRIPT, FASTSPRING_STORE } from '@/lib/fastspring';
import AccountSidebar from './_components/AccountSidebar';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Account' };

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gray-50">
      {/* FastSpring — scoped to /my-account for the Renew/Add-on popups (not loaded on public pages).
          Shares the same script/storefront as /checkout so it never silently fails to load. */}
      <Script
        id="fsc-api"
        src={FASTSPRING_SCRIPT}
        data-storefront={FASTSPRING_STORE}
        data-popup-webhook-received="onFastSpringWebhookReceived"
        data-popup-closed="onFastSpringPopupClosed"
        strategy="afterInteractive"
      />
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar name={session.user?.name} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
