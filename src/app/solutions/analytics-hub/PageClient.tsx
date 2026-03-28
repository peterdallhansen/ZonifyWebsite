"use client";

import SolutionPage, {
  type SolutionHighlight,
  type SolutionSection,
} from "@/components/solutions/SolutionPage";
import {
  LucideFileChartColumn,
  LucideGlobe,
  LucideMessageSquareText,
} from "lucide-react";
import analyticsHubPreview from "@/public/images/analytics-hub-preview.png";
import digitalTwinMap from "@/public/images/3d-digital-twin-map.png";
import dataSegmentationTools from "@/public/images/data-segmentation-tools.png";
import customWorkspaceEditor from "@/public/images/custom-workspace-editor.png";
import executiveSummaryReport from "@/public/images/executive-summary-report.png";
import teamCollaborationShare from "@/public/images/team-collaboration-share.png";
import researchAnim from "@/public/animations/Research3.json";

const highlights: SolutionHighlight[] = [
  {
    icon: LucideGlobe,
    title: "Interactive Spatial Control",
    description:
      "Track live movement, replay visitor journeys, and understand how every zone performs from one visual command center.",
    link: "#interactive-map",
    linkText: "Explore the Map",
  },
  {
    icon: LucideMessageSquareText,
    title: "Built-In AI Guidance",
    description:
      "Move from charts to answers with natural-language analysis that helps teams understand why behavior changes over time.",
    link: "/solutions/ai-assistant",
    linkText: "See AI Assistant",
  },
  {
    icon: LucideFileChartColumn,
    title: "Operational Reporting",
    description:
      "Turn complex analytics into shareable reports, tailored dashboards, and role-based views for every stakeholder.",
    link: "#automated-reports",
    linkText: "View Reporting",
  },
];

const sections: SolutionSection[] = [
  {
    id: "interactive-map",
    title: "Interactive Map",
    body: "Explore how visitors move through your space with animated playback, heatmaps of high-traffic zones, and interactive time filtering. Zoom in to specific areas, compare location activity, and customize filters to focus on key demographic groups. It is built for optimizing layouts, planning operations, and improving visitor experience from a single spatial view.",
    cta: "See it in action",
    href: "https://app.zonify.ai/map",
    visual: {
      type: "image",
      src: digitalTwinMap,
      alt: "Interactive 3D digital twin map",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
    visualFrameClassName: "bg-[none]",
  },
  {
    id: "ai-assistant",
    title: "AI Data Assistant",
    body: "Do not just look at charts - talk to your data. Our conversational AI translates complex spatial metrics into clear answers. Ask plain-English questions about foot traffic, conversion rates, or demographic trends and receive instant, context-aware insights alongside dynamic visuals.",
    cta: "Discover AI-powered BI",
    href: "/solutions/ai-assistant",
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
    id: "smart-filtering",
    title: "Smart Filtering & Dynamic Date Selection",
    body: "Compare periods, save reusable filter presets, and switch between daily, weekly, or monthly aggregation in seconds. Layer demographic filters like gender, age, category, size, and advanced logic-based groups to surface the exact segment you need for deeper decision-making.",
    cta: "Explore smart filters",
    href: "https://app.zonify.ai/",
    visual: {
      type: "image",
      src: dataSegmentationTools,
      alt: "Data segmentation and filtering tools",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
    visualFrameClassName: "bg-none bg-gray-100",
  },
  {
    id: "workspaces",
    title: "Workspaces",
    body: "Design tailored analytics dashboards with drag-and-drop layouts and modular widgets. Build role-specific views for marketing, operations, or executives, then rearrange components, export snapshots, and manage layouts across devices with full control over structure and visibility.",
    cta: "Explore workspaces",
    href: "https://app.zonify.ai/",
    visual: {
      type: "image",
      src: customWorkspaceEditor,
      alt: "Custom workspace editor",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
    visualFrameClassName: "bg-[none]",
  },
  {
    id: "automated-reports",
    title: "Automated Scheduled Reports",
    body: "Set up recurring reports with summary or detailed formats, define multiple recipients, and keep stakeholders informed on a daily, weekly, monthly, or custom cadence. The hub turns live analytics into dependable reporting workflows without manual prep.",
    cta: "Explore reporting",
    href: "https://app.zonify.ai/",
    visual: {
      type: "image",
      src: executiveSummaryReport,
      alt: "Executive summary report",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
    visualFrameClassName: "bg-[none]",
  },
  {
    id: "role-based-sharing",
    title: "Custom Roles & Access Control",
    body: "Grant tailored access to users, teams, or external partners with fine-grained permissions. Control who can view, edit, manage, and share specific analytics so the right people see the right data without adding friction to collaboration.",
    cta: "See access controls",
    href: "https://app.zonify.ai/",
    visual: {
      type: "image",
      src: teamCollaborationShare,
      alt: "Role-based sharing and team collaboration",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
    visualFrameClassName: "bg-[none]",
  },
];

export default function PageClient() {
  return (
    <SolutionPage
      label="Analytics Hub"
      title="One place for everything that matters"
      description="Monitor real-time behavior, analyze historical trends, and make smarter decisions from a single dashboard built for decision-makers. Analytics Hub brings live operations, flexible exploration, and stakeholder-ready reporting into one interface."
      currentPath="/solutions/analytics-hub"
      heroVisual={{
        type: "image",
        src: analyticsHubPreview,
        alt: "Analytics Hub dashboard preview",
        sizes: "(max-width: 768px) 100vw, 1400px",
        priority: true,
      }}
      highlights={highlights}
      intro="Gain full control of your space through a centralized analytics hub built for real-time clarity and strategic insight. Visualize live activity with interactive maps, compare performance trends, automate reporting, and shape views around every role that relies on the data."
      sections={sections}
    />
  );
}
