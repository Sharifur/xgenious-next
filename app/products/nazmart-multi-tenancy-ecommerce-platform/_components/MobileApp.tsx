import Image from 'next/image';

export default function MobileApp() {
  return (
    <section id="mobile-app" className="py-14 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[560px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3 leading-tight">
            Nazmart Flutter Mobile App for Tenant Shop
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Allow Your Tenants to Build Mobile Application for Their Customers Through Nazmart Integrated Flutter (Android/iOS) Mobile Application
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          <Image
            src="/products/nazmart-mobile-app.png"
            alt="Nazmart Flutter mobile app for tenant shop — Android and iOS"
            width={900}
            height={680}
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
