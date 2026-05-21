'use client';
export const dynamic = 'force-dynamic';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const uid = params.get('uid');
  const t = params.get('t');
  const sig = params.get('sig');

  if (!uid || !t || !sig) {
    return (
      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <p className="text-sm text-red-600 mb-4">Invalid reset link.</p>
            <Link href="/forgot-password" className="text-[#ec7161] text-sm font-medium hover:underline">
              Request a new reset link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const password = fd.get('password') as string;
    const confirm = fd.get('confirm') as string;

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, t, sig, password }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? 'Reset failed. Please request a new link.');
    } else {
      router.push('/login?reset=1');
    }
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Set new password</h1>
          <p className="text-sm text-gray-500 mb-6">
            Choose a password with at least 8 characters.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
              {error}{' '}
              {error.includes('expired') && (
                <Link href="/forgot-password" className="underline font-medium">
                  Request a new one
                </Link>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">New password</label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Confirm new password</label>
              <input
                name="confirm"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating…' : 'Update password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
