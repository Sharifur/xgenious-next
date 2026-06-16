import { COLOR } from './constants';

const INTEGRATIONS = [
  {
    name: 'Google Analytics',
    desc: 'Track tenant site traffic and conversions without touching code.',
    color: '#F4B400',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="14" y="3" width="6" height="18" rx="2" fill="currentColor" />
        <rect x="3" y="13" width="6" height="8" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="8.5" y="8" width="6" height="13" rx="2" fill="currentColor" opacity="0.75" />
      </svg>
    ),
  },
  {
    name: 'Facebook Pixel',
    desc: 'Enable retargeting and ad event tracking across every tenant site.',
    color: '#1877F2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Google Tag Manager',
    desc: 'Deploy marketing scripts to tenant sites without deploying code.',
    color: '#4285F4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 7l-5 5 5 5 5-5-5-5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Chat',
    desc: 'Add a live chat button to any tenant site in seconds.',
    color: '#25D366',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.892-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.451-4.437 9.885-9.891 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
      </svg>
    ),
  },
  {
    name: 'Messenger Chat',
    desc: 'Facebook Messenger support widget on any tenant site.',
    color: '#0099FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Built-In Integrations
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Marketing & Chat Widgets — Without Touching Code
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Tenants enable analytics tracking, ad pixels, and live chat from their panel. Operators control which integrations are available per plan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {INTEGRATIONS.map((int) => (
            <div
              key={int.name}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-5 flex items-start gap-4 hover:shadow-md transition-all"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${int.color}15`, color: int.color }}
              >
                {int.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#0F1112] mb-1">{int.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6">{int.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          200+ languages supported · Multi-language UI for tenant panels and sites
        </p>

      </div>
    </section>
  );
}
