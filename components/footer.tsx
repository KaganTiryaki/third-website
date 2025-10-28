import Link from "next/link";
import { Droplet } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Droplet className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
            <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Water Wise
            </span>
          </Link>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
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
          <div className="text-center space-y-1 pt-4 border-t w-full">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Water Wise
            </p>
            <p className="text-xs text-muted-foreground/60">
              Kağan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
