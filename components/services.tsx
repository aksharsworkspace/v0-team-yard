"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "The Audit",
    description: "A comprehensive analysis of your existing content ecosystem. We examine what you have, what works, what doesn&apos;t, and where the gaps lie.",
    deliverables: [
      "Content inventory & performance analysis",
      "Competitive landscape review",
      "Audience research synthesis",
      "Gap & opportunity mapping"
    ],
    idealFor: "Brands with existing content who need clarity on what to do next"
  },
  {
    title: "The Blueprint",
    description: "A complete content strategy document that serves as your north star. Built from research, designed for execution.",
    deliverables: [
      "Strategic positioning & messaging framework",
      "Content pillars & topic architecture",
      "Editorial calendar structure",
      "Distribution & channel strategy"
    ],
    idealFor: "Brands launching new initiatives or repositioning their content approach"
  },
  {
    title: "The Retainer",
    description: "Ongoing strategic guidance to ensure your content stays aligned, relevant, and effective as your brand evolves.",
    deliverables: [
      "Monthly strategy sessions",
      "Content review & optimization",
      "Performance tracking & insights",
      "Strategic recommendations"
    ],
    idealFor: "Brands committed to long-term content excellence"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight max-w-xl">
            Three ways to work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-card border border-border p-8 rounded-md flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-medium">{service.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Ideal for
                </p>
                <p className="text-sm">{service.idealFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
