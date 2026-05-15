"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const sections = [
  {
    number: "01",
    title: "About",
    href: "/about",
    description:
      "Clarity before creation. Why most brands publish without direction, and how we bring strategic structure to content.",
    meta: "The studio",
  },
  {
    number: "02",
    title: "Services",
    href: "/services",
    description:
      "Three engagement models — The Audit, The Blueprint, and The Retainer — built around different stages of content maturity.",
    meta: "How we engage",
  },
  {
    number: "03",
    title: "Process",
    href: "/process",
    description:
      "A four-stage approach to strategy: Listen, Analyze, Structure, Guide. Built on research, designed for execution.",
    meta: "How we work",
  },
]

export function SectionsIndex() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-28 md:py-36 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-20 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Index
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-2xl text-balance">
              Explore the studio.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            03 / Sections
          </p>
        </motion.div>

        <ul className="border-t border-border/60">
          {sections.map((section, i) => (
            <motion.li
              key={section.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.1 }}
              className="border-b border-border/60"
            >
              <Link
                href={section.href}
                className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 items-center transition-colors duration-500 hover:bg-accent-soft/40"
              >
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-accent">
                    {section.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-serif transition-colors duration-500 group-hover:text-accent">
                    {section.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {section.description}
                  </p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:inline">
                    {section.meta}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
