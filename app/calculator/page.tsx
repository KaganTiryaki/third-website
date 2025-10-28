"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, Droplet, TrendingDown, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface WaterUsage {
  showerMinutes: number;
  baths: number;
  toiletFlushes: number;
  dishwashing: number;
  laundryLoads: number;
  gardenMinutes: number;
}

export default function CalculatorPage() {
  const [usage, setUsage] = useState<WaterUsage>({
    showerMinutes: 8,
    baths: 0,
    toiletFlushes: 6,
    dishwashing: 1,
    laundryLoads: 1,
    gardenMinutes: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const calculateWaterUsage = () => {
    const showerWater = usage.showerMinutes * 9; // 9L per minute
    const bathWater = usage.baths * 150; // 150L per bath
    const toiletWater = usage.toiletFlushes * 6; // 6L per flush
    const dishWater = usage.dishwashing * 20; // 20L per session
    const laundryWater = usage.laundryLoads * 50; // 50L per load
    const gardenWater = usage.gardenMinutes * 15; // 15L per minute

    const total =
      showerWater + bathWater + toiletWater + dishWater + laundryWater + gardenWater;

    const breakdown = [
      { name: "Shower", amount: showerWater, icon: "🚿" },
      { name: "Bath", amount: bathWater, icon: "🛁" },
      { name: "Toilet", amount: toiletWater, icon: "🚽" },
      { name: "Dishwashing", amount: dishWater, icon: "🍽️" },
      { name: "Laundry", amount: laundryWater, icon: "👕" },
      { name: "Garden", amount: gardenWater, icon: "🌱" },
    ].filter((item) => item.amount > 0);

    return { total, breakdown };
  };

  const getSavingsTips = (total: number) => {
    const tips = [];
    if (usage.showerMinutes > 5) {
      const saving = (usage.showerMinutes - 5) * 9;
      tips.push({
        tip: "Reduce shower time to 5 minutes",
        saving: saving,
        icon: "🚿",
      });
    }
    if (usage.baths > 0) {
      tips.push({
        tip: "Replace baths with showers",
        saving: usage.baths * 100,
        icon: "🛁",
      });
    }
    if (usage.toiletFlushes > 4) {
      tips.push({
        tip: "Install dual-flush toilet",
        saving: usage.toiletFlushes * 2,
        icon: "🚽",
      });
    }
    if (usage.gardenMinutes > 10) {
      tips.push({
        tip: "Use drip irrigation system",
        saving: usage.gardenMinutes * 5,
        icon: "🌱",
      });
    }
    return tips;
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const { total, breakdown } = calculateWaterUsage();
  const savingsTips = getSavingsTips(total);
  const potentialSavings = savingsTips.reduce((sum, tip) => sum + tip.saving, 0);
  const optimizedUsage = total - potentialSavings;
  const averageUsage = 150;
  const usagePercentage = (total / averageUsage) * 100;

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
          <Badge className="bg-secondary/10 text-secondary">
            <Calculator className="w-3 h-3 mr-1 inline" />
            Interactive Tool
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Water Usage{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your daily water consumption and discover personalized ways to conserve
          </p>
        </motion.div>
      </section>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Daily Water Activities</CardTitle>
              <CardDescription>
                Enter your typical daily water usage habits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="shower">Shower Duration (minutes)</Label>
                <Input
                  id="shower"
                  type="number"
                  min="0"
                  value={usage.showerMinutes}
                  onChange={(e) =>
                    setUsage({ ...usage, showerMinutes: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">Average: 8 minutes</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="baths">Number of Baths</Label>
                <Input
                  id="baths"
                  type="number"
                  min="0"
                  value={usage.baths}
                  onChange={(e) =>
                    setUsage({ ...usage, baths: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">
                  One bath uses ~150 liters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="toilet">Toilet Flushes</Label>
                <Input
                  id="toilet"
                  type="number"
                  min="0"
                  value={usage.toiletFlushes}
                  onChange={(e) =>
                    setUsage({ ...usage, toiletFlushes: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">Average: 6-8 times/day</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dishwashing">Dishwashing Sessions</Label>
                <Input
                  id="dishwashing"
                  type="number"
                  min="0"
                  value={usage.dishwashing}
                  onChange={(e) =>
                    setUsage({ ...usage, dishwashing: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">Manual dishwashing</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="laundry">Laundry Loads</Label>
                <Input
                  id="laundry"
                  type="number"
                  min="0"
                  value={usage.laundryLoads}
                  onChange={(e) =>
                    setUsage({ ...usage, laundryLoads: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Average: 1 load per day
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="garden">Garden Watering (minutes)</Label>
                <Input
                  id="garden"
                  type="number"
                  min="0"
                  value={usage.gardenMinutes}
                  onChange={(e) =>
                    setUsage({ ...usage, gardenMinutes: parseInt(e.target.value) || 0 })
                  }
                />
                <p className="text-xs text-muted-foreground">Time spent watering</p>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calculate My Usage
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {showResults ? (
            <>
              {/* Total Usage Card */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Your Daily Water Usage</span>
                    <Droplet className="h-6 w-6 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary mb-4">{total}L</div>
                  <Progress value={Math.min(usagePercentage, 100)} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {usagePercentage > 100
                      ? `${(usagePercentage - 100).toFixed(0)}% above`
                      : `${(100 - usagePercentage).toFixed(0)}% below`}{" "}
                    average usage (150L/day)
                  </p>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Usage Breakdown</h4>
                    {breakdown.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <Badge variant="outline">{item.amount}L</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Savings Potential Card */}
              {savingsTips.length > 0 && (
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-accent" />
                      Savings Potential
                    </CardTitle>
                    <CardDescription>
                      You could save up to {potentialSavings}L per day
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {savingsTips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10"
                      >
                        <span className="text-2xl">{tip.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{tip.tip}</p>
                          <p className="text-xs text-muted-foreground">
                            Save ~{tip.saving}L/day
                          </p>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Current Usage:</span>
                        <span className="text-sm">{total}L/day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Optimized Usage:</span>
                        <span className="text-sm text-accent font-semibold">
                          {optimizedUsage}L/day
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-bold">Annual Savings:</span>
                        <span className="text-lg font-bold text-accent">
                          {(potentialSavings * 365).toLocaleString()}L
                        </span>
                      </div>
                    </div>

                    <Button asChild className="w-full" variant="outline">
                      <a href="/tips">
                        <TrendingDown className="mr-2 h-4 w-4" />
                        View More Water Saving Tips
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <Calculator className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ready to Calculate?</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Fill in your daily water usage habits and click the calculate button to
                  see your results and personalized savings tips.
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
