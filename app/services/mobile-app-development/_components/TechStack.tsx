type TechBadgeProps = {
  name: string;
  icon: string;
  style: React.CSSProperties;
  borderColor: string;
  bg: string;
};

function TechBadge({ name, icon, style, borderColor, bg }: TechBadgeProps) {
  return (
    <div
      className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10"
      style={{ border: `1px solid ${borderColor}`, background: bg, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={name} width={24} height={24} />
      <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <div
            className="inline-flex items-center justify-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="font-normal text-[#ec7161]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Tech Stack
            </span>
          </div>
          <h2 className="font-semibold text-[#0f1112]" style={{ fontSize: 44, lineHeight: '52px', maxWidth: 712 }}>
            Modern Stack, Optimized for Speed
          </h2>
          <p className="font-normal text-[#484848]" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 580 }}>
            No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
          </p>
        </div>

        {/* Circular element with floating badges */}
        <div className="relative flex items-center justify-center" style={{ height: 860 }}>
          {/* Circle background */}
          <div
            className="relative flex items-center justify-center rounded-full overflow-hidden"
            style={{ width: 790, height: 790, background: '#fff0ee' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-dev/tech-circle.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            {/* Phone */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-dev/tech-phone.png"
              alt="Tech stack phone"
              className="relative z-10"
              style={{ width: 400, height: 600, objectFit: 'contain' }}
            />
          </div>

          {/* Flutter badge — left */}
          <TechBadge
            name="Flutter"
            icon="/images/app-dev/tech-flutter.svg"
            borderColor="#41d0fd"
            bg="rgba(64,208,253,0.1)"
            style={{ left: 0, top: '30%' }}
          />

          {/* iOS badge — bottom-left */}
          <TechBadge
            name="iOS"
            icon="/images/app-dev/tech-ios.svg"
            borderColor="#141414"
            bg="white"
            style={{ left: 60, bottom: '18%' }}
          />

          {/* App Store badge — left-center */}
          <div
            className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10 bg-white"
            style={{ left: 20, top: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/tech-ios.svg" alt="App Store" width={24} height={24} />
            <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
              App Store
            </span>
          </div>

          {/* Kotlin badge — right */}
          <TechBadge
            name="Kotlin"
            icon="/images/app-dev/tech-kotlin.svg"
            borderColor="#d86685"
            bg="rgba(255,137,1,0.1)"
            style={{ right: 0, top: '30%' }}
          />

          {/* Android badge — bottom-right */}
          <TechBadge
            name="Android"
            icon="/images/app-dev/tech-android.svg"
            borderColor="#5c8c32"
            bg="white"
            style={{ right: 60, bottom: '18%' }}
          />

          {/* Play Store badge — right-center */}
          <div
            className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10 bg-white"
            style={{ right: 20, top: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/tech-playstore.svg" alt="Play Store" width={24} height={24} />
            <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Play Store
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
