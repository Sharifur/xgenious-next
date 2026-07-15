'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { CheckoutProduct } from '@/lib/checkout-products';
import { FASTSPRING_STORE, FASTSPRING_SCRIPT, FASTSPRING_TEST_MODE, PROMO_CODE, launchCheckout } from '@/lib/fastspring';
import { reportCrash } from '@/lib/crash';
import { trackInitiateCheckout, trackPurchase } from '@/lib/meta-events';

const UPGRADE_MAP: Record<string, { path: string; name: string; delta: number; pitch: string; accent: string }> = {
  'xilancer-bundle-pack': {
    path: 'xilancer-exclusive-pack',
    name: 'Exclusive License',
    delta: 200,
    pitch: 'Full source code rights, no license enforcement, unlimited modification.',
    accent: '#a78bfa',
  },
  'nazmart-bundle-pack': {
    path: 'nazmart-exclusive-pack',
    name: 'Exclusive License',
    delta: 200,
    pitch: 'Full source code rights, remove any branding, deploy across unlimited projects.',
    accent: '#8b5cf6',
  },
  'multisaas-bundle-pack': {
    path: 'multisaas-exclusive-pack',
    name: 'Exclusive Bundle Pack',
    delta: 200,
    pitch: 'Full source code rights, remove all branding, and deploy across unlimited commercial projects.',
    accent: '#8b5cf6',
  },
  'safecart-bundle-pack': {
    path: 'safecart-exclusive-pack',
    name: 'Exclusive Pack',
    delta: 100,
    pitch: 'Full source code modification rights, remove all branding, and professional installation included.',
    accent: '#8b5cf6',
  },
  'infustar-bundle-pack': {
    path: 'infustar-exclusive-pack',
    name: 'Exclusive License',
    delta: 50,
    pitch: 'Full source code modification rights + remove any branding — unlock the full developer license.',
    accent: '#7c3aed',
  },
  'fundorex-bundle-pack': {
    path: 'fundorex-exclusive-pack',
    name: 'Exclusive License',
    delta: 120,
    pitch: 'Full source code rights, remove any branding, commercial use across unlimited projects.',
    accent: '#a78bfa',
  },
  'greenmart-bundle-pack': {
    path: 'greenmart-exclusive-pack',
    name: 'Exclusive License',
    delta: 150,
    pitch: 'Full source code rights, remove any branding, commercial use across unlimited projects.',
    accent: '#8b5cf6',
  },
  'helpnest-regular': {
    path: 'helpnest-exclusive-pack',
    name: 'Exclusive License',
    delta: 140,
    pitch: 'SaaS rights, white-label, source code modification — build and sell to unlimited clients.',
    accent: '#4F46E5',
  },
  'helpnest-everything-bundle': {
    path: 'helpnest-exclusive-pack',
    name: 'Exclusive License',
    delta: 110,
    pitch: 'SaaS rights, white-label, source code modification — build and sell to unlimited clients.',
    accent: '#4F46E5',
  },
  'prohandy-everything-bundle': {
    path: 'prohandy-exclusive-pack',
    name: 'Exclusive License',
    delta: 80,
    pitch: 'SaaS rights, white-label, source code modification — launch unlimited service marketplaces.',
    accent: '#059669',
  },
  'gocar-everything-bundle': {
    path: 'gocar-exclusive-pack',
    name: 'Exclusive License',
    delta: 80,
    pitch: 'SaaS rights, white-label, source code modification — launch unlimited car service marketplaces.',
    accent: '#DC2626',
  },
  'qixer-everything-bundle': {
    path: 'qixer-exclusive-pack',
    name: 'Exclusive License',
    delta: 100,
    pitch: 'SaaS rights, white-label, source code modification — launch unlimited on-demand service marketplaces.',
    accent: '#6369F1',
  },
  'botmerze-everyting-bundle': {
    path: 'botmerze-exclusive-pack',
    name: 'Exclusive License',
    delta: 130,
    pitch: 'White-label, source code modification, multiple deployments — build and sell unlimited AI chatbot SaaS businesses.',
    accent: '#007066',
  },
  'nexelit-regular-and-installation': {
    path: 'nexelit-exclusive-pack',
    name: 'Exclusive License',
    delta: 50,
    pitch: 'Full source code modification rights + remove any branding — unlock the full developer license.',
    accent: '#6366f1',
  },
  'listocean-bundle-pack': {
    path: 'listocean-exclusive-pack',
    name: 'Exclusive Pack',
    delta: 90,
    pitch: 'Source code modification rights, professional installation included, remove any branding — the complete developer license.',
    accent: '#7c3aed',
  },
  'zaika-bundle-pack': {
    path: 'zaika-exclusive-pack',
    name: 'Exclusive License',
    delta: 90,
    pitch: 'Full source code modification rights, remove all branding, unlimited commercial projects, and professional installation included.',
    accent: '#7c3aed',
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

// Card-network marks shown at checkout — matches what FastSpring's own popup accepts.
function PaymentLogoVisa() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="Visa">
      <rect width="38" height="24" rx="4" fill="#1A1F71" />
      <text x="19" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="bold" fontSize="10.5" fill="#fff">VISA</text>
    </svg>
  );
}

