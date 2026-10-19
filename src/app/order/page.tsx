import type { Metadata } from "next";
import { CopyNumber } from "@/components/CopyNumber";
import { ArrowRight, Phone, WhatsApp } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { displayWhatsappNumber, site } from "@/config/site";
import { outlets } from "@/content/outlets";
import { whatsappLink, type WhatsappIntent } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Order a refill",
  description: "Order a cooking gas refill from SEEGAS on WhatsApp. Collect at NNPC Utako or have it delivered in Abuja.",
  alternates: { canonical: "/order" },
};

const OTHER: { intent: WhatsappIntent; label: string }[] = [
  { intent: "delivery", label: "Have a refill delivered" },
  { intent: "cylinder", label: "Buy a new cylinder" },
  { intent: "business", label: "Regular supply for a business" },
  { intent: "installation", label: "Installation, maintenance or repair" },
];

export default function OrderPage() {
  const outlet = outlets[0]!;
  const steps = [
    { title: "Send us a message", body: "Tap the button. WhatsApp opens with a message already written, so you only need to press send." },
    { title: "Tell us what you need", body: "Your cylinder size or how much gas you want, and whether you'll collect it or need it delivered." },
    { title: "We confirm the details", body: "We reply in the chat with the price and when your gas will be ready or delivered." },
    { title: "Collect or receive", body: `Pick up at ${outlet.address.split(",")[0]}, or we bring it to the address you gave us.` },
  ];

  return (
    <>
      <PageIntro
        label="Order a refill"
        title="Order your refill on WhatsApp"
        lead="One message is all it takes. We confirm the amount, the price and the collection or delivery details with you in the chat."
      />

      <div className="container-site grid gap-14 py-14 md:py-20 lg:grid-cols-12">
        <section aria-labelledby="how" className="lg:col-span-7">
          <h2 id="how" className="t-h2 text-2xl md:text-3xl">
            How it works
          </h2>
          <ol className="mt-8 border-t border-ink">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-7 md:grid-cols-[4.5rem_1fr]">
                <span className="t-display t-num text-3xl text-brand md:text-4xl" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="t-h3 text-lg md:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-prose text-ink-2">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside aria-label="Start your order" className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-sm border border-line p-6 md:p-8 lg:sticky lg:top-28">
            <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary w-full text-lg">
              <WhatsApp size={20} />
              Order a refill on WhatsApp
            </a>
            <p className="mt-3 text-center text-sm text-muted">Opens WhatsApp with your message ready to send.</p>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-sm text-muted">Our WhatsApp number</p>
              <p className="mt-1 text-lg">
                <CopyNumber value={`+${site.whatsappNumber}`} display={displayWhatsappNumber()} />
              </p>
              <p className="mt-3 text-sm text-muted">On a computer, the button opens WhatsApp Web or the desktop app. You can also save the number and message us from your phone.</p>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-sm font-semibold">Something else?</p>
              <ul className="mt-3">
                {OTHER.map((o) => (
                  <li key={o.intent}>
                    <a href={whatsappLink(o.intent)} target="_blank" rel="noopener" className="flex items-center justify-between gap-4 border-b border-line py-3 text-[0.9375rem] hover:text-brand-strong">
                      {o.label}
                      <ArrowRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-start gap-3 text-[0.9375rem]">
              <Phone size={18} className="mt-0.5 shrink-0 text-muted" />
              <p>
                Prefer to call?{" "}
                {site.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 ? " or " : null}
                    <a href={`tel:${p.tel}`} className="link t-num">
                      {p.display}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
