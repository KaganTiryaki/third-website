"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Sparkles, Home, Leaf, Utensils, Bath, Car } from "lucide-react";

interface Tip {
  title: string;
  description: string;
  impact: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  savings: string;
  icon: string;
}

const bathroomTips: Tip[] = [
  {
    title: "Take Shorter Showers",
    description: "Reduce your shower time to 5 minutes or less. Use a timer or play a short song to keep track.",
    impact: "Save up to 75 liters per shower",
    difficulty: "Easy",
    savings: "27,375L/year",
    icon: "🚿"
  },
  {
    title: "Turn Off Water While Brushing",
    description: "Don't let water run while brushing teeth or shaving. Turn it on only when needed.",
    impact: "Save up to 15 liters per day",
    difficulty: "Easy",
    savings: "5,475L/year",
    icon: "🪥"
  },
  {
    title: "Install Low-Flow Fixtures",
    description: "Replace old showerheads and faucets with water-efficient models that use less water while maintaining pressure.",
    impact: "Save up to 50% on water usage",
    difficulty: "Medium",
    savings: "40,000L/year",
    icon: "🔧"
  },
  {
    title: "Fix Leaky Toilets",
    description: "Check for and repair toilet leaks immediately. A running toilet can waste thousands of liters.",
    impact: "Save up to 200 liters per day",
    difficulty: "Medium",
    savings: "73,000L/year",
    icon: "🚽"
  },
  {
    title: "Install Dual-Flush Toilets",
    description: "Upgrade to dual-flush toilets that offer different flush volumes for liquid and solid waste.",
    impact: "Save 3-4 liters per flush",
    difficulty: "Advanced",
    savings: "20,000L/year",
    icon: "⚙️"
  }
];

const kitchenTips: Tip[] = [
  {
    title: "Run Full Dishwasher Loads",
    description: "Only run the dishwasher when it's completely full to maximize efficiency.",
    impact: "Save 30-40 liters per load",
    difficulty: "Easy",
    savings: "10,000L/year",
    icon: "🍽️"
  },
  {
    title: "Don't Pre-Rinse Dishes",
    description: "Modern dishwashers are designed to clean without pre-rinsing. Just scrape off food scraps.",
    impact: "Save 25 liters per load",
    difficulty: "Easy",
    savings: "9,125L/year",
    icon: "🚰"
  },
  {
    title: "Use a Basin for Washing",
    description: "Fill a basin for washing fruits, vegetables, or dishes instead of running water continuously.",
    impact: "Save 50 liters per day",
    difficulty: "Easy",
    savings: "18,250L/year",
    icon: "🥗"
  },
  {
    title: "Keep Cold Water in Fridge",
    description: "Store drinking water in the refrigerator instead of running the tap until water gets cold.",
    impact: "Save 10 liters per day",
    difficulty: "Easy",
    savings: "3,650L/year",
    icon: "🧊"
  },
  {
    title: "Install Faucet Aerators",
    description: "Add aerators to kitchen faucets to reduce water flow while maintaining pressure.",
    impact: "Save 30-50% on faucet water",
    difficulty: "Easy",
    savings: "15,000L/year",
    icon: "💧"
  }
];

const outdoorTips: Tip[] = [
  {
    title: "Water in Early Morning",
    description: "Water your garden early in the morning to minimize evaporation and maximize absorption.",
    impact: "Reduce water waste by 30%",
    difficulty: "Easy",
    savings: "20,000L/year",
    icon: "🌅"
  },
  {
    title: "Use Mulch Around Plants",
    description: "Apply mulch around plants to retain moisture, reduce evaporation, and suppress weeds.",
    impact: "Reduce watering needs by 50%",
    difficulty: "Easy",
    savings: "25,000L/year",
    icon: "🌱"
  },
  {
    title: "Install Drip Irrigation",
    description: "Use drip irrigation systems that deliver water directly to plant roots, minimizing waste.",
    impact: "Save 30-70% on garden water",
    difficulty: "Advanced",
    savings: "50,000L/year",
    icon: "💧"
  },
  {
    title: "Choose Native Plants",
    description: "Plant native species that are adapted to local climate and require less water.",
    impact: "Reduce watering by 40-60%",
    difficulty: "Medium",
    savings: "30,000L/year",
    icon: "🌿"
  },
  {
    title: "Collect Rainwater",
    description: "Install rain barrels to collect rainwater for garden irrigation and outdoor use.",
    impact: "Save hundreds of liters per rainfall",
    difficulty: "Medium",
    savings: "15,000L/year",
    icon: "🪣"
  },
  {
    title: "Wash Car with Bucket",
    description: "Use a bucket and sponge instead of a running hose to wash your car.",
    impact: "Save 300 liters per wash",
    difficulty: "Easy",
    savings: "3,600L/year",
    icon: "🚗"
  }
];

