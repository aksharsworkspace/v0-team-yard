"use client"

export function CTA() {
  return (
    <section id="cta" className="py-16 bg-[var(--ty-black)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow">Ready to begin?</p>
        <h2 className="text-4xl md:text-5xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-cream)] leading-tight mb-6">
          Book a discovery call
        </h2>
        <p className="text-lg text-[var(--ty-muted)] max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can build a content system that endures for your brand.
        </p>
        <button className="mt-8 inline-flex items-center gap-3 bg-[var(--ty-accent)] text-[var(--ty-black)] px-8 py-4 rounded-full font-[500] tracking-[.07em] hover:scale-105 transition-all duration-300">
          Book a discovery call
        </button>
      </div>
    </section>
  )
}