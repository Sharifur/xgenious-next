'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEnvatoStore } from '@/store/useEnvatoStore';

const RESULT_MESSAGES: Record<string, string> = {
  denied: "You didn't approve access — connect again when you're ready.",
  error: 'Something went wrong connecting your Envato account. Please try again.',
  state_invalid: 'This connection link has expired. Please start again.',
};

const FAILED_ERROR_MESSAGES: Record<string, string> = {
  ENVATO_ACCOUNT_ALREADY_LINKED:
    'This Envato account is already connected to a different Xgenious account. If you believe this is a mistake, contact support.',
  IMPORT_FAILED: "We couldn't finish syncing your purchases. Please try connecting again.",
  CONNECTION_TIMED_OUT: 'The connection attempt timed out before it was approved. Please try again.',
  SYNC_TIMED_OUT: 'The last sync took too long and timed out. Please try syncing again.',
  TOKEN_EXCHANGE_FAILED: 'We could not complete the connection with Envato. Please try again.',
  PROFILE_LOOKUP_FAILED: 'We could not read your Envato account details. Please try again.',
};
const DEFAULT_FAILED_MESSAGE = 'Something went wrong connecting your Envato account. Please try again.';

export default function EnvatoAccountPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get('result');
  const { connection, loading, error, pollTimedOut, fetchStatus, connect, sync, disconnect } = useEnvatoStore();
  const [confirmingDisconnect, setConfirmingDisconnect] = useState(false);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const status = connection?.status ?? 'not_connected';
  const isSettling = status === 'pending' || status === 'syncing';
  const isConnected = status === 'connected' || status === 'needs_reconnect';
  const isFailed = status === 'failed';
  const noMatch = status === 'connected' && (connection?.last_sync_summary?.imported ?? 0) === 0
    && (connection?.last_sync_summary?.already_imported ?? 0) === 0;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-[#0F1112]">Envato Account</h1>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-[#0F1112]">Connect your Envato account</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Link the Envato account you used to purchase Xgenious products to unlock downloads, updates,
            license management, and support&mdash;automatically matched to your purchase history.
          </p>

          <div className="mt-4 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <p className="text-sm font-semibold text-[#0F1112]">
                  You&apos;ll sign in on Envato&apos;s site &mdash; we never see your password
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">We access</p>
                    <ul className="space-y-1.5">
                      {[
                        'Your Envato username',
                        'Purchase history for eligible Xgenious products',
                        'Item name, ID, purchase code, license type & date',
                        'Support status for each license',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0 text-green-600">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">We never access</p>
                    <ul className="space-y-1.5">
                      {[
                        'Your Envato password',
                        'Purchases from other authors',
                        'Payment or billing details',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0 text-gray-400">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-blue-100">
                  You can disconnect at any time to revoke access. See our{' '}
                  <Link href="/privacy-policy#envato-account-connection" className="font-medium text-blue-700 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  for full details on how this data is used and retained.
                </p>
              </div>
            </div>
          </div>
        </div>

        {result && RESULT_MESSAGES[result] && !isConnected && !isFailed && (
          <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
            {RESULT_MESSAGES[result]}
          </div>
        )}

        {isFailed && (
          <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
            {FAILED_ERROR_MESSAGES[connection?.last_sync_error_code ?? ''] ?? DEFAULT_FAILED_MESSAGE}
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>
        )}

        {!isConnected && (
          <button
            onClick={() => connect()}
            disabled={loading}
            className="px-4 py-2 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Connecting…' : isFailed ? 'Try connecting again' : 'Connect Envato account'}
          </button>
        )}

        {isSettling && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-3.5 h-3.5 border-2 border-[#ec7161] border-t-transparent rounded-full animate-spin" />
              {status === 'pending' ? 'Connecting your Envato account…' : 'Syncing eligible Xgenious purchases…'}
            </div>
            {pollTimedOut && (
              <p className="text-xs text-gray-400">
                This is taking longer than usual — it&apos;s still running in the background.{' '}
                <button onClick={() => fetchStatus()} className="text-[#ec7161] font-medium hover:underline">
                  Check status
                </button>
              </p>
            )}
          </div>
        )}

        {isConnected && !isSettling && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#0F1112]">
                  Connected as {connection?.envato_username ?? 'Envato account'}
                </p>
                {connection?.last_sync_succeeded_at && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    Last synced{' '}
                    {new Date(connection.last_sync_succeeded_at).toLocaleString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
                    })}
                    {connection?.last_sync_summary && (
                      <> · {connection.last_sync_summary.imported + connection.last_sync_summary.already_imported} eligible product(s)</>
                    )}
                  </p>
                )}
                {status === 'needs_reconnect' && (
                  <p className="text-xs text-red-600 mt-1">
                    Your connection needs to be re-approved. Please connect again.
                  </p>
                )}
                {connection?.last_sync_error_code && status !== 'needs_reconnect' && (
                  <p className="text-xs text-gray-500 mt-1">Last sync note: {connection.last_sync_error_code}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                {status === 'needs_reconnect' ? (
                  <button
                    onClick={() => connect()}
                    disabled={loading}
                    className="px-3 py-1.5 bg-[#ec7161] text-white text-xs font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60"
                  >
                    Reconnect
                  </button>
                ) : (
                  <button
                    onClick={() => sync()}
                    disabled={loading}
                    className="px-3 py-1.5 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-60"
                  >
                    Sync now
                  </button>
                )}

                {confirmingDisconnect ? (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => { disconnect(); setConfirmingDisconnect(false); }}
                      disabled={loading}
                      className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setConfirmingDisconnect(false)}
                      className="px-3 py-1.5 border border-gray-200 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmingDisconnect(true)}
                    className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Disconnect
                  </button>
                )}
              </div>
            </div>

            {noMatch && (
              <div className="pt-3 border-t border-gray-200 text-sm text-gray-600">
                Your account was connected, but no eligible Xgenious purchases were found.{' '}
                <button onClick={() => sync()} className="text-[#ec7161] font-medium hover:underline">
                  Sync again
                </button>{' '}
                or{' '}
                <Link href="/my-account/support/new" className="text-[#ec7161] font-medium hover:underline">
                  contact support
                </Link>
                .
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
        <h2 className="text-base font-semibold text-[#0F1112]">FAQ</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-[#0F1112]">Why are some Envato purchases not shown?</p>
            <p className="text-sm text-gray-600 mt-1">
              Only purchases of Xgenious-authored products that are configured in our system are eligible
              for import.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F1112]">I used another Envato account.</p>
            <p className="text-sm text-gray-600 mt-1">
              Disconnect and connect the account that made the purchase. Only one connected Envato account
              is supported per Xgenious account right now.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F1112]">The purchase is missing.</p>
            <p className="text-sm text-gray-600 mt-1">
              Sync again, then{' '}
              <Link href="/my-account/support/new" className="text-[#ec7161] font-medium hover:underline">
                contact support
              </Link>{' '}
              with your purchase code. We will never ask you to send an OAuth token.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
