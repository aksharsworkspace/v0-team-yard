"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="philosophy" className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] opacity-60 mb-12">
            Philosophy
          </p>
          
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-12 text-balance">
            &ldquo;Content without direction is expensive noise.&rdquo;
          </blockquote>

          <div className="max-w-2xl mx-auto space-y-6 opacity-80">
            <p className="text-lg leading-relaxed">
              We believe that great content begins long before the first word is written. 
              It starts with understanding—of your audience, your position, and your purpose.
            </p>
            <p className="text-lg leading-relaxed">
              Too many brands invest heavily in production while neglecting the strategic 
              foundation. The result is content that looks good but fails to compound, 
              convert, or connect.
            </p>
            <p className="text-lg leading-relaxed">
              At The Yard, we insist on clarity before execution. Strategy is not a luxury. 
              It is the difference between content that fades and content that endures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
