"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6 text-balance">
            Ready to build a content engine that lasts?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We work with founders and brand leaders who understand that 
            strategic clarity is the foundation of great content. 
            Let&apos;s start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:hello@theyard.studio"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-all"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="mailto:hello@theyard.studio"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@theyard.studio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
