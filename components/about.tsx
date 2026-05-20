"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                alt="Founders"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-foreground rounded-full blur-3xl opacity-10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              We build alongside those building the future.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Founded by operators who have taken companies from zero to IPO, we understand the immense pressure and profound isolation of building a category-defining company.
              </p>
              <p>
                Our philosophy is simple: provide concentrated capital, unmatched strategic clarity, and access to a network that actually moves the needle. We don't just sit on boards; we get in the trenches when you need us, and stay out of your way when you don't.
              </p>
              <p>
                We look for outliers. The misfits, the visionaries, the founders whose ambition scares them just a little. If that sounds like you, we should talk.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-[1px] flex-1 bg-border" />
              <p className="text-sm uppercase tracking-widest text-foreground font-medium">
                The Partnership
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
