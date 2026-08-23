'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useLicensesStore } from '@/store/useLicensesStore';
import { hasUpsellOffers, canRenewSupport } from '@/lib/license-offers';

export default function RenewAddonsBanner() {
  const { items, fetch: fetchLicenses } = useLicensesStore();

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  const actionable = items.filter(hasUpsellOffers);
  if (actionable.length === 0) return null;

  const renewalCount = actionable.filter(canRenewSupport).length;
  const addonCount = actionable.length - renewalCount;

  const parts: string[] = [];
  if (renewalCount > 0) parts.push(`${renewalCount} license${renewalCount > 1 ? 's' : ''} can be renewed`);
  if (addonCount > 0) parts.push(`${addonCount} add-on${addonCount > 1 ? 's' : ''} available`);

  return (
    <Link
      href="/my-account/addons"
      className="group flex items-center gap-4 bg-white rounded-2xl border border-[#ec7161]/30 p-4 hover:shadow-sm transition-all"
    >
      <div className="w-9 h-9 rounded-xl bg-[#ec7161]/10 flex items-center justify-center flex-shrink-0 text-[#ec7161]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#0F1112]">{parts.join(' · ')}</p>
        <p className="text-xs text-gray-500">Renew support or add services to keep your licenses up to date.</p>
      </div>
      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#ec7161] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
