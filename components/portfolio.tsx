"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "Quantum Computing Infrastructure",
    client: "Qubit",
    industry: "Deep Tech",
    image: "/placeholder.svg",
    overview: "Led the $15M Series A for a team building fault-tolerant quantum processors.",
    results: [
      "Secured 3 enterprise pilots",
      "Reached technical milestone 6 months early"
    ],
    technologies: ["Series A", "Lead Investor"],
  },
  {
    id: 2,
    title: "Next-Gen Carbon Capture",
    client: "AeroCleanse",
    industry: "Climate Tech",
    image: "/placeholder.svg",
    overview: "Co-led $8M Seed round to scale direct air capture technology.",
    results: [
      "Deployed first commercial unit",
      "Signed $50M in forward offtake agreements"
    ],
    technologies: ["Seed", "Co-Lead"],
  },
  {
    id: 3,
    title: "AI-Driven Drug Discovery",
    client: "BioSynthetix",
    industry: "Biotech",
    image: "/placeholder.svg",
    overview: "Participated in $25M Series B to accelerate clinical trials for novel therapeutics.",
    results: [
      "FDA Fast Track designation achieved",
      "Expanded pipeline to 3 new indications"
    ],
    technologies: ["Series B", "Participant"],
  }
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
              Selected Investments
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl">
              We back founders who are fundamentally rewiring how the world works, from deep tech to climate solutions.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-muted-foreground transition-colors">
            View All Companies <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className="group cursor-pointer flex flex-col"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-secondary/50">
                <img
                  src={study.image}
                  alt={study.client}
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-8">
                  <div className={`transform transition-all duration-500 ease-out ${hoveredId === study.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <h4 className="text-white font-medium mb-3">Key Milestones</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-white/80 text-sm flex items-start gap-2">
                          <span className="mt-1 block w-1 h-1 rounded-full bg-white/50" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {study.technologies.map(tech => (
                    <span key={tech} className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-muted-foreground transition-colors">
                  {study.client}
                </h3>
                <p className="text-muted-foreground font-light text-sm line-clamp-2">
                  {study.overview}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest border border-border py-4 rounded-full">
          View All Companies <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}