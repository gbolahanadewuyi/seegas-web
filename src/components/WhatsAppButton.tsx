import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/config/site";
import { WhatsApp } from "./icons";

/**
 * Persistent route to WhatsApp on phones (from sm up the sticky header carries the same action).
 * Icon-only so it covers as little content as possible; no popup, no motion. Sits above the iOS
 * home indicator, and the footer reserves matching space so it never hides the last line.
 */
export function WhatsAppButton() {
  if (!site.whatsappNumber) return null;
  return (
    <a
      href={whatsappLink("refill")}
      target="_blank"
      rel="noopener"
      aria-label="Order a refill on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f7a40] text-white shadow-[0_6px_20px_-6px_rgba(12,29,49,0.5)] transition-colors hover:bg-[#0c6535] sm:hidden"
    >
      <WhatsApp size={28} />
    </a>
  );
}
