import type { Metadata } from "next";
import { ArrowUpRight, Clock, Phone, Pin, WhatsApp } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { PhotoSlot } from "@/components/PhotoSlot";
import { directionsUrl, outlets, SERVICE_LABEL } from "@/content/outlets";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Outlets",
  description: "Where to find SEEGAS in Abuja: our refill point at NNPC Utako station, with directions and contact numbers.",
  alternates: { canonical: "/outlets" },
};

export default function OutletsPage() {
  return (
    <>
      <PageIntro
        label="Outlets"
        title={outlets.length === 1 ? "Where to find us" : "Our outlets"}
        lead="Bring your cylinder for a refill, buy a new one, or ask about delivery. If you'd rather not travel, we can deliver within Abuja."
      />

      <div className="container-site py-14 md:py-20">
        <ul className="grid gap-16">
          {outlets.map((outlet) => (
            <li key={outlet.slug} id={outlet.slug} className="grid gap-10 lg:grid-cols-12">
              <PhotoSlot subject={`${outlet.name}, ${outlet.area}`} ratio="4 / 3" className="lg:col-span-5" />

              <article className="lg:col-span-7 lg:pl-6" aria-labelledby={`${outlet.slug}-name`}>
                <p className="t-label text-muted">
                  {outlet.area}, {outlet.city}
                </p>
                <h2 id={`${outlet.slug}-name`} className="t-h2 mt-3 text-3xl md:text-4xl">
                  {outlet.name}
                </h2>

                <dl className="mt-8 grid gap-6 border-t border-ink pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="flex items-center gap-2 text-sm text-muted">
                      <Pin size={16} /> Address
                    </dt>
                    <dd className="mt-2">
                      {outlet.address}
                      {outlet.landmark ? <span className="block text-ink-2">{outlet.landmark}</span> : null}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-sm text-muted">
                      <Clock size={16} /> Opening hours
                    </dt>
                    <dd className="mt-2">
                      {outlet.hours ? (
                        <ul>
                          {outlet.hours.map((h) => (
                            <li key={h.days}>
                              {h.days}: <span className="t-num">{h.time}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>Please call ahead to confirm today&apos;s opening hours.</>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-sm text-muted">
                      <Phone size={16} /> Phone
                    </dt>
                    <dd className="mt-2 grid">
                      {outlet.phones.map((p) => (
                        <a key={p.tel} href={`tel:${p.tel}`} className="link t-num justify-self-start">
                          {p.display}
                        </a>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Available here</dt>
                    <dd className="mt-2">
                      <ul>
                        {outlet.services.map((s) => (
                          <li key={s}>{SERVICE_LABEL[s]}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href={directionsUrl(outlet)} target="_blank" rel="noopener" className="btn btn-primary">
                    Get directions
                    <ArrowUpRight size={18} />
                  </a>
                  <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-secondary">
                    <WhatsApp size={18} />
                    Message on WhatsApp
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
