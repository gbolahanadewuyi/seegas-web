import type { StaticImageData } from "next/image";
import attendantRefilling from "../../public/photos/attendant-refilling.jpg";
import cylinderAtRefillUnit from "../../public/photos/cylinder-at-refill-unit.jpg";
import forecourt from "../../public/photos/forecourt.jpg";
import refillPointHose from "../../public/photos/refill-point-hose.jpg";
import salesDesk from "../../public/photos/sales-desk.jpg";

/**
 * SEEGAS's own photography only. Every image here is a frame from SEEGAS's Customer Service Week
 * reel (Instagram, 9 Oct 2026), filmed at the Utako refill point. Source frames and the full
 * inventory are in docs/instagram-assets/. Frames are 720px wide, so keep them at or below
 * roughly half the page width; ask SEEGAS for originals before using one full-bleed.
 */
export interface Photo {
  src: StaticImageData;
  alt: string;
  caption: string;
}

export const photos = {
  refillPoint: {
    src: refillPointHose,
    alt: "A SEEGAS attendant connects the refill hose to a customer's cylinder in front of the branded refill unit.",
    caption: "Refilling at NNPC Utako",
  },
  attendant: {
    src: attendantRefilling,
    alt: "A SEEGAS attendant in safety gloves refilling a cylinder at the Utako refill unit.",
    caption: "Refills are weighed and filled on site",
  },
  cylinder: {
    src: cylinderAtRefillUnit,
    alt: "A blue gas cylinder beside the SEEGAS refill unit.",
    caption: "The SEEGAS refill unit, Utako",
  },
  forecourt: {
    src: forecourt,
    alt: "The SEEGAS forecourt at NNPC Utako, with the cylinder cage and SEEGAS sign.",
    caption: "Forecourt and cylinder cage, NNPC Utako",
  },
  salesDesk: {
    src: salesDesk,
    alt: "SEEGAS staff taking an order at the sales desk.",
    caption: "Orders and payments at the sales desk",
  },
} satisfies Record<string, Photo>;
