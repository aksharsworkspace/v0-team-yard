import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-[var(--ty-black)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <p className="text-[var(--ty-cream)] text-sm font-[DM_Sans] font-[300] leading-relaxed max-w-xs">
              A strategic content consultancy partnering with founders and marketing teams.
            </p>
          </div>

          {/* Middle: Services links */}
          <div>
            <h4 className="font-[DM_Sans] font-[500] mb-4 uppercase tracking-wider text-xs text-[var(--ty-muted)]">
              Services
            </h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Content Strategy</Link></li>
              <li><Link href="#services" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Ghostwriting</Link></li>
              <li><Link href="#services" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Editorial Management</Link></li>
            </ul>
          </div>

          {/* Right: Connect links */}
          <div>
            <h4 className="font-[DM_Sans] font-[500] mb-4 uppercase tracking-wider text-xs text-[var(--ty-muted)]">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Twitter / X</a></li>
              <li><a href="#" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">LinkedIn</a></li>
              <li><a href="#" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Substack</a></li>
              <li><a href="#" className="text-[var(--ty-cream)] hover:text-[var(--ty-accent)] transition-colors text-sm font-[DM_Sans] font-[400]">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright bar at bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--ty-muted)]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--ty-muted)] text-xs font-[DM_Sans] font-[300]">
            © {new Date().getFullYear()} The Yard. All rights reserved.
          </p>
          <div className="flex gap-4 text-[var(--ty-muted)] text-xs font-[DM_Sans] font-[300]">
            <Link href="#" className="hover:text-[var(--ty-accent)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--ty-accent)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}