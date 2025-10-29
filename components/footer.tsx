import Link from "next/link";
import { Droplet } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background relative z-50" style={{ margin: 0, padding: 0 }}>
      <div className="w-full" style={{ margin: 0, padding: '2rem 0 0 0' }}>
        <div className="flex flex-col items-center justify-center" style={{ gap: '1rem', paddingBottom: 0, marginBottom: 0, width: '100%', textAlign: 'center' }}>
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Droplet className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
            <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Water Wise
            </span>
          </Link>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ width: '100%' }}>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/statistics" className="text-muted-foreground hover:text-primary transition-colors">
              Statistics
            </Link>
            <Link href="/calculator" className="text-muted-foreground hover:text-primary transition-colors">
              Calculator
            </Link>
            <Link href="/tips" className="text-muted-foreground hover:text-primary transition-colors">
              Tips
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center border-t w-full" style={{ paddingTop: '1rem', paddingBottom: 0, marginBottom: 0 }}>
            <p className="text-sm text-muted-foreground" style={{ marginBottom: '0.25rem' }}>
              © {new Date().getFullYear()} Water Wise
            </p>
            <p className="text-xs text-muted-foreground/60" style={{ margin: 0, padding: 0 }}>
              Kağan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
