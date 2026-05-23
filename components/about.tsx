"use client"

export function About() {
  return (
    <section id="about" className="py-24 bg-[var(--ty-black)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: text content */}
          <div className="space-y-6">
            <p className="eyebrow">About Us</p>
            <h2 className="text-4xl md:text-5xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-cream)] leading-tight mb-6">
              Why we exist
            </h2>
            <p className="text-[var(--ty-cream)] leading-relaxed font-[DM_Sans] font-[300]">
              We noticed a pattern: great companies were struggling to tell their stories consistently. Not for lack of ideas or talent, but for lack of underlying structure.
            </p>
            <p className="text-[var(--ty-cream)] leading-relaxed font-[DM_Sans] font-[300]">
              The Yard was founded to bridge the gap between creative ambition and strategic execution. We believe that strategy is not a luxury—it is the difference between content that fades and content that endures.
            </p>
          </div>

          {/* Right column: stats */}
          <div className="border-l-2 border-[var(--ty-muted)] pl-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b pb-2 border-[var(--ty-muted)]">
                <div className="text-[var(--ty-accent)] font-[600]">48+</div>
                <div>
                  <p className="text-[var(--ty-cream)] font-[500]">clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b pb-2 border-[var(--ty-muted)]">
                <div className="text-[var(--ty-accent)] font-[600]">2,400+</div>
                <div>
                  <p className="text-[var(--ty-cream)] font-[500]">pieces published</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[var(--ty-accent)] font-[600]">3.2×</div>
                <div>
                  <p className="text-[var(--ty-cream)] font-[500]">avg engagement lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}