import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PageHero } from "@/components/page-hero"
import { PageNav } from "@/components/page-nav"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About | The Yard",
  description:
    "The Yard is a content strategy studio bringing direction through research, editorial systems, and strategic thinking.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <PageHero
          number="01"
          label="About"
          title="Clarity before creation."
          description="A studio built for brands that want to think before they publish."
        />
        <AboutContent />
        <PageNav
          next={{
            href: "/services",
            label: "Next — 02",
            title: "Services",
          }}
        />
        <Footer />
      </PageTransition>
    </main>
  )
}
