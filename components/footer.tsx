import Link from "next/link";
import { Droplet, Github, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Droplet className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Water Wise
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Raising awareness about water conservation and sustainable water
              usage for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/statistics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tips"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Water Saving Tips
                </Link>
              </li>
              <li>
                <a
                  href="https://www.etwinning.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  eTwinning Project
                </a>
              </li>
              <li>
                <Link
                  href="/statistics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Water Statistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Get Involved</h3>
            <p className="text-sm text-muted-foreground">
              Join our mission to conserve water and protect our planet.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Water Wise. An eTwinning Project.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Developer signature */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            Kağan
          </p>
        </div>
      </div>
    </footer>
  );
}
