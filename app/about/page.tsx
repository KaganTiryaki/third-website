"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Users, Target, Heart, Droplet, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col py-12">
      {/* Hero Section */}
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <Badge className="bg-primary/10 text-primary">
            <Globe className="w-3 h-3 mr-1 inline" />
            eTwinning Project
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Water Wise
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An educational initiative dedicated to raising awareness about water conservation
            and promoting sustainable water usage worldwide
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Water Wise is committed to educating communities about the critical importance
                of water conservation. Through interactive tools, educational resources, and
                data-driven insights, we empower individuals to make informed decisions about
                their water usage and contribute to a more sustainable future.
              </p>
              <p className="text-muted-foreground">
                Every drop of water saved today helps ensure water security for future
                generations. Our goal is to inspire action through education and awareness.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="container mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promoting sustainable water usage practices that protect our planet's most
                  precious resource for future generations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing accessible, accurate information to help people understand water
                  conservation and take meaningful action.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working towards a worldwide movement where water conservation becomes a
                  universal priority and practice.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building a community of environmentally conscious individuals committed to
                  making a positive difference.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using technology and interactive tools to make water conservation education
                  engaging and effective.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inspiring individuals to translate knowledge into concrete actions that
                  reduce water waste in daily life.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Interactive Water Calculator</h3>
                    <p className="text-muted-foreground">
                      Calculate your daily water consumption and receive personalized
                      recommendations to reduce waste based on your habits.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary font-semibold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Real-Time Statistics</h3>
                    <p className="text-muted-foreground">
                      Access up-to-date global water statistics, visualized through
                      interactive charts and graphs to understand the scope of water waste.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-semibold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Practical Conservation Tips</h3>
                    <p className="text-muted-foreground">
                      Discover easy-to-implement water saving strategies for every area of
                      your home, from bathroom to garden.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Educational Quiz</h3>
                    <p className="text-muted-foreground">
                      Test your knowledge about water conservation through our interactive
                      quiz and learn fascinating facts about water.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* eTwinning Info */}
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">About eTwinning</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                This project is part of the <strong>eTwinning</strong> initiative, Europe's
                community for schools. eTwinning offers a platform for staff (teachers, head
                teachers, librarians, etc.) working in a school in one of the European
                countries involved, to communicate, collaborate, develop projects, and share.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through eTwinning, we connect with students and educators from around the
                world to tackle global challenges like water conservation. Together, we learn,
                share ideas, and work towards creating a more sustainable future.
              </p>
              <div className="pt-4">
                <a
                  href="https://www.etwinning.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Learn more about eTwinning
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-12 md:p-16 text-center"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Every person can contribute to water conservation. Start your journey today and
              be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-primary font-medium hover:bg-white/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/tips"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Explore Tips
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
