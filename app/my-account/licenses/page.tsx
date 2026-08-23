'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useLicensesStore } from '@/store/useLicensesStore';
import { canRenewSupport, supportRenewalLabel, hasUpsellOffers, resolveSupportRenewalPath } from '@/lib/license-offers';
import LicenseUpsellAction from '@/components/LicenseUpsellAction';

export default function LicensesPage() {
  const { items, loading, error, fetch: fetchLicenses } = useLicensesStore();
  const { data: session } = useSession();
  const userEmail = (session as any)?.wpEmail ?? session?.user?.email ?? '';

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">My Licenses</h1>

      {loading && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-[#ec7161] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      )}

      {error && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center text-sm text-red-500">{error}</div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-sm text-gray-400">No licenses found.</p>
        </div>
      )}

      {!loading && items.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {items.map((item) => {
              const slug = encodeURIComponent(item.license_key ?? item.purchase_code);
              const activeDomains = item.activations?.filter((a) => a.status === 1).length ?? 0;
              const totalDomains = item.activations?.length ?? 0;

              const renewalOffered = canRenewSupport(item);
              const showUpsell = hasUpsellOffers(item);

              return (
                <div
                  key={item.license_key ?? item.purchase_code}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <Link href={`/my-account/licenses/${slug}`} className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-[#ec7161]/30 transition-colors">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ec7161] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#0F1112] truncate group-hover:text-[#ec7161] transition-colors">
                        {item.product_name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-xs text-gray-400 capitalize">{item.platform}</span>
                        <span className="text-gray-200 text-xs">·</span>
                        <span className="text-xs text-gray-400">{item.variant?.name ?? item.license_type}</span>
                        {item.license_key && (
                          <>
                            <span className="text-gray-200 text-xs">·</span>
                            <span className="font-mono text-xs text-gray-400">{item.license_key.slice(0, 9)}…</span>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    {totalDomains > 0 && (
                      <span className="text-xs text-gray-400 hidden sm:block">
                        {activeDomains}/{totalDomains} domains
                      </span>
                    )}
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.support_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.support_active ? 'Support active' : 'Support expired'}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.validity === 'blocked' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {item.validity === 'blocked' ? 'Blocked' : 'Valid'}
                    </span>
                    {showUpsell && (
                      renewalOffered ? (
                        <LicenseUpsellAction
                          licenseKey={item.license_key}
                          productUid={item.product_uid}
                          productPath={resolveSupportRenewalPath(item)}
                          licenseType="support_renewal"
                          label={supportRenewalLabel(item)}
                          userEmail={userEmail}
                          variant="compact"
                        />
                      ) : (
                        <Link
                          href="/my-account/addons"
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#ec7161]/10 text-[#ec7161] hover:bg-[#ec7161]/20 transition-colors"
                        >
                          Add-ons
                        </Link>
                      )
                    )}
                    <Link href={`/my-account/licenses/${slug}`}>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#ec7161] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
