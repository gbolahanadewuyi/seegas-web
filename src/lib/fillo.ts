import "server-only";
import { cacheLife } from "next/cache";

/**
 * Read-only public price list from Fillo. Contract: docs/FILLO_INTEGRATION.md.
 *
 * Runs on the server only — the browser never learns Fillo's URL, and the endpoint itself is a
 * public, unauthenticated read that returns selling prices and nothing else (no cost prices,
 * stock or customer data). Any failure degrades to "unavailable": the site never shows a price it
 * didn't just receive from Fillo.
 */

export type PriceUnit = "KG" | "LITER" | "UNIT";

export interface PriceItem {
  id: string;
  name: string;
  category: string;
  unit: PriceUnit;
  /** Naira, as a number (Fillo sends a decimal string). */
  price: number;
  /** Null when the price applies to every outlet — Fillo prices are company-wide today. */
  stationId: string | null;
}

export type PriceList =
  | { status: "ok"; currency: "NGN"; updatedAt: string; items: PriceItem[] }
  | { status: "unavailable"; reason: "not-configured" | "error" };

const UNITS: readonly PriceUnit[] = ["KG", "LITER", "UNIT"];

function parse(body: unknown): PriceList | null {
  if (!body || typeof body !== "object") return null;
  const { currency, updatedAt, items } = body as Record<string, unknown>;
  if (currency !== "NGN" || typeof updatedAt !== "string" || Number.isNaN(Date.parse(updatedAt)) || !Array.isArray(items)) return null;
  const parsed: PriceItem[] = [];
  for (const raw of items) {
    if (!raw || typeof raw !== "object") return null;
    const r = raw as Record<string, unknown>;
    const price = Number(r.price);
    if (typeof r.id !== "string" || typeof r.name !== "string" || typeof r.category !== "string") return null;
    if (!UNITS.includes(r.unit as PriceUnit) || !Number.isFinite(price) || price <= 0) return null;
    parsed.push({
      id: r.id,
      name: r.name,
      category: r.category,
      unit: r.unit as PriceUnit,
      price,
      stationId: typeof r.stationId === "string" ? r.stationId : null,
    });
  }
  return { status: "ok", currency: "NGN", updatedAt, items: parsed };
}

export async function getPriceList(): Promise<PriceList> {
  "use cache";
  // Prices move; an hour is the longest anyone should ever see a stale one.
  cacheLife({ stale: 300, revalidate: 300, expire: 3600 });

  const base = process.env.FILLO_API_URL?.replace(/\/$/, "");
  const companyId = process.env.FILLO_COMPANY_ID;
  if (!base || !companyId) return { status: "unavailable", reason: "not-configured" };

  try {
    const res = await fetch(`${base}/v1/public/companies/${encodeURIComponent(companyId)}/price-list`, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { status: "unavailable", reason: "error" };
    return parse(await res.json()) ?? { status: "unavailable", reason: "error" };
  } catch {
    return { status: "unavailable", reason: "error" };
  }
}

/** The LPG refill price per kg, if Fillo lists exactly one LPG product sold by weight. */
export function lpgPerKg(list: PriceList): PriceItem | null {
  if (list.status !== "ok") return null;
  const lpg = list.items.filter((i) => i.category === "LPG" && i.unit === "KG");
  return lpg.length === 1 ? lpg[0]! : null;
}
