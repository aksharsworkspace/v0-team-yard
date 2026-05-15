import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PageHero } from "@/components/page-hero"
import { PageNav } from "@/components/page-nav"
import { DiscoveryContent } from "@/components/discovery-content"

export const metadata: Metadata = {
  title: "Discovery Call | The Yard",
  description:
    "A 30-minute structured conversation to see if we're the right fit. Not a pitch — a diagnosis.",
}

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <PageHero
          number="04"
          label="Discovery"
          title={"Let\u2019s see if we\u2019re the right fit."}
          description="A 30-minute structured conversation about your content situation. Not a pitch — a diagnosis."
        />
        <DiscoveryContent />
        <PageNav
          prev={{
            href: "/process",
            label: "Previous — 03",
            title: "Process",
          }}
          next={{
            href: "/about",
            label: "Back to — 01",
            title: "About",
          }}
        />
        <Footer />
      </PageTransition>
    </main>
  )
}
