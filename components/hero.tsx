"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="h-px w-8 bg-accent" />
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Content Strategy Studio
          </p>
          <span className="h-px w-8 bg-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] mb-10 text-balance text-center"
        >
          Strategy first.
          <br />
          <span className="italic text-accent">Content</span> second.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed text-pretty text-center"
        >
          The Yard is a content strategy studio that helps brands figure out
          what to say, why it matters, and how to turn it into a long-term
          content engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            View Services
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/discovery"
            className="group flex items-center gap-2 border border-border px-7 py-3.5 rounded-md hover:border-accent hover:text-accent transition-all duration-500"
          >
            Book a Discovery Call
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
          className="mt-24 grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-border/60"
        >
          {[
            { k: "01", v: "Research" },
            { k: "02", v: "Structure" },
            { k: "03", v: "Systems" },
          ].map((item) => (
            <div key={item.k} className="text-center">
              <p className="text-xs font-mono text-accent mb-1">{item.k}</p>
              <p className="text-sm text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
