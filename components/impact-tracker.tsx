"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Users, TrendingUp, Zap } from "lucide-react";

export function ImpactTracker() {
  const [waterSaved, setWaterSaved] = useState(0);
  const [peopleHelped, setPeopleHelped] = useState(0);

  useEffect(() => {
    // Simulate real-time counter
    const waterInterval = setInterval(() => {
      setWaterSaved((prev) => prev + Math.floor(Math.random() * 100 + 50));
    }, 2000);

    const peopleInterval = setInterval(() => {
      setPeopleHelped((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(waterInterval);
      clearInterval(peopleInterval);
    };
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            Community Impact
          </CardTitle>
          <Badge className="bg-accent/10 text-accent animate-pulse">Live</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <motion.div
          key={`water-${waterSaved}`}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
          className="text-center p-4 rounded-lg bg-primary/5"
        >
          <Droplet className="h-6 w-6 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-primary">
            {formatNumber(waterSaved)}L
          </div>
          <p className="text-xs text-muted-foreground mt-1">Water Saved Today</p>
        </motion.div>

        <motion.div
          key={`people-${peopleHelped}`}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
          className="text-center p-4 rounded-lg bg-secondary/5"
        >
          <Users className="h-6 w-6 mx-auto mb-2 text-secondary" />
          <div className="text-2xl font-bold text-secondary">
            {formatNumber(peopleHelped)}
          </div>
          <p className="text-xs text-muted-foreground mt-1">People Taking Action</p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
