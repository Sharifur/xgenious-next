'use client';
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthPanel from '@/components/auth/AuthPanel';
import { registerSchema, type RegisterInput } from '@/lib/schemas/auth';
import { trackCompleteRegistration } from '@/lib/meta-events';

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

function generateStrongPassword(): string {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghjkmnpqrstuvwxyz';
  const digits = '23456789';
  const symbols = '!@#$%^&*-_=+?';
  const all = upper + lower + digits + symbols;
  const rand = (s: string) => s[Math.floor(Math.random() * s.length)];
  let pw: string;
  do {
    const chars = [rand(upper), rand(upper), rand(lower), rand(lower), rand(digits), rand(digits), rand(symbols)];
    for (let i = 0; i < 7; i++) chars.push(rand(all));
    pw = chars.sort(() => Math.random() - 0.5).join('');
  } while (getPasswordStrength(pw).score < 4);
  return pw;
}

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: '', color: '' };
  // Repeated chars (3+) or sequential runs — WordPress/zxcvbn flags these
  if (/(.)\1{2,}/.test(pw) || /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(pw)) {
    return { score: 1, label: 'Weak — avoid repeated or sequential characters', color: 'bg-red-400' };
  }
  let score = 0;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];
  return { score, label: labels[score], color: colors[score] };
}

export default function RegisterPage() {
  const [serverError, setServerError] = useState('');
  const [registered, setRegistered] = useState(false);
  const [regEmail, setRegEmail] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { terms: true },
  });

  const emailValue = watch('email') ?? '';
  const passwordValue = watch('password') ?? '';
  const strength = getPasswordStrength(passwordValue);
  const autoUsername = emailValue.includes('@')
    ? emailValue.split('@')[0].toLowerCase().replace(/[^a-z0-9_.-]/g, '')
    : '';

  useEffect(() => {
    if (countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  async function onSubmit(values: RegisterInput) {
    setServerError('');
    const username = values.email.split('@')[0].toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    const recaptchaToken = recaptchaRef.current?.getValue() ?? '';

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        recaptchaToken,
      }),
    });

    let data: { ok?: boolean; error?: string } = {};
    try { data = await res.json(); } catch { /* empty */ }
    if (!res.ok) {
      recaptchaRef.current?.reset();
      setServerError(data.error ?? 'Registration failed. Please try again.');
      return;
    }

    setRegEmail(values.email);
    setRegistered(true);
    setCountdown(120);
    trackCompleteRegistration(window.location.href, values.email);
  }

  async function handleResend() {
    setResendLoading(true);
    setResendMsg('');
    const res = await fetch('/api/resend-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: regEmail }),
    });
    const data = await res.json();
    setResendLoading(false);
    if (res.ok) { setResendMsg('Verification email resent!'); setCountdown(120); }
    else setResendMsg(data.error ?? 'Failed to resend. Please try again.');
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-3.5 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec7161]/20 focus:border-[#ec7161] transition-colors ${hasError ? 'border-red-300' : 'border-gray-200'}`;

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-4xl rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
        <AuthPanel
          badge="New here"
          headline={<>Join thousands of teams building with <em className="italic font-bold">Xgenious.</em></>}
          description="Create your free account to manage licenses, raise support tickets, and download product updates."
        />

        <div className="flex-1 bg-white p-8 md:p-10">
          {registered ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <div className="w-12 h-12 bg-[#ec7161]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#ec7161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#0F1112] mb-2">Check your email</h1>
              <p className="text-sm text-gray-500 mb-1">We sent a verification link to</p>
              <p className="text-sm font-medium text-[#0F1112] mb-6">{regEmail}</p>
              <p className="text-xs text-gray-400 mb-4">Click the link to activate your account. Check your spam folder if you don&apos;t see it.</p>
              {resendMsg && <p className="text-xs text-gray-600 mb-3">{resendMsg}</p>}
              <button onClick={handleResend} disabled={resendLoading || countdown > 0} className="text-sm text-[#ec7161] font-medium hover:underline disabled:opacity-50 disabled:no-underline">
                {resendLoading ? 'Sending…' : countdown > 0 ? `Resend available in ${countdown}s` : 'Resend verification email'}
              </button>
              <p className="mt-6 text-xs text-gray-400">
                Already verified?{' '}
                <Link href="/login" className="text-[#ec7161] font-medium hover:underline">Sign in</Link>
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-[#0F1112] mb-1">Create account</h1>
              <p className="text-sm text-gray-500 mb-6">
                Already have an account?{' '}
                <Link href="/login" className="text-[#ec7161] font-medium hover:underline">Sign in</Link>
              </p>

              {serverError && (
                <div
                  className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:mt-1 [&_li]:mt-0.5"
                  dangerouslySetInnerHTML={{ __html: serverError }}
                />
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#0F1112] mb-1.5">First name</label>
                    <input {...register('firstName')} type="text" className={inputClass(false)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F1112] mb-1.5">Last name</label>
                    <input {...register('lastName')} type="text" className={inputClass(false)} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input {...register('email')} type="email" autoComplete="email" className={inputClass(!!errors.email)} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  {autoUsername && !errors.email && (
                    <p className="mt-1.5 text-xs text-gray-400">
                      Your username: <span className="font-medium text-gray-600">{autoUsername}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-[#0F1112]">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          const pw = generateStrongPassword();
                          setValue('password', pw, { shouldValidate: true });
                          setValue('confirm', pw, { shouldValidate: true });
                          setShowPassword(true);
                          setShowConfirm(true);
                        }}
                        className="text-xs text-[#ec7161] hover:underline font-medium"
                      >
                        Generate
                      </button>
                    </div>
                    <div className="relative">
                      <input {...register('password')} type={showPassword ? 'text' : 'password'} autoComplete="new-password" className={inputClass(!!errors.password) + ' pr-10'} />
                      <button type="button" tabIndex={-1} onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showPassword ? <EyeOff /> : <EyeOn />}
                      </button>
                    </div>
                    {passwordValue && (
                      <div className="mt-2 space-y-1">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded-full transition-colors ${i <= strength.score ? strength.color : 'bg-gray-200'}`}
                            />
                          ))}
                        </div>
                        <p className={`text-xs font-medium ${strength.score <= 1 ? 'text-red-500' : strength.score === 2 ? 'text-yellow-600' : strength.score === 3 ? 'text-blue-600' : 'text-green-600'}`}>
                          {strength.label}
                        </p>
                      </div>
                    )}
                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F1112] mb-1.5">
                      Confirm password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input {...register('confirm')} type={showConfirm ? 'text' : 'password'} autoComplete="new-password" className={inputClass(!!errors.confirm) + ' pr-10'} />
                      <button type="button" tabIndex={-1} onClick={() => setShowConfirm((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showConfirm ? <EyeOff /> : <EyeOn />}
                      </button>
                    </div>
                    {errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm.message}</p>}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    {...register('terms')}
                    type="checkbox"
                    id="terms"
                    defaultChecked
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#ec7161] cursor-pointer"
                  />
                  <div>
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      I agree to the{' '}
                      <Link href="/terms-of-service" className="text-[#ec7161] font-medium hover:underline">Terms &amp; Conditions</Link>
                    </label>
                    {errors.terms && <p className="mt-0.5 text-xs text-red-500">{errors.terms.message}</p>}
                  </div>
                </div>

                {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                  <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#ec7161] text-white text-sm font-semibold rounded-lg hover:bg-[#e05e4d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creating account…' : 'Create account'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
