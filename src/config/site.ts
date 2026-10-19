/**
 * Business facts the site is allowed to state. Everything here was confirmed from SEEGAS's own
 * published material (Instagram, Oct 2026). Leave a field null rather than guessing — the UI
 * renders an honest "ask us" state for anything unknown (opening hours, email).
 */

const digits = (value: string) => value.replace(/\D/g, "");

/** International format without "+", as wa.me expects. Must be the Fillo-connected business number. */
const whatsappNumber = digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348081829329");

export const site = {
  name: "SEEGAS",
  legalName: "SEEGAS",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.seegas.com.ng").replace(/\/$/, ""),
  description:
    "Cooking gas (LPG) refills, cylinder sales and delivery in Abuja, for homes, restaurants and commercial kitchens. Order on WhatsApp or visit our refill point at NNPC Utako.",
  city: "Abuja",
  whatsappNumber,
  phones: [
    { display: "0902 268 7897", tel: "+2349022687897" },
    { display: "0906 203 9996", tel: "+2349062039996" },
  ],
  email: null as string | null,
  social: {
    instagram: "https://www.instagram.com/seegas_ng/",
  },
} as const;

/** "0808 182 9329" — Nigerian local format for display next to WhatsApp buttons. */
export function displayWhatsappNumber(): string {
  const n = site.whatsappNumber;
  const local = n.startsWith("234") ? `0${n.slice(3)}` : n;
  return local.replace(/^(\d{4})(\d{3})(\d+)$/, "$1 $2 $3");
}
