"use client"

const testimonials = [
  {
    quote: "They didn't just write a check. They helped us rewrite our entire go-to-market playbook. Their operational experience is unmatched in the venture space.",
    name: "Sarah Chen",
    title: "CEO, Nexus Innovations",
  },
  {
    quote: "The clarity they brought to our product strategy in the early days was the difference between failing fast and finding true product-market fit.",
    name: "Marcus Thorne",
    title: "Founder, FlowSync",
  },
  {
    quote: "When things got hard, they were the first call I made. Having investors who have actually built companies before changes the entire dynamic.",
    name: "Elena Rodriguez",
    title: "CEO, Veridian Health",
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[var(--ty-warm)] border-t border-[var(--ty-muted)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-[Cormorant_Garamond] font-[300] italic text-[var(--ty-black)]">
            Founder Perspectives
          </h2>
          <p className="text-lg text-[var(--ty-muted)] max-w-2xl mx-auto">
            The true measure of a venture firm is what their founders say about them behind closed doors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isLastColumn = index % 3 === 2;
            return (
              <div className={`relative p-6 ${!isLastColumn ? 'border-r border-[var(--ty-muted)]' : ''}`}>
                <blockquote className="mb-6 text-[var(--ty-black)] leading-relaxed font-[Cormorant_Garamond] font-[300] italic">
                  “{testimonial.quote}”
                </blockquote>
                <div className="space-y-2">
                  <p className="font-[DM_Sans] font-[500] text-[var(--ty-black)]">{testimonial.name}</p>
                  <p className="text-[var(--ty-muted)] font-[DM_Sans] font-[400]">{testimonial.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}