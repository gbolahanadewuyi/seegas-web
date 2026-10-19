/**
 * Reserved space for an approved SEEGAS photograph. Deliberately labelled as pending — the site
 * must never pass off another company's facilities, staff or equipment as SEEGAS's own.
 * Replace with next/image once real photography is supplied; the aspect ratio is already set.
 */
export function PhotoSlot({ subject, ratio = "4 / 5", className = "" }: { subject: string; ratio?: string; className?: string }) {
  return (
    <figure
      className={`relative overflow-hidden rounded-sm bg-navy text-navy-muted ${className}`}
      style={{ aspectRatio: ratio }}
      aria-label={`Photograph pending: ${subject}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden="true">
        <defs>
          <pattern id="photo-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#photo-grid)" />
      </svg>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span>
          <span className="t-label block text-[0.6875rem]">Photograph pending</span>
          <span className="mt-1 block text-sm text-white/80">{subject}</span>
        </span>
      </figcaption>
    </figure>
  );
}
