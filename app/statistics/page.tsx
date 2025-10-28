"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Droplet, Users, Globe } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const globalWaterUsageData = [
  { category: "Agriculture", percentage: 70, color: "#4f46e5" },
  { category: "Industry", percentage: 19, color: "#06b6d4" },
  { category: "Domestic", percentage: 11, color: "#10b981" },
];

const waterScarcityByRegion = [
  { region: "Middle East", scarcity: 85 },
  { region: "North Africa", scarcity: 78 },
  { region: "South Asia", scarcity: 65 },
  { region: "Sub-Saharan Africa", scarcity: 58 },
  { region: "Latin America", scarcity: 35 },
  { region: "Europe", scarcity: 28 },
  { region: "North America", scarcity: 22 },
];

const waterWasteSources = [
  { source: "Leaking Toilets", litersPerDay: 200 },
  { source: "Dripping Faucets", litersPerDay: 75 },
  { source: "Running Hose", litersPerDay: 600 },
  { source: "Long Showers", litersPerDay: 150 },
  { source: "Washing Machine", litersPerDay: 100 },
];

const waterConsumptionTrend = [
  { year: "2015", consumption: 3800 },
  { year: "2016", consumption: 3900 },
  { year: "2017", consumption: 4000 },
  { year: "2018", consumption: 4100 },
  { year: "2019", consumption: 4200 },
  { year: "2020", consumption: 4250 },
  { year: "2021", consumption: 4300 },
  { year: "2022", consumption: 4350 },
  { year: "2023", consumption: 4400 },
];

export default function StatisticsPage() {
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
          <Badge className="bg-primary/10 text-primary">Global Statistics</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Water Waste{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              By The Numbers
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the scale of water waste worldwide and its impact on our planet
          </p>
        </motion.div>
      </section>

      {/* Key Stats Cards */}
      <section className="container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">People Without Safe Water</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2.2 Billion</div>
                <p className="text-xs text-muted-foreground mt-1">
                  29% of global population
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-secondary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Freshwater Wasted</CardTitle>
                <TrendingDown className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">30%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Lost to leaks and inefficiency
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-accent/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Daily Household Usage</CardTitle>
                <Droplet className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">150L</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Per person per day average
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Water-Stressed Countries</CardTitle>
                <Globe className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">25+</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Facing extreme water scarcity
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="container">
        <Tabs defaultValue="usage" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="scarcity">Scarcity</TabsTrigger>
            <TabsTrigger value="waste">Waste</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle>Global Water Usage Distribution</CardTitle>
                <CardDescription>
                  How freshwater resources are distributed across different sectors
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={globalWaterUsageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ category, percentage }) => `${category}: ${percentage}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="percentage"
                    >
                      {globalWaterUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scarcity">
            <Card>
              <CardHeader>
                <CardTitle>Water Scarcity by Region</CardTitle>
                <CardDescription>
                  Percentage of population experiencing water stress in different regions
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={waterScarcityByRegion}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="region"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="scarcity" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="waste">
            <Card>
              <CardHeader>
                <CardTitle>Common Water Waste Sources</CardTitle>
                <CardDescription>
                  Daily water loss from typical household sources (liters per day)
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={waterWasteSources} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="source" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="litersPerDay" fill="hsl(var(--secondary))" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Global Water Consumption Trend</CardTitle>
                <CardDescription>
                  Annual global water consumption in billion cubic meters
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={waterConsumptionTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="consumption"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--accent))", r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="container mt-12">
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Take Action Today</CardTitle>
            <CardDescription className="text-center">
              Small changes in your daily habits can make a significant impact
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <a
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Calculate Your Impact
            </a>
            <a
              href="/tips"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              View Water Saving Tips
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
