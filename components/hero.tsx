"use client"

import { GooeyFilter } from "@/components/ui/gooey-filter"
import { PixelTrail } from "@/components/ui/pixel-trail"
import { AsciiVideo } from "@/components/ui/ascii-video"
import Link from "next/link"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const [showHint, setShowHint] = useState(false)

  // Simulate blinking hint after a delay
  // In a real app, we'd use useEffect with timeout, but for simplicity we'll rely on CSS animation

  return (
    <section className="relative min-h-[560px] flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* ASCII Video Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <AsciiVideo 
          src="/flowers.mp4" 
          color="rgba(123, 97, 255, 0.5)"
          fontSize={12}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-[#07090E]/50"></div>
      </div>

      {/* Gooey filter */}
      <GooeyFilter id="goo-hero" strength={6} />

      {/* Pixel trail */}
      <div style={{ filter: "url(#goo-hero)" }}>
        <PixelTrail
          pixelSize={28}
          fadeDuration={200}
          delay={600}
          pixelClassName="bg-[var(--ty-cream)]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 pointer-events-none">
        {/* Hero text with staggered fade up */}
        <div className="mb-16 fade-up fade-up-animate" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow">The Yard</p>
        </div>

        <h1 className="fade-up fade-up-animate text-5xl md:text-6xl lg:text-7xl font-[300] italic tracking-tighter mb-6 leading-tight text-balance" style={{ animationDelay: "0.3s" }}>
          We build<br />
          content systems<br />
          that endure.
        </h1>

        <p className="fade-up fade-up-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light" style={{ animationDelay: "0.5s" }}>
          The Yard is a strategic content consultancy. We partner with founders and marketing teams to bring clarity to chaos and transform ad-hoc production into sustainable editorial engines.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 fade-up fade-up-animate" style={{ animationDelay: "0.7s" }}>
          <Link
            href="#services"
            className="group flex items-center gap-3 bg-[var(--ty-accent)] text-[var(--ty-black)] px-8 py-4 rounded-full font-[500] tracking-[.07em] hover:scale-105 transition-all duration-300"
          >
            Start a project
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-3 bg-[var(--ty-warm)]/50 backdrop-blur-md border border-[var(--ty-muted)]/50 px-8 py-4 rounded-full font-[500] tracking-[.07em] hover:bg-[var(--ty-warm)] transition-all duration-300"
          >
            About Us
          </Link>
        </div>

        {/* Trusted by strip (will be moved to its own section, but leaving a placeholder for now) */}
        {/* Actually, we'll remove this from hero and create a separate TrustedBy section */}

        {/* Move your cursor hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-[var(--ty-muted)]/60 blink">
          Move your cursor
          <div className="h-1 w-1 bg-[var(--ty-accent)] rounded-full animate-blink"></div>
        </div>
      </div>

      {/* Decorative elements - optional */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 right-16 w-20 h-20 bg-[var(--ty-accent)]/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--ty-warm)]/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>
    </section>
  )
}