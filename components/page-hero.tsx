"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

interface PageHeroProps {
  label: string
  title: string
  description: string
  number: string
}

export function PageHero({ label, title, description, number }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-500 mb-12 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
            Back to home
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-xs font-mono text-accent">{number}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
              {label}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="md:col-span-7"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] text-balance">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="md:col-span-3"
          >
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
