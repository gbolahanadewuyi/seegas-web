"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Close, Menu, Phone, WhatsApp } from "./icons";
import { NAV } from "./nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center gap-6 md:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="SEEGAS home">
          <Image src="/brand/seegas-lockup.png" alt="SEEGAS" width={1080} height={338} preload className="h-8 w-auto md:h-9" />
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-sm px-3 py-2 text-[0.9375rem] font-medium text-ink-2 transition-colors hover:text-ink ${active ? "text-ink after:absolute after:inset-x-3 after:-bottom-[1.1rem] after:h-0.5 after:bg-brand" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary btn-sm ml-auto hidden sm:inline-flex lg:ml-2">
          <WhatsApp size={18} />
          Order on WhatsApp
        </a>

        <button
          type="button"
          className="-mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink sm:ml-0 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-line bg-white lg:hidden">
        <nav aria-label="Main" className="container-site py-4">
          <ul>
            <li>
              <Link href="/" className="block border-b border-line py-4 t-h3 text-2xl" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="block border-b border-line py-4 t-h3 text-2xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href={whatsappLink("refill")} target="_blank" rel="noopener" className="btn btn-primary">
              <WhatsApp size={18} />
              Order on WhatsApp
            </a>
            <a href={`tel:${site.phones[0].tel}`} className="btn btn-secondary">
              <Phone size={18} />
              Call {site.phones[0].display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
