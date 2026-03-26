"use client";
import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  LucideBrainCircuit,
  LucideMessageSquareText,
  LucideTrendingUp,
} from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useMemo, useState } from "react";

function Showcase() {
  const [activeSection, setActiveSection] = useState("");
  const [researchAnim, setResearchAnim] = useState<any>(null);
  const [loadingResearchAnim, setLoadingResearchAnim] = useState<any>(null);
const [researchAnim2, setResearchAnim2] = useState<any>(null);
  useEffect(() => {
    fetch("/animations/Research.json")
      .then((res) => res.json())
      .then((data) => setResearchAnim(data))
      .catch(console.error);

    fetch("/animations/LoadingResearch.json")
      .then((res) => res.json())
      .then((data) => setLoadingResearchAnim(data))
      .catch(console.error);

    fetch("/animations/Research3.json")
      .then((res) => res.json())
      .then((data) => setResearchAnim2(data))
      .catch(console.error);
  }, []);

  const features = [
    {
      id: "ai-data-queries",
      Icon: LucideMessageSquareText,
      name: "Natural Language Queries",
      description:
        "Talk to your data naturally. Ask questions like 'What is the peak hour on Fridays?' and get instant, accurate answers.",
      href: "#ai-data-queries",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-4",
      background: <></>,
    },
    {
      id: "contextual-analysis",
      Icon: LucideBrainCircuit,
      name: "Contextual Analysis",
      description:
        "Go beyond charts. The AI processes raw spatial data to explain the 'why' behind visitor behaviors and anomalies.",
      href: "#contextual-analysis",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-3",
      background: <></>,
    },
    {
      id: "automated-insights",
      Icon: LucideTrendingUp,
      name: "Automated Insights",
      description:
        "Receive proactive AI summaries highlighting significant traffic shifts, operational bottlenecks, or emerging trends.",
      href: "#automated-insights",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
  ];

  const sections = useMemo(
    () => [
      {
        id: "ai-data-queries",
        title: "Natural Language Queries",
        body: <p>Stop digging through complex reports to find the answers you need. With our conversational AI interface, you can simply ask your data questions in plain English. Want to know the conversion rate at the front display yesterday, or compare foot traffic between two floors? Just ask. The agent instantly translates your query into a dynamic chart or concise summary, saving you hours of manual analysis.</p>,
        cta: "See It in Action",
        href: "https://app.zonify.ai/",
        animation: researchAnim,
        className: "bg-gray-100/50 rounded-xl p-8 py-0 flex items-center justify-center",
      },
      {
        id: "contextual-analysis",
        title: "Deep Contextual Analysis",
        body: <p>Dashboards show you <strong>what</strong> is happening, but our AI agent explains <strong>why</strong>. When you notice a sudden drop in dwell time or an unexpected spike in cross-visits, the agent analyzes historical patterns and multiple spatial variables simultaneously to provide the underlying context. It turns raw spatial metrics into a clear, narrative explanation, empowering you to make informed decisions faster.</p>,
        cta: "Explore the Agent",
        href: "https://app.zonify.ai/",
        animation: loadingResearchAnim,
        className: "bg-gray-100/50 rounded-xl p-8 py-0 flex items-center justify-center",
      },
      {
        id: "automated-insights",
        title: "Proactive AI Insights",
        body: <p>Don't wait until you log in to discover important operational shifts. The AI agent acts as your dedicated analyst, continuously monitoring your location's data in the background. It proactively surface actionable insights, alerting you to emerging trends, operational bottlenecks, or successful marketing campaigns as they happen. Stay one step ahead of your visitors' needs without looking at a single graph.</p>,
        cta: "Automate Your BI",
        href: "https://app.zonify.ai/",
        animation: researchAnim2,
        className: "bg-gray-100/50 rounded-xl p-8 py-0 flex items-center justify-center",
      },
    ],
    [researchAnim, loadingResearchAnim, researchAnim2]
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-primary text-center max-w-[750px] text-opacity-80 mb-0 md:mb-20">
            Augment your decision-making with powerful AI models analyzing your spatial data.
            Turn complex metrics into actionable context, seamlessly forecasting the future
            and answering critical business questions instantly.
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
            style={{ position: "sticky" }}
          >
            <SidebarMenu
              sections={sections}
              activeSection={activeSection}
              currentPath="/solutions/ai-powered-bi"
            />
          </div>

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

                <div className={cn("mb-20 overflow-hidden flex items-center justify-center", section.className)}>
                  {section.animation ? (
                    <div className="w-full h-auto flex items-center justify-center">
                      <Lottie 
                        animationData={section.animation} 
                        loop={true} 
                        autoplay={true}
                        className="w-full max-w-[600px] h-auto"
                      />
                    </div>
                  ) : (
                    <div className="text-muted-foreground animate-pulse text-sm">Loading visual...</div>
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
