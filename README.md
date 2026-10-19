# SEEGAS website

Public website for SEEGAS, an LPG (cooking gas) retailer in Abuja. Next.js 16 (App Router, Cache
Components), TypeScript, Tailwind CSS 4.

## Run

```bash
cp .env.example .env.local
npm install
npm run dev -- -p 3011
```

`npm run lint`, `npx tsc --noEmit` and `npm run build` must pass before deploying.

## Where things live

| What | Where |
| --- | --- |
| Business facts (phones, WhatsApp, social) | `src/config/site.ts` |
| Outlets | `src/content/outlets.ts` |
| Safety guidance and sources | `src/content/safety.ts` |
| WhatsApp messages and links | `src/lib/whatsapp.ts` |
| Fillo price list client | `src/lib/fillo.ts`, contract in `docs/FILLO_INTEGRATION.md` |
| Design tokens and type | `src/app/globals.css` |

## Content rules

Only publish facts SEEGAS has confirmed. Unknown details (opening hours, email) stay `null` and the
UI asks customers to call or message instead. Never show a price that didn't come from Fillo.
Photography slots (`PhotoSlot`) are labelled "Photograph pending" until SEEGAS supplies its own
images — don't fill them with stock photos of other companies' facilities.

## Still needed from SEEGAS

- Confirm the WhatsApp number customers should use (see `docs/FILLO_INTEGRATION.md`).
- Opening hours for the Utako refill point.
- A pinned Google Maps location (the directions link currently searches for the station).
- Photographs: the refill point, cylinders, staff at work.
- Email address, if they want one listed.
