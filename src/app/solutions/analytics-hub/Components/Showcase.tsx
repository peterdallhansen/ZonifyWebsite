"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  LucideFileChartColumn,
  LucideGalleryVerticalEnd,
  LucideGlobe,
  LucideSettings2,
  LucideUsers,
  LucideMessageSquareText,
} from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");
  const [researchAnim, setResearchAnim] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/Research3.json")
      .then((res) => res.json())
      .then((data) => setResearchAnim(data))
      .catch(console.error);
  }, []);

  const features = [
    {
      id: "interactive-map",
      Icon: LucideGlobe, // Replace with your preferred icon
      name: "Interactive Map",
      description:
        "Visualize visitor flows, heatmaps, and spatial interactions in real time.",
      href: "#interactive-map",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-4",
      background: <></>,
    },
    {
      id: "ai-assistant",
      Icon: LucideMessageSquareText,
      name: "AI Data Assistant",
      description:
        "Talk to your data naturally and uncover the 'why' behind visitor behaviors.",
      href: "/solutions/ai-powered-bi",
      cta: "Explore AI Features",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "smart-filtering",
      Icon: LucideSettings2, // You can replace this with a more suitable icon
      name: "Smart Filtering & Date Selection",
      description:
        "Quickly slice and compare data using advanced filtering, saved presets, custom aggregation, and dynamic comparison periods. Control the view with powerful tools like age, gender, size, category, and custom logic.",
      href: "#smart-filtering",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "workspaces",
      Icon: LucideGalleryVerticalEnd, // or another icon from react-icons or lucide-react
      name: "Workspaces",
      description:
        "Build flexible, widget-based dashboards with full layout control and cross-role visibility.",
      href: "#workspaces",
      cta: "Explore Workspaces",
      className: "row-span-2 col-span-3 lg:col-span-3",
      background: <></>,
    },
    {
      id: "automated-reports",
      Icon: LucideFileChartColumn,
      name: "Automated Reports",
      description:
        "Schedule and send workspace performance reports via email on a daily, weekly, monthly, or custom cadence.",
      href: "#automated-reports",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",

      background: <></>,
    },
    {
      id: "role-based-sharing",
      Icon: LucideUsers,
      name: "Role-Based Sharing",
      description:
        "Create custom roles with fine-grained permissions. Control who can view, edit, or manage specific features across your workspace.",
      href: "#role-based-sharing",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "interactive-map",
        title: "Interactive Map",
        body: `Explore how visitors move through your space with powerful, visual insights. This feature offers animated playback of movement patterns, heatmaps of high-traffic zones, and interactive time filtering—giving you a complete picture of how people interact with your environment. Zoom in to specific areas, compare structure activity, and customize filters to focus on key demographic groups. Perfect for optimizing layouts, planning operations, and improving visitor experience.`,
        cta: "See It in Action",
        href: "https://app.zonify.ai/map",
        image: "/images/3d-digital-twin-map.png",
      },
      {
        id: "ai-assistant",
        title: "AI Data Assistant",
        body: `Don't just look at charts—talk to your data. Our conversational AI translates complex spatial metrics into clear answers. Ask plain-English questions about foot traffic, conversion rates, or demographic trends and receive instant, context-aware insights along with dynamic visual reports.`,
        cta: "Discover AI-Powered BI",
        href: "/solutions/ai-powered-bi",
        animation: researchAnim,
        className: "rounded-xl",
      },
      {
        id: "smart-filtering",
        title: "Smart Filtering & Dynamic Date Selection",
        body: `Empower your analytics with powerful filtering tools and flexible date controls. Choose from predefined or custom date ranges, save reusable filter presets, and switch between aggregation modes like daily, weekly, or monthly. Use demographic filters like gender, age, category, size, and even advanced logic-based groups to refine your data view. Perfect for conducting precise comparisons and unlocking insights across different segments and timeframes.`,
        cta: "Check it out",
        href: "https://app.zonify.ai/",
        image: "/images/data-segmentation-tools.png",
        imageWidth: 1150,
        className: "bg-gray-100 rounded-xl",
      },
      {
        id: "workspaces",
        title: "Workspaces",
        body: `Design tailored analytics dashboards with drag-and-drop layouts and modular widgets. Workspaces allow you to build flexible, role-specific views—whether for marketing, operations, or executive teams. Rearrange components, export reports, and manage layouts across devices with full control over content and structure.`,
        cta: "Explore Workspaces",
        href: "https://app.zonify.ai/",
        image: "/images/advanced-filter-builder.png", // Replace with your actual workspace image
        imageWidth: 1150,
      },
      /*  {
        id: "automated-reports",
        title: "Automated Scheduled Reports",
        body: `Set up custom schedules to automatically generate and deliver workspace reports. Choose from summary or detailed formats, specify multiple email recipients, and receive updates on a daily, weekly, monthly—or any custom—cadence without lifting a finger.`,
        cta: "Explore now",
        href: "https://app.zonify.ai/reports",
        image: "/images/operational-drilldown-report.png",
        imageWidth: 1150,
      }, */
      {
        id: "automated-reports",
        title: "Automated Scheduled Reports",
        body: `Set up custom schedules to automatically generate and deliver workspace reports. Choose from summary or detailed formats, specify multiple email recipients, and receive updates on a daily, weekly, monthly—or any custom—cadence without lifting a finger.`,
        cta: "Explore now",
        href: "https://app.zonify.ai/",
        image: "/images/executive-summary-report.png",
        imageWidth: 1150,
      },
      {
        id: "role-based-sharing",
        title: "Custom Roles & Access Control",
        body: `Grant tailored access by creating custom roles for users, teams, or partners. Limit visibility or permissions to ensure secure, efficient collaboration across your analytics hub.`,
        cta: "Try now",
        href: "https://app.zonify.ai/",
        image: "/images/team-collaboration-share.png",
        imageWidth: 1150,
      },

      /*   {
        id: "workspaces",
        title: "Workspaces",
        body: `Design tailored analytics dashboards with drag-and-drop layouts and modular widgets. Workspaces allow you to build flexible, role-specific views—whether for marketing, operations, or executive teams. Rearrange components, export reports, and manage layouts across devices with full control over content and structure.`,
        cta: "Explore Workspaces",
        href: "https://app.zonify.ai/",
        image: "/images/custom-workspace-editor.png", // Replace with your actual workspace image
        imageWidth: 1150,
      }, */
    ],
    [researchAnim]
  );

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8  pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px] text-opacity-80 mb-0 md:mb-20">
            Gain full control of your space through a centralized analytics hub
            built for real-time clarity and strategic insight. Visualize live
            activity with interactive maps, track performance trends, and
            explore spatial usage patterns—all in one intuitive interface.
            Customize your view with smart filters, automate reporting, and
            compare behavior across time and zones.
          </h2>
        </BlurFade>

        {/* <BlurFade delay={0.25} inView>
          <BentoGrid className="hidden sm:grid mt-20">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade> */}
        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] sticky top-40 hidden md:block"
            style={{
              position: "sticky",
            }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/solutions/analytics-hub"
            />
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left ">
            {sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.id}
                  className="text-xl md:text-1xl xl:text-4xl leading-tight text-primary  max-w-[750px] mb-8 text-left  scroll-mt-40"
                >
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-primary max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </h2>
                <a href={section.href}>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4  pl-0 py-1 transition ease-out hover:text-neutral-600  hover:dark:text-neutral-400  mb-8 ">
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <div className={cn("mb-20 overflow-hidden rounded-xl", section.className)}>
                  {section.animation ? (
                    <div className="w-full h-auto flex items-center justify-center p-8 py-0 bg-gray-100">
                      <Lottie 
                        animationData={section.animation} 
                        loop={true}
                        autoplay={true} 
                        className="w-full max-w-[600px] h-auto"
                      />
                    </div>
                  ) : (
                    <Image
                      src={section.image || "/images/analytics-hub-preview.png"}
                      width={section.imageWidth || 1000}
                      height={400}
                      quality={100}
                      alt={section.title}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Showcase;
