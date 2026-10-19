/**
 * Household LPG safety guidance. Every point is mainstream consumer guidance published by gas
 * safety regulators (see SOURCES). Keep instructions conservative: when in doubt, the advice is
 * "stop using it and get it checked", never a workaround.
 */

export interface SafetySection {
  id: string;
  title: string;
  intro?: string;
  points: string[];
}

export const EMERGENCY_STEPS = [
  "Don't switch lights or appliances on or off, and don't strike a match or lighter. Any spark can ignite gas.",
  "If it's safe to reach, turn off the cylinder valve and the cooker knobs.",
  "Open doors and windows. LPG is heavier than air and settles low, so ventilate at floor level too.",
  "Get everyone out and keep people away from the area.",
  "Call 112 for the emergency services if the smell is strong or doesn't clear.",
  "Don't use the gas again until the leak has been found and fixed.",
];

export const SAFETY_SECTIONS: SafetySection[] = [
  {
    id: "storage",
    title: "Storing cylinders",
    points: [
      "Keep cylinders upright at all times.",
      "Store them in a well-ventilated place, ideally outdoors, away from heat, flames and direct sources of sparks.",
      "Keep cylinders away from petrol, kerosene, aerosols and other flammable items.",
      "Close the cylinder valve whenever the gas isn't in use, including spare and empty cylinders.",
      "Never store cylinders in a basement or below ground level, where leaking gas can collect.",
    ],
  },
  {
    id: "handling",
    title: "Handling and transport",
    points: [
      "Carry cylinders upright and secured so they can't roll or fall. Don't drop or throw them.",
      "Don't leave cylinders in a parked vehicle longer than necessary.",
      "Never tamper with the cylinder valve, safety valve or other fittings.",
      "Don't use or refill a cylinder that is dented, rusted or damaged. Bring it to us and we'll advise you.",
      "If a valve doesn't open and close smoothly, stop using the cylinder and contact your supplier.",
    ],
  },
  {
    id: "hoses",
    title: "Hoses and regulators",
    points: [
      "Use a regulator and hose made for LPG and suited to your cylinder and cooker.",
      "Check the hose regularly. If it is cracked, stiff, swollen or damaged, stop using it and have it replaced.",
      "Keep the hose away from hot surfaces, and don't let it run behind or under the cooker.",
      "Turn off the cylinder valve before disconnecting the regulator.",
      "If you're unsure about a connection, turn the gas off and have it checked by a qualified gas technician.",
    ],
  },
  {
    id: "leaks",
    title: "Checking for leaks",
    intro: "LPG has a smell added to it so leaks can be noticed. If you smell gas, follow the emergency steps above. To check connections:",
    points: [
      "Mix washing-up liquid with water.",
      "With the cylinder valve open and the cooker off, brush or spray the soapy water over the valve, regulator and hose connections.",
      "Watch for bubbles. Growing bubbles mean gas is escaping.",
      "If you find a leak, turn off the cylinder valve and don't use the gas until it has been repaired.",
      "Never use a flame to look for a leak.",
    ],
  },
  {
    id: "kitchen",
    title: "In the kitchen",
    points: [
      "Keep the kitchen ventilated while you cook.",
      "Don't leave cooking unattended, and keep children away from the cylinder and controls.",
      "Turn off the cylinder valve after cooking, not just the cooker knobs.",
      "If a burner doesn't light, turn it off and let the gas clear before trying again.",
    ],
  },
  {
    id: "buying",
    title: "Buying gas",
    points: [
      "Buy LPG from licensed retailers. In Nigeria, LPG retail outlets are licensed by the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA).",
      "Check your cylinder when you collect it. Report any damage, smell of gas or stiff valve before you leave.",
    ],
  },
];

export const SOURCES = [
  { label: "NSW Government — LPG cylinder safety at home", href: "https://www.nsw.gov.au/housing-and-construction/social-affordable/public-housing-tenants/health-and-safety-at-home/lpg-cylinder-safety-at-home" },
  { label: "Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA)", href: "https://www.nmdpra.gov.ng/" },
];
