const ROWS: { feature: string; value: string; kind: 'yes' | 'no' | 'roadmap' }[] = [
  { feature: 'Service catalogue with fixed prices and add-ons', value: '✓', kind: 'yes' },
  { feature: 'Book several services in one checkout', value: '✓ cart booking', kind: 'yes' },
  { feature: 'Pick a time slot / preferred professional', value: '✓ time slots, preferred staff', kind: 'yes' },
  { feature: 'Verified professionals', value: '✓ identity verification + admin approval', kind: 'yes' },
  { feature: 'Ratings and reviews', value: '✓', kind: 'yes' },
  { feature: 'In-app chat', value: '✓ live chat with activity status', kind: 'yes' },
  { feature: 'Coupons and offers', value: '✓ fixed or percentage coupons', kind: 'yes' },
  { feature: 'Online payments', value: '✓ 19 gateways', kind: 'yes' },
  { feature: 'Provider earnings and withdrawals', value: '✓', kind: 'yes' },
  { feature: 'Multi-city areas', value: '✓ state, city and area lists', kind: 'yes' },
  { feature: 'Customer memberships', value: '– not included', kind: 'no' },
  { feature: 'Selling products to customers or pros', value: '– not included', kind: 'no' },
  { feature: 'Live tracking of the professional', value: 'Roadmap', kind: 'roadmap' },
  { feature: 'Staff (serviceman) app', value: 'Roadmap', kind: 'roadmap' },
  { feature: 'Admin assigns a provider to a booking', value: '✓', kind: 'yes' },
];

export default function FeatureMap() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          Urban Company feature → ProHandy
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full min-w-[560px] text-left text-[14px]">
            <thead>
              <tr className="border-b border-[#E5E7EC] bg-[#F8F9FB]">
                <th className="px-4 py-3 font-semibold text-[#6b7280]">Urban Company-style feature</th>
                <th className="px-4 py-3 font-semibold text-[#6b7280]">In ProHandy today</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="px-4 py-3 text-[#374151]">{row.feature}</td>
                  <td className={`px-4 py-3 ${row.kind === 'yes' ? 'text-[#059669]' : row.kind === 'roadmap' ? 'text-[#b45309]' : 'text-[#9ca3af]'}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
