'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { CheckoutProduct } from '@/lib/checkout-products';
import { FASTSPRING_STORE, FASTSPRING_SCRIPT, FASTSPRING_TEST_MODE, launchCheckout } from '@/lib/fastspring';

const UPGRADE_MAP: Record<string, { path: string; name: string; delta: number; pitch: string; accent: string }> = {
  'xilancer-bundle-pack': {
    path: 'xilancer-exclusive-pack',
    name: 'Exclusive License',
    delta: 200,
    pitch: 'Full source code rights, no license enforcement, unlimited modification.',
    accent: '#a78bfa',
  },
  'nazmart-bundle-pack': {
    path: 'nazmart-complete-package',
    name: 'Exclusive License',
    delta: 200,
    pitch: 'Full source code rights, remove any branding, deploy across unlimited projects.',
    accent: '#8b5cf6',
  },
};

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CheckoutClient({ product }: { product: CheckoutProduct }) {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);
  const [fsReady, setFsReady] = useState(false);
  const router = useRouter();
  const { status } = useSession();
  const sessionStatusRef = useRef(status);

  useEffect(() => { sessionStatusRef.current = status; }, [status]);

  useEffect(() => {
    window.onFastSpringPopupClosed = (order) => {
      if (!order) return;
      if (sessionStatusRef.current === 'authenticated') {
        router.push('/my-account/downloads');
      } else {
        router.push('/register?redirect=/my-account/downloads');
      }
    };
  }, [router]);

  const disabledAddons = new Set(
    product.addons
      .filter((a) => a.disables && selectedAddons.has(a.path))
      .flatMap((a) => a.disables as string[])
  );

  const toggleAddon = (path: string) => {
    if (disabledAddons.has(path)) return;
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
        // deselect anything this addon disables
        const addon = product.addons.find((a) => a.path === path);
        addon?.disables?.forEach((d) => next.delete(d));
      }
      return next;
    });
  };

  const addonTotal = product.addons
    .filter((a) => selectedAddons.has(a.path))
    .reduce((sum, a) => sum + a.price, 0);

  const orderTotal = product.price + addonTotal;

  const handleConfirm = () => {
    const items = [product.path, ...Array.from(selectedAddons)];
    launchCheckout(items);
  };

  const savings = product.originalPrice - product.price;

  return (
    <>
      <Script
        id="fsc-api"
        src={FASTSPRING_SCRIPT}
        data-storefront={FASTSPRING_STORE}
        data-popup-closed="onFastSpringPopupClosed"
        data-continuous="true"
        strategy="afterInteractive"
        onLoad={() => setFsReady(true)}
      />

      {FASTSPRING_TEST_MODE && (
        <div className="bg-[#fef3c7] border-b border-[#fcd34d] py-2 px-4 text-center">
          <span className="text-[13px] font-semibold text-[#92400e]">
            TEST MODE — No real charges. Use test card: 4242 4242 4242 4242 · Any future expiry · Any CVV
          </span>
        </div>
      )}

      <div className="min-h-screen bg-[#F5F6F8]">
        <div className="container-page px-4 sm:px-6 lg:px-0 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 max-w-[980px] mx-auto">

            {/* Left — Order Summary (order-2 on mobile, order-1 on desktop) */}
            <div className="order-2 lg:order-1">
              <h1 className="text-[24px] font-bold text-[#0F1112] mb-6">Order Summary</h1>

              <div className="bg-white rounded-2xl border border-[#E5E7EC] p-6 mb-5">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h2 className="text-[17px] font-bold text-[#0F1112]">{product.name}</h2>
                      {product.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#16a34a]">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[#6b7280]">{product.tagline}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[22px] font-bold text-[#0F1112] leading-none">${product.price}</p>
                    <p className="text-[12px] text-[#9ca3af] line-through">${product.originalPrice}</p>
                    <p className="text-[11px] font-semibold text-[#16a34a]">Save ${savings}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px] text-[#374151]">
                      <CheckIcon />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
                  <div className="flex items-center gap-3 flex-wrap text-[12px] text-[#6b7280]">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Lifetime license
                    </span>
                    <span>·</span>
                    <span>One-time payment</span>
                    <span>·</span>
                    <span>Instant download after purchase</span>
                    <span>·</span>
                    <span>Full source code</span>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              {product.addons.some((a) => !a.sidebarUpsell) && (
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F1112] mb-3">
                    Optional Add-ons
                    <span className="text-[12px] font-normal text-[#6b7280] ml-2">Save time — let us handle it</span>
                  </h3>
                  <p className="text-[11px] text-[#9ca3af] mb-3">Add-on services are non-refundable once work begins.</p>
                  <div className="flex flex-col gap-3">
                    {product.addons.filter((a) => !a.sidebarUpsell).map((addon) => {
                      const selected = selectedAddons.has(addon.path);
                      const disabled = disabledAddons.has(addon.path);
                      const expanded = expandedAddon === addon.path;
                      const hasDetails = !!(addon.includes?.length || addon.excludes?.length);
                      return (
                        <div
                          key={addon.path}
                          className="rounded-xl border transition-all overflow-hidden"
                          style={{
                            borderColor: selected ? '#16a34a' : '#E5E7EC',
                            background: selected ? '#f0fdf4' : disabled ? '#fafafa' : '#fff',
                            opacity: disabled ? 0.45 : 1,
                          }}
                        >
                          {/* Main row — checkbox + label + price */}
                          <div className="p-4 flex items-start gap-3">
                            <button
                              onClick={() => toggleAddon(addon.path)}
                              disabled={disabled}
                              className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-colors"
                              style={{
                                borderColor: selected ? '#16a34a' : '#d1d5db',
                                background: selected ? '#16a34a' : 'transparent',
                                cursor: disabled ? 'not-allowed' : 'pointer',
                              }}
                            >
                              {selected && (
                                <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                                  <path d="M4 10l5 5 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </button>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <p className="text-[14px] font-semibold text-[#0F1112]">{addon.label}</p>
                                    {addon.bestValue && (
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8705a] text-white">BEST VALUE</span>
                                    )}
                                  </div>
                                  <p className="text-[12px] text-[#6b7280] mt-0.5">{addon.description}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="text-[14px] font-bold text-[#0F1112]">+${addon.price}</p>
                                  <p className="text-[11px] text-[#9ca3af] line-through">${addon.originalPrice}</p>
                                </div>
                              </div>
                              {hasDetails && (
                                <button
                                  onClick={() => setExpandedAddon(expanded ? null : addon.path)}
                                  className="mt-2 flex items-center gap-1 text-[11px] font-medium cursor-pointer transition-colors"
                                  style={{ color: '#6b7280' }}
                                >
                                  <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                                    className="transition-transform"
                                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                  >
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  {expanded ? 'Hide details' : 'What\'s included'}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Collapsible details */}
                          {hasDetails && expanded && (
                            <div className="px-4 pb-4 pt-0 border-t border-[#E5E7EC] mt-0">
                              <div className="pt-3 flex flex-col gap-1.5">
                                {addon.includes?.map((item) => (
                                  <div key={item} className="flex items-start gap-2 text-[12px] text-[#374151]">
                                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 20 20" fill="none">
                                      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                                      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item}
                                  </div>
                                ))}
                                {addon.excludes?.map((item) => (
                                  <div key={item} className="flex items-start gap-2 text-[12px] text-[#9ca3af]">
                                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 20 20" fill="none">
                                      <circle cx="10" cy="10" r="10" fill="#F3F4F6" />
                                      <path d="M7 7l6 6M13 7l-6 6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    Not included: {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Payment Panel (order-1 on mobile so it shows first) */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-8 self-start">
              <div className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
                <h3 className="text-[15px] font-bold text-[#0F1112] mb-4">Order Total</h3>

                <div className="flex flex-col gap-2.5 mb-4">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#6b7280]">{product.name}</span>
                    <span className="font-semibold text-[#0F1112]">${product.price}</span>
                  </div>
                  {product.addons
                    .filter((a) => selectedAddons.has(a.path))
                    .map((a) => (
                      <div key={a.path} className="flex items-center justify-between text-[13px]">
                        <span className="text-[#6b7280]">{a.label}</span>
                        <span className="font-semibold text-[#0F1112]">${a.price}</span>
                      </div>
                    ))}
                </div>

                <div className="border-t border-[#F3F4F6] pt-3 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-[#0F1112]">Total</span>
                    <span className="text-[22px] font-bold text-[#0F1112]">${orderTotal}</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">One-time payment · No recurring fees</p>
                </div>

                {/* Upgrade nudge */}
                {UPGRADE_MAP[product.path] && (() => {
                  const up = UPGRADE_MAP[product.path];
                  return (
                    <Link
                      href={`/checkout?product=${up.path}`}
                      className="w-full text-left rounded-xl border-2 p-3.5 mb-4 flex items-start gap-3 transition-all hover:opacity-90 cursor-pointer block"
                      style={{ borderColor: `${up.accent}50`, background: `${up.accent}0d` }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                                <path d="M12 19V5M5 12l7-7 7 7" stroke={up.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <p className="text-[12px] font-bold" style={{ color: up.accent }}>Upgrade to {up.name}</p>
                            </div>
                            <p className="text-[11px] text-[#6b7280] leading-4">{up.pitch}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-[14px] font-bold" style={{ color: up.accent }}>+${up.delta}</p>
                            <p className="text-[10px] text-[#9ca3af]">more</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })()}

                {/* Sidebar upsell — extended support */}
                {product.addons.filter((a) => a.sidebarUpsell).map((addon) => {
                  const selected = selectedAddons.has(addon.path);
                  return (
                    <button
                      key={addon.path}
                      onClick={() => toggleAddon(addon.path)}
                      className="w-full text-left rounded-xl border-2 p-3.5 mb-4 flex items-start gap-3 transition-all cursor-pointer"
                      style={{
                        borderColor: selected ? '#16a34a' : '#e8705a40',
                        background: selected ? '#f0fdf4' : '#fff8f6',
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-colors"
                        style={{
                          borderColor: selected ? '#16a34a' : '#e8705a',
                          background: selected ? '#16a34a' : 'transparent',
                        }}
                      >
                        {selected && (
                          <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10l5 5 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[13px] font-bold text-[#0F1112]">{addon.label}</p>
                            <p className="text-[11px] text-[#6b7280] mt-0.5 leading-4">{addon.description}</p>
                            {selected && addon.path === 'xilancer-support-6m' && (
                              <p className="text-[11px] font-semibold text-[#16a34a] mt-1">
                                12 months total support (6 included + 6 extended)
                              </p>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-[14px] font-bold text-[#e8705a]">+${addon.price}</p>
                            <p className="text-[11px] text-[#9ca3af] line-through">${addon.originalPrice}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}

                <button
                  onClick={handleConfirm}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 transition-all hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: '#e8705a', boxShadow: '0 8px 24px rgba(232,112,90,0.35)' }}
                >
                  Confirm &amp; Pay
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="mt-4 flex flex-col gap-2 text-[11px] text-[#9ca3af]">
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="2" /><path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" /></svg>
                    Payment secured by FastSpring
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Instant download after payment
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    14-day refund on software (addon services non-refundable)
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#9ca3af] text-center mt-4 leading-5">
                By completing your purchase you agree to our{' '}
                <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-[#6b7280]">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/refund-policy" className="underline underline-offset-2 hover:text-[#6b7280]">Refund Policy</Link>.
                {' '}Addon services are non-refundable.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
