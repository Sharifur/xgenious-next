'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import type { PurchaseItem } from '@/lib/license-server';
import { useLicensesStore } from '@/store/useLicensesStore';
import { getAvailableAddons, canRenewSupport, supportRenewalLabel, hasUpsellOffers, categorizeAddonPath, resolveSupportRenewalPath } from '@/lib/license-offers';
import LicenseUpsellAction from '@/components/LicenseUpsellAction';
import AddonInfoDisclosure from '@/components/AddonInfoDisclosure';

const LS_PREFIX = 'xg_update_url_';
const TTL_MS = 60 * 60 * 1000;

function saveUpdateUrl(licenseKey: string, url: string) {
  try {
    localStorage.setItem(LS_PREFIX + licenseKey, JSON.stringify({ url, expiresAt: Date.now() + TTL_MS }));
  } catch {}
}

function loadUpdateUrls(licenseKeys: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  try {
    for (const key of licenseKeys) {
      const raw = localStorage.getItem(LS_PREFIX + key);
      if (!raw) continue;
      const { url, expiresAt } = JSON.parse(raw);
      if (Date.now() < expiresAt) result[key] = url;
      else localStorage.removeItem(LS_PREFIX + key);
    }
  } catch {}
  return result;
}

export default function DownloadsPage() {
  const { items: allItems, loading, error, fetch: fetchLicenses } = useLicensesStore();
  const items = allItems.filter((i) => i.license_key && i.validity !== 'blocked');
  const { data: session } = useSession();
  const userEmail = (session as any)?.wpEmail ?? session?.user?.email ?? '';
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [updateUrls, setUpdateUrls] = useState<Record<string, string>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [pageErrors, setPageErrors] = useState<Record<string, string>>({});

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  useEffect(() => {
    if (items.length === 0) return;
    const saved = loadUpdateUrls(items.map((i) => i.license_key));
    if (Object.keys(saved).length > 0) setUpdateUrls((prev) => ({ ...saved, ...prev }));
  }, [items.length]);

  async function handleFreshInstall(item: PurchaseItem) {
    setLoadingKey(item.license_key + ':fresh');
    setPageErrors((prev) => ({ ...prev, [item.license_key]: '' }));

    const url = `/api/license-server/downloads/fresh-install?license_key=${encodeURIComponent(item.license_key)}&product_uid=${encodeURIComponent(item.product_uid)}`;

    try {
      const check = await fetch(url, { method: 'HEAD' });
      if (!check.ok) {
        const res = await fetch(url);
        const data = await res.json().catch(() => ({}));
        setPageErrors((prev) => ({ ...prev, [item.license_key]: data.error ?? 'Download not available.' }));
        setLoadingKey(null);
        return;
      }
    } catch {}

    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setLoadingKey(null), 2000);
  }

  async function handleGenerateUpdateUrl(item: PurchaseItem) {
    setLoadingKey(item.license_key + ':update');
    setPageErrors((prev) => ({ ...prev, [item.license_key]: '' }));

    const res = await fetch('/api/license-server/updates/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_uid: item.product_uid, license_key: item.license_key }),
    });
    const data = await res.json();
    setLoadingKey(null);

    if (!res.ok) {
      const msg = typeof data.error === 'string' ? data.error : (data.message ?? 'Failed to generate update URL.');
      setPageErrors((prev) => ({ ...prev, [item.license_key]: msg }));
      return;
    }

    const url = data.data?.download_url ?? data.download_url;
    if (url) {
      setUpdateUrls((prev) => ({ ...prev, [item.license_key]: url }));
      saveUpdateUrl(item.license_key, url);
    }
  }

  async function handleCopy(licenseKey: string, url: string) {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedKey(licenseKey);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">Downloads</h1>

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
          <p className="text-sm text-gray-400">No downloadable products found.</p>
        </div>
      )}

      {items.length > 0 && (
        <div className="space-y-3">
          {items.map((item) => {
            const renewalOffered = canRenewSupport(item);
            const addonOffers = getAvailableAddons(item).filter((o) => !o.alreadyOwned);
            const showUpsell = hasUpsellOffers(item);

            return (
            <div key={item.license_key} className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ec7161]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#ec7161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#0F1112]">{item.product_name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.variant?.name ?? item.license_type} · <span className="capitalize">{item.platform}</span></p>
                  {item.latest_version && item.version_updated_at && (
                    <p className="text-xs text-gray-500 mt-1">
                      Current version: <span className="font-medium">{item.latest_version}</span> · Updated {new Date(item.version_updated_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                {item.platform === 'xgenious' && (
                  <button
                    onClick={() => handleFreshInstall(item)}
                    disabled={loadingKey?.startsWith(item.license_key) ?? false}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ec7161] text-white text-sm font-medium rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loadingKey === item.license_key + ':fresh' ? (
                      <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />Starting…</>
                    ) : (
                      <><DownloadIcon />Fresh Install</>
                    )}
                  </button>
                )}

                <button
                  onClick={() => handleGenerateUpdateUrl(item)}
                  disabled={loadingKey?.startsWith(item.license_key) ?? false}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loadingKey === item.license_key + ':update' ? (
                    <><div className="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />Generating…</>
                  ) : (
                    <><LinkIcon />{updateUrls[item.license_key] ? 'Regenerate URL' : 'Generate Update URL'}</>
                  )}
                </button>
              </div>

              {pageErrors[item.license_key] && (
                <p className="text-xs text-red-500">{pageErrors[item.license_key]}</p>
              )}

              {updateUrls[item.license_key] && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Update download URL (expires in 60 min)</p>
                  <div className="flex items-center gap-2">
                    <input
                      readOnly
                      value={updateUrls[item.license_key]}
                      className="flex-1 text-xs bg-white border border-gray-200 rounded px-2.5 py-1.5 text-gray-700 font-mono truncate focus:outline-none"
                    />
                    <button
                      onClick={() => handleCopy(item.license_key, updateUrls[item.license_key])}
                      className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded hover:bg-gray-100 transition-colors flex-shrink-0 min-w-[56px]"
                    >
                      {copiedKey === item.license_key ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}

              {showUpsell && (
                <div className="border-t border-gray-100 pt-4 space-y-2.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Renew & Add-ons</p>
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
                  {addonOffers.map(({ addon }) => (
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
              )}
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
