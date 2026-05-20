"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-primary-gradient bg-[length:200%_200%]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
            The Yard
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
          >
            We build
            <br />
            content systems
            <br />
            that endure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty font-light"
          >
            The Yard is a strategic content consultancy. We partner with founders and marketing teams to bring clarity to chaos and transform ad-hoc production into sustainable editorial engines.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link
            href="#portfolio"
            className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_40px_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_12px_rgba(255,255,255,0.2)]"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-3 bg-secondary/50 backdrop-blur-md border border-border/50 px-8 py-4 rounded-full font-medium hover:bg-secondary transition-all duration-300"
          >
            Pitch Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center justify-center gap-6 border-t border-border/50 pt-8"
        >
          <p className="text-sm text-muted-foreground">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder trust indicator logos */}
            <div className="text-lg font-medium tracking-widest uppercase text-muted-foreground">Placeholder</div>
            <div className="text-lg font-medium tracking-widest uppercase text-muted-foreground">Placeholder</div>
            <div className="text-lg font-medium tracking-widest uppercase text-muted-foreground">Placeholder</div>
            <div className="text-lg font-medium tracking-widest uppercase text-muted-foreground">Placeholder</div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-16 right-16 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  )
}
