# Fillo integration

The website and Fillo are separate applications. The website shows public information and sends
customers to WhatsApp; Fillo prices, takes and fulfils orders.

## 1. WhatsApp ordering — live

Every order button opens `https://wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=<message>` with a
prefilled message (see `src/lib/whatsapp.ts`). The number must be the WhatsApp Business number that
Fillo's WhatsApp integration listens on. Opening the chat does not create an order: Fillo reads the
conversation and creates the order where its bot can.

Default: `2348081829329`, the number registered for Seegas in Fillo's `WhatsappNumber` table as of
Sept 2026. **Confirm this is the number SEEGAS wants customers to use** — SEEGAS's Instagram links to
a different WhatsApp short link (`wa.me/message/RV2B54QGDUIHD1`), which may be a separate account.

## 2. Public price list — contract, not yet implemented in Fillo

Fillo has no public pricing endpoint today (`/v1/public/*` covers only branding, registration,
invites and the WhatsApp webhook). The website is built against the contract below and shows an
honest "ask us for today's price" state until it exists.

```
GET {FILLO_API_URL}/v1/public/companies/{companyId}/price-list
Auth:    none (public, read-only)
Cache:   Cache-Control: public, max-age=60
```

`200 OK`

```json
{
  "currency": "NGN",
  "updatedAt": "2026-10-19T09:15:00.000Z",
  "items": [
    { "id": "prd_…", "name": "Cooking gas (LPG) refill", "category": "LPG", "unit": "KG", "price": "1150.00", "stationId": null }
  ]
}
```

| Field | Source in Fillo | Notes |
| --- | --- | --- |
| `items[]` | `Product` where `companyId = :companyId`, `isActive`, `deletedAt IS NULL` | Opt-in flag recommended (e.g. `Product.showOnWebsite`) so internal SKUs never appear by accident. |
| `name`, `category`, `unit` | `Product.name`, `.category`, `.unit` | `unit` is `KG`, `LITER` or `UNIT`. |
| `price` | `Product.sellingPrice` | Decimal string, naira. **Never include `purchasePrice`.** |
| `stationId` | always `null` today | Prices are company-wide in Fillo. Reserved for per-outlet prices later. |
| `updatedAt` | `max(Product.updatedAt)` over the listed items | Ideally a dedicated `priceUpdatedAt`, since `updatedAt` also moves on non-price edits. |

Requirements on the Fillo side:

- Returns only the fields above. No cost prices, stock levels, customers or internal IDs beyond the product id.
- `404` for an unknown or suspended company; never reveal whether a company exists in any other way.
- Rate-limited like the other `/public` routes.

Website behaviour (`src/lib/fillo.ts`):

- Fetched server-side only; the browser never sees `FILLO_API_URL`.
- Cached for 5 minutes (stale at most 1 hour) via `use cache` + `cacheLife`.
- Any error, timeout (5 s) or response that doesn't match the contract → "unavailable" state. The
  site never shows a price it didn't just receive from Fillo.
- The per-cylinder refill table is derived from the single `LPG`/`KG` item; if there isn't exactly
  one, the table is hidden.

## 3. Outlets — local content

Fillo's `Station` has name, address and phone only (no hours, coordinates or services), so outlets
live in `src/content/outlets.ts`. Add an outlet by appending an entry. If Fillo later exposes public
station data with hours, swap the source without changing the pages.
