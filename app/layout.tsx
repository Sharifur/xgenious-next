import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/ui/TopLoader";

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
    <html lang="en" className={`${inter.variable} ${nunitoSans.variable}`}>
      <head>
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="flex flex-col min-h-screen antialiased font-sans text-[#0F1112] bg-white">
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
        <TopLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://cortex-api.xgenious.com/livechat.js" data-site="xgenious" strategy="afterInteractive" />
      </body>
    </html>
  );
}
