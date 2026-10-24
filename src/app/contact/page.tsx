import type { Metadata } from "next";
import Link from "next/link";
import { CopyNumber } from "@/components/CopyNumber";
import { ArrowUpRight, WhatsApp } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { displayWhatsappNumber, site } from "@/config/site";
import { directionsUrl, outlets } from "@/content/outlets";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SEEGAS on WhatsApp or by phone, or visit our refill point at NNPC Utako station, Abuja.",
  alternates: { canonical: "/contact" },
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
      <h2 className="t-label pt-1 text-muted md:col-span-3">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const outlet = outlets[0]!;
  return (
    <>
      <PageIntro label="Contact" title="Talk to SEEGAS" lead="WhatsApp is the quickest way to reach us, for orders, prices and questions." />

      <div className="container-site py-6 md:py-10">
        <div className="border-t border-ink">
          <Row label="WhatsApp">
            {site.whatsappNumber ? (
              <>
                <p className="t-h3 text-2xl md:text-3xl"><CopyNumber value={`+${site.whatsappNumber}`} display={displayWhatsappNumber()} /></p>
                <a href={whatsappLink("general")} target="_blank" rel="noopener" className="btn btn-primary mt-5"><WhatsApp size={18} />Message us</a>
              </>
            ) : <p className="text-lg text-ink-2">WhatsApp details are being confirmed. Please call us using the numbers below.</p>}
          </Row>

          <Row label="Phone">
            <ul className="grid gap-2">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="t-h3 t-num text-2xl hover:text-brand-strong md:text-3xl">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Visit">
            <address className="text-lg not-italic">
              {outlet.address}
              {outlet.landmark ? <span className="block text-ink-2">{outlet.landmark}</span> : null}
            </address>
            {outlet.hours ? null : <p className="mt-3 text-ink-2">Please call ahead to confirm opening hours.</p>}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <a href={directionsUrl(outlet)} target="_blank" rel="noopener" className="link-arrow">
                Get directions <ArrowUpRight size={16} />
              </a>
              <Link href="/outlets" className="link-arrow">
                Outlet details
              </Link>
            </div>
          </Row>

          <Row label="Social">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="link-arrow text-lg">
              Instagram @seegas_ng <ArrowUpRight size={16} />
            </a>
          </Row>

          {site.email ? (
            <Row label="Email">
              <a href={`mailto:${site.email}`} className="link text-lg">
                {site.email}
              </a>
            </Row>
          ) : null}
        </div>
      </div>
    </>
  );
}
