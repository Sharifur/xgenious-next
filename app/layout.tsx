import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/ui/TopLoader";
import IframeNotice from "@/components/ui/IframeNotice";
import PromoBanner from "@/components/ui/PromoBanner";
import { Providers } from "@/components/Providers";
import CrashReporter from "@/components/CrashReporter";
import MetaPixel from "@/components/MetaPixel";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xgenious.com"),
  title: {
    default: "Custom Software Development Company | Xgenious",
    template: "%s | Xgenious",
  },
  description:
    "Xgenious is a custom software development company building SaaS, web apps, mobile, and AI agents for mid-market teams. Fixed-price from $50K. UK · US · UAE.",
  openGraph: {
    siteName: "Xgenious",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xgenious1",
    creator: "@xgenious1",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" translate="no" className={`${inter.variable} ${nunitoSans.variable}`}>
      <head>
        {/* These load afterInteractive/lazyOnload either way — preconnecting doesn't
            change *when* they fire, only removes DNS/TCP/TLS setup cost from the
            critical path once they do, which was showing up as main-thread contention
            competing with the H1 (LCP element) render on mobile. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {/* Reserve space for PromoBanner before first paint — otherwise the banner
            pops in post-hydration (localStorage isn't known during SSR) and shoves
            the fixed Navbar + body content down, which CrUX was scoring as CLS
            > 0.25 on mobile where the banner wraps to two lines. PromoBanner's own
            ResizeObserver still corrects this estimate to the exact pixel height. */}
        <Script id="promo-h-init" strategy="beforeInteractive">
          {`(function(){try{
            if(localStorage.getItem('xg-promo-welcome10-dismissed')==='1')return;
            if(location.pathname.indexOf('/checkout')===0)return;
            var h=window.innerWidth<640?64:44;
            document.documentElement.style.setProperty('--promo-h',h+'px');
          }catch(e){}})();`}
        </Script>
      </head>
      <body
        className="flex flex-col min-h-screen antialiased font-sans text-[#0F1112] bg-white"
        style={{ paddingTop: 'var(--promo-h, 0px)' }}
      >
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <MetaPixel />
        <CrashReporter />
        <TopLoader />
        <IframeNotice />
        <Providers>
          <PromoBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        {/* Non-critical chat widget — load after the page is idle so it doesn't compete with LCP */}
        <Script src="https://cortex-api.xgenious.com/livechat.js" data-site="xgenious" strategy="lazyOnload" />
        {/* FastSpring is scoped to the routes that use it: /checkout (CheckoutClient) and /my-account (layout) */}
      </body>
    </html>
  );
}
