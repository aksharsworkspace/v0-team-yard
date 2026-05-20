import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              A strategic content consultancy partnering with founders and marketing teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-foreground/80">Firm</h4>
            <ul className="space-y-4">
              <li><Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Portfolio</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Team</Link></li>
              <li><Link href="#approach" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Approach</Link></li>
              <li><Link href="#careers" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-foreground/80">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Twitter / X</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Substack</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-foreground/80">Newsletter</h4>
            <p className="text-muted-foreground text-sm font-light mb-4">
              Insights on company building, straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-secondary/50 border border-border/50 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
              />
              <button className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} The Yard. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs font-light">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs font-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
