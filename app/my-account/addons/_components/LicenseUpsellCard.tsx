'use client';
import Link from 'next/link';
import LicenseUpsellAction from '@/components/LicenseUpsellAction';
import AddonInfoDisclosure from '@/components/AddonInfoDisclosure';
import { getAvailableAddons, needsSupportRenewal, categorizeAddonPath, resolveSupportRenewalPath } from '@/lib/license-offers';
import type { PurchaseItem } from '@/lib/license-server';

interface Props {
  item: PurchaseItem;
  userEmail?: string;
}

export default function LicenseUpsellCard({ item, userEmail }: Props) {
  const renewalNeeded = needsSupportRenewal(item);
  const offers = getAvailableAddons(item).filter((o) => !o.alreadyOwned);

  if (!renewalNeeded && offers.length === 0) return null;

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

      <div className="space-y-2.5">
        {renewalNeeded && (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-[#0F1112]">Support renewal</p>
            <LicenseUpsellAction
              licenseKey={item.license_key}
              productUid={item.product_uid}
              productPath={resolveSupportRenewalPath(item)}
              licenseType="support_renewal"
              label="Renew Support"
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
