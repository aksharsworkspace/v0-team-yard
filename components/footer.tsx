import Link from "next/link"

const linkClass =
  "text-sm text-muted-foreground hover:text-accent transition-colors duration-500"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-base font-medium">The Yard</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Content Strategy Studio
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Studio
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className={linkClass}>
                About
              </Link>
              <Link href="/services" className={linkClass}>
                Services
              </Link>
              <Link href="/process" className={linkClass}>
                Process
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="mailto:hello@theyard.studio" className={linkClass}>
                hello@theyard.studio
              </Link>
              <Link
                href="https://instagram.com/theyard.studio"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 md:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              © {currentYear}
            </p>
            <p className="text-sm text-muted-foreground">
              All rights
              <br />
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
