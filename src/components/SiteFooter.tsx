import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { displayWhatsappNumber, site } from "@/config/site";
import { outlets } from "@/content/outlets";
import { whatsappLink } from "@/lib/whatsapp";
import { NAV } from "./nav";

async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  const outlet = outlets[0]!;
  return (
    <footer className="bg-navy pb-24 text-white sm:pb-0">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Image src="/brand/seegas-lockup-white.png" alt="SEEGAS" width={1080} height={338} className="h-11 w-auto" />
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-navy-muted">
            Cooking gas refills, cylinders and delivery for homes and businesses in Abuja.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="t-label text-navy-muted">Visit</h2>
          <address className="mt-4 not-italic leading-relaxed">
            {outlet.address}
            {outlet.landmark ? <span className="block text-navy-muted">{outlet.landmark}</span> : null}
          </address>
          <Link href="/outlets" className="mt-3 inline-block text-[0.9375rem] font-semibold underline decoration-navy-line underline-offset-4 hover:decoration-white">
            Directions and details
          </Link>
        </div>

        <div className="md:col-span-3">
          <h2 className="t-label text-navy-muted">Talk to us</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={whatsappLink("general")} target="_blank" rel="noopener" className="hover:underline">
                WhatsApp {displayWhatsappNumber()}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="t-num hover:underline">
                  Call {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener" className="hover:underline">
                Instagram @seegas_ng
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="t-label text-navy-muted">Site</h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-navy-line">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-navy-muted sm:flex-row sm:justify-between">
          <p>
            © <Year /> {site.legalName}. All rights reserved.
          </p>
          <p>In a gas emergency, leave the area and call 112.</p>
        </div>
      </div>
    </footer>
  );
}
