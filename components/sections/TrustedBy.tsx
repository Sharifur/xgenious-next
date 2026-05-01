import { trustedLogos } from '@/data/saas-page';

export default function TrustedBy() {
  return (
    <section className="py-14 bg-white">
      <div className="container-page">
        <p className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-[#8A8F99] mb-7">
          Trusted by Leading Global Companies
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-5 lg:gap-x-16">
          {trustedLogos.map((logo) => (
            <span
              key={logo}
              className="text-[#B9BAC0] font-semibold text-[18px] tracking-tight hover:text-[#6B7280] transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
