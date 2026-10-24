import type { Metadata } from "next";
import { WhatsApp } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { CylinderEstimates, PriceTable } from "@/components/Prices";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Gas prices",
  description: "Current SEEGAS cooking gas (LPG) prices in Abuja, per kilogram, with full-refill costs for common cylinder sizes.",
  alternates: { canonical: "/prices" },
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        label="Gas prices"
        title="Today's gas prices"
        lead="Cooking gas sold by the kilogram. Check the current rate and refill costs for your cylinder."
      />
      <div className="container-site grid gap-14 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <PriceTable />
          <CylinderEstimates />
        </div>
        <aside className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
          <h2 className="t-h3 text-lg">How refills are priced</h2>
          <ul className="mt-4 space-y-4 text-ink-2">
            <li>Cooking gas is sold by weight. You pay for the kilograms that go into your cylinder.</li>
            <li>Your cylinder&apos;s size is usually printed or stamped on it, for example 6kg or 12.5kg.</li>
            <li>If you need delivery, we confirm the details with you on WhatsApp.</li>
          </ul>
          <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary mt-8 w-full">
            <WhatsApp size={18} />
            Order a refill
          </a>
        </aside>
      </div>
    </>
  );
}
