"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Minus, ArrowRight, Plus } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const isList = [
  "A 30-minute structured conversation",
  "A diagnosis of where your content is breaking",
  "An honest read on whether we can help",
  "Free, with no obligation to continue",
]

const isntList = [
  "A sales pitch dressed as advice",
  "A generic capabilities walkthrough",
  "A scoped proposal or pricing call",
  "An hour of your time",
]

const idealFit = [
  {
    label: "Founders preparing to scale content",
    detail: "You know content matters but don't yet have a system behind it.",
  },
  {
    label: "Teams creating without structure",
    detail: "You're publishing, but it feels reactive rather than directed.",
  },
  {
    label: "Brands between agencies",
    detail: "You need strategy before you brief the next execution partner.",
  },
  {
    label: "In-house marketers",
    detail: "You want a strategic layer above day-to-day production.",
  },
]

const agenda = [
  { time: "00 — 05", title: "Context", detail: "Your business, audience, and current content footprint." },
  { time: "05 — 15", title: "Diagnosis", detail: "Where structure is missing and what it's costing you." },
  { time: "15 — 25", title: "Direction", detail: "What a Yard engagement could realistically look like." },
  { time: "25 — 30", title: "Next steps", detail: "Whether to continue, and how." },
]

const nextSteps = [
  { step: "01", title: "Submit", detail: "Share a little context using the form below." },
  { step: "02", title: "Review", detail: "We read every submission within 48 hours." },
  { step: "03", title: "Schedule", detail: "If we're a fit, you'll receive a calendar link." },
]

const faqs = [
  {
    q: "Is the call free?",
    a: "Yes. Discovery calls are complimentary and carry no obligation. We use them to assess fit on both sides.",
  },
  {
    q: "Will I be pitched?",
    a: "No. The call is diagnostic. If a Yard engagement makes sense, we'll say so. If it doesn't, we'll tell you that too.",
  },
  {
    q: "What if we're not a fit?",
    a: "We'll be direct, and where we can, we'll point you toward a studio, freelancer, or resource that fits your situation better.",
  },
  {
    q: "Do you work with early-stage brands?",
    a: "Sometimes. We work best with teams that have a product in market and a real audience to reach. Pre-launch brands may be better served by The Audit.",
  },
]

export function DiscoveryContent() {
  return (
    <>
      <ExpectationsSection />
      <IdealFitSection />
      <AgendaSection />
      <FormSection />
      <NextStepsSection />
      <FAQSection />
      <ClosingNote />
    </>
  )
}

function ExpectationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-accent mb-3">01 / Expectations</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-3xl text-balance">
            What this call is, and what it isn&apos;t.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-md overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="bg-background p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
              A discovery call is
            </p>
            <ul className="space-y-0">
              {isList.map((item, i) => (
                <li
                  key={item}
                  className="py-4 border-b border-border/60 last:border-b-0 flex items-start gap-4"
                >
                  <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="bg-background p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              A discovery call isn&apos;t
            </p>
            <ul className="space-y-0">
              {isntList.map((item) => (
                <li
                  key={item}
                  className="py-4 border-b border-border/60 last:border-b-0 flex items-start gap-4"
                >
                  <Minus className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function IdealFitSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-4"
          >
            <p className="text-xs font-mono text-accent mb-3">02 / Fit</p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-balance">
              Who this is for.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="md:col-span-7 md:col-start-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              We&apos;re selective about who we take calls with — not out of
              gatekeeping, but because the work goes deeper when fit is real on
              both sides.
            </p>
          </motion.div>
        </div>

        <ul className="border-t border-border/60">
          {idealFit.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.08 }}
              className="border-b border-border/60 grid md:grid-cols-12 gap-6 py-7"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="text-lg md:text-xl font-serif">{item.label}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AgendaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60 bg-accent-soft/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs font-mono text-accent mb-3">03 / Agenda</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-balance mb-5">
            The 30 minutes, structured.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We come prepared. You should expect a focused, considered
            conversation — not small talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {agenda.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.1 }}
              className="bg-background border border-border/60 rounded-md p-8 hover:border-accent transition-colors duration-500"
            >
              <p className="text-xs font-mono text-accent mb-4">{item.time}</p>
              <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    // Stub: replace with real submission (email service, DB, etc.)
    setTimeout(() => setStatus("success"), 800)
  }

  return (
    <section id="form" ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-5"
        >
          <p className="text-xs font-mono text-accent mb-3">04 / Request</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-balance mb-6">
            Tell us a little.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            Five short fields. The more thoughtful your answers, the more
            useful the conversation will be.
          </p>

          <div className="mt-12 pt-8 border-t border-border/60 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Prefer email?
            </p>
            <a
              href="mailto:hello@theyard.studio"
              className="text-base hover:text-accent transition-colors duration-500 underline-offset-4 hover:underline"
            >
              hello@theyard.studio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="md:col-span-7"
        >
          {status === "success" ? (
            <div className="border border-border/60 rounded-md p-10 bg-accent-soft/40">
              <p className="text-xs font-mono text-accent mb-4">Received</p>
              <h3 className="text-3xl font-serif mb-4 leading-tight">
                Thank you. We&apos;ll be in touch.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We review every submission carefully and respond within 48
                hours. If we&apos;re a fit, you&apos;ll receive a calendar
                link from us at <span className="text-foreground">hello@theyard.studio</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" required />
              <Field label="Website" name="website" placeholder="Optional" />

              <FieldSelect
                label="Timeline"
                name="timeline"
                options={[
                  "Exploring — no timeline yet",
                  "Within the next month",
                  "Within the next quarter",
                  "Later this year",
                ]}
              />

              <FieldTextarea
                label="What's prompting this conversation?"
                name="context"
                placeholder="A few sentences is plenty. The clearer the context, the better the call."
                required
              />

              <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  We respond within 48 hours.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-500 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Request a call"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline border-b border-border/60 pb-4">
      <label
        htmlFor={name}
        className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="md:col-span-9 bg-transparent border-0 outline-none focus:ring-0 px-0 py-1 text-base placeholder:text-muted-foreground/60 focus:placeholder:text-muted-foreground/30 transition-colors"
      />
    </div>
  )
}

function FieldSelect({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline border-b border-border/60 pb-4">
      <label
        htmlFor={name}
        className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="md:col-span-9 bg-transparent border-0 outline-none focus:ring-0 px-0 py-1 text-base appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function FieldTextarea({
  label,
  name,
  required,
  placeholder,
}: {
  label: string
  name: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start border-b border-border/60 pb-4">
      <label
        htmlFor={name}
        className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground pt-2"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="md:col-span-9 bg-transparent border-0 outline-none focus:ring-0 px-0 py-1 text-base placeholder:text-muted-foreground/60 resize-none leading-relaxed"
      />
    </div>
  )
}

function NextStepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs font-mono text-accent mb-3">05 / Next</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-balance">
            What happens after you submit.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {nextSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.1 }}
              className="border-t border-border/60 pt-6"
            >
              <p className="text-xs font-mono text-accent mb-6">{s.step}</p>
              <h3 className="text-2xl md:text-3xl font-serif mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-4"
        >
          <p className="text-xs font-mono text-accent mb-3">06 / Questions</p>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight text-balance">
            Frequently asked.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="md:col-span-8"
        >
          <ul className="border-t border-border/60">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <li key={f.q} className="border-b border-border/60">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="text-lg md:text-xl font-serif transition-colors duration-500 group-hover:text-accent">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-all duration-500 ${
                        isOpen ? "rotate-45 text-accent" : "group-hover:text-accent"
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function ClosingNote() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
            A final note
          </p>
          <p className="text-2xl md:text-3xl font-serif leading-snug text-balance">
            We take on a small number of engagements each quarter.
            <br />
            <span className="text-muted-foreground italic">
              Clarity starts with a conversation.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
