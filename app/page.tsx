"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplet, TrendingDown, Calculator, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaterDrops } from "@/components/water-drops";
import { ImpactTracker } from "@/components/impact-tracker";
import { ComparisonTool } from "@/components/comparison-tool";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-secondary/5 to-background py-20 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <WaterDrops />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                eTwinning Project
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Every Drop Counts
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground md:text-2xl"
            >
              Join us in raising awareness about water waste and learning how small
              changes can make a big difference for our planet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg"
              >
                <Link href="/calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Impact
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/statistics">
                  <TrendingDown className="mr-2 h-5 w-5" />
                  View Statistics
                </Link>
              </Button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">2.2B</div>
                <div className="text-sm text-muted-foreground">People lack safe water</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">30%</div>
                <div className="text-sm text-muted-foreground">Freshwater is wasted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">70%</div>
                <div className="text-sm text-muted-foreground">Used in agriculture</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Water Conservation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover tools and resources to help you understand and reduce water waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-primary/30 hover:border-primary/50 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Statistics & Data</CardTitle>
                  <CardDescription className="text-base">
                    Explore real-world data about water waste and conservation impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary group-hover:gap-2 transition-all">
                    <Link href="/statistics">
                      View Statistics
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-secondary/30 hover:border-secondary/50 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calculator className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Water Calculator</CardTitle>
                  <CardDescription className="text-base">
                    Calculate your daily water usage and discover ways to save
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button asChild variant="link" className="p-0 h-auto font-semibold text-secondary group-hover:gap-2 transition-all">
                    <Link href="/calculator">
                      Start Calculating
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-accent/30 hover:border-accent/50 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Conservation Tips</CardTitle>
                  <CardDescription className="text-base">
                    Learn practical tips for saving water in your daily life
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button asChild variant="link" className="p-0 h-auto font-semibold text-accent group-hover:gap-2 transition-all">
                    <Link href="/tips">
                      Explore Tips
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Tracker Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ImpactTracker />
          </motion.div>
        </div>
      </section>

      {/* Comparison Tool Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ComparisonTool />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-12 md:p-20 text-center"
          >
            <div className="relative z-10 space-y-6">
              <Droplet className="w-16 h-16 mx-auto text-white/90" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Start your water conservation journey today. Every action counts in
                protecting our planet&apos;s most precious resource.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Link href="/calculator">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 text-white border-2 border-white hover:bg-white/20 shadow-lg backdrop-blur-sm"
                >
                  <Link href="/tips">Learn More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
