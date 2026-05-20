"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "They didn't just write a check. They helped us rewrite our entire go-to-market playbook. Their operational experience is unmatched in the venture space.",
    author: "Sarah Chen",
    role: "CEO, Nexus Innovations",
    company: "Series B"
  },
  {
    quote: "The clarity they brought to our product strategy in the early days was the difference between failing fast and finding true product-market fit.",
    author: "Marcus Thorne",
    role: "Founder, FlowSync",
    company: "Acquired by Salesforce"
  },
  {
    quote: "When things got hard, they were the first call I made. Having investors who have actually built companies before changes the entire dynamic.",
    author: "Elena Rodriguez",
    role: "CEO, Veridian Health",
    company: "Series C"
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            Founder Perspectives
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            The true measure of a venture firm is what their founders say about them behind closed doors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className="bg-secondary/20 border border-border/50 p-10 rounded-2xl flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-24 h-24 text-foreground" />
              </div>
              
              <div className="flex-1 relative z-10">
                <p className="text-lg leading-relaxed font-light text-foreground mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-auto relative z-10 pt-6 border-t border-border/30">
                <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-accent/80 mt-2">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}