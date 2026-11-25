export default function Hosting() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
          Hosting: what you need to run it
        </h2>
        {/* TODO: Licence wording omitted. Envato’s Extended License rule and the
            xgenious.com commercial-use wording need sign-off before they are published. */}
        <p className="text-[16px] leading-7 text-[#484848]">
          <strong className="text-[#0F1112]">Hosting:</strong> A VPS is recommended. The vendor suggests at least 1 CPU core and 2 GB RAM, 2 cores and 4 GB to be comfortable. You need a MySQL user that can create databases, a wildcard subdomain and wildcard SSL. Nazmart installs on a root domain, not a subdomain. Shared hosting is possible with our tutorial but not ideal.
        </p>
      </div>
    </section>
  );
}
