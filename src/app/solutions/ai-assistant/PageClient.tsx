"use client";

import SolutionPage, {
  type SolutionSection,
} from "@/components/solutions/SolutionPage";
import loadingResearchAnim from "@/public/animations/LoadingResearch.json";
import researchAnim from "@/public/animations/Research.json";
import researchAnim2 from "@/public/animations/Research3.json";

const sections: SolutionSection[] = [
  {
    id: "ai-data-queries",
    title: "Natural Language Queries",
    body: "Stop digging through reports to find the answers you need. Ask plain-English questions about conversion, dwell time, peak periods, or location performance, and the assistant translates them into clear summaries and visual outputs in seconds.",
    cta: "See it in action",
    href: "https://app.zonify.ai/",
    visual: {
      type: "animation",
      data: researchAnim,
      containerClassName:
        "flex h-[520px] w-full items-center justify-center bg-gray-100",
      className: "h-full w-auto",
    },
    visualFrameClassName: "bg-none",
  },
  {
    id: "contextual-analysis",
    title: "Deep Contextual Analysis",
    body: "Dashboards show what is happening, but the assistant helps explain why. When behavior shifts unexpectedly, it connects historical patterns and multiple variables to surface the context behind anomalies, changes, and opportunities.",
    cta: "Explore the assistant",
    href: "https://app.zonify.ai/",
    visual: {
      type: "animation",
      data: loadingResearchAnim,
      containerClassName:
        "flex h-[520px] w-full items-center justify-center bg-gray-100",
      className: "h-full w-auto",
    },
    visualFrameClassName: "bg-none",
  },
  {
    id: "automated-insights",
    title: "Proactive AI Insights",
    body: "The assistant keeps watching even when you are not. It highlights emerging trends, operational bottlenecks, and meaningful shifts in visitor behavior so teams can respond earlier without manually scanning every report.",
    cta: "Automate your BI",
    href: "https://app.zonify.ai/",
    visual: {
      type: "animation",
      data: researchAnim2,
      containerClassName:
        "flex h-[520px] w-full items-center justify-center bg-gray-100",
      className: "h-full w-auto",
    },
  },
];

export default function PageClient() {
  return (
    <SolutionPage
      label="AI-Powered BI"
      title="Beyond dashboards. Into real context."
      description="Charts and tables are useful, but they do not always tell the whole story. Zonify's AI assistant lets teams ask natural questions, uncover why the numbers move, and turn raw analytics into faster decisions."
      currentPath="/solutions/ai-assistant"
      heroVisual={{
        type: "video",
        src: "/videos/Ad2.mp4",
      }}
      intro="Augment decision-making with AI models trained to interpret spatial analytics, explain changes, and surface the business context hidden behind complex metrics."
      sections={sections}
    />
  );
}
