'use client';

import { useEffect, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const LANGS = [
  {
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr' as const,
    title: 'Help Poor Kids After an Unfortunate Tragedy',
    donate: 'Donate Now',
    raised: 'Raised',
    goal: 'Goal',
    donors: 'donors',
    daysLeft: 'days left',
  },
  {
    name: 'Arabic',
    flag: '🇸🇦',
    dir: 'rtl' as const,
    title: 'مساعدة الأطفال الفقراء بعد المأساة',
    donate: 'تبرع الآن',
    raised: 'تم جمع',
    goal: 'الهدف',
    donors: 'متبرع',
    daysLeft: 'يوم متبقي',
  },
  {
    name: 'French',
    flag: '🇫🇷',
    dir: 'ltr' as const,
    title: 'Aidez les Enfants Défavorisés Après une Tragédie',
    donate: 'Faire un don',
    raised: 'Collecté',
    goal: 'Objectif',
    donors: 'donateurs',
    daysLeft: 'jours restants',
  },
  {
    name: 'Spanish',
    flag: '🇪🇸',
    dir: 'ltr' as const,
    title: 'Ayuda a Niños en Necesidad Tras la Tragedia',
    donate: 'Donar ahora',
    raised: 'Recaudado',
    goal: 'Meta',
    donors: 'donantes',
    daysLeft: 'días restantes',
  },
  {
    name: 'German',
    flag: '🇩🇪',
    dir: 'ltr' as const,
    title: 'Helfen Sie Kindern in Not Nach der Tragödie',
    donate: 'Jetzt spenden',
    raised: 'Gesammelt',
    goal: 'Ziel',
    donors: 'Spender',
    daysLeft: 'Tage verbleibend',
  },
  {
    name: 'Hindi',
    flag: '🇮🇳',
    dir: 'ltr' as const,
    title: 'त्रासदी के बाद गरीब बच्चों की मदद करें',
    donate: 'अभी दान करें',
    raised: 'जुटाया',
    goal: 'लक्ष्य',
    donors: 'दानकर्ता',
    daysLeft: 'दिन शेष',
  },
];

export default function MultiLanguage() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % LANGS.length);
        setAnimating(false);
      }, 250);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const lang = LANGS[active];

  const switchTo = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 200);
  };

  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">
        <div className="rounded-3xl border border-[#E5E7EC] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5 w-fit"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
                Multi-Language & RTL
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F1112] leading-tight mb-4">
                Launch in Any Language — Including RTL
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-7 mb-6">
                Fundorex ships with a complete translation system. Manage every UI string from the admin panel — no code changes needed. Full right-to-left layout support for Arabic, Urdu, Hebrew, and more.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Admin panel translation manager — no code',
                  'RTL layout built-in for Arabic, Urdu, Hebrew',
                  'Translated email templates included',
                  'Multi-currency support with locale formatting',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>

              {/* Language selector buttons */}
              <div className="flex flex-wrap gap-2 mt-7">
                {LANGS.map((l, i) => (
                  <button
                    key={l.name}
                    onClick={() => switchTo(i)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all cursor-pointer"
                    style={
                      active === i
                        ? { background: COLOR, color: '#fff', borderColor: COLOR }
                        : { background: '#fff', color: '#374151', borderColor: '#E5E7EC' }
                    }
                  >
                    <span>{l.flag}</span>
                    {l.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — animated browser */}
            <div
              className="p-6 sm:p-8 flex items-center justify-center"
              style={{ background: LIGHT_COLOR }}
            >
              <div className="w-full max-w-[380px]">
                {/* Browser frame */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-[#E5E7EC] bg-white">

                  {/* Chrome bar */}
                  <div className="h-9 bg-[#F3F4F6] flex items-center px-3 gap-2.5 border-b border-[#E5E7EC]">
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 bg-white rounded h-5 flex items-center px-2 gap-1.5 border border-[#E5E7EC]">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="2.5" />
                        <path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[9px] text-[#9ca3af] truncate">fundorex.xgenious.com</span>
                    </div>
                  </div>

                  {/* Nav */}
                  <div
                    className="px-4 py-2 border-b border-[#F5F6F8] flex items-center gap-3"
                    dir={lang.dir}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-md flex-shrink-0" style={{ background: COLOR }} />
                      <span className="text-[11px] font-bold text-[#0F1112]">Fundorex</span>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 text-[9px] font-medium px-2 py-1 rounded-md border border-[#E5E7EC] text-[#374151] bg-[#F9FAFB]">
                      <span>{lang.flag}</span>
                      <span
                        className="transition-all duration-200"
                        style={{ opacity: animating ? 0 : 1 }}
                      >
                        {lang.name}
                      </span>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Campaign card content */}
                  <div
                    className="p-4 flex flex-col gap-3 transition-all duration-200"
                    dir={lang.dir}
                    style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(6px)' : 'translateY(0)' }}
                  >
                    {/* Image placeholder */}
                    <div className="rounded-lg overflow-hidden bg-[#E5E7EC] h-[100px] flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="#d1d5db" />
                        <path d="M3 15l5-5 4 4 3-3 6 6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <p className="text-[12px] font-bold text-[#0F1112] leading-snug">{lang.title}</p>

                    <div className="flex flex-col gap-1">
                      <div
                        className="flex justify-between text-[10px] text-[#6b7280]"
                      >
                        <span>{lang.raised}: <strong className="text-[#0F1112]">$16,545</strong></span>
                        <span>{lang.goal}: $135,165</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E5E7EC] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: '12%', background: COLOR }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-[#9ca3af]">284 {lang.donors} · 12 {lang.daysLeft}</span>
                    </div>

                    <button
                      className="w-full py-2 rounded-lg text-[11px] font-bold text-white"
                      style={{ background: COLOR }}
                    >
                      {lang.donate}
                    </button>
                  </div>
                </div>

                {/* Language indicator below */}
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  {LANGS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => switchTo(i)}
                      className="rounded-full transition-all cursor-pointer"
                      style={
                        active === i
                          ? { width: 20, height: 6, background: COLOR }
                          : { width: 6, height: 6, background: '#d1d5db' }
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
