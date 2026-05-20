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
    <section className="py-32 px-6 bg-secondary/30 relative overflow-hidden border-t border-border/30">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-background rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Building the next <br className="hidden md:block" /> category creator?
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            We are actively looking for visionary founders who are ready to redefine industries. Let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#pitch"
              className="group flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 rounded-full font-medium hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_5px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.1)]"
            >
              Pitch Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
