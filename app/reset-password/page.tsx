'use client';
export const dynamic = 'force-dynamic';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthPanel from '@/components/auth/AuthPanel';
import { resetPasswordSchema, type ResetPasswordInput } from '@/lib/schemas/auth';

const EyeOn = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const EyeOff = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const uid = params.get('uid');
  const t = params.get('t');
  const sig = params.get('sig');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({ resolver: zodResolver(resetPasswordSchema) });

  async function onSubmit(values: ResetPasswordInput) {
    setServerError('');
    const res = await fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, t, sig, password: values.password }),
    });
    const data = await res.json();
    if (!res.ok) setServerError(data.error ?? 'Reset failed. Please request a new link.');
    else router.push('/login?reset=1');
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-3.5 pr-10 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors ${hasError ? 'border-red-300' : 'border-gray-200'}`;

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-4xl rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
        <AuthPanel
          badge="Almost done"
          headline={<>Set a new <em className="italic font-bold">secure password.</em></>}
          description="Choose a password with at least 8 characters to protect your Xgenious account."
        />

        <div className="flex-1 bg-white p-8 md:p-10">
          {!uid || !t || !sig ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2">Invalid reset link</h1>
              <p className="text-sm text-gray-500 mb-6">This link is missing required parameters.</p>
              <Link href="/forgot-password" className="text-[#ec7161] text-sm font-medium hover:underline">Request a new reset link</Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Set new password</h1>
              <p className="text-sm text-gray-500 mb-6">Choose a password with at least 8 characters.</p>

              {serverError && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                  {serverError}{' '}
                  {serverError.includes('expired') && (
                    <Link href="/forgot-password" className="underline font-medium">Request a new one</Link>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                    New password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input {...register('password')} type={showPassword ? 'text' : 'password'} autoComplete="new-password" className={inputClass(!!errors.password)} />
                    <button type="button" tabIndex={-1} onClick={() => setShowPassword((v) => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff /> : <EyeOn />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                    Confirm new password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input {...register('confirm')} type={showConfirm ? 'text' : 'password'} autoComplete="new-password" className={inputClass(!!errors.confirm)} />
                    <button type="button" tabIndex={-1} onClick={() => setShowConfirm((v) => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showConfirm ? <EyeOff /> : <EyeOn />}
                    </button>
                  </div>
                  {errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Updating…' : (
                    <>Update password <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
