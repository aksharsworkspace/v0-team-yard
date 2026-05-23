"use client"

export function TrustedBy() {
  return (
    <section id="trusted-by" className="py-12 bg-[var(--ty-warm)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <p className="text-sm font-[500] tracking-wider uppercase text-[var(--ty-muted)] mr-6">
          Trusted by
        </p>
        <div className="flex space-x-8">
          <span className="text-[var(--ty-muted)]/35 font-[Cormorant_Garamond]">Meridian</span>
          <span className="text-[var(--ty-muted)]/35 font-[Cormorant_Garamond]">Velox</span>
          <span className="text-[var(--ty-muted)]/35 font-[Cormorant_Garamond]">Aether</span>
          <span className="text-[var(--ty-muted)]/35 font-[Cormorant_Garamond]">Fortem</span>
          <span className="text-[var(--ty-muted)]/35 font-[Cormorant_Garamond]">Crestline</span>
        </div>
      </div>
    </section>
  )
}