import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, WhatsApp } from "@/components/icons";
import { PriceTable } from "@/components/Prices";
import { site } from "@/config/site";
import { directionsUrl, outlets } from "@/content/outlets";
import { whatsappLink, type WhatsappIntent } from "@/lib/whatsapp";

const PRODUCTS: { name: string; detail: string; intent: WhatsappIntent; action: string }[] = [
  { name: "Cooking gas", detail: "LPG refills by the kilogram, for everyday cooking at home or in a busy kitchen.", intent: "refill", action: "Order a refill" },
  { name: "Gas cylinders", detail: "Starting out or replacing a cylinder? Ask us about available sizes.", intent: "cylinder", action: "Ask about cylinders" },
  { name: "Gas accessories", detail: "Gas accessories for your cooking setup. Contact us for availability and prices.", intent: "accessories", action: "Ask about accessories" },
];

export default function Home() {
  const outlet = outlets[0]!;
  return (
    <>
      <section className="retail-hero bg-navy text-white">
        <div className="retail-hero-copy">
          <h1 className="t-display text-[2.75rem] sm:text-6xl xl:text-[5.5rem]">Cooking gas, cylinders and accessories.</h1>
          <p className="mt-6 max-w-lg text-lg text-white/75">SEEGAS supplies LPG and gas essentials for homes and businesses in Abuja.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary"><WhatsApp size={18} />Order gas</a>
            <a href="#products" className="btn border-white/45 text-white hover:bg-white/10">Explore our products<ArrowRight size={18} /></a>
          </div>
        </div>
        <div className="cylinder-art" aria-hidden="true"><div className="cylinder-illustration"><span>SEEGAS</span></div></div>
      </section>
      <section aria-labelledby="products" className="py-16 md:py-24">
        <div className="container-site">
          <h2 id="products" className="t-h2 max-w-2xl text-4xl md:text-6xl">What we sell.</h2>
          <ul className="mt-10 border-t border-line md:mt-14">
            {PRODUCTS.map((product, index) => (
              <li key={product.name} className="grid gap-4 border-b border-line py-7 md:grid-cols-[3rem_1fr_1.3fr] md:items-center md:gap-8">
                <span className="t-num text-sm font-semibold text-brand-strong" aria-hidden="true">0{index + 1}</span>
                <h3 className="t-h3 text-2xl">{product.name}</h3>
                <div><p className="max-w-lg text-ink-2">{product.detail}</p><a href={whatsappLink(product.intent)} target="_blank" rel="noopener" className="link-arrow mt-4 text-sm">{product.action}<ArrowRight size={16} /></a></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="why-seegas" className="bg-paper py-16 md:py-24">
        <div className="container-site">
          <h2 id="why-seegas" className="t-h2 text-4xl md:text-6xl">Buying from SEEGAS.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
            {[
              ["Gas sold by weight", "Refills are charged by the kilogram. We confirm the current rate and the quantity you need."],
              ["Collection or delivery", "Buy at our station or arrange delivery. We confirm delivery details with you before your order goes ahead."],
              ["Help with your gas setup", "Alongside cylinders and accessories, ask us about installation, maintenance and repair."],
            ].map(([title, detail]) => (
              <div key={title} className="border-t border-line-strong pt-6">
                <h3 className="t-h3 text-2xl">{title}</h3>
                <p className="mt-4 text-ink-2">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="customers" className="bg-navy py-16 text-white md:py-24">
        <div className="container-site">
          <h2 id="customers" className="t-h2 text-4xl md:text-6xl">For homes and businesses.</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="border-t border-navy-line pt-8">
              <h3 className="t-h3 text-3xl">Everyday cooking at home</h3>
              <p className="mt-5 max-w-lg text-lg text-navy-muted">Refill your gas, buy a cylinder or find accessories for your cooking setup.</p>
              <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary mt-8">Order a refill<ArrowRight size={18} /></a>
            </div>
            <div className="border-t border-navy-line pt-8">
              <h3 className="t-h3 text-3xl">Supply for commercial kitchens</h3>
              <p className="mt-5 max-w-lg text-lg text-navy-muted">Regular LPG supply for restaurants, hotels and commercial kitchens. Talk to us about your quantities and supply schedule.</p>
              <a href={whatsappLink("business")} target="_blank" rel="noopener" className="btn mt-8 max-w-full whitespace-normal bg-white py-3 text-navy hover:bg-brand-tint">Discuss business supply<ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="refills" className="py-16 md:py-24">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="refills" className="t-h2 text-4xl md:text-6xl">Ready for a refill?</h2>
            <p className="mt-6 max-w-lg text-lg text-ink-2">Tell us your cylinder size and how much gas you need. We&apos;ll confirm your refill total and any delivery charges.</p>
            <a href={whatsappLink("delivery")} target="_blank" rel="noopener" className="btn btn-primary mt-8">Arrange delivery<ArrowRight size={18} /></a>
          </div>
          <div className="border-l-4 border-brand bg-white p-6 md:p-10">
            <h3 className="t-h3 mb-6 text-2xl">Today&apos;s gas prices</h3>
            <PriceTable />
            <Link href="/prices" className="link-arrow mt-6">View refill costs<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="safety" className="bg-paper py-16 md:py-24">
        <div className="container-site grid gap-8 md:grid-cols-2 md:items-center md:gap-20">
          <h2 id="safety" className="t-h2 text-4xl md:text-6xl">Use gas<br />with care.</h2>
          <div>
            <p className="max-w-lg text-lg text-ink-2">Read our guidance on cylinder storage, checking your equipment and what to do if you suspect a leak.</p>
            <Link href="/safety" className="link-arrow mt-6">Read the safety guide<ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <section id="visit" aria-labelledby="contact" className="bg-brand text-white">
        <div className="container-site flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between md:py-20">
          <div>
            <h2 id="contact" className="t-h2 text-4xl md:text-5xl">Visit or contact SEEGAS.</h2>
            <address className="mt-6 not-italic">{outlet.address}<span className="block">{outlet.landmark}</span></address>
            <p className="mt-3 text-white/85">Call ahead to confirm opening hours.</p>
            <a href={directionsUrl(outlet)} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 underline underline-offset-4">Get directions<ArrowUpRight size={18} /></a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink("general")} target="_blank" rel="noopener" className="btn bg-white text-navy hover:bg-brand-tint"><WhatsApp size={18} />Talk to us</a>
            <a href={`tel:${site.phones[0].tel}`} className="btn border-white/45 text-white hover:bg-white/10"><Phone size={18} />{site.phones[0].display}</a>
          </div>
        </div>
      </section>
    </>
  );
}
