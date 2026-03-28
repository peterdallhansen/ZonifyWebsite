import React from "react";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Use Cases | Zonify.ai",
  description:
    "See how every team in your organization can use spatial intelligence to make better decisions.",
};

const useCasesData = [
  {
    id: "leasing-management",
    title: "Leasing Management",
    subtitle: "Negotiate From a Position of Proof",
    description:
      "Give your leasing team hard evidence for every conversation. Know which zones command premium footfall, which anchor tenants drive cross-visits to neighboring units, and which spaces are underperforming relative to their rent. Replace gut feel with data that holds up in a room.",
    benefits: [
      "Zone-level footfall and dwell-time valuation",
      "Anchor tenant influence and cross-visitation mapping",
      "Occupancy benchmarking across your portfolio",
    ],
    image: "/images/unsplash/contract.webp",
    imageAlt: "Leasing performance dashboard",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    subtitle: "Manage Portfolio Performance With Confidence",
    description:
      "Move beyond lagging financial indicators. Track visitor behavior across your entire asset portfolio in real time, benchmark sites against each other, and identify where operational or commercial changes will have the most impact on long-term asset value.",
    benefits: [
      "Portfolio-wide footfall benchmarking",
      "Site-level performance comparison",
      "Historical trend analysis for asset reporting",
    ],
    image: "/images/unsplash/city.webp",
    imageAlt: "Portfolio analytics overview",
  },
  {
    id: "center-management",
    title: "Center Management",
    subtitle: "Run a Tighter, Safer Operation Every Day",
    description:
      "Keep a live pulse on what is happening across your entire venue. Monitor occupancy by zone, detect crowd build-ups before they become problems, and make staffing and operational decisions based on what is actually happening — not what happened yesterday.",
    benefits: [
      "Real-time zone occupancy and crowd alerts",
      "Queue and bottleneck detection",
      "Operational dashboards for on-the-ground teams",
    ],
    image: "/images/unsplash/center3.webp",
    imageAlt: "Live center management dashboard",
  },
  {
    id: "retail-management",
    title: "Retail Management",
    subtitle: "Turn Visitor Data Into Store Performance",
    description:
      "Connect footfall with sales data to reveal your true conversion rate. Understand which displays and layouts drive engagement, where visitors drop off before purchasing, and how queue lengths are affecting revenue — at every location in your network.",
    benefits: [
      "Footfall-to-sales conversion tracking",
      "Display and layout engagement analysis",
      "Queue impact on sales performance",
    ],
    image: "/images/unsplash/browsing.webp",
    imageAlt: "Retail conversion analytics",
  },
  {
    id: "marketing-communication",
    title: "Marketing & Communication",
    subtitle: "Prove That Your Campaigns Drive Real Foot Traffic",
    description:
      "Stop reporting impressions and start reporting outcomes. Measure the before-and-after footfall impact of every campaign, event, and activation. Know which demographic groups responded, which zones benefited, and what is actually worth repeating.",
    benefits: [
      "Campaign footfall attribution",
      "Demographic audience segmentation",
      "Event and activation impact measurement",
    ],
    image: "/images/unsplash/marketing.webp",
    imageAlt: "Marketing campaign footfall impact",
  },
  {
    id: "people-planning",
    title: "People Planning & Staffing",
    subtitle: "Put the Right People in the Right Place at the Right Time",
    description:
      "Use predictive traffic forecasting to plan rosters before peak hours arrive. Identify which zones are understaffed during high-traffic windows and which are overstaffed during quiet periods. Reduce waste and improve service quality at the same time.",
    benefits: [
      "Predictive footfall forecasting for roster planning",
      "Zone-level staffing gap identification",
      "Peak hour and seasonal demand modelling",
    ],
    image: "/images/unsplash/staff.webp",
    imageAlt: "Staffing and traffic forecasting",
  },
  {
    id: "stakeholder-management",
    title: "Stakeholder & Investor Reporting",
    subtitle: "Share Credible Data With the People Who Need It",
    description:
      "Deliver professional, automated reports to tenants, investors, and board stakeholders — built on verified spatial data rather than estimates. Scheduled reporting, role-based access, and natural-language BI mean the right people always have the right numbers.",
    benefits: [
      "Automated tenant and investor reporting",
      "Role-based access for external stakeholders",
      "Natural-language querying for non-technical audiences",
    ],
    image: "/images/unsplash/meeting.webp",
    imageAlt: "Stakeholder reporting suite",
  },
];

export default function UseCasesPage() {
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
            {useCasesData.map((useCase) => (
              <div
                key={useCase.id}
                id={useCase.id}
                className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-8 md:py-10 scroll-m-20"
              >
                {/* LEFT TEXT */}
                <div className="col-span-full flex flex-col gap-4 md:col-span-4 xl:col-span-2">
                  <h2 className="text-xl md:text-2xl font-medium">
                    {useCase.title}
                  </h2>

                  <p className="text-md text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>

                  <a
                    href={`#${useCase.id}`}
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
                          src={useCase.image}
                          alt={useCase.imageAlt}
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
