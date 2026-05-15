"use client"

import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-xl border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-500 group-hover:scale-125" />
          <span className="text-base font-medium tracking-tight">The Yard</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            )
          })}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/discovery"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-500"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/discovery"
              onClick={() => setIsOpen(false)}
              className="text-sm bg-primary text-primary-foreground px-4 py-3 rounded-md hover:opacity-90 transition-opacity text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
