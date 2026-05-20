'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import CTASection from '@/components/sections/CTASection';

const QUERY_TYPES = [
  'Customisation Work',
  'Purchase Query',
  'General Query',
  'Features Request',
  'Installation',
  'Collaboration',
];

const PRODUCTS = [
  'Nexelit',
  'NazMart',
  'Xilancer',
  'Prohandy',
  'Fundorex',
  'Helpnest',
  'Other',
];

const SOCIALS = [
  {
    label: 'Twitter',
    href: 'https://x.com/xgeniousllc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.262 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/xgenious',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/xgenious/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@xgenious',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const recaptchaToken = recaptchaRef.current?.getValue() ?? '';
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setSubmitted(true);
      recaptchaRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-14 sm:pt-[160px] sm:pb-20"
        style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[13px] font-medium text-[#484848]">Get In Touch</span>
          </div>
          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[68px] lg:leading-[76px] font-semibold text-[#0F1112]">
            Contact Us
          </h1>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[580px]">
            Navigate your way to connect with us. Each step leads you closer to personalized support and expert guidance from the Xgenious team.
          </p>
        </div>
      </section>

      {/* Main: Form + Info */}
      <section className="py-14 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-5 py-16 border border-[#E5E7EC] rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#fef2ef] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#ec7161" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 4L12 14.01l-3-3" stroke="#ec7161" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#0F1112]">Message Sent!</h2>
                  <p className="text-[#484848] text-[15px] max-w-[360px]">
                    We&apos;ve received your message and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                      setError('');
                    }}
                    className="text-[13px] text-[#ec7161] font-medium underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-medium text-[#0F1112]">First Name <span className="text-[#ec7161]">*</span></label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ec7161] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-medium text-[#0F1112]">Last Name <span className="text-[#ec7161]">*</span></label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ec7161] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#0F1112]">Email Address <span className="text-[#ec7161]">*</span></label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ec7161] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#0F1112]">Subject <span className="text-[#ec7161]">*</span></label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief summary of your inquiry"
                      className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ec7161] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#0F1112]">Your Message <span className="text-[#ec7161]">*</span></label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project, question, or how we can help..."
                      className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#ec7161] transition-colors resize-none"
                    />
                  </div>

                  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="self-start inline-flex items-center gap-2 bg-[#0F1112] text-white font-semibold text-[14px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  {error && (
                    <p className="text-[13px] text-red-500 mt-1">{error}</p>
                  )}
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-5">
                <h3 className="text-[16px] font-semibold text-[#0F1112]">Contact Information</h3>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#fef2ef] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#ec7161" strokeWidth="1.8" />
                      <path d="M16 2v4M8 2v4M3 10h18" stroke="#ec7161" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6b7280] font-medium">Working Days</p>
                    <p className="text-[14px] text-[#0F1112] font-medium mt-0.5">Sunday – Thursday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#fef2ef] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#ec7161" strokeWidth="1.8" strokeLinejoin="round" />
                      <circle cx="12" cy="9" r="2.5" stroke="#ec7161" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6b7280] font-medium">Address</p>
                    <p className="text-[14px] text-[#0F1112] font-medium mt-0.5">Rampura, Dhaka<br />Bangladesh</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5E7EC]">
                  <p className="text-[12px] text-[#6b7280] font-medium mb-3">Follow Us</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-xl border border-[#E5E7EC] flex items-center justify-center text-[#484848] hover:text-[#ec7161] hover:border-[#ec7161] transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                    <a
                      href="https://wa.me/+8801811666560"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-9 h-9 rounded-xl border border-[#E5E7EC] flex items-center justify-center text-[#484848] hover:text-[#25d366] hover:border-[#25d366] transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.878-1.42A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time card */}
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#0F1112' }}>
                <div className="w-9 h-9 rounded-xl bg-[#ec7161]/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#ec7161" strokeWidth="1.8" />
                    <path d="M12 6v6l4 2" stroke="#ec7161" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px]">We respond within 24h</p>
                  <p className="text-[#9ca3af] text-[13px] mt-1 leading-5">
                    Send your message and expect a reply from our team within one business day.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  {['50+ products launched', 'Fixed-price contracts', 'Elite author status'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[13px] text-[#d1d5db]">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#ec7161" fillOpacity="0.15" />
                        <path d="M6 10l3 3 5-5" stroke="#ec7161" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build Your SaaS or Marketplace?"
        description="Book a free consultation — get a clear roadmap, a realistic estimate, and a team that's shipped 50+ products like yours."
        bgImage=""
        bgPhoto="/cta-bg.jpg"
      />
    </>
  );
}
