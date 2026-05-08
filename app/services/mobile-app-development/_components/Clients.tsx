const row1 = [
  { src: '/images/mobile-app-dev/client-5.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-prince.svg', alt: 'Prince' },
  { src: '/images/mobile-app-dev/client-6.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-7.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-tigerair.svg', alt: 'Tigerair' },
];

const row2 = [
  { src: '/images/mobile-app-dev/client-1.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-2.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-3.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-4.svg', alt: 'Client' },
  { src: '/images/mobile-app-dev/client-4.svg', alt: 'Client' },
];

function ClientRow({ clients }: { clients: typeof row1 }) {
  return (
    <div className="grid grid-cols-5 border border-[#445d50]">
      {clients.map((client, i) => (
        <div
          key={i}
          className="flex items-center justify-center py-10"
          style={{
            borderLeft: i > 0 ? '1px solid #445d50' : undefined,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={client.src} alt={client.alt} className="object-contain" style={{ height: 44, maxWidth: 140 }} />
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="py-[120px]" style={{ background: '#26302b' }}>
      <div className="container-page flex flex-col gap-[72px]">
        <h2
          className="text-white font-bold capitalize text-center"
          style={{ fontSize: 64, lineHeight: '72px' }}
        >
          Our Valuable clients
        </h2>

        <div className="flex flex-col" style={{ border: '1px solid #445d50' }}>
          <ClientRow clients={row1} />
          <div style={{ borderTop: '1px solid #445d50' }}>
            <ClientRow clients={row2} />
          </div>
        </div>
      </div>
    </section>
  );
}
