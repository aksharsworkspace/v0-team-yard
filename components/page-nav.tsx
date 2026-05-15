"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

interface PageNavProps {
  prev?: { href: string; label: string; title: string }
  next?: { href: string; label: string; title: string }
}

export function PageNav({ prev, next }: PageNavProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-24 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {prev ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              href={prev.href}
              className="group block p-8 rounded-md border border-border/60 hover:border-accent transition-all duration-500 hover:bg-accent-soft/30"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {prev.label}
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-serif transition-colors duration-500 group-hover:text-accent">
                  {prev.title}
                </h3>
                <ArrowRight className="h-5 w-5 rotate-180 text-muted-foreground transition-all duration-500 group-hover:text-accent group-hover:-translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}

        {next && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <Link
              href={next.href}
              className="group block p-8 rounded-md border border-border/60 hover:border-accent transition-all duration-500 hover:bg-accent-soft/30 md:text-right"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {next.label}
              </p>
              <div className="flex items-center justify-between md:flex-row-reverse">
                <h3 className="text-2xl md:text-3xl font-serif transition-colors duration-500 group-hover:text-accent">
                  {next.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-accent group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
