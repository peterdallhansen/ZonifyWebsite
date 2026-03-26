"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useEffect, useMemo, useState } from "react";

// Reuse the same visual assets from the homepage Offerings carousel
import frame102 from "@/public/images/vision-ai-dashboard.png";
import frame103 from "@/public/images/spatial-intelligence-map.png";
import reportImage from "@/public/images/automated-reporting-suite.png";
import searchAnim from "@/public/animations/SearchAnim.json";
import researchAnim from "@/public/animations/Research3.json";
import loadingResearchAnim from "@/public/animations/LoadingResearch.json";
import widgetAnim from "@/public/animations/Widget2.json";

/**
 * Scrollable feature showcase for the Core Platform page.
 * Uses the shared SidebarMenu component for sticky navigation
 * and renders each section with title, body, CTA, and visual asset.
 */
function CoreShowcase() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      {
        id: "vision-ai",
        title: "Vision AI Engine",
        body: `Our proprietary AI transforms raw 2D video feeds into anonymized behavioral data in real time. No facial recognition. No biometric storage. Every frame is processed and anonymized within milliseconds before any data touches storage — ensuring absolute privacy compliance from the ground up. The result: enterprise-grade visitor intelligence powered by the cameras you already own.`,
        cta: "Learn about our privacy approach",
        href: "/compliance",
        image: frame102,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Visitor Tracking",
        body: `Monitor live footfall, movement paths, zone engagement, dwell-time, and queue formation across every connected camera. See how visitors navigate your spaces as it happens — giving operations, marketing, and management teams immediate situational awareness and the ability to respond in the moment.`,
        cta: "Explore the Analytics Hub",
        href: "/solutions/analytics-hub",
        image: frame103,
      },
      {
        id: "demographics",
        title: "Audience Profiling",
        body: `Understand who visits your spaces with anonymized demographic segmentation. Age and gender breakdowns, audience composition trends, and visitor quality scoring help marketing teams target the right audiences, leasing teams benchmark tenant performance, and operations teams staff to real demand — all without storing a single piece of personal data.`,
        cta: "See how it works",
        href: "/use-cases#demographics",
        animation: researchAnim,
      },
      {
        id: "spatial-intelligence",
        title: "Spatial Intelligence",
        body: `Go beyond counting entrances. Visualize movement with heatmaps, trace visitor journeys across zones, measure cross-visitation between tenants, and identify friction points in your layout — all from an interactive 3D map. Understand how every square meter of your space contributes to engagement and revenue.`,
        cta: "Explore the interactive map",
        href: "/solutions/analytics-hub",
        animation: searchAnim,
      },
      {
        id: "privacy-compliance",
        title: "Privacy & Compliance",
        body: `Privacy is not a feature bolt-on — it is the architectural foundation. Zonify processes video data through a GDPR-by-design pipeline: anonymization within milliseconds, no facial recognition, no biometric data, encryption at rest and in transit, role-based access controls, complete audit trails, and regional data residency options. Every safeguard is documented and ready for review.`,
        cta: "Read our compliance overview",
        href: "/compliance",
        animation: widgetAnim,
      },
      {
        id: "deployment",
        title: "Deployment Options",
        body: `Choose the deployment model that fits your infrastructure and governance requirements. Cloud processing offers fast setup with secure EU-hosted infrastructure, while on-premises deployment gives you full control with pre-configured server hardware. Both options connect to your existing camera network — no rip-and-replace projects, no new sensors, no disruption.`,
        cta: "Explore deployment options",
        href: "/deployment/cloud",
        image: reportImage,
      },
    ],
    []
  );

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      sectionElements.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(el.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        {/* Section intro */}
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px] text-opacity-80 mb-0 md:mb-20">
            From raw video to actionable intelligence — understand how Zonify
            turns your existing camera network into a privacy-first analytics
            layer for every team in your organization.
          </h2>
        </BlurFade>

        {/* Sidebar + scrolling content */}
        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sticky sidebar navigation */}
          <div
            className="self-start w-[400px] sticky top-40 hidden md:block"
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/solutions/core"
            />
          </div>

          {/* Content sections */}
          <div className="flex align-start justify-start flex-col h-full container text-left">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-primary max-w-[750px] mb-8 text-left scroll-mt-40"
                >
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-primary max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </h2>
                <a href={section.href}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 pl-0 py-1 transition ease-out hover:text-neutral-600 hover:dark:text-neutral-400 mb-8">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <div className={cn("mb-20 overflow-hidden rounded-xl bg-[url('/images/showcase-background-gray.jpg')] bg-cover")}>
                  {section.animation ? (
                    <div className="w-full h-[400px] flex items-center justify-center">
                      <Lottie
                        animationData={section.animation}
                        loop={true}
                        autoplay={true}
                        className="h-full w-auto"
                      />
                    </div>
                  ) : section.image ? (
                    <Image
                      src={section.image}
                      alt={section.title}
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CoreShowcase;
