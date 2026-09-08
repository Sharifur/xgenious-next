'use client';
import Link from 'next/link';
import LicenseUpsellAction from '@/components/LicenseUpsellAction';
import AddonInfoDisclosure from '@/components/AddonInfoDisclosure';
import { getAvailableAddons, canRenewSupport, supportRenewalLabel, categorizeAddonPath, resolveSupportRenewalPath } from '@/lib/license-offers';
import type { PurchaseItem } from '@/lib/license-server';

interface Props {
  item: PurchaseItem;
  userEmail?: string;
}

export default function LicenseUpsellCard({ item, userEmail }: Props) {
  const renewalOffered = canRenewSupport(item);
  const offers = getAvailableAddons(item).filter((o) => !o.alreadyOwned);
  const supportExpired = !item.support_active;

  if (!renewalOffered && offers.length === 0) return null;

  const slug = encodeURIComponent(item.license_key ?? item.purchase_code);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#0F1112] truncate">{item.product_name}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {item.variant?.name ?? item.license_type} · <span className="capitalize">{item.platform}</span>
          </p>
        </div>
        <Link
          href={`/my-account/licenses/${slug}`}
          className="text-xs text-gray-400 hover:text-[#ec7161] transition-colors flex-shrink-0"
        >
          View license →
        </Link>
      </div>

      {supportExpired && (
        <div className="flex items-start gap-2.5 p-3 mb-3 bg-red-50 border border-red-100 rounded-xl">
          <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <p className="text-xs text-red-600">
            Support expired {new Date(item.supported_until).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} — renew to keep getting updates and priority help.
          </p>
        </div>
      )}

      <div className="space-y-2.5">
        {renewalOffered && (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-[#0F1112]">Support renewal</p>
            <LicenseUpsellAction
              licenseKey={item.license_key}
              productUid={item.product_uid}
              productPath={resolveSupportRenewalPath(item)}
              licenseType="support_renewal"
              label={supportRenewalLabel(item)}
              userEmail={userEmail}
              variant="compact"
            />
          </div>
        )}
        {offers.map(({ addon }) => (
          <div key={addon.path} className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-medium text-[#0F1112]">{addon.label}</p>
              <AddonInfoDisclosure addon={addon} />
            </div>
            <LicenseUpsellAction
              licenseKey={item.license_key}
              productUid={item.product_uid}
              productPath={addon.path}
              licenseType={categorizeAddonPath(addon.path)}
              label={`Add — $${addon.price}`}
              userEmail={userEmail}
              variant="compact"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
