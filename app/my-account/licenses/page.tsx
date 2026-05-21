'use client';
import { useEffect, useState } from 'react';
import type { LicenseActivation } from '@/lib/license-server';
import { useLicensesStore } from '@/store/useLicensesStore';

function DomainRow({ activation, licenseKey, onToggle }: {
  activation: LicenseActivation;
  licenseKey: string;
  onToggle: (domain: string, action: 'activate' | 'deactivate') => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);

  async function handleToggle() {
    setBusy(true);
    await onToggle(activation.domain, activation.status === 1 ? 'deactivate' : 'activate');
    setBusy(false);
  }

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-medium text-[#0F1112]">{activation.domain}</p>
        <p className="text-xs text-gray-400">{activation.ip} · activated {new Date(activation.activated_at).toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${activation.status === 1 ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {activation.status === 1 ? 'Active' : 'Inactive'}
        </span>
        <button
          onClick={handleToggle}
          disabled={busy}
          className="text-xs text-[#ec7161] hover:underline disabled:opacity-50"
        >
          {busy ? '…' : activation.status === 1 ? 'Deactivate' : 'Activate'}
        </button>
      </div>
    </div>
  );
}

export default function LicensesPage() {
  const { items, loading, error, fetch: fetchLicenses, updateActivations } = useLicensesStore();
  const [actionError, setActionError] = useState('');

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  async function handleDomainToggle(licenseKey: string, domain: string, action: 'activate' | 'deactivate') {
    setActionError('');
    const res = await fetch('/api/license-server/licenses/domain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: licenseKey, domain, action }),
    });
    const data = await res.json();
    if (!res.ok) {
      setActionError(data.error ?? 'Domain action failed.');
      return;
    }
    const updatedDomains: LicenseActivation[] = data.data?.all_domains ?? [];
    updateActivations(licenseKey, updatedDomains);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">My Licenses</h1>

      {actionError && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{actionError}</div>
      )}

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

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.license_key ?? item.purchase_code} className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h2 className="text-base font-semibold text-[#0F1112]">{item.product_name}</h2>
                <p className="text-xs text-gray-400 mt-0.5">{item.license_type} · <span className="capitalize">{item.platform}</span></p>
              </div>
              <span className={`self-start text-xs px-2.5 py-1 rounded-full font-medium ${
                item.validity === 'blocked'
                  ? 'bg-red-50 text-red-600'
                  : 'bg-green-50 text-green-700'
              }`}>
                {item.validity === 'blocked' ? 'Blocked' : 'Valid'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">License Key</p>
                <p className="font-mono text-xs text-gray-700 break-all">{item.license_key ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Purchase Code</p>
                <p className="font-mono text-xs text-gray-700 break-all">{item.purchase_code ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Support expires</p>
                <p className={`text-sm font-medium ${item.support_active ? 'text-green-700' : 'text-red-500'}`}>
                  {item.supported_until
                    ? new Date(item.supported_until).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                    : '—'}
                  {' '}
                  <span className="text-xs font-normal">({item.support_active ? 'active' : 'expired'})</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Purchased</p>
                <p className="text-sm text-gray-700">
                  {item.purchased_at ? new Date(item.purchased_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—'}
                </p>
              </div>
            </div>

            {item.activations && item.activations.length > 0 && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Activated Domains</p>
                <div className="bg-gray-50 rounded-xl px-4 py-1">
                  {item.activations.map((act) => (
                    <DomainRow
                      key={act.domain}
                      activation={act}
                      licenseKey={item.license_key}
                      onToggle={(domain, action) => handleDomainToggle(item.license_key, domain, action)}
                    />
                  ))}
                </div>
              </div>
            )}

            {(!item.activations || item.activations.length === 0) && (
              <p className="text-xs text-gray-400">No domains activated yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
