"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplet } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    saved: 100,
    equivalent: "13 toilet flushes",
    icon: "🚽",
    activity: "Taking a 5-minute shower instead of 10 minutes",
  },
  {
    saved: 150,
    equivalent: "A bathtub full of water",
    icon: "🛁",
    activity: "Fixing a leaky faucet for one day",
  },
  {
    saved: 50,
    equivalent: "6 bottles of drinking water",
    icon: "💧",
    activity: "Turning off tap while brushing teeth",
  },
  {
    saved: 300,
    equivalent: "2 washing machine loads",
    icon: "👕",
    activity: "Using a bucket instead of hose to wash car",
  },
  {
    saved: 200,
    equivalent: "20 cups of coffee",
    icon: "☕",
    activity: "Installing a low-flow showerhead",
  },
  {
    saved: 75,
    equivalent: "5 water bottles for school",
    icon: "🎒",
    activity: "Using a glass of water instead of running tap",
  },
];

export function ComparisonTool() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card className="border-secondary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplet className="h-5 w-5 text-secondary" />
          Water Savings Visualizer
        </CardTitle>
        <CardDescription>
          See how your actions translate into real-world impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {comparisons.map((comp, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-3 rounded-lg border-2 transition-all text-left ${
                selectedIndex === index
                  ? "border-secondary bg-secondary/10"
                  : "border-border hover:border-secondary/50"
              }`}
            >
              <div className="text-2xl mb-1">{comp.icon}</div>
              <div className="text-xs text-muted-foreground line-clamp-2">
                {comp.activity}
              </div>
            </button>
          ))}
        </div>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">
                {comparisons[selectedIndex].saved}L
              </div>
              <p className="text-sm text-muted-foreground">Water Saved</p>
            </div>

            <ArrowRight className="h-8 w-8 text-muted-foreground" />

            <div className="text-center">
              <div className="text-3xl mb-2">{comparisons[selectedIndex].icon}</div>
              <div className="text-lg font-semibold">
                {comparisons[selectedIndex].equivalent}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-secondary/20">
            <p className="text-sm text-center text-muted-foreground">
              By {comparisons[selectedIndex].activity.toLowerCase()}, you save enough
              water for {comparisons[selectedIndex].equivalent.toLowerCase()}
            </p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <Badge variant="outline" className="text-xs">
            Click icons to compare different actions
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
