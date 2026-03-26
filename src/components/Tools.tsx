"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Lottie from "lottie-react";

type ToolFeature = {
  title: string;
  headline: string;
  description: string;
  filters: string[];
  imageSrc?: string;
  animationSrc?: string;
};

const toolsData: Record<string, ToolFeature> = {
  "Audience Demographics": {
    title: "Audience Demographics",
    headline: "Know Exactly Who Visits",
    description:
      "Go beyond raw counting. Our AI securely processes video streams to provide aggregated reports on visitor age, gender, and demographics. Get actionable insights while remaining 100% GDPR compliant.",
    filters: ["Age Breakdown", "Gender Split", "Return Rate"],
   
    animationSrc: "/animations/Widget.json",
  },
  "Zone Heatmaps": {
    title: "Zone Heatmaps",
    headline: "Visualize Foot Traffic Instantly",
    description:
      "Understand how your physical space is utilized in real-time. Identify hot spots and bottle necks to optimize floor layouts, staff allocation, and product placements effortlessly.",
    filters: ["Density Mapping", "Path Visualization", "Activity Zones"],
    animationSrc: "/animations/Widget2.json",
  },
  "Dwell Time Analysis": {
    title: "Dwell Time Analysis",
    headline: "Measure True Engagement",
    description:
      "Track exactly how long people spend at specific displays, aisles, or storefronts. Correlate dwell time with sales data to measure the effectiveness of your spatial strategy.",
    filters: ["Interaction Time", "Average Stay", "Bouncers"],
   animationSrc: "/animations/Research3.json",
  },
  "Cross-Visit Tracking": {
    title: "Cross-Visit Tracking",
    headline: "Analyze Multi-Site Behavior",
    description:
      "Understand if the same demographic groups are visiting different locations within your network. Uncover regional trends and benchmark store performance against each other.",
    filters: ["Multi-site Analysis", "Regional Trends", "Customer Loyalty"],
    imageSrc: "/images/real-time-visitor-tracking.png",
  },
  "Predictive Forecasting": {
    title: "Predictive Forecasting",
    headline: "Anticipate Future Traffic",
    description:
      "Leverage historical data combined with deep learning algorithms to predict future visitor volumes. Optimize your operations ahead of time before the crowds even arrive.",
    filters: ["Traffic Forecast", "Staff Planning", "Peak Hours"],
    imageSrc: "/images/predictive-traffic-forecasting.png",
    animationSrc: "/animations/LoadingResearch.json",
  },
  "AI Data Assistant": {
    title: "AI Data Assistant",
    headline: "Chat With Your Business Data",
    description:
      'Stop staring at static graphs. Use natural language to ask complex questions like "What was the conversion rate at the front display yesterday?" and get instant answers.',
    filters: ["Natural Language", "Custom Reporting", "Instant BI"],
    imageSrc: "/images/Agent.png",
    animationSrc: "/animations/Research3.json",
  },
  "Retail Conversion": {
    title: "Retail Conversion",
    headline: "Optimize Store Conversions",
    description:
      "Connect footfall data with your POS to reveal true conversion rates. Monitor queue lengths, optimize staff schedules during peak hours, and measure the success of window displays.",
    filters: ["Conversion Tuning", "Queue Management", "Staff Optimization"],
    imageSrc: "/images/analytics-hub-preview.png",
  },
  "Lease Valuation": {
    title: "Lease Valuation",
    headline: "Data-Driven Tenant Mix",
    description:
      "Equip your leasing team with undeniable proof of foot traffic. Understand which anchor tenants drive the most cross-visits and use hard data to justify optimal rent valuations for retail spaces.",
    filters: ["Tenant Value", "Cross-Visits", "Rent Justification"],
    imageSrc: "/images/tenant-occupancy-map.png",
  },
  "Media & DOOH": {
    title: "Media & DOOH",
    headline: "Monetize Screen Audiences",
    description:
      "Measure the exact audience exposed to your digital out-of-home screens. Deliver certified data on impressions and demographics to advertisers, enabling programmatic and premium ad sales.",
    filters: ["Opportunity to See", "Campaign Analytics", "Programmatic Ready"],
    imageSrc: "/images/live-performance-gauges.png",
  },
  "Security & Operations": {
    title: "Security & Operations",
    headline: "Live Operational Control",
    description:
      "Monitor real-time occupancy across varied zones to ensure safety compliance. Receive instant alerts on crowding or unusual flow patterns to preemptively dispatch security or staff.",
    filters: ["Live Occupancy", "Crowd Alerts", "Flow Management"],
    imageSrc: "/images/entrance-traffic-analytics.png",
  },
  "Event Analytics": {
    title: "Event Analytics",
    headline: "Measure Event Impact",
    description:
      "Quantify the success of marketing campaigns, pop-up shops, and seasonal events. Compare historical data to determine which activations truly drove incremental foot traffic and dwell time.",
    filters: ["Campaign ROI", "A/B Testing", "Footfall Attribution"],
    imageSrc: "/images/executive-summary-report.png",
  },
};

const tabs = Object.keys(toolsData);

export default function Tools() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const currentTool = toolsData[activeTab];
  const [activeFilter, setActiveFilter] = useState(currentTool.filters[0]);
  const [animationData, setAnimationData] = useState<any>(null);

  // Auto switch the active tab every 6 seconds.
  // The dependency on activeTab ensures the timer resets when manually clicked.
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setActiveTab((current) => {
  //         const currentIndex = tabs.indexOf(current)
  //         return tabs[(currentIndex + 1) % tabs.length]
  //       })
  //     }, 6000)

  //     return () => clearInterval(timer)
  //   }, [activeTab])

  useEffect(() => {
    setActiveFilter(toolsData[activeTab].filters[0]);

    // Fetch lottie data if present
    const animSrc = toolsData[activeTab].animationSrc;
    if (animSrc) {
      setAnimationData(null); // reset while loading
      fetch(animSrc)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch(console.error);
    } else {
      setAnimationData(null);
    }
  }, [activeTab]);

  return (
    <div className="">
      {/* Hero Section */}
      <header className="px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-balance mb-4">
          Deep spatial insights.
        </h1>
        <p className="text-xl md:text-2xl font-normal tracking-tight text-balance text-muted-foreground/80 max-w-3xl mx-auto">
          Powered by your existing cameras.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="px-6 mb-16">
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-7xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 m-1 text-base rounded-md transition-colors ${
                activeTab === tab
                  ? "font-semibold text-foreground bg-primary/10  "
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
                {currentTool.headline}
              </h2>

              <p className="text-lg leading-relaxed text-foreground/80">
                {currentTool.description}
              </p>

              <div className="flex gap-3 pt-4 flex-wrap">
                {currentTool.filters.map((filter) => (
                  <div
                    key={filter}
                    // variant={activeFilter === filter ? 'default' : 'outline'}
                    // size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className="rounded-full border px-3 py-1 text-sm"
                  >
                    {filter}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Split Image / Animation */}
            <div className="relative aspect-[4/3] overflow-hidden ">
              <div className="h-full flex items-center justify-center relative">
                {currentTool.animationSrc && animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <>
                    {currentTool.imageSrc && (
                      <Image
                        src={currentTool.imageSrc}
                        alt={currentTool.headline}
                        fill
                        className="object-contain opacity-80"
                      />
                    )}
                  </>
                )}

                {/* Fallback graphic if media is missing */}
                {!currentTool.animationSrc && !currentTool.imageSrc && (
                  <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background/5">
                    <div className="text-muted-foreground/60 text-center space-y-3 p-6 border border-dashed border-muted-foreground/20 rounded-lg">
                      <p className="font-mono text-xs uppercase tracking-widest">
                        {activeFilter}
                      </p>
                      <p className="text-sm font-medium">Dashboard Interface</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
