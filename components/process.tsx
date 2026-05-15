"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Headphones, BarChart3, Grid3X3, Compass } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Listen",
    description: "We begin by understanding your brand, audience, and goals. Through interviews, research, and analysis, we absorb the full context of your content challenge.",
    icon: Headphones
  },
  {
    number: "02",
    title: "Analyze",
    description: "We audit your existing content, study your competitors, and identify patterns. Data and insights form the foundation of every recommendation.",
    icon: BarChart3
  },
  {
    number: "03",
    title: "Structure",
    description: "We design a strategic framework tailored to your needs—content pillars, editorial systems, and publishing rhythms that make sense for your brand.",
    icon: Grid3X3
  },
  {
    number: "04",
    title: "Guide",
    description: "We deliver actionable documentation and remain available to guide your team through implementation, ensuring the strategy translates into practice.",
    icon: Compass
  }
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight max-w-xl">
            How we work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="relative"
            >
              <div className="mb-6">
                <step.icon className="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground font-mono">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
