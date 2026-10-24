import { site } from "@/config/site";

/**
 * Opening WhatsApp does not create an order by itself — Fillo's WhatsApp integration reads the
 * conversation and creates the order where it can. These messages only state the customer's
 * intent clearly so the first reply can be useful.
 */
export const whatsappIntents = {
  refill: "Hello SEEGAS, I'd like to order an LPG refill.",
  delivery: "Hello SEEGAS, I'd like an LPG refill delivered to me.",
  cylinder: "Hello SEEGAS, I'd like to buy a gas cylinder.",
  accessories: "Hello SEEGAS, I'd like to ask about available gas accessories and prices.",
  business: "Hello SEEGAS, I'd like to discuss a regular gas supply for my business.",
  installation: "Hello SEEGAS, I need help with a gas installation, maintenance or repair.",
  price: "Hello SEEGAS, what is today's price for an LPG refill?",
  general: "Hello SEEGAS, I have a question.",
} as const;

export type WhatsappIntent = keyof typeof whatsappIntents;

export function whatsappLink(intent: WhatsappIntent = "refill"): string {
  if (!site.whatsappNumber) return "/contact";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappIntents[intent])}`;
}
