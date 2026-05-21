'use client';
import { useEffect, useState } from 'react';
import type { PurchaseItem } from '@/lib/license-server';
import { useLicensesStore } from '@/store/useLicensesStore';

export default function DownloadsPage() {
  const { items: allItems, loading, error, fetch: fetchLicenses } = useLicensesStore();
  const items = allItems.filter((i) => i.license_key && i.validity !== 'blocked');
  const [downloadingKey, setDownloadingKey] = useState<string | null>(null);
  const [downloadErrors, setDownloadErrors] = useState<Record<string, string>>({});

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  async function handleDownload(item: PurchaseItem) {
    setDownloadingKey(item.license_key);
    setDownloadErrors((prev) => ({ ...prev, [item.license_key]: '' }));

    const res = await fetch('/api/license-server/updates/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_uid: item.product_uid, license_key: item.license_key }),
    });
    const data = await res.json();
    setDownloadingKey(null);

    if (!res.ok) {
      setDownloadErrors((prev) => ({ ...prev, [item.license_key]: data.error ?? 'Download failed.' }));
      return;
    }

    const url = data.data?.download_url;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
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
          {items.map((item) => (
            <div key={item.license_key} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ec7161]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#ec7161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F1112]">{item.product_name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.license_type} · <span className="capitalize">{item.platform}</span></p>
                  {downloadErrors[item.license_key] && (
                    <p className="text-xs text-red-500 mt-1">{downloadErrors[item.license_key]}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDownload(item)}
                disabled={downloadingKey === item.license_key}
                className="flex items-center gap-2 px-4 py-2 bg-[#ec7161] text-white text-sm font-medium rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0"
              >
                {downloadingKey === item.license_key ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
