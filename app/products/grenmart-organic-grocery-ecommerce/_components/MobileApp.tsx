import './mobile-app.css';
import Image from 'next/image';
import { COLOR, DARK_BG, MOBILE_FEATURES, ANDROID_DEMO_URL } from './constants';

function PhoneShot({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="rounded-[1.8rem] bg-[#0b1f12] p-[5px] shadow-2xl">
      <div className="relative w-[150px] sm:w-[180px] overflow-hidden rounded-[1.5rem] bg-white" style={{ aspectRatio: '375 / 770' }}>
        <Image src={src} alt={alt} width={w} height={h} sizes="200px" className="absolute top-0 left-0 w-full h-auto" />
      </div>
    </div>
  );
}

function StoreBadge({ store }: { store: 'apple' | 'google' }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ background: '#0b1f12' }}>
      {store === 'apple' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M16.4 12.8c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.1c.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.5zM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.1z" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.7 2.2z" fill="#fff" opacity="0.9" /><path d="M16.8 15.3l-3.2-3.2v-.2l3.2-3.2.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2z" fill="#fbbc04" /><path d="M16.9 15.2l-3.3-3.3-10 10c.4.4 1 .4 1.6.1z" fill="#ea4335" /><path d="M3.6 2.3l10 10 3.3-3.3-11.7-6.6c-.6-.3-1.2-.3-1.6.1z" fill="#34a853" /></svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-white/60">{store === 'apple' ? 'Ready for the' : 'Ready for'}</span>
        <span className="block text-[13px] font-semibold text-white">{store === 'apple' ? 'App Store' : 'Google Play'}</span>
      </span>
    </span>
  );
}

export default function MobileApp() {
  return (
    <section id="mobile-app" className="py-16 sm:py-20 lg:py-[100px] overflow-hidden" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          {/* Copy + features */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest" style={{ background: `${COLOR}25`, color: '#7ee29a' }}>
                Flutter Mobile App
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider" style={{ background: '#a78bfa20', color: '#c4b5fd' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.5h7.6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                Included from the $49 Bundle
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-white mb-4 leading-tight">
              Put Your Store in Every Customer&apos;s Pocket
            </h2>
            <p className="text-[15px] leading-7 mb-8" style={{ color: '#bfe0c8' }}>
              The <strong className="text-white">Grenmart Flutter app</strong> turns your store into a native Android &amp;
              iOS shopping experience from a single codebase — powered by your existing Grenmart Laravel backend over API.
              It&apos;s <strong className="text-white">included from the $49 Everything Bundle</strong> (and the Exclusive License).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
              {MOBILE_FEATURES.map((f) => (
                <div key={f.name} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5" style={{ background: `${COLOR}2e`, color: '#7ee29a' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white leading-5 mb-0.5">{f.name}</h3>
                    <p className="text-[12px] leading-5" style={{ color: '#8fb89c' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
              <a
                href={ANDROID_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-semibold rounded-xl px-5 py-3 border-2 transition-all hover:-translate-y-0.5"
                style={{ borderColor: `${COLOR}55`, color: '#bfe0c8', background: 'transparent' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18a1 1 0 001 1h1v3.5a1.5 1.5 0 003 0V19h2v3.5a1.5 1.5 0 003 0V19h1a1 1 0 001-1V9H6v9zM3.5 9A1.5 1.5 0 002 10.5v6a1.5 1.5 0 003 0v-6A1.5 1.5 0 003.5 9zm17 0a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6A1.5 1.5 0 0020.5 9zM15.5 4.3l1.3-1.3a.4.4 0 00-.6-.6l-1.5 1.5a5.5 5.5 0 00-5.4 0L7.8 2.4a.4.4 0 10-.6.6l1.3 1.3A5 5 0 006 8h12a5 5 0 00-2.5-3.7zM9.5 6.5a.7.7 0 110-1.4.7.7 0 010 1.4zm5 0a.7.7 0 110-1.4.7.7 0 010 1.4z" /></svg>
                Try the Android Demo
              </a>
            </div>
            <p className="text-[11px] mt-3" style={{ color: '#5f8a6d' }}>
              Publish under your own brand to Google Play and the App Store. · Android demo APK via Google Drive.
            </p>
          </div>

          {/* Real app screenshots — two floating phones */}
          <div className="relative flex items-center justify-center py-6">
            <div
              className="pointer-events-none absolute inset-0 m-auto w-[320px] h-[320px] rounded-full blur-3xl opacity-30"
              style={{ background: `radial-gradient(circle, ${COLOR}, transparent 70%)` }}
            />
            <div className="gm-shot-b relative z-0 rotate-[5deg]">
              <PhoneShot src="/products/grenmart/app-product.png" alt="Grenmart app product detail screen — add to cart" w={375} h={978} />
            </div>
            <div className="gm-shot-a relative z-10 -ml-12 sm:-ml-16 -rotate-[4deg]">
              <PhoneShot src="/products/grenmart/app-home.png" alt="Grenmart app home screen — search, deals and featured products" w={375} h={1127} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
