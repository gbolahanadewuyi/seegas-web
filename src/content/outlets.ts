/**
 * Outlet directory. Kept as local content on purpose: Fillo's Station model holds name/address/
 * phone only (no hours, coordinates or services), so it can't yet be the source for this page.
 * Add an outlet by appending an entry — the pages render whatever is here.
 *
 * Only add facts SEEGAS has confirmed. Unknown fields stay null and the UI says "call to confirm".
 */

export type OutletService = "refill" | "cylinders" | "delivery" | "installation";

export interface Outlet {
  slug: string;
  name: string;
  area: string;
  city: string;
  /** As SEEGAS publishes it, landmark included. */
  address: string;
  landmark: string | null;
  phones: { display: string; tel: string }[];
  /** Null until SEEGAS confirms — never estimate opening hours. */
  hours: { days: string; time: string }[] | null;
  services: OutletService[];
  /** Free-text Google Maps query; replace with a place ID or coordinates once verified on site. */
  mapsQuery: string;
}

export const SERVICE_LABEL: Record<OutletService, string> = {
  refill: "Cylinder refills",
  cylinders: "New cylinders",
  delivery: "Delivery",
  installation: "Installation and repair",
};

export const outlets: Outlet[] = [
  {
    slug: "utako",
    name: "SEEGAS Utako",
    area: "Utako",
    city: "Abuja",
    address: "NNPC Utako station, Utako, Abuja",
    landmark: "After NNPC Medical Centre",
    phones: [
      { display: "0902 268 7897", tel: "+2349022687897" },
      { display: "0906 203 9996", tel: "+2349062039996" },
    ],
    hours: null,
    services: ["refill", "cylinders", "delivery", "installation"],
    mapsQuery: "NNPC Filling Station Utako Abuja",
  },
];

export function directionsUrl(outlet: Outlet): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.mapsQuery)}`;
}
