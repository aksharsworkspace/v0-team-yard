"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              Clarity before creation
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most brands create content without structure or strategic clarity. 
              They publish because they feel they should, not because they have 
              something meaningful to say.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Yard exists to bring direction. We help brands develop research-backed 
              content strategies, editorial systems, and publishing frameworks—before 
              a single piece of content is created.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are not a content creation agency. We are your strategic partner 
              in building a content engine that compounds over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
