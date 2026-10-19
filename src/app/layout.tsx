import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/config/site";
import { outlets } from "@/content/outlets";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "SEEGAS — Cooking gas refills and delivery in Abuja", template: "%s · SEEGAS" },
  description: site.description,
  applicationName: "SEEGAS",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "SEEGAS",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Only verified facts: name, contact numbers, address, area served. No hours until SEEGAS confirms them. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/seegas-mark.png`,
  image: `${site.url}/brand/seegas-lockup.png`,
  description: site.description,
  telephone: site.phones.map((p) => p.tel),
  sameAs: [site.social.instagram],
  areaServed: { "@type": "City", name: "Abuja" },
  address: outlets.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: [o.address.split(",")[0], o.landmark].filter(Boolean).join(", "),
    addressLocality: o.city,
    addressCountry: "NG",
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${archivo.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
