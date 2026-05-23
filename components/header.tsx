"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "./logo"

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Get in touch" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll events for header background
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    // Cleanup would go here in a real app, but for simplicity we'll omit it
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300 border-b border-border/20`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 nav-text">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsScrolled(true)} // Just for demo, would toggle menu in real app
            className="p-2 rounded-md hover:bg-black/20 transition-colors"
            aria-label="Toggle menu"
          >
            {/* Simple menu icon */}
            <span className="block h-0.5 w-6 bg-black/50"></span>
            <span className="block h-0.5 w-6 bg-black/50 mt-1"></span>
            <span className="block h-0.5 w-6 bg-black/50 mt-1"></span>
          </button>
        </div>
      </div>
    </header>
  )
}