'use client';
import { useEffect } from 'react';
import { useLicensesStore } from '@/store/useLicensesStore';

export default function PurchasesPage() {
  const { items, loading, error, fetch: fetchLicenses } = useLicensesStore();

  useEffect(() => { fetchLicenses(); }, [fetchLicenses]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">Purchase History</h1>

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
          <p className="text-sm text-gray-400">No purchases found.</p>
        </div>
      )}

      {items.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Product</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">License Key</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Type</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Platform</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Amount</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Date</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item) => (
                  <tr key={item.license_key ?? item.purchase_code} className="hover:bg-gray-50/50">
                    <td className="px-5 py-4 font-medium text-[#0F1112]">{item.product_name}</td>
                    <td className="px-5 py-4 font-mono text-xs text-gray-500">{item.license_key ?? '—'}</td>
                    <td className="px-5 py-4 text-gray-600">{item.license_type}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                        {item.platform}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-700">
                      {item.payment?.amount
                        ? `${item.payment.currency} ${parseFloat(item.payment.amount).toFixed(2)}`
                        : '—'}
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      {item.purchased_at
                        ? new Date(item.purchased_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                        : '—'}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.payment?.status === 'completed'
                          ? 'bg-green-50 text-green-700'
                          : item.payment?.status === 'refunded'
                          ? 'bg-orange-50 text-orange-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {item.payment?.status ?? 'N/A'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