const householdTips: Tip[] = [
  {
    title: "Run Full Laundry Loads",
    description: "Always wait for a full load before running the washing machine to maximize efficiency.",
    impact: "Save 40 liters per load",
    difficulty: "Easy",
    savings: "14,600L/year",
    icon: "👕"
  },
  {
    title: "Reuse Towels",
    description: "Use towels multiple times before washing to reduce laundry frequency.",
    impact: "Reduce washing by 50%",
    difficulty: "Easy",
    savings: "7,000L/year",
    icon: "🧺"
  },
  {
    title: "Upgrade to High-Efficiency Machines",
    description: "Invest in ENERGY STAR certified washing machines that use significantly less water.",
    impact: "Save 50% on laundry water",
    difficulty: "Advanced",
    savings: "25,000L/year",
    icon: "⚡"
  },
  {
    title: "Check for Hidden Leaks",
    description: "Regularly check all pipes, faucets, and connections for leaks. Even small drips add up.",
    impact: "Save up to 100 liters per day",
    difficulty: "Easy",
    savings: "36,500L/year",
    icon: "🔍"
  },
  {
    title: "Insulate Water Pipes",
    description: "Insulate hot water pipes to get hot water faster and reduce water waste while waiting.",
    impact: "Save 15 liters per day",
    difficulty: "Medium",
    savings: "5,475L/year",
    icon: "🔥"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-accent/10 text-accent";
    case "Medium":
      return "bg-secondary/10 text-secondary";
    case "Advanced":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted";
  }
};

const TipCard = ({ tip, index }: { tip: Tip; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tip.icon}</span>
            <div>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
              <Badge className={`mt-2 ${getDifficultyColor(tip.difficulty)}`}>
                {tip.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{tip.description}</p>
        <div className="space-y-2 pt-2 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Impact:</span>
            <span className="font-medium text-primary">{tip.impact}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Annual Savings:</span>
            <span className="font-semibold text-accent">{tip.savings}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function TipsPage() {
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
          <Badge className="bg-accent/10 text-accent">
            <Sparkles className="w-3 h-3 mr-1 inline" />
            Conservation Guide
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Water Saving{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Tips & Tricks
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical ways to reduce water waste and make a real difference in your daily life
          </p>
        </motion.div>
      </section>

      {/* Quick Impact Stats */}
      <section className="container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <Droplet className="h-10 w-10 mx-auto text-primary" />
                <div className="text-3xl font-bold text-primary">150,000L</div>
                <p className="text-sm text-muted-foreground">
                  Average potential savings per household per year
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <Sparkles className="h-10 w-10 mx-auto text-secondary" />
                <div className="text-3xl font-bold text-secondary">30+</div>
                <p className="text-sm text-muted-foreground">
                  Easy-to-implement water saving tips
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <Home className="h-10 w-10 mx-auto text-accent" />
                <div className="text-3xl font-bold text-accent">40%</div>
                <p className="text-sm text-muted-foreground">
                  Average reduction in household water consumption
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips by Category */}
      <section className="container">
        <Tabs defaultValue="bathroom" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="bathroom">
              <Bath className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Bathroom</span>
            </TabsTrigger>
            <TabsTrigger value="kitchen">
              <Utensils className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Kitchen</span>
            </TabsTrigger>
            <TabsTrigger value="outdoor">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Outdoor</span>
            </TabsTrigger>
            <TabsTrigger value="household">
              <Home className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">House</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bathroom">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Bathroom Water Saving Tips</h2>
                <p className="text-muted-foreground">
                  The bathroom accounts for about 50% of household water use
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bathroomTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="kitchen">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Kitchen Water Saving Tips</h2>
                <p className="text-muted-foreground">
                  Save water while cooking, cleaning, and food preparation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kitchenTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="outdoor">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Outdoor Water Saving Tips</h2>
                <p className="text-muted-foreground">
                  Outdoor watering can use up to 50% of household water in summer
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {outdoorTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="household">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">General Household Tips</h2>
                <p className="text-muted-foreground">
                  Simple changes that make a big difference throughout your home
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {householdTips.map((tip, index) => (
                  <TipCard key={index} tip={tip} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="container mt-16">
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Start Saving Water Today</CardTitle>
            <CardDescription className="text-center">
              Every small action contributes to water conservation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Calculate Your Water Usage
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              Test Your Knowledge
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
