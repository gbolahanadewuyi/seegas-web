import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Phone, Pin, WhatsApp } from "@/components/icons";
import { Photo } from "@/components/Photo";
import { HeadlinePrice, PriceTable } from "@/components/Prices";
import { site } from "@/config/site";
import { directionsUrl, outlets } from "@/content/outlets";
import { photos } from "@/content/photos";
import { whatsappLink, type WhatsappIntent } from "@/lib/whatsapp";

const SERVICES: { name: string; detail: string; intent: WhatsappIntent; action: string }[] = [
  { name: "Refills", detail: "Bring your cylinder to our refill point in Utako. Refills are charged by weight.", intent: "refill", action: "Order a refill" },
  { name: "Delivery", detail: "Order on WhatsApp and we bring the gas to you in Abuja.", intent: "delivery", action: "Arrange delivery" },
  { name: "New cylinders", detail: "Buy a cylinder if you're starting out or replacing an old one.", intent: "cylinder", action: "Ask about cylinders" },
  { name: "Installation and repair", detail: "Installation, maintenance and repair of gas setups for homes and businesses.", intent: "installation", action: "Book a visit" },
  { name: "Business supply", detail: "Regular supply for restaurants, hotels and commercial kitchens that can't afford to run out.", intent: "business", action: "Talk to us" },
];

