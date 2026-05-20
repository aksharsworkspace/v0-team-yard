"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, BarChart, Lightbulb, Zap } from "lucide-react"

const services = [
  {
    title: "Content Strategy & Architecture",
    description: "We design comprehensive frameworks tailored to your needs—content pillars, editorial systems, and publishing rhythms that make sense for your brand.",
    deliverables: [
      "Content pillars & themes",
      "Editorial workflows",
      "Distribution blueprints",
      "Strategic roadmaps"
    ],
    icon: <Zap className="w-5 h-5" />,
    className: "md:col-span-2"
  },
  {
    title: "Executive Ghostwriting",
    description: "We help leaders articulate their vision, writing high-impact thought leadership content that builds industry authority.",
    deliverables: [
      "Founder narratives",
      "Opinion editorials",
      "LinkedIn strategy",
      "Keynote speeches"
    ],
    icon: <Lightbulb className="w-5 h-5" />,
    className: "md:col-span-1"
  },
  {
    title: "Editorial Management",
    description: "We step in as your fractional editorial team, delivering actionable documentation and managing the end-to-end publishing process.",
    deliverables: [
      "Calendar management",
      "Writer sourcing",
      "Quality assurance",
      "Performance reporting"
    ],
    icon: <BarChart className="w-5 h-5" />,
    className: "md:col-span-3"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl">
            We provide more than just strategy. We step in to bridge the gap between creative ambition and strategic execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className={`group relative bg-secondary/30 backdrop-blur-md border border-border/50 rounded-2xl p-10 flex flex-col h-full transition-all duration-500 hover:bg-secondary/50 hover:border-border overflow-hidden ${service.className}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                </div>
                <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:bg-background transition-colors duration-300">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg relative z-10">
                {service.description}
              </p>

              <div className="mt-auto pt-8 border-t border-border/50 relative z-10">
                <ul className="grid grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
