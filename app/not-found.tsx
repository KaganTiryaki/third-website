import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <div className="container max-w-2xl text-center">
        <Card className="border-primary/20">
          <CardContent className="pt-12 pb-12 space-y-6">
            <div className="relative inline-block">
              <div className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                404
              </div>
              <Droplet className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-primary/20" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Page Not Found</h1>
              <p className="text-muted-foreground">
                Oops! Looks like this page has evaporated. Let's get you back on track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <Link
                href="/statistics"
                className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">Statistics</div>
              </Link>
              <Link
                href="/calculator"
                className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <div className="text-2xl mb-2">🧮</div>
                <div className="text-sm font-medium">Calculator</div>
              </Link>
              <Link
                href="/tips"
                className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <div className="text-2xl mb-2">💡</div>
                <div className="text-sm font-medium">Tips</div>
              </Link>
              <Link
                href="/quiz"
                className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-medium">Quiz</div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
