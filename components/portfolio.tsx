"use client"

const workExamples = [
  {
    id: 1,
    title: "FinTech Brand Content System",
    client: "BlockChain Solutions Inc.",
    industry: "FinTech",
    image: "/placeholder.svg",
    overview: "Built a comprehensive editorial framework for a blockchain infrastructure company, including technical documentation, thought leadership series, and investor communications.",
    results: [
      "40% increase in organic traffic",
      "3x growth in qualified leads",
      "Established industry authority in 6 months"
    ],
    services: ["Content Strategy", "Technical Writing", "Thought Leadership"],
  },
  {
    id: 2,
    title: "SaaS Platform Editorial Operations",
    client: "Workflow Automation Co.",
    industry: "B2B SaaS",
    image: "/placeholder.svg",
    overview: "Implemented end-to-end content operations for a productivity software company, creating scalable systems for blog production, case studies, and release communications.",
    results: [
      "Published 150+ pieces in first year",
      "Reduced production time by 60%",
      "Improved conversion rates by 2.3x"
    ],
    services": ["Editorial Management", "Content Operations", "Process Design"],
  },
  {
    id: 3,
    title: "Executive Personal Brand Development",
    client: "CEO of AI Startup",
    industry: "Artificial Intelligence",
    image: "/placeholder.svg",
    overview: "Developed a thought leadership platform for a founder, including LinkedIn strategy, speaking abstracts, and long-form essays that positioned them as an industry voice.",
    results: [
      "50k+ LinkedIn followers in 8 months",
      "Featured in TechCrunch and Wired",
      "Secured 3 major speaking invitations"
    ],
    services": ["Ghostwriting", "Personal Branding", "Content Strategy"],
  }
]

export function Portfolio() {
  return (
    <section id="work" className="py-16 bg-[var(--ty-cream)] border-t border-[var(--ty-muted)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-4xl md:text-5xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-black)]">
          Our Work
        </h2>
        <p className="mb-16 text-lg text-[var(--ty-muted)] max-w-xl">
          We partner with forward-thinking companies to build content systems that endure—strategic frameworks that transform ambition into authority.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {workExamples.map((work, index) => {
            const isLastColumn = index % 3 === 2;
            return (
              <div className={`relative p-6 ${!isLastColumn ? 'border-r border-[var(--ty-muted)]' : ''}`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center text-[var(--ty-accent)] font-[600]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-black)]">
                    {work.title}
                  </h3>
                </div>
                <p className="mb-6 text-[var(--ty-black)] leading-relaxed">
                  {work.overview}
                </p>
                <ul className="space-y-3">
                  {work.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[var(--ty-black)]">
                      <span className="text-[var(--ty-accent)] font-[600]"> — </span>
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-[var(--ty-muted)]/20">
                  <p className="text-[var(--ty-muted)] text-sm font-[DM_Sans] font-[400]">
                    Services: {work.services.join(', ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}