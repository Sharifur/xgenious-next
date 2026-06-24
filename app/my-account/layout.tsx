import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Script from 'next/script';
import AccountSidebar from './_components/AccountSidebar';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'My Account' };

const FS_STOREFRONT = process.env.NEXT_PUBLIC_FASTSPRING_STOREFRONT;

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gray-50">
      {/* FastSpring — scoped to /my-account for the Support Renewal popup (not loaded on public pages) */}
      {FS_STOREFRONT && (
        <Script
          id="fsc-api"
          src="https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.5/fastspring-builder.min.js"
          data-storefront={FS_STOREFRONT}
          data-popup-webhook-received="onFastSpringWebhookReceived"
          data-popup-closed="onFastSpringPopupClosed"
          strategy="afterInteractive"
        />
      )}
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar name={session.user?.name} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
