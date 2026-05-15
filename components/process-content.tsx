"use client"

import { motion } from "framer-motion"
import { Headphones, BarChart3, Grid3X3, Compass } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: "01",
    title: "Listen",
    duration: "Week 1 – 2",
    description:
      "We begin by understanding your brand, audience, and goals. Through interviews, research, and analysis, we absorb the full context of your content challenge.",
    activities: [
      "Stakeholder interviews",
      "Brand & business immersion",
      "Audience discovery",
      "Goal & success definition",
    ],
    icon: Headphones,
  },
  {
    number: "02",
    title: "Analyze",
    duration: "Week 2 – 4",
    description:
      "We audit your existing content, study your competitors, and identify patterns. Data and insights form the foundation of every recommendation.",
    activities: [
      "Content inventory & audit",
      "Competitive benchmarking",
      "Performance analysis",
      "Gap & opportunity mapping",
    ],
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Structure",
    duration: "Week 4 – 6",
    description:
      "We design a strategic framework tailored to your needs — content pillars, editorial systems, and publishing rhythms that make sense for your brand.",
    activities: [
      "Messaging & positioning",
      "Content pillar architecture",
      "Editorial calendar design",
      "Channel & distribution plan",
    ],
    icon: Grid3X3,
  },
  {
    number: "04",
    title: "Guide",
    duration: "Week 6 onward",
    description:
      "We deliver actionable documentation and remain available to guide your team through implementation, ensuring the strategy translates into practice.",
    activities: [
      "Strategy document handover",
      "Team workshops & training",
      "Implementation support",
      "Quarterly check-ins",
    ],
    icon: Compass,
  },
]

export function ProcessContent() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-border/60 md:-translate-x-px"
          />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 1
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>

                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-16 items-start ${
                      isEven ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className={isEven ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}>
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="text-xs font-mono text-accent">
                          {step.number}
                        </span>
                        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>
                      <div
                        className={`inline-flex mb-6 p-3 rounded-md bg-accent-soft/50 ${
                          isEven ? "" : ""
                        }`}
                      >
                        <Icon
                          className="h-6 w-6 text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-5">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className={isEven ? "md:pr-16" : "md:pl-16"}>
                      <div className="border border-border/60 rounded-md p-8 bg-card">
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                          What happens
                        </p>
                        <ul className="space-y-0">
                          {step.activities.map((activity, idx) => (
                            <li
                              key={activity}
                              className="py-3 border-b border-border/60 last:border-b-0 flex items-center gap-4 text-sm"
                            >
                              <span className="text-xs font-mono text-accent w-5">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
