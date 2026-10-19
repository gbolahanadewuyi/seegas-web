export function PageIntro({ label, title, lead, children }: { label: string; title: string; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line">
      <div className="container-site py-12 md:py-20">
        <p className="t-label text-brand-strong">{label}</p>
        <h1 className="t-display mt-5 max-w-4xl text-[2.5rem] sm:text-5xl lg:text-7xl">{title}</h1>
        {lead ? <p className="t-lead mt-6 max-w-2xl">{lead}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
