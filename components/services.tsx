"use client"

const services = [
  {
    title: "Content Strategy & Architecture",
    description: "We design comprehensive frameworks tailored to your needs—content pillars, editorial systems, and publishing rhythms that make sense for your brand.",
    deliverables: [
      "Content pillars & themes",
      "Editorial workflows",
      "Distribution blueprints",
      "Strategic roadmaps"
    ],
  },
  {
    title: "Executive Ghostwriting",
    description: "We help leaders articulate their vision, writing high-impact thought leadership content that builds industry authority.",
    deliverables: [
      "Founder narratives",
      "Opinion editorials",
      "LinkedIn strategy",
      "Keynote speeches"
    ],
  },
  {
    title: "Editorial Management",
    description: "We step in as your fractional editorial team, delivering actionable documentation and managing the end-to-end publishing process.",
    deliverables: [
      "Calendar management",
      "Writer sourcing",
      "Quality assurance",
      "Performance reporting"
    ],
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 bg-[var(--ty-cream)] border-t border-[var(--ty-muted)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-4xl md:text-5xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-black)]">
          Our Services
        </h2>
        <p className="mb-16 text-lg text-[var(--ty-muted)] max-w-xl">
          We provide more than just strategy. We step in to bridge the gap between creative ambition and strategic execution.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isLastColumn = index % 3 === 2;
            return (
              <div className={`relative p-6 ${!isLastColumn ? 'border-r border-[var(--ty-muted)]' : ''}`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="ty-svc-num flex h-9 w-9 items-center justify-center text-[var(--ty-accent)] font-[600] group">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-black)]">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-6 text-[var(--ty-black)] leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[var(--ty-black)]">
                      <span className="deliverable-bullet text-[var(--ty-accent)] font-[600]"> — </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}