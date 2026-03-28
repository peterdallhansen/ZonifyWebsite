import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Zonify.ai",
  description:
    "Spatial intelligence built for the environments where people gather — retail, airports, leisure, and more.",
};

const industriesData = [
  {
    id: "shopping-centers",
    title: "Shopping Centers & Retail Real Estate",
    subtitle: "The Industry We Were Built For",
    description:
      "Shopping centers sit at the intersection of every stakeholder Zonify.ai serves — leasing teams, center managers, retailers, marketers, and investors all need the same underlying data, interpreted differently. We give the entire organization a shared spatial intelligence layer, so every decision is grounded in the same verified picture of how visitors actually behave.",
    benefits: [
      "Tenant mix and lease valuation backed by footfall evidence",
      "Cross-visitation mapping between anchors and neighboring units",
      "Portfolio-level benchmarking across multiple assets",
      "Automated reporting for tenants and investor stakeholders",
    ],
    image: "/images/unsplash/center2.jpg",

    imageAlt: "Shopping center spatial analytics overview",
    proof:
      "Remote onboarding of a 40,000 m² center across 50+ cameras — without an on-site visit",
  },
  {
    id: "retail-chains",
    title: "Retail Chains & Store Networks",
    subtitle: "Every Store. One View.",
    description:
      "For multi-site retail operators, the challenge is rarely data — it is comparable, consistent data across every location. Zonify.ai connects your existing camera networks into a single analytics layer, so you can benchmark store performance, understand layout effectiveness, and make staffing decisions that actually reflect how customers move through your spaces.",
    benefits: [
      "Footfall-to-sales conversion tracking by location",
      "Layout and display engagement analysis",
      "Cross-location performance benchmarking",
      "Predictive staffing based on traffic forecasts",
    ],
    image: "/images/unsplash/clothes2.jpg",
    imageAlt: "Retail chain performance dashboard",
    proof: null,
  },
  {
    id: "airports",
    title: "Airports & Transportation Hubs",
    subtitle: "Where Every Minute of Dwell Time Has a Price",
    description:
      "Airports are high-stakes spatial environments — congestion costs safety, dwell time drives retail revenue, and passenger flow shapes the entire commercial operation. Zonify.ai turns your existing CCTV infrastructure into a live operational layer, revealing where passengers go, how long they stay, and where revenue opportunities are being left on the table.",
    benefits: [
      "Passenger flow and bottleneck detection across terminals",
      "Concession and retail dwell-time analysis",
      "Gate and security queue monitoring",
      "Demographic segmentation for commercial planning",
    ],
    image: "/images/unsplash/plane.jpg",

    imageAlt: "Airport passenger flow analytics",
    proof: null,
  },
  {
    id: "leisure-venues",
    title: "Leisure, Entertainment & Attractions",
    subtitle: "Turn Visitor Experience Into a Competitive Advantage",
    description:
      "Theme parks, museums, arenas, and entertainment venues live and die by visitor experience. Knowing where crowds form, how guests move between attractions, and which areas underperform gives operators the tools to reduce frustration, improve throughput, and design spaces that keep people engaged — and coming back.",
    benefits: [
      "Real-time crowd density and congestion alerts",
      "Attraction dwell-time and engagement scoring",
      "Event impact measurement and footfall attribution",
      "Staffing and operational planning from traffic forecasts",
    ],
    image: "/images/unsplash/leisure.webp",
    imageAlt: "Leisure venue visitor flow map",
    proof: null,
  },
  {
    id: "supermarkets",
    title: "Supermarkets & Grocery Retail",
    subtitle: "Optimize the Space That Drives Margin",
    description:
      "In grocery retail, centimetres of shelf space and seconds of dwell time translate directly into revenue. Zonify.ai gives category managers and store operators visibility into how shoppers navigate the floor, which areas drive unplanned purchases, and where queue friction is costing basket size — all without touching your existing infrastructure.",
    benefits: [
      "Aisle and category engagement heatmaps",
      "Queue length and checkout flow monitoring",
      "Promotional endcap and display performance tracking",
      "Peak hour and seasonal traffic forecasting",
    ],
    image: "/images/unsplash/stand.jpg",
    imageAlt: "Supermarket floor analytics dashboard",
    proof: null,
  },
  {
    id: "dooh-media",
    title: "Out-of-Home Media & DOOH Networks",
    subtitle: "Sell Audiences, Not Screens",
    description:
      "The shift to programmatic and data-driven OOH advertising depends on one thing: certified, verifiable audience data. Zonify.ai measures exactly how many people were exposed to each screen, broken down by time window and demographic profile — giving media owners the proof they need to command premium rates and compete with digital channels.",
    benefits: [
      "Verified impression counts per screen and time slot",
      "Demographic audience profiles for advertisers",
      "Campaign uplift and footfall attribution reporting",
      "Programmatic-ready audience data feeds",
    ],
    image: "/images/unsplash/DOOH.jpg",
    imageAlt: "DOOH audience measurement dashboard",
    proof: null,
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 md:px-8 pb-16">
        {/* Hero */}
        <section className="mt-40 md:mt-52 grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-7">
            <h1 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em]">
              Built for every team that runs your space
            </h1>
          </div>
        </section>

        {/* Rows */}
        <section>
          <div className="grid grid-cols-8">
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                id={industry.id}
                className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-8 md:py-10 scroll-m-20"
              >
                {/* LEFT TEXT */}
                <div className="col-span-full flex flex-col gap-4 md:col-span-4 xl:col-span-2">
                  <h2 className="text-xl md:text-2xl font-medium">
                    {industry.title}
                  </h2>

                  <p className="text-md text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  <a
                    href={`#${industry.id}`}
                    className="text-sm text-gray-900 flex items-center gap-1 group"
                  >
                    Case example
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-span-full md:col-span-4 md:col-start-5">
                  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <div className="w-full">
                      <div className="relative w-full min-h-[320px] overflow-hidden rounded-lg  md:min-h-[520px]">
                        <Image
                          src={industry.image}
                          alt={industry.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 767px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
