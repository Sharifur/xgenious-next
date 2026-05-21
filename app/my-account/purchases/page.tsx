export const metadata = { title: 'Purchase History — My Account' };

export default function PurchasesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">Purchase History</h1>
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <p className="text-sm text-gray-400 mb-1">Purchase history coming soon.</p>
        <p className="text-xs text-gray-300">Orders and payments via Stripe will appear here.</p>
      </div>
    </div>
  );
}