function PaymentLogoMastercard() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="Mastercard">
      <rect width="38" height="24" rx="4" fill="#fff" stroke="#E5E7EC" />
      <circle cx="16" cy="12" r="7" fill="#EB001B" />
      <circle cx="22" cy="12" r="7" fill="#F79E1B" fillOpacity="0.9" style={{ mixBlendMode: 'multiply' }} />
    </svg>
  );
}

function PaymentLogoAmex() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="American Express">
      <rect width="38" height="24" rx="4" fill="#1F72CD" />
      <text x="19" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8.5" fill="#fff">AMEX</text>
    </svg>
  );
}

function PaymentLogoPayPal() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" role="img" aria-label="PayPal">
      <rect width="38" height="24" rx="4" fill="#fff" stroke="#E5E7EC" />
      <text x="6" y="16" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="10" fill="#003087">Pay</text>
      <text x="20" y="16" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="10" fill="#0070E0">Pal</text>
    </svg>
  );
}

// FastSpring's own ribbon mark — matches the branding shown in their checkout popup.
function FastSpringMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" role="img" aria-label="FastSpring" className="flex-shrink-0">
      <rect x="3" y="2" width="18" height="6" rx="2" fill="#F5841F" transform="rotate(-12 12 5)" />
      <rect x="3" y="9" width="18" height="6" rx="2" fill="#F5841F" fillOpacity="0.75" transform="rotate(-12 12 12)" />
      <rect x="3" y="16" width="18" height="6" rx="2" fill="#F5841F" fillOpacity="0.5" transform="rotate(-12 12 19)" />
    </svg>
  );
}

