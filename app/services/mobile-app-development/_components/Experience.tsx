import Link from 'next/link';

export default function Experience() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex items-start gap-[120px]">
        {/* Left */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#26302b] font-semibold"
              style={{ fontSize: 72, lineHeight: '80px' }}
            >
              Outstanding Apps<br />Development Experience
            </h2>
            <p
              className="text-[#484848] font-normal"
              style={{ fontSize: 24, lineHeight: '32px', maxWidth: 706 }}
            >
              Experience a showcase of our design prowess. Our experts present past successful
              projects, illustrating our design philosophy, the strategic approach we take.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <svg className="flex-shrink-0 mt-1" width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path d="M4 12L9 17L18 7" stroke="#ec7161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p
                  className="text-[#26302b] font-semibold capitalize"
                  style={{ fontSize: 28, lineHeight: '100px' }}
                >
                  we make exceptional product design
                </p>
                <p
                  className="text-[#484848] font-normal"
                  style={{ fontSize: 24, lineHeight: '32px', maxWidth: 600 }}
                >
                  Experience a showcase of our design prowess. Our experts present past successful
                  projects, illustrating our design philosophy the strategic approach.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-white rounded-[30px] self-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.4)]"
            style={{ background: '#ec7161', padding: '22px 32px', fontSize: 16 }}
          >
            Contact Us
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M7 13H19M19 13L14 8M19 13L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0" style={{ width: 550, height: 649 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mobile-app-dev/experience-photo.png"
            alt="Apps development experience"
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>
      </div>
    </section>
  );
}
