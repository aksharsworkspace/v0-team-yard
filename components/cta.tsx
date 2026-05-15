"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const ease = [0.22, 1, 0.36, 1] as const

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 md:py-40 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
            Work with us
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8 text-balance">
            Ready to build a content engine that lasts?
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-pretty">
            We work with founders and brand leaders who understand that
            strategic clarity is the foundation of great content. Let&apos;s
            start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="mailto:hello@theyard.studio"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-500"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:hello@theyard.studio"
              className="text-muted-foreground hover:text-accent transition-colors duration-500 underline-offset-4 hover:underline"
            >
              hello@theyard.studio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
