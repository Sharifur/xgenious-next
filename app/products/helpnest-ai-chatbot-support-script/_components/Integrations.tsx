import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const LOGOS = [
  { src: '/integrations/wordpress-full.png', alt: 'WordPress', w: 160, imgClass: 'h-12' },
  { src: '/integrations/shopify.svg',        alt: 'Shopify',   w: 110, imgClass: 'h-9'  },
  { src: '/integrations/webflow-full.svg',   alt: 'Webflow',   w: 130, imgClass: 'h-10' },
  { src: '/integrations/wix.svg',            alt: 'Wix',       w: 80,  imgClass: 'h-9'  },
];

export default function Integrations() {
  return (
    <section className="pb-16 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Integrations
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Embeds Anywhere. Connects to Your Stack.
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            The Helpnest chat widget embeds on any website with 2 lines of code. Connect your CRM, billing, and AI providers via built-in integrations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center rounded-2xl border border-[#E5E7EC] bg-[#F8F9FB] h-[100px] px-6 hover:border-[#C7D2FE] hover:bg-[#EEF2FF] transition-colors"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={48}
                className={`object-contain w-auto ${logo.imgClass}`}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          WordPress · Shopify · Webflow · Wix — and any platform that accepts HTML or npm packages.
        </p>

      </div>
    </section>
  );
}
