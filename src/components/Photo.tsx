import Image from "next/image";
import type { Photo as PhotoData } from "@/content/photos";

/**
 * A SEEGAS photograph with a short credit-style caption. Fixed 4:5 frame because all current
 * photography comes from portrait video; `sizes` caps the request at the 720px source.
 */
export function Photo({
  photo,
  className = "",
  preload = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  photo: PhotoData;
  className?: string;
  preload?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
