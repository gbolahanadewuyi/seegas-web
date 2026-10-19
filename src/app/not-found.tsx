import Link from "next/link";
import { WhatsApp } from "@/components/icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="container-site py-24 md:py-36">
      <p className="t-label text-brand-strong">Page not found</p>
      <h1 className="t-display mt-5 max-w-3xl text-5xl md:text-7xl">We couldn&apos;t find that page.</h1>
      <p className="t-lead mt-6 max-w-xl">The link may be out of date. Here&apos;s where most people are headed:</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary">
          <WhatsApp size={18} />
          Order a refill
        </a>
        <Link href="/prices" className="btn btn-secondary">
          Gas prices
        </Link>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </div>
    </section>
  );
}
