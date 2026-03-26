import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";

export const metadata: Metadata = {
  title: "Use Cases | Zonify.ai",
  description: "Discover how Zonify transforms physical spaces into actionable intelligence.",
};

const useCasesData = [
  {
    id: "live-footfall",
    title: "Live Footfall Analytics & Traffic Patterns",
    subtitle: "See Every Footstep, Instantly",
    description: "Gain real-time visibility into how many visitors are in your space at any given moment. Understand entry rates, exit rates, and current occupancy with 99% accuracy.",
    benefits: [
      "Track current occupancy",
      "Monitor peak hours",
      "Analyze historical footfall context"
    ],
    image: "/images/cloud-infrastructure-node.png", // Using existing placeholder from UseCases.tsx
    imageAlt: "Live Footfall Analytics Dashboard",
  },
  {
    id: "demographics",
    title: "Demographics & Audience Segmentation",
    subtitle: "Understand Who Visits — and Why",
    description: "Go beyond simple counting. Segment your visitors by age, gender, and group size to uncover valuable behavioral patterns, allowing you to tailor experiences and marketing campaigns.",
    benefits: [
      "Age & Gender breakdown",
      "Group size analysis",
      "100% GDPR-compliant, anonymized data"
    ],
    image: "/images/ai-object-detection.png",
    imageAlt: "Demographic Segmentation Analysis",
  },
  {
    id: "occupancy",
    title: "Occupancy & Crowd Management",
    subtitle: "Ensure Safety and Comfort in Real Time",
    description: "Accurately manage risks ranging from unauthorized access to overcrowding, both indoors and outdoors. Improve throughput in queueing so visitors spend more time engaging rather than waiting.",
    benefits: [
      "Queue length monitoring",
      "Bottleneck identification",
      "Automated alerts for capacity limits"
    ],
    image: "/images/tenant-occupancy-map.png",
    imageAlt: "Crowd Management Interface",
  },
  {
    id: "journey-tracking",
    title: "Journey Tracking & Cross-Visitation",
    subtitle: "Track the Complete Visitor Journey",
    description: "Follow the full path of visitors from entry to exit. Understand how different stores or zones drive traffic to others, and identify stand-alone destinations within your venue.",
    benefits: [
      "Path-to-purchase visualization",
      "Cross-shopping insights",
      "Visit duration metrics"
    ],
    image: "/images/3d-digital-twin-map.png",
    imageAlt: "3D Journey Tracking View",
  },
  {
    id: "layout-optimization",
    title: "Layout Optimization & Heatmaps",
    subtitle: "Visualize Engagement to Maximize Value",
    description: "See exactly where people spend the most time. Heatmaps reveal visitor hotspots and spatial flow, empowering you to optimize layouts, justify rents, and plan infrastructure confidently.",
    benefits: [
      "Dwell-time analysis",
      "Zone engagement scoring",
      "Data-backed layout adjustments"
    ],
    image: "/images/integration-change-management.png",
    imageAlt: "Layout Optimization Heatmap",
  }
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-medium mb-6 text-balance">
          Transform Physical Spaces into Actionable Intelligence
        </h1>
        <p className="text-lg md:text-xl text-primary/70 max-w-3xl text-balance">
          Discover how Zonify’s AI-powered spatial analytics empowers retail, smart cities, and airports to make data-driven decisions that elevate visitor experiences and drive revenue.
        </p>
      </section>

      {/* Main Content Sections */}
      <div className="w-full flex flex-col gap-24 md:gap-40 py-10">
        {useCasesData.map((useCase, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={useCase.id}
              id={useCase.id}
              className="w-full max-w-7xl mx-auto px-6 scroll-mt-24"
            >
              <div className={`flex flex-col gap-12 lg:gap-20 items-center justify-between ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="space-y-4">
                    <h2 className="text-sm font-semibold tracking-wider uppercase text-primary/50">
                      {useCase.subtitle}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-medium text-balance">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-3 mt-4">
                    {useCase.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center gap-3 text-primary/80">
                         <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 relative top-[1px]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Wrap */}
                <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]  overflow-hidden flex items-center justify-center p-8">
                  <Image
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA section matching the main homepage style */}
      {/* <section className="w-full pb-20 pt-10 px-4 flex justify-center">
        <AnalyticsTeaser />
      </section> */}
    </main>
  );
}
