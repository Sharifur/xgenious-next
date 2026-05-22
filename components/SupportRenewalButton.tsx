'use client';
import { useState } from 'react';
import '@/lib/fastspring';
import { useLicensesStore } from '@/store/useLicensesStore';

interface Props {
  licenseKey: string;
  productUid: string;
  productPath: string;
  userEmail?: string;
}

export default function SupportRenewalButton({ licenseKey, productUid, productPath, userEmail }: Props) {
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

  function handleClick() {
    if (!window.fastspring?.builder) {
      alert('Payment system not loaded. Please refresh the page and try again.');
      return;
    }

    window.onFastSpringWebhookReceived = () => { void onOrderComplete(); };
    window.onFastSpringPopupClosed = (order) => {
      if (order?.reference) void onOrderComplete();
    };

    window.fastspring.builder.push({
      products: [{ path: productPath, quantity: 1 }],
      ...(userEmail ? { paymentContact: { email: userEmail } } : {}),
      checkout: true,
      tags: {
        product_uid: productUid,
        license_key: licenseKey,
        license_type: 'support_renewal',
      },
    });
  }

  if (status === 'done') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Support renewed
      </span>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={status === 'processing'}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#ec7161] text-white text-xs font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {status === 'processing' ? (
        <>
          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Processing…
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Renew Support
        </>
      )}
    </button>
  );
}
