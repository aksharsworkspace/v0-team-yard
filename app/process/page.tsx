import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PageHero } from "@/components/page-hero"
import { PageNav } from "@/components/page-nav"
import { ProcessContent } from "@/components/process-content"

export const metadata: Metadata = {
  title: "Process | The Yard",
  description:
    "Listen, Analyze, Structure, Guide — the four-stage process behind every Yard engagement.",
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <PageHero
          number="03"
          label="Process"
          title="How we work."
          description="A four-stage process built on listening, research, and editorial discipline."
        />
        <ProcessContent />
        <PageNav
          prev={{
            href: "/services",
            label: "Previous — 02",
            title: "Services",
          }}
        />
        <Footer />
      </PageTransition>
    </main>
  )
}
