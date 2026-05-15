"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease = [0.22, 1, 0.36, 1] as const

const principles = [
  {
    number: "01",
    title: "Strategy is structural",
    body: "Content fails not because brands lack ideas, but because they lack a system to organise them. We build the system first.",
  },
  {
    number: "02",
    title: "Research over assumption",
    body: "Every recommendation we make is grounded in audience research, competitive analysis, and editorial precedent — not opinion.",
  },
  {
    number: "03",
    title: "Editorial discipline",
    body: "We borrow from how magazines and publishers think about content: voice, pillars, cadence, and point of view.",
  },
  {
    number: "04",
    title: "Built to compound",
    body: "A strategy is only as useful as its longevity. We design frameworks that scale with your brand for years, not quarters.",
  },
]

export function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="md:col-span-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight text-balance">
                Most brands publish before they plan.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="md:col-span-7 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The default mode in most marketing teams is volume. Post more.
                Ship faster. Fill the calendar. The result is content that
                exists but doesn&apos;t accumulate — disconnected pieces with no
                narrative thread, no compounding value, and no clear audience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Yard exists for brands that recognise the cost of this
                pattern. We don&apos;t make more content. We make the case for
                less, better content — anchored to a strategy that holds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-secondary border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="mb-16 flex items-end justify-between flex-wrap gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Principles
              </p>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-2xl text-balance">
                What we believe about content.
              </h2>
            </div>
            <p className="text-sm font-mono text-muted-foreground">04 / Four</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.08 }}
                className="bg-background p-10 group hover:bg-accent-soft/30 transition-colors duration-500"
              >
                <p className="text-xs font-mono text-accent mb-6">
                  {principle.number}
                </p>
                <h3 className="text-xl md:text-2xl font-serif mb-4 transition-colors duration-500 group-hover:text-accent">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
              Who we work with
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-balance text-pretty">
              We work with founders, marketing leaders, and editorial teams at
              brands that take content seriously enough to question how
              they&apos;re doing it. If you&apos;re ready to think before you
              ship, you&apos;re in the right place.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
