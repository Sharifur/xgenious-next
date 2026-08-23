'use client';
import { useState } from 'react';
import Link from 'next/link';
import '@/lib/fastspring';
import { FASTSPRING_TEST_MODE } from '@/lib/fastspring';
import { useLicensesStore } from '@/store/useLicensesStore';
import { reportCrash } from '@/lib/crash';

export type LicenseUpsellType = 'support_renewal' | 'addon_install' | 'addon_appstore' | 'addon_mobile';

interface Props {
  licenseKey: string;
  productUid: string;
  /** Exact FastSpring product path to purchase. `null` means unresolved/unverified — renders the contact-us fallback instead of a broken checkout. */
  productPath: string | null;
  licenseType: LicenseUpsellType;
  label: string;
  userEmail?: string;
  variant?: 'button' | 'compact';
}

export default function LicenseUpsellAction({
  licenseKey,
  productUid,
  productPath,
  licenseType,
  label,
  userEmail,
  variant = 'button',
}: Props) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const { invalidate, fetch: refetch } = useLicensesStore();

  async function onOrderComplete() {
    setStatus('processing');
    // Allow webhook 3s to process before refetching
    await new Promise((r) => setTimeout(r, 3000));
    invalidate();
    await refetch();
    setStatus('done');
  }

  async function handleFallbackCheckout() {
    if (!productPath) return;
    setStatus('processing');
    try {
      const res = await fetch('/api/checkout/fastspring-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [productPath],
          email: userEmail,
          tags: { product_uid: productUid, license_key: licenseKey, license_type: licenseType },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.checkoutUrl) {
        reportCrash({
          type: 'FastSpring session fallback failed',
          message: data?.error ?? `HTTP ${res.status}`,
          operation: 'license-upsell-fallback',
          apiEndpoint: '/api/checkout/fastspring-session',
          httpStatus: String(res.status),
        });
        setStatus('idle');
        return;
      }
      window.location.href = data.checkoutUrl;
    } catch (err) {
      reportCrash({
        type: 'FastSpring session fallback failed',
        message: err instanceof Error ? err.message : 'unknown error',
        operation: 'license-upsell-fallback',
        apiEndpoint: '/api/checkout/fastspring-session',
      });
      setStatus('idle');
    }
  }

  function handleClick() {
    if (!productPath) return;

    if (!window.fastspring?.builder) {
      void handleFallbackCheckout();
      return;
    }

    window.onFastSpringWebhookReceived = () => { void onOrderComplete(); };
    window.onFastSpringPopupClosed = (order) => {
      if (order?.reference) void onOrderComplete();
    };

    window.fastspring.builder.push({
      ...(FASTSPRING_TEST_MODE ? { mode: 'test' } : {}),
      products: [{ path: productPath, quantity: 1 }],
      ...(userEmail ? { paymentContact: { email: userEmail } } : {}),
      checkout: true,
      tags: {
        product_uid: productUid,
        license_key: licenseKey,
        license_type: licenseType,
      },
    });
  }

  if (status === 'done') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Done — thank you!
      </span>
    );
  }

  // Unresolved product path (unmapped/unverified SKU) — never render a dead button.
  if (!productPath) {
    return (
      <Link
        href="/my-account/support/new"
        className={
          variant === 'compact'
            ? 'text-xs font-medium text-gray-400 hover:text-[#ec7161] transition-colors underline underline-offset-2'
            : 'inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#ec7161] transition-colors'
        }
      >
        Contact us to add this
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={status === 'processing'}
      className={
        variant === 'compact'
          ? 'inline-flex items-center gap-1 px-2.5 py-1 bg-[#ec7161]/10 text-[#ec7161] text-xs font-semibold rounded-md hover:bg-[#ec7161]/20 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
          : 'inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#ec7161] text-white text-xs font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
      }
    >
      {status === 'processing' ? (
        <>
          <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Processing…
        </>
      ) : (
        label
      )}
    </button>
  );
}
