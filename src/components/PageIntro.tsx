export function PageIntro({ label, title, lead, children }: { label: string; title: string; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="bg-navy text-white" aria-label={label}>
      <div className="container-site py-12 md:py-20">
        <h1 className="t-display max-w-4xl text-[2.5rem] sm:text-5xl lg:text-7xl">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg text-white/75">{lead}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
