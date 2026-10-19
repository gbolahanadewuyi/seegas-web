import type { Metadata } from "next";
import Link from "next/link";
import { Alert, ArrowUpRight } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { EMERGENCY_STEPS, SAFETY_SECTIONS, SOURCES } from "@/content/safety";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "LPG safety",
  description: "Practical cooking gas safety: what to do if you smell gas, how to store cylinders, check hoses and regulators, and test for leaks.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <>
      <PageIntro
        label="Safety"
        title="Using cooking gas safely"
        lead="LPG is safe when it's stored, connected and used properly. Here is what to check at home, and what to do if something goes wrong."
      />

      <section aria-labelledby="emergency" className="border-b border-danger/20 bg-danger-tint">
        <div className="container-site grid gap-8 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-2 text-danger">
              <Alert size={20} />
              <span className="t-label">Emergency</span>
            </p>
            <h2 id="emergency" className="t-h2 mt-4 text-3xl md:text-4xl">
              If you smell gas
            </h2>
            <a href="tel:112" className="btn mt-6 bg-danger text-white hover:bg-[#931c13]">
              Call 112
            </a>
          </div>
          <ol className="grid gap-4 lg:col-span-8">
            {EMERGENCY_STEPS.map((step, i) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-danger/15 pb-4 last:border-0">
                <span className="t-num font-semibold text-danger">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="container-site grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <ul className="sticky top-28 space-y-1 border-l border-line">
            {SAFETY_SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.9375rem] text-ink-2 hover:border-ink hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-8 lg:col-start-5">
          {SAFETY_SECTIONS.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="border-t border-ink py-10 first:pt-10">
              <h2 id={`${s.id}-title`} className="t-h2 text-2xl md:text-3xl">
                {s.title}
              </h2>
              {s.intro ? <p className="mt-4 max-w-prose text-ink-2">{s.intro}</p> : null}
              <ul className="mt-6 max-w-prose space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-brand">
                    {p}
                  </li>
                ))}
              </ul>
              {s.id === "hoses" || s.id === "leaks" ? (
                <p className="mt-6 text-[0.9375rem] text-ink-2">
                  Need a hose, regulator or connection looked at?{" "}
                  <a href={whatsappLink("installation")} target="_blank" rel="noopener" className="link">
                    Ask us about a repair
                  </a>
                  .
                </p>
              ) : null}
            </section>
          ))}

          <section aria-labelledby="sources" className="border-t border-line pt-8 text-sm text-muted">
            <h2 id="sources" className="t-label">
              Sources
            </h2>
            <p className="mt-3 max-w-prose">
              This guide is general information based on published consumer guidance. It isn&apos;t a substitute for an inspection by a qualified gas technician.
            </p>
            <ul className="mt-3 space-y-1">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-ink">
                    {s.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/contact" className="link">
                Questions? Contact us
              </Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
