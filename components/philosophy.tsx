"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease = [0.22, 1, 0.36, 1] as const

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-40 px-6 bg-primary text-primary-foreground overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs uppercase tracking-[0.25em] opacity-70">
              Philosophy
            </p>
            <span className="h-px w-8 bg-accent" />
          </div>

          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-14 text-balance">
            <span className="text-accent">&ldquo;</span>Content without
            direction is{" "}
            <span className="italic">expensive noise.</span>
            <span className="text-accent">&rdquo;</span>
          </blockquote>

          <div className="max-w-2xl mx-auto space-y-6 opacity-80">
            <p className="text-lg leading-relaxed">
              We believe that great content begins long before the first word is
              written. It starts with understanding — of your audience, your
              position, and your purpose.
            </p>
            <p className="text-lg leading-relaxed">
              Too many brands invest heavily in production while neglecting the
              strategic foundation. The result is content that looks good but
              fails to compound, convert, or connect.
            </p>
            <p className="text-lg leading-relaxed">
              At The Yard, we insist on clarity before execution. Strategy is
              not a luxury. It is the difference between content that fades and
              content that endures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