export default function CheckoutClient({ product }: { product: CheckoutProduct }) {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);
  const [fsReady, setFsReady] = useState(false);
  const [couponCode, setCouponCode] = useState(PROMO_CODE);
  const [couponStatus, setCouponStatus] = useState<'idle' | 'applying' | 'applied' | 'error'>('idle');
  const [couponMessage, setCouponMessage] = useState('');
  const [appliedCouponCode, setAppliedCouponCode] = useState('');
  const [fsOrderTotal, setFsOrderTotal] = useState<number | null>(null);
  const couponTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoAppliedRef = useRef(false);
  const router = useRouter();
  const { status } = useSession();
  const sessionStatusRef = useRef(status);

  useEffect(() => { sessionStatusRef.current = status; }, [status]);

  useEffect(() => {
    window.onFastSpringPopupClosed = (order) => {
      if (!order) return;
      const sourceUrl = window.location.href;
      const productIds = order.items.map((i) => i.product);
      trackPurchase(sourceUrl, order.total, order.currency, productIds);
      if (sessionStatusRef.current === 'authenticated') {
        router.push('/my-account/downloads');
      } else {
        router.push('/register?redirect=/my-account/downloads');
      }
    };

    window.onFastSpringError = (code, details) => {
      reportCrash({
        type: 'FastSpring error callback',
        message: `FS error ${code ?? 'unknown'}${details ? ` — ${JSON.stringify(details).slice(0, 200)}` : ''}`,
        operation: 'fastspring-error-callback',
        apiEndpoint: `${FASTSPRING_STORE}`,
        httpStatus: String(code ?? ''),
      });
    };
  }, [router]);

  // FastSpring data callback — fires when session data (order total, tax, coupon) changes
  useEffect(() => {
    const scriptEl = document.getElementById('fsc-api');
    if (!scriptEl) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataCallback = (data: { totalValue?: number }) => {
      if (data?.totalValue !== undefined) {
        setFsOrderTotal(data.totalValue);
      }
    };
    scriptEl.setAttribute('data-data-callback', 'dataCallback');
  }, []);

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

  const applyCoupon = () => {
    const code = couponCode.trim();
    if (!code) return;
    if (!window.fastspring?.builder) {
      setCouponStatus('error');
      setCouponMessage('Payment system not loaded yet.');
      return;
    }
    // Clear any pending validation timeout from a previous Apply click
    if (couponTimeoutRef.current) clearTimeout(couponTimeoutRef.current);

    setCouponStatus('applying');
    setCouponMessage('');
    setAppliedCouponCode('');
    // The builder session has no cart until launchCheckout() runs, so promo()
    // alone validates against an empty $0 order. Push the real cart first so
    // the dataCallback reflects an actual discount.
    const items = [product.path, ...Array.from(selectedAddons)];
    window.fastspring.builder.push({
      reset: true,
      ...(FASTSPRING_TEST_MODE ? { mode: 'test' } : {}),
      products: items.map((path) => ({ path, quantity: 1 })),
    });
    window.fastspring.builder.promo(code);

    // promo() is fire-and-forget — validate via the data-data-callback.
    // Compare against our undiscounted orderTotal: if the SBL total drops
    // below that, the coupon is valid. Retry once if the callback hasn't
    // fired yet (current is null).
    const validate = (retriesLeft: number) => {
      couponTimeoutRef.current = setTimeout(() => {
        setFsOrderTotal((current) => {
          if (current === null && retriesLeft > 0) {
            // Data callback hasn't fired yet — schedule a retry
            validate(retriesLeft - 1);
            return current;
          }
          if (current !== null && current < orderTotal) {
            setCouponStatus('applied');
            setAppliedCouponCode(code);
            setCouponMessage('');
          } else {
            setCouponStatus('error');
            setAppliedCouponCode('');
            setCouponMessage(`"${code}" is not a valid coupon code`);
          }
          return current;
        });
      }, retriesLeft > 0 ? 1500 : 2500);
    };
    validate(2);
  };

  // Auto-apply the site-wide promo as soon as FastSpring is ready, so users
  // see the discount without clicking Apply themselves.
  useEffect(() => {
    // Guard against StrictMode's dev double-invoke firing two overlapping
    // push+promo flights that race each other's dataCallback.
    if (fsReady && PROMO_CODE && couponCode === PROMO_CODE && couponStatus === 'idle' && !autoAppliedRef.current) {
      autoAppliedRef.current = true;
      applyCoupon();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsReady]);

  const handleConfirm = () => {
    const items = [product.path, ...Array.from(selectedAddons)];
    if (!window.fastspring?.builder) {
      reportCrash({
        type: 'FastSpring builder missing',
        message: 'launchCheckout called but window.fastspring.builder is undefined despite fsReady=true',
        operation: 'launchCheckout',
        apiEndpoint: FASTSPRING_STORE,
      });
      return;
    }
    trackInitiateCheckout(window.location.href, items, orderTotal);
    // If user entered a custom coupon (different from auto-applied), pass it through.
    // If they explicitly removed the coupon (empty input), pass '' to suppress auto-apply.
    // If untouched, pass undefined so launchCheckout uses the default PROMO_CODE.
    const userCoupon = couponCode.trim();
    const coupon = userCoupon === PROMO_CODE ? undefined : userCoupon || '';
    launchCheckout(items, coupon);
  };

  const savings = product.originalPrice - product.price;

  return (
    <>
      <Script
        id="fsc-api"
        src={FASTSPRING_SCRIPT}
        data-storefront={FASTSPRING_STORE}
        data-popup-closed="onFastSpringPopupClosed"
        data-error-callback="onFastSpringError"
        data-data-callback="dataCallback"
        data-continuous="true"
        strategy="afterInteractive"
        onLoad={() => setFsReady(true)}
        onError={() =>
          reportCrash({
            type: 'FastSpring script load failure',
            message: `Failed to load FastSpring SBL: ${FASTSPRING_SCRIPT}`,
            operation: 'fastspring-script-load',
            apiEndpoint: FASTSPRING_SCRIPT,
          })
        }
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
                    {product.originalPrice > product.price && (
                      <>
                        <p className="text-[12px] text-[#9ca3af] line-through">${product.originalPrice}</p>
                        <p className="text-[11px] font-semibold text-[#16a34a]">Save ${savings}</p>
                      </>
                    )}
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

              {/* Mini FAQ — answers common objections before they leave the page to research */}
              <div className="mt-6">
                <h3 className="text-[15px] font-bold text-[#0F1112] mb-3">Common Questions</h3>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      q: 'What exactly do I get after purchase?',
                      a: 'Full source code, a lifetime license, and instant download access to your account — no recurring fees.',
                    },
                    {
                      q: 'Do I get software updates?',
                      a: 'Updates are included per your license — check the feature list above for this product\'s update terms, or ask us before you buy via the chat widget.',
                    },
                    {
                      q: 'What if I need help with installation?',
                      a: product.addons.some((a) => /install|launch/i.test(a.label))
                        ? 'We offer an optional "We Install & Launch It For You" add-on above — pick it during checkout, or add support after purchase from your account.'
                        : 'Our support team can help you get set up after purchase — reach out from your account dashboard or the chat widget on this page.',
                    },
                    {
                      q: 'What if it doesn\'t work for me?',
                      a: 'You\'re covered by our 14-day money-back guarantee on the software — full refund, no questions asked. Add-on services are non-refundable once work begins.',
                    },
                  ].map((item) => (
                    <details key={item.q} className="group rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 open:bg-[#F9FAFB]">
                      <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-[13px] font-semibold text-[#0F1112]">
                        {item.q}
                        <svg
                          width="12" height="12" viewBox="0 0 24 24" fill="none"
                          className="flex-shrink-0 transition-transform group-open:rotate-180"
                        >
                          <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </summary>
                      <p className="mt-2 text-[12px] text-[#6b7280] leading-5">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
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
                  {couponStatus === 'applied' && fsOrderTotal !== null && fsOrderTotal < orderTotal ? (
                    <>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[13px] text-[#9ca3af] line-through">${orderTotal}</span>
                        <span className="text-[11px] font-semibold text-[#16a34a]">
                          −${(orderTotal - fsOrderTotal).toFixed(2)} ({appliedCouponCode})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[15px] font-bold text-[#0F1112]">Total</span>
                        <span className="text-[22px] font-bold text-[#16a34a]">${fsOrderTotal.toFixed(2)}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-bold text-[#0F1112]">Total</span>
                      <span className="text-[22px] font-bold text-[#0F1112]">${orderTotal}</span>
                    </div>
                  )}
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
                  const accent = addon.accentColor ?? '#e8705a';
                  return (
                    <button
                      key={addon.path}
                      onClick={() => toggleAddon(addon.path)}
                      className="w-full text-left rounded-xl border-2 p-3.5 mb-4 flex items-start gap-3 transition-all cursor-pointer"
                      style={{
                        borderColor: selected ? accent : `${accent}55`,
                        background: selected ? `${accent}12` : `${accent}0a`,
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-colors"
                        style={{
                          borderColor: accent,
                          background: selected ? accent : 'transparent',
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
                            <p className="text-[14px] font-bold" style={{ color: accent }}>+${addon.price}</p>
                            <p className="text-[11px] text-[#9ca3af] line-through">${addon.originalPrice}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Coupon code input */}
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-[#0F1112] mb-1.5">
                    Have a coupon code?
                  </label>
                  {couponStatus === 'applied' && appliedCouponCode ? (
                    <div className="flex items-center gap-2 rounded-lg border border-[#dcfce7] bg-[#f0fdf4] px-3 py-2.5">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                        <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                        <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="flex-1 text-[13px] font-mono font-bold text-[#16a34a] tracking-wide">
                        {appliedCouponCode}
                      </span>
                      <button
                        onClick={() => {
                          setCouponCode('');
                          setCouponStatus('idle');
                          setAppliedCouponCode('');
                          setCouponMessage('');
                          setFsOrderTotal(null);
                          if (couponTimeoutRef.current) clearTimeout(couponTimeoutRef.current);
                        }}
                        className="text-[11px] font-semibold text-[#6b7280] hover:text-[#dc2626] transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value.toUpperCase());
                          if (couponStatus === 'error') {
                            setCouponStatus('idle');
                            setCouponMessage('');
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') applyCoupon();
                        }}
                        placeholder="e.g. WELCOME10"
                        className="flex-1 min-w-0 rounded-lg border border-[#E5E7EC] bg-white px-3 py-2.5 text-[13px] font-mono font-semibold tracking-wide text-[#0F1112] placeholder:text-[#9ca3af] placeholder:font-sans placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#e8705a]/40 focus:border-[#e8705a] transition-colors"
                      />
                      <button
                        onClick={applyCoupon}
                        disabled={!couponCode.trim() || !fsReady || couponStatus === 'applying'}
                        className="flex-shrink-0 rounded-lg border border-[#E5E7EC] bg-[#F5F6F8] px-4 py-2.5 text-[13px] font-semibold text-[#374151] hover:bg-[#E5E7EC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {couponStatus === 'applying' ? 'Applying…' : 'Apply'}
                      </button>
                    </div>
                  )}
                  {couponStatus === 'error' && couponMessage && (
                    <p className="mt-1.5 text-[12px] font-medium text-[#dc2626]">
                      {couponMessage}
                    </p>
                  )}
                  {!couponCode && PROMO_CODE && couponStatus !== 'applied' && (
                    <p className="mt-1.5 text-[11px] text-[#9ca3af]">
                      Use code <span className="font-mono font-semibold">{PROMO_CODE}</span> for 10% off
                    </p>
                  )}
                </div>

                <button
                  onClick={handleConfirm}
                  disabled={!fsReady}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 transition-all hover:opacity-90 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:hover:translate-y-0"
                  style={{ background: '#e8705a', boxShadow: '0 8px 24px rgba(232,112,90,0.35)' }}
                >
                  {fsReady ? (
                    <>
                      Confirm &amp; Pay
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="animate-spin">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Loading...
                    </>
                  )}
                </button>

                <p className="mt-2 flex items-start justify-center gap-1.5 text-[11px] text-[#6b7280]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M22 4H2v16h20V4zM2 4l10 8 10-8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Instant access in your account + email confirmation with your license</span>
                </p>

                {/* Guarantee badge — elevated from footer fine print, sits right under the CTA */}
                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-[#dcfce7] bg-[#f0fdf4] px-3.5 py-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[13px] font-bold text-[#15803d] leading-tight">14-Day Money-Back Guarantee</p>
                    <p className="text-[11px] text-[#166534] leading-tight mt-0.5">Not satisfied? Full refund, no questions asked.</p>
                  </div>
                </div>

                <p className="mt-3 text-center text-[11px] text-[#9ca3af]">
                  VAT / tax not included — may be added at checkout depending on your country.
                </p>

                {/* Accepted payment methods — reduces "will my card work" hesitation */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <PaymentLogoVisa />
                  <PaymentLogoMastercard />
                  <PaymentLogoAmex />
                  <PaymentLogoPayPal />
                </div>

                <div className="mt-3 flex flex-col gap-2 text-[11px] text-[#9ca3af]">
                  <span className="flex items-center gap-1.5">
                    <FastSpringMark />
                    Payment secured by FastSpring — an authorized reseller
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Instant download after payment
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
