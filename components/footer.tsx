import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="text-lg font-medium mb-2">The Yard</p>
            <p className="text-sm text-muted-foreground">
              Content Strategy Studio
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:hello@theyard.studio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@theyard.studio
            </Link>
            <Link
              href="https://instagram.com/theyard.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Yard.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
