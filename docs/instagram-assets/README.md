# Instagram assets (reference, not yet on the site)

Collected from SEEGAS's own Instagram, [@seegas_ng](https://www.instagram.com/seegas_ng/), on
19 Oct 2026. Everything here is SEEGAS's own published material, so it passes the content rule
in the main README (no other companies' facilities). None of it is wired into the site yet. It
lives under `docs/` so nothing ships until someone picks it.

Coverage: Instagram only shows a logged-out visitor the 12 most recent posts (the account has
451) and the 4 highlight covers, so this is a partial sweep. Older posts need a logged-in session
or the files themselves.

## Photos (`photos/`)

Frames taken from the Customer Service Week reel (9 Oct 2026, `reel/DeRVacVEpRO`), shot at the
Utako refill point. Each one is **720×1279 portrait**, and the reel's small SEE GAS watermark sits
at the top centre.

| File | Shows | Notes |
| --- | --- | --- |
| `refill-hose-on-cylinder.jpg` | Hose fitted to a cylinder, branded refill unit behind | Best "refill point" shot |
| `refill-cylinder-valve.jpg` | Same scene, hose lifted | |
| `attendant-refilling.jpg` | Gloved attendant refilling, SEE GAS panel behind | Best "staff at work" shot |
| `attendant-dispenser-keypad.jpg` | Attendant at the dispenser keypad | |
| `attendant-fitting-cylinder.jpg` | Close-up of hands fitting a cylinder | |
| `cylinder-at-refill-unit.jpg` | Blue cylinder beside the refill unit | |
| `refill-unit-branding.jpg` | Logo on the side of the refill unit | Texture/detail shot |
| `forecourt-cylinder-cage.jpg` | Cylinder cage and signage on the forecourt | |
| `sales-desk.jpg` | Staff at the sales desk with a laptop | |
| `customers-at-refill-point-captioned.jpg` | Customers with cylinders | Reel caption baked in |
| `aerial-refill-point-logo-overlay.jpg` | Aerial of the site, solar canopy | Large logo overlay baked in |
| `aerial-storage-tank-logo-overlay.jpg` | Aerial of the storage tank | Large logo overlay baked in |
| `customer-service-week-cover.jpg` | Reel cover, 360×640 | Title text baked in |

## Graphics (`graphics/`)

Social posts, 512–640 px wide, with text, phone numbers and the address baked in. They're useful
as brand and tone reference but too small and text-heavy to use as site imagery directly.

| File | Notes |
| --- | --- |
| `cylinder-render-order-now.jpg` | 3D render of a branded blue cylinder. The only product shot |
| `banner-premium-gas-speedy-delivery.jpg` | Two square posts (25 Nov 2025) joined into the 1280×640 banner they form |
| `post-*.jpg` | Restaurants, last flame, myths vs facts, reliable partner, Customer Service Week, testimonial prompt |
| `highlight-icon-*.jpg` | 150 px highlight covers (delivery scooter, team, etc.) |

Flag: `post-testimonial-prompt.jpg` shows a cylinder labelled "SEE GAS Energy for Life" with a
flame mark. That isn't the SEEGAS logo, so it's probably a template mock-up. Don't reuse it.

## Fitting these to the site

The two `PhotoSlot`s are landscape (home 5:4, outlets 4:3). Cropping this portrait footage to
landscape cuts out most of each subject, so the choice is between:

1. Asking SEEGAS for the original video or photos (best: full resolution, landscape possible, no
   watermark), or
2. Switching those slots to a portrait ratio (4:5) and using `refill-hose-on-cylinder.jpg` (home)
   and `attendant-refilling.jpg` (outlets), which are 720 px wide and soft on retina screens.
