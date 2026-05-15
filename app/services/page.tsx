import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PageHero } from "@/components/page-hero"
import { PageNav } from "@/components/page-nav"
import { ServicesContent } from "@/components/services-content"

export const metadata: Metadata = {
  title: "Services | The Yard",
  description:
    "Three engagement models from The Yard — The Audit, The Blueprint, and The Retainer.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <PageHero
          number="02"
          label="Services"
          title="Three ways to work together."
          description="Each engagement is tailored, but every project begins from one of these starting points."
        />
        <ServicesContent />
        <PageNav
          prev={{ href: "/about", label: "Previous — 01", title: "About" }}
          next={{ href: "/process", label: "Next — 03", title: "Process" }}
        />
        <Footer />
      </PageTransition>
    </main>
  )
}
