import Image from 'next/image';
import { COLOR, COLOR_DARK, MOBILE_APPS } from './constants';

const SHOTS: Record<string, { front: string; back: string }> = {
  customer: {
    front: '/products/safecart/app-customer-home.png',
    back: '/products/safecart/app-customer-product.png',
  },
  vendor: {
    front: '/products/safecart/app-vendor-dashboard.png',
    back: '/products/safecart/app-vendor-products.png',
  },
  delivery: {
    front: '/products/safecart/app-delivery-dashboard.png',
    back: '/products/safecart/app-delivery-location.png',
  },
};

const PLAY_STORE: Record<string, string> = {
  customer: 'https://play.google.com/store/apps/details?id=com.xgenious.safecart',
  vendor: 'https://play.google.com/store/apps/details?id=com.xgenious.safecart_vendor_app',
  delivery: 'https://play.google.com/store/apps/details?id=com.xgenious.safecart_delivery_app',
};

function GooglePlayButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-white transition-all hover:-translate-y-0.5"
      style={{ background: '#0f172a' }}
    >
      <svg width="16" height="18" viewBox="0 0 512 512" aria-hidden="true">
        <path d="M48 59.5C44 63.7 41.6 70.2 41.6 78.7V433.3c0 8.5 2.4 15 6.4 19.2l1.9 1.8L256 248.3v-4.6L49.9 57.7 48 59.5z" fill="#00d2ff" />
        <path d="M325 317l-69-69v-4.6l69-69 1.5.9 81.7 46.4c23.3 13.2 23.3 34.9 0 48.2L326.5 316l-1.5 1z" fill="#ffce00" />
        <path d="M326.5 316L256 245.5 49.9 451.7c7.7 8.1 20.3 9.1 34.6 1L326.5 316z" fill="#ff3a44" />
        <path d="M326.5 175.5L84.5 38.5c-14.3-8.1-26.9-7.1-34.6 1L256 245.5l70.5-70z" fill="#00f076" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[8px] opacity-80">GET IT ON</span>
        <span className="block text-[13px] font-bold">Google Play</span>
      </span>
    </a>
  );
}

function PhoneShell({ shot, alt, width }: { shot: string; alt: string; width: number }) {
  return (
    <div className="rounded-[1.5rem] bg-[#0f172a] p-[5px] shadow-[0_18px_45px_-12px_rgba(15,23,42,0.4)]" style={{ width }}>
      <div className="relative overflow-hidden rounded-[1.2rem] bg-white" style={{ aspectRatio: '9 / 19.5' }}>
        <div className="absolute top-0 left-1/2 z-10 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-[#0f172a]" />
        <Image src={shot} alt={alt} fill className="object-cover object-top" sizes="170px" />
      </div>
    </div>
  );
}

function PhoneDuo({ icon, name }: { icon: string; name: string }) {
  const s = SHOTS[icon] ?? SHOTS.customer;
  return (
    <div className="flex items-end justify-center">
      <div className="relative z-10">
        <PhoneShell shot={s.front} alt={`SafeCart ${name} — main screen`} width={152} />
      </div>
      <div className="-ml-10 mb-6 rotate-[5deg] opacity-95">
        <PhoneShell shot={s.back} alt={`SafeCart ${name} — second screen`} width={120} />
      </div>
    </div>
  );
}

export default function MobileApps() {
  const phoneApps = MOBILE_APPS.filter((a) => a.icon !== 'builder');
  const builder = MOBILE_APPS.find((a) => a.icon === 'builder');
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        {/* header */}
        <div className="max-w-[720px] mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 justify-center flex-wrap mb-5">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest" style={{ background: `${COLOR}15`, color: COLOR }}>
              Mobile Apps &amp; Builders
            </div>
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Three Flutter Apps — Customer, Vendor &amp; Delivery
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            The <strong>Vendor Bundle ($99) and Exclusive Pack ($199)</strong> ship three ready-to-publish Flutter apps for
            Android and iOS — full source included. Not in the Regular License.
          </p>
        </div>

        {/* phone showcase — 3 apps, 2 screenshots each */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 max-w-[880px] mx-auto">
          {phoneApps.map((app) => {
            const store = PLAY_STORE[app.icon];
            return (
              <div key={app.name} className="flex flex-col items-center text-center">
                {store ? (
                  <a href={store} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1" aria-label={`Get SafeCart ${app.name} on Google Play`}>
                    <PhoneDuo icon={app.icon} name={app.name} />
                  </a>
                ) : (
                  <PhoneDuo icon={app.icon} name={app.name} />
                )}
                <div className="mt-7 flex items-center gap-2 justify-center flex-wrap">
                  <h3 className="text-[15px] font-bold text-[#0F1112]">{app.name}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}15`, color: COLOR }}>{app.platform}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-5 mt-2 max-w-[240px]">{app.desc}</p>
                {store && (
                  <div className="mt-4">
                    <GooglePlayButton href={store} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* app store note */}
        <div className="flex items-center justify-center gap-2 mt-12 flex-wrap text-center">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
          </svg>
          <span className="text-[13px] text-[#4b5563]">
            Live on <strong className="text-[#0F1112]">Google Play</strong> · iOS App Store ready · full Flutter source to publish under your own brand
          </span>
        </div>

        {/* bundle availability info bar */}
        <div
          className="max-w-[880px] mx-auto mt-8 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: `${COLOR}0d`, border: `1px solid ${COLOR}25` }}
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: COLOR }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-bold text-[#0F1112] mb-1">
              All three apps are included only in the Vendor Bundle &amp; Exclusive Pack
            </p>
            <p className="text-[13px] text-[#6b7280]">
              Get the Customer, Vendor &amp; Delivery apps with full Flutter source in the{' '}
              <strong className="text-[#0F1112]">Vendor Bundle ($99)</strong> or{' '}
              <strong className="text-[#0F1112]">Exclusive Pack ($199)</strong>. The Regular License does{' '}
              <strong className="text-[#dc2626]">not</strong> include any mobile apps.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 4px 16px ${COLOR}40` }}
          >
            View bundles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* no-code builder strip */}
        {builder && (
          <div className="max-w-[880px] mx-auto mt-10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: `${COLOR}0d`, border: `1px solid ${COLOR}25` }}>
            <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: COLOR }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <h3 className="text-[15px] font-bold text-[#0F1112]">{builder.name}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}15`, color: COLOR_DARK }}>All licenses</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">{builder.desc}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
