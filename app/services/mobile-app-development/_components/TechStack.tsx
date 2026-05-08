const techs = [
  { name: 'Flutter apps', logo: '/images/mobile-app-dev/tech-flutter.svg', isImg: false },
  { name: 'Dart', logo: '/images/mobile-app-dev/tech-dart.png', isImg: true },
  { name: 'Android', logo: '/images/mobile-app-dev/tech-android.svg', isImg: false },
  { name: 'Firebase', logo: '/images/mobile-app-dev/tech-firebase.svg', isImg: false },
  { name: 'WordPress', logo: '/images/mobile-app-dev/tech-wordpress.svg', isImg: false },
  { name: 'API', logo: '/images/mobile-app-dev/tech-api.png', isImg: true },
];

export default function TechStack() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[64px]">
        <h2
          className="text-[#26302b] font-bold text-center"
          style={{ fontSize: 64, lineHeight: '72px' }}
        >
          Our modern full-stack tech Built<br />for performance.
        </h2>

        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 border-t"
            style={{ borderColor: 'rgba(68,93,80,0.1)' }}
          />
          <div className="grid grid-cols-6">
            {techs.map((tech, i) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 py-[40px] relative"
                style={{
                  borderLeft: i > 0 ? '2px solid rgba(68,93,80,0)' : undefined,
                }}
              >
                {i > 0 && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: 'rgba(68,93,80,0.1)' }}
                  />
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="object-contain"
                  style={{ height: 50, width: 'auto', maxWidth: 70 }}
                />
                <p
                  className="text-[#26302b] font-semibold capitalize text-center"
                  style={{ fontSize: 18, lineHeight: '28px' }}
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 border-t"
            style={{ borderColor: 'rgba(68,93,80,0.1)' }}
          />
        </div>
      </div>
    </section>
  );
}
