import type { PriceUnit } from "@/lib/fillo";

const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

export function formatNaira(value: number): string {
  return naira.format(value).replace("NGN", "₦").replace(/\s/g, "");
}

export const UNIT_LABEL: Record<PriceUnit, string> = { KG: "per kg", LITER: "per litre", UNIT: "each" };

export function formatUpdated(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Lagos",
  }).format(new Date(iso));
}
