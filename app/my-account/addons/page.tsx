'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useLicensesStore } from '@/store/useLicensesStore';
import { hasUpsellOffers } from '@/lib/license-offers';
import LicenseUpsellCard from './_components/LicenseUpsellCard';

export default function AddonsPage() {
  const { items, loading, error, fetch: fetchLicenses } = useLicensesStore();
  const { data: session } = useSession();
  const userEmail = (session as any)?.wpEmail ?? session?.user?.email ?? '';

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  const actionable = items.filter(hasUpsellOffers);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-[#0F1112]">Renew & Add-ons</h1>
        <p className="text-sm text-gray-400 mt-1">Extend support or add services to your existing licenses.</p>
      </div>

      {loading && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-[#ec7161] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      )}

      {error && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center text-sm text-red-500">{error}</div>
      )}

      {!loading && !error && actionable.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-sm text-gray-400">Nothing needs your attention — all support is active and every add-on is up to date.</p>
        </div>
      )}

      {actionable.length > 0 && (
        <div className="space-y-3">
          {actionable.map((item) => (
            <LicenseUpsellCard key={item.license_key ?? item.purchase_code} item={item} userEmail={userEmail} />
          ))}
        </div>
      )}
    </div>
  );
}
