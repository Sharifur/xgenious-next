'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useLicensesStore } from '@/store/useLicensesStore';
import type { LicenseActivation } from '@/lib/license-server';
import LicenseUpsellAction from '@/components/LicenseUpsellAction';
import AddonInfoDisclosure from '@/components/AddonInfoDisclosure';
import { getAvailableAddons, categorizeAddonPath, resolveSupportRenewalPath, canRenewSupport, supportRenewalLabel } from '@/lib/license-offers';

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-xs text-gray-400 hover:text-[#ec7161] transition-colors flex-shrink-0 cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

function DomainRow({
  activation,
  onToggle,
}: {
  activation: LicenseActivation;
  onToggle: (domain: string, action: 'activate' | 'deactivate') => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);

  async function handleToggle() {
    setBusy(true);
    await onToggle(activation.domain, activation.status === 1 ? 'deactivate' : 'activate');
    setBusy(false);
  }

  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activation.status === 1 ? 'bg-green-500' : 'bg-gray-300'}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#0F1112] truncate">{activation.domain}</p>
        <p className="text-xs text-gray-400 mt-0.5">
          {activation.ip} · activated {new Date(activation.activated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      </div>
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${activation.status === 1 ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
        {activation.status === 1 ? 'Active' : 'Inactive'}
      </span>
      <button
        onClick={handleToggle}
        disabled={busy}
        className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex-shrink-0 ${
          activation.status === 1
            ? 'border-red-200 text-red-600 hover:bg-red-50'
            : 'border-green-200 text-green-700 hover:bg-green-50'
        }`}
      >
        {busy ? '…' : activation.status === 1 ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default function LicenseDetailPage() {
  const { key } = useParams<{ key: string }>();
  const decodedKey = decodeURIComponent(key);
  const { items, loading, error, fetch: fetchLicenses, updateActivations } = useLicensesStore();
  const { data: session } = useSession();
  const userEmail = (session as any)?.wpEmail ?? session?.user?.email ?? '';
  const [actionError, setActionError] = useState('');

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  const item = items.find(
    (i) => i.license_key === decodedKey || i.purchase_code === decodedKey
  );

  async function handleDomainToggle(domain: string, action: 'activate' | 'deactivate') {
    if (!item) return;
    setActionError('');
    const res = await fetch('/api/license-server/licenses/domain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: item.license_key, domain, action }),
    });
    const data = await res.json();
    if (!res.ok) {
      setActionError(data.error ?? 'Domain action failed.');
      return;
    }
    const updatedDomains: LicenseActivation[] = data.data?.all_domains ?? [];
    updateActivations(item.license_key, updatedDomains);
  }

  if (loading && !item) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <div className="w-8 h-8 border-2 border-[#ec7161] border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (error || (!loading && !item)) {
    return (
      <div className="space-y-4">
        <Link href="/my-account/licenses" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#ec7161] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to licenses
        </Link>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-sm text-red-500">
          {error || 'License not found.'}
        </div>
      </div>
    );
  }

  if (!item) return null;

  const activeDomains = item.activations?.filter((a) => a.status === 1).length ?? 0;
  const availableAddons = getAvailableAddons(item).filter((o) => !o.alreadyOwned);

  return (
    <div className="space-y-4">
      <Link href="/my-account/licenses" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#ec7161] transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to licenses
      </Link>

      {/* Header card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ec7161]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#ec7161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-[#0F1112]">{item.product_name}</h1>
              <p className="text-xs text-gray-400 mt-0.5">{item.variant?.name ?? item.license_type} · <span className="capitalize">{item.platform}</span></p>
            </div>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${
            item.validity === 'blocked' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'
          }`}>
            {item.validity === 'blocked' ? 'Blocked' : 'Valid'}
          </span>
        </div>
      </div>

      {actionError && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">{actionError}</div>
      )}

      {/* License details */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">License Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">License Key</p>
            <div className="flex items-center">
              <p className="font-mono text-xs text-[#0F1112] break-all">{item.license_key ?? '—'}</p>
              {item.license_key && <CopyButton value={item.license_key} />}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Purchase Code</p>
            <div className="flex items-center">
              <p className="font-mono text-xs text-[#0F1112] break-all">{item.purchase_code ?? '—'}</p>
              {item.purchase_code && <CopyButton value={item.purchase_code} />}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Support expires</p>
            <p className={`text-sm font-medium ${item.support_active ? 'text-green-700' : 'text-red-500'}`}>
              {item.supported_until
                ? new Date(item.supported_until).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                : '—'}
              <span className="text-xs font-normal ml-1.5 opacity-80">
                ({item.support_active ? 'active' : 'expired'})
              </span>
            </p>
            {canRenewSupport(item) && (
              <div className="mt-2">
                <LicenseUpsellAction
                  licenseKey={item.license_key}
                  productUid={item.product_uid}
                  productPath={resolveSupportRenewalPath(item)}
                  licenseType="support_renewal"
                  label={supportRenewalLabel(item)}
                  userEmail={userEmail}
                />
              </div>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Purchased</p>
            <p className="text-sm text-[#0F1112]">
              {item.purchased_at
                ? new Date(item.purchased_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                : '—'}
            </p>
          </div>
        </div>
      </div>

      {/* Available add-ons */}
      {availableAddons.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Available Add-ons</h2>
          <div className="space-y-3">
            {availableAddons.map(({ addon }) => (
              <div key={addon.path} className="flex flex-wrap items-center justify-between gap-3 py-2 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-medium text-[#0F1112]">{addon.label}</p>
                    <AddonInfoDisclosure addon={addon} />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{addon.description}</p>
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
      )}

      {/* Domains */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Activated Domains</h2>
          {item.activations && item.activations.length > 0 && (
            <span className="text-xs text-gray-400">{activeDomains} active · {item.activations.length} total</span>
          )}
        </div>

        {!item.activations || item.activations.length === 0 ? (
          <div className="py-6 text-center">
            <p className="text-sm text-gray-400">No domains activated yet.</p>
          </div>
        ) : (
          <div>
            {item.activations.map((act) => (
              <DomainRow
                key={act.domain}
                activation={act}
                onToggle={handleDomainToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
