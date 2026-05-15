"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    number: "01",
    title: "The Audit",
    tagline: "Diagnostic",
    description:
      "A comprehensive analysis of your existing content ecosystem. We examine what you have, what works, what doesn't, and where the gaps lie.",
    deliverables: [
      "Content inventory & performance analysis",
      "Competitive landscape review",
      "Audience research synthesis",
      "Gap & opportunity mapping",
      "Executive findings document",
    ],
    idealFor:
      "Brands with existing content who need clarity on what to do next.",
    duration: "3 – 4 weeks",
  },
  {
    number: "02",
    title: "The Blueprint",
    tagline: "Strategy",
    description:
      "A complete content strategy document that serves as your north star. Built from research, designed for execution.",
    deliverables: [
      "Strategic positioning & messaging framework",
      "Content pillars & topic architecture",
      "Voice, tone & editorial guidelines",
      "Editorial calendar structure",
      "Distribution & channel strategy",
    ],
    idealFor:
      "Brands launching new initiatives or repositioning their content approach.",
    duration: "6 – 8 weeks",
  },
  {
    number: "03",
    title: "The Retainer",
    tagline: "Ongoing",
    description:
      "Ongoing strategic guidance to ensure your content stays aligned, relevant, and effective as your brand evolves.",
    deliverables: [
      "Monthly strategy sessions",
      "Content review & optimization",
      "Quarterly performance reviews",
      "Performance tracking & insights",
      "Strategic recommendations",
    ],
    idealFor: "Brands committed to long-term content excellence.",
    duration: "Monthly engagement",
  },
]

export function ServicesContent() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="group relative border border-border/60 rounded-md p-8 md:p-12 hover:border-accent transition-all duration-500 bg-card"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-xs font-mono text-accent">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {service.tagline}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 transition-colors duration-500 group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-4 pt-6 border-t border-border/60">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
                      Duration
                    </p>
                    <p className="text-sm">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
                      Ideal for
                    </p>
                    <p className="text-sm">{service.idealFor}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  Deliverables
                </p>
                <ul className="space-y-0 border-t border-border/60">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={item}
                      className="py-4 border-b border-border/60 flex items-center gap-4 text-base"
                    >
                      <span className="text-xs font-mono text-accent w-6">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/#contact"
                    className="group/btn inline-flex items-center gap-2 text-sm border border-border px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
                  >
                    Enquire about {service.title}
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
