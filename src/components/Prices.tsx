import { getPriceList, lpgPerKg, type PriceList } from "@/lib/fillo";
import { formatNaira, formatUpdated, UNIT_LABEL } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsApp } from "./icons";

/** Common Nigerian household and commercial cylinder sizes. */
export const CYLINDER_SIZES = [3, 5, 6, 12.5, 25, 50] as const;

function Updated({ list, tone = "light" }: { list: Extract<PriceList, { status: "ok" }>; tone?: "light" | "dark" }) {
  return (
    <p className={`flex items-baseline gap-2 text-sm ${tone === "dark" ? "text-navy-muted" : "text-muted"}`}>
      <span className="inline-block h-2 w-2 shrink-0 translate-y-[-1px] rounded-full bg-[#2fbf71]" aria-hidden="true" />
      <span>
        Live price · updated <time dateTime={list.updatedAt}>{formatUpdated(list.updatedAt)}</time>
      </span>
    </p>
  );
}

export function PricesUnavailable({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`rounded-sm border p-6 md:p-8 ${dark ? "border-navy-line" : "border-line bg-paper"}`}>
      <p className="t-h3 text-xl">Today&apos;s prices aren&apos;t showing right now</p>
      <p className={`mt-2 max-w-prose ${dark ? "text-navy-muted" : "text-ink-2"}`}>
        Gas prices change often, and we only show a price when it comes straight from our pricing system. Send us a message and we&apos;ll tell you today&apos;s price per kg.
      </p>
      <a href={whatsappLink("price")} target="_blank" rel="noopener" className={`btn mt-6 ${dark ? "btn-on-dark" : "btn-secondary"}`}>
        <WhatsApp size={18} />
        Ask for today&apos;s price
      </a>
    </div>
  );
}

/** Compact "headline" price used in the home hero panel. */
export async function HeadlinePrice() {
  const list = await getPriceList();
  const lpg = lpgPerKg(list);
  if (list.status !== "ok" || !lpg) {
    return (
      <div>
        <p className="t-label text-navy-muted">Today&apos;s refill price</p>
        <p className="mt-3 text-lg leading-snug">Ask us on WhatsApp for today&apos;s price per kg.</p>
      </div>
    );
  }
  return (
    <div>
      <p className="t-label text-navy-muted">Today&apos;s refill price</p>
      <p className="mt-2 flex items-baseline gap-2">
        <span className="t-display t-num text-5xl md:text-6xl">{formatNaira(lpg.price)}</span>
        <span className="text-navy-muted">per kg</span>
      </p>
      <div className="mt-3">
        <Updated list={list} tone="dark" />
      </div>
    </div>
  );
}

export async function PriceTable() {
  const list = await getPriceList();
  if (list.status !== "ok" || list.items.length === 0) return <PricesUnavailable />;
  return (
    <div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Current SEEGAS prices</caption>
        <thead>
          <tr className="border-b border-ink">
            <th scope="col" className="t-label py-3 pr-4 text-muted">
              Product
            </th>
            <th scope="col" className="t-label py-3 pl-4 text-right text-muted">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {list.items.map((item) => (
            <tr key={item.id} className="border-b border-line">
              <th scope="row" className="py-5 pr-4 align-baseline font-semibold">
                {item.name}
              </th>
              <td className="py-5 pl-4 text-right align-baseline">
                <span className="t-h3 t-num text-xl md:text-2xl">{formatNaira(item.price)}</span>
                <span className="ml-2 text-sm text-muted">{UNIT_LABEL[item.unit]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Updated list={list} />
      </div>
    </div>
  );
}

/** Full-cylinder refill totals, derived from the live per-kg price — never shown without it. */
export async function CylinderEstimates() {
  const list = await getPriceList();
  const lpg = lpgPerKg(list);
  if (!lpg) return null;
  return (
    <section aria-labelledby="estimates" className="mt-16">
      <h2 id="estimates" className="t-h2 text-2xl md:text-3xl">
        What a full refill costs
      </h2>
      <p className="mt-3 max-w-prose text-ink-2">
        Refills are charged by weight, so the total depends on your cylinder. At today&apos;s {formatNaira(lpg.price)} per kg:
      </p>
      <ul className="mt-8 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-6">
        {CYLINDER_SIZES.map((kg) => (
          <li key={kg} className="border-b border-r border-line p-5">
            <p className="t-label text-muted">{kg} kg</p>
            <p className="t-h3 t-num mt-2 text-xl">{formatNaira(Math.round(lpg.price * kg))}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Totals are for a full refill from empty and are rounded to the nearest naira. If you need delivery, we confirm the details with you on WhatsApp.
      </p>
    </section>
  );
}
