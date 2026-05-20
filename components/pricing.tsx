"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$2,500",
    period: "/ month",
    features: [
      "Initial content audit",
      "Basic strategy document",
      "Editorial calendar template",
      "Email support"
    ],
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    id: 2,
    name: "Professional",
    price: "$5,000",
    period: "/ month",
    features: [
      "Comprehensive strategy",
      "Content pillar development",
      "Monthly strategy sessions",
      "Performance tracking",
      "Priority email support"
    ],
    isPopular: true,
    ctaText: "Choose Plan"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$8,000",
    period: "/ month",
    features: [
      "Full-service partnership",
      "Dedicated strategist",
      "Weekly strategy sessions",
      "Advanced analytics",
      "Team training included"
    ],
    isPopular: false,
    ctaText: "Contact Us"
  }
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })

  return (
    <section id="pricing" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground/80 mb-4">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Choose Your Partnership
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-xl mx-auto">
            Select the plan that best fits your needs and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.05 * plan.id }}
              className={`group relative bg-card/70 backdrop-blur-lg border border-primary/20 rounded-xl p-8 flex flex-col h-full hover-premium transition-all duration-500
                ${plan.isPopular ? 'border-primary/40' : ''}
              `}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                backdropFilter: `blur(20px)`
              }}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-3 left-3 bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-serif text-tracking-wide">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-serif">{plan.price}</span>
                  <span className="text-lg text-muted-foreground/80">{plan.period}</span>
                </div>

                <ul className="space-y-4 text-muted-foreground/90 flex-1">
                  {plan.features.map((feature, idx) => (
                    <motion.key
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.05 * (idx + 1) }}
                    >
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        <span>{feature}</span>
                      </li>
                    </motion.key>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    plan.isPopular
                      ? alert(`Starting with ${plan.name} plan`)
                      : plan.id === pricingPlans.length
                        ? alert(`Contact us for enterprise pricing`)
                        : alert(`Selecting ${plan.name} plan`)
                  }
                  className="w-full py-3 bg-primary-gradient text-primary-foreground rounded hover:opacity-90 transition-all duration-300 text-sm font-medium mt-auto"
                >
                  {plan.ctaText}
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-muted-foreground/80 text-sm"
        >
          All plans include a 30-day minimum commitment. Custom enterprise solutions available upon request.
        </motion.div>
      </div>
    </section>
  )
}