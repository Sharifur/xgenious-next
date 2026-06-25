import { COLOR, COLOR_DARK, LIGHT_COLOR } from './constants';

export default function Definition() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[900px] mx-auto">

        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: `${COLOR}15`, color: COLOR }}
          >
            What is ListOcean?
          </div>

          <h2 className="text-[26px] sm:text-[38px] font-bold text-[#0F1112] leading-tight max-w-[780px]">
            A complete classified ads platform you own — no recurring platform fees, no commission on your revenue.
          </h2>

          <p className="text-[#374151] text-[16px] sm:text-[17px] leading-8 max-w-[800px]">
            <strong>ListOcean is a classified ads and listing platform built on Laravel.</strong> It enables entrepreneurs
            to launch a local marketplace where users can post, discover, and respond to listings across any category —
            real estate, vehicles, jobs, electronics, and services — with built-in live chat, membership tiers,
            a digital wallet, and Google Maps location filtering. You buy it once and own the complete source code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              {
                label: 'Any niche classifieds',
                detail: 'Real estate, vehicles, jobs, services, electronics — configure your own categories',
              },
              {
                label: 'Live chat & maps built-in',
                detail: 'Real-time buyer-seller messaging and location-based listing discovery from day one',
              },
              {
                label: 'Monetize from launch',
                detail: 'Featured listings, memberships, wallet payments, and ad banners — multiple revenue streams',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border p-4"
                style={{ background: LIGHT_COLOR, borderColor: `${COLOR}30` }}
              >
                <p className="text-[13px] font-bold mb-1.5" style={{ color: COLOR_DARK }}>{item.label}</p>
                <p className="text-[12px] text-[#6b7280] leading-5">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
