import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SectionsIndex } from "@/components/sections-index"
import { Philosophy } from "@/components/philosophy"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <Hero />
        <SectionsIndex />
        <Philosophy />
        <CTA />
        <Footer />
      </PageTransition>
    </main>
  )
}