export default function Home() {
  const outlet = outlets[0]!;
  return (
    <>
      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="container-site grid gap-10 py-10 md:py-16 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-20">
          <div className="lg:col-span-7 lg:pb-2">
            <h1 className="t-display text-[2.75rem] sm:text-6xl lg:text-[5.25rem]">Cooking gas, refilled and delivered.</h1>
            <p className="t-lead mt-6 max-w-xl">
              Refill at our station in Utako, or order on WhatsApp and we&apos;ll bring it to you. For homes, restaurants and commercial kitchens across Abuja.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary">
                <WhatsApp size={18} />
                Order a refill
              </a>
              <Link href="/prices" className="btn btn-secondary">
                View gas prices
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <dl className="grid content-start gap-3 border-t border-line pt-5 text-[0.9375rem]">
                <div className="flex gap-3">
                  <dt className="mt-0.5 text-muted">
                    <Pin size={18} />
                    <span className="sr-only">Address</span>
                  </dt>
                  <dd>
                    <a href={directionsUrl(outlet)} target="_blank" rel="noopener" className="hover:underline">
                      {outlet.address}
                    </a>
                    {outlet.landmark ? <span className="block text-muted">{outlet.landmark}</span> : null}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-0.5 text-muted">
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </dt>
                  <dd className="t-num">
                    {site.phones.map((p, i) => (
                      <span key={p.tel}>
                        {i > 0 ? <span className="text-muted"> · </span> : null}
                        <a href={`tel:${p.tel}`} className="underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                          {p.display}
                        </a>
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <HeadlinePrice />
            </div>
          </div>

          <Photo photo={photos.refillPoint} preload sizes="(min-width: 1024px) 34vw, 100vw" className="lg:col-span-5" />
        </div>
      </section>

      {/* ── what we do ───────────────────────────────────────────────── */}
      <section aria-labelledby="services" className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="services" className="t-h2 text-3xl md:text-[2.75rem]">
              What we do
            </h2>
            <p className="mt-5 max-w-sm text-ink-2">
              SEEGAS supplies LPG to households and businesses in Abuja. Everything below can be arranged with one WhatsApp message.
            </p>
            <Photo photo={photos.salesDesk} sizes="(min-width: 1024px) 26vw, 0px" className="mt-10 hidden max-w-sm lg:block" />
          </div>
          <ul className="border-t border-ink lg:col-span-8">
            {SERVICES.map((s) => (
              <li key={s.name} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-8">
                <h3 className="t-h3 text-lg">{s.name}</h3>
                <p className="text-ink-2">{s.detail}</p>
                <a href={whatsappLink(s.intent)} target="_blank" rel="noopener" className="link-arrow justify-self-start text-[0.9375rem]">
                  {s.action}
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── prices ───────────────────────────────────────────────────── */}
      <section aria-labelledby="prices" className="border-y border-line bg-paper py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="prices" className="t-h2 text-3xl md:text-[2.75rem]">
              Today&apos;s prices
            </h2>
            <p className="mt-5 max-w-sm text-ink-2">
              Prices come straight from our pricing system, so they&apos;re current. Refills are charged per kilogram.
            </p>
            <Link href="/prices" className="link-arrow mt-8">
              Full price list and refill costs
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <PriceTable />
          </div>
        </div>
      </section>

      {/* ── visit ────────────────────────────────────────────────────── */}
      <section aria-labelledby="visit" className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <Photo photo={photos.attendant} className="max-w-md lg:col-span-5" />
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="t-label text-muted">Refill point</p>
            <h2 id="visit" className="t-h2 mt-4 text-3xl md:text-[2.75rem]">
              Find us at NNPC Utako
            </h2>
            <dl className="mt-8 grid gap-5 border-t border-line pt-6">
              <div className="flex gap-3">
                <dt className="mt-0.5 text-muted">
                  <Pin size={18} />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  {outlet.address}
                  {outlet.landmark ? <span className="block text-muted">{outlet.landmark}</span> : null}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="mt-0.5 text-muted">
                  <Clock size={18} />
                  <span className="sr-only">Opening hours</span>
                </dt>
                <dd>Call ahead to confirm today&apos;s opening hours.</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={directionsUrl(outlet)} target="_blank" rel="noopener" className="btn btn-primary">
                Get directions
                <ArrowUpRight size={18} />
              </a>
              <a href={`tel:${outlet.phones[0]!.tel}`} className="btn btn-secondary">
                <Phone size={18} />
                Call {outlet.phones[0]!.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── safety ───────────────────────────────────────────────────── */}
      <section aria-labelledby="safety" className="border-t border-line py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="safety" className="t-h2 text-3xl md:text-[2.75rem]">
              Using gas safely at home
            </h2>
            <Link href="/safety" className="link-arrow mt-8">
              Read the full safety guide
              <ArrowRight size={16} />
            </Link>
          </div>
          <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {[
              ["Keep it upright and ventilated", "Store cylinders upright, in a well-ventilated place, away from heat and anything flammable."],
              ["Close the valve after cooking", "Turn the cylinder valve off whenever the cooker isn't in use."],
              ["Test for leaks with soapy water", "Brush soapy water over the connections. Bubbles mean a leak. Never use a flame."],
              ["Replace worn hoses", "If a hose is cracked, stiff or damaged, stop using it and have it replaced."],
            ].map(([title, body], i) => (
              <li key={title} className="border-t border-line pt-5">
                <p className="t-num text-sm font-semibold text-brand-strong">0{i + 1}</p>
                <h3 className="t-h3 mt-2 text-lg">{title}</h3>
                <p className="mt-2 text-ink-2">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="container-site mt-14">
          <div className="flex flex-col gap-3 rounded-sm border border-danger/30 bg-danger-tint p-5 text-[0.9375rem] sm:flex-row sm:items-center sm:gap-5 md:p-6">
            <p className="t-label shrink-0 text-danger">If you smell gas</p>
            <p className="text-ink">
              Turn off the cylinder valve, open doors and windows, don&apos;t touch light switches or use a flame. Leave, and call <a href="tel:112" className="font-semibold underline">112</a> if the smell doesn&apos;t clear.
            </p>
          </div>
        </div>
      </section>

      {/* ── closing CTA ──────────────────────────────────────────────── */}
      <section aria-labelledby="cta" className="bg-brand text-white">
        <div className="container-site grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:items-end">
          <h2 id="cta" className="t-display text-4xl md:text-6xl lg:col-span-7">
            Don&apos;t wait for the last flame.
          </h2>
          <div className="lg:col-span-5">
            <p className="max-w-md text-white/85">Message us when you&apos;re running low and we&apos;ll arrange your refill, at the station or at your door.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn bg-white text-ink hover:bg-brand-tint">
                <WhatsApp size={18} />
                Order on WhatsApp
              </a>
              <a href={`tel:${site.phones[0].tel}`} className="btn border-white/40 text-white hover:border-white">
                <Phone size={18} />
                {site.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
