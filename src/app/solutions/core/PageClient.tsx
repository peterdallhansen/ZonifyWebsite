"use client";

import SolutionPage, {
  type SolutionHighlight,
  type SolutionSection,
} from "@/components/solutions/SolutionPage";
import { LucideShieldCheck, LucideVideo, LucideZap } from "lucide-react";
import frame102 from "@/public/images/vision-ai-dashboard.png";
import frame103 from "@/public/images/spatial-intelligence-map.png";
import reportImage from "@/public/images/automated-reporting-suite.png";
import searchAnim from "@/public/animations/SearchAnim.json";
import researchAnim from "@/public/animations/Research3.json";
import widgetAnim from "@/public/animations/Widget2.json";

const highlights: SolutionHighlight[] = [
  {
    icon: LucideZap,
    title: "Rapid, Remote Deployment",
    description:
      "Go live in days, not months. Our cloud-based platform connects to your cameras and can be onboarded entirely remotely — no on-site visits required.",
    link: "/deployment#cloud",
    linkText: "Explore Deployment",
  },
  {
    icon: LucideVideo,
    title: "Zero Hardware Investment",
    description:
      "Eliminate new capex. We connect directly to your existing 2D cameras, transforming what you already own into a powerful analytics network.",
    link: "/solutions/integration",
    linkText: "See Integration Options",
  },
  {
    icon: LucideShieldCheck,
    title: "Privacy-First by Design",
    description:
      "Stay fully GDPR-compliant with zero friction. Data is anonymized in milliseconds with absolutely no biometric data stored or facial recognition used.",
    link: "/compliance",
    linkText: "Read Compliance Overview",
  },
];

const sections: SolutionSection[] = [
  {
    id: "vision-ai",
    title: "Vision AI Engine",
    body: "Our proprietary AI transforms raw 2D video feeds into anonymized behavioral data in real time. No facial recognition. No biometric storage. Every frame is processed and anonymized within milliseconds before any data touches storage - ensuring absolute privacy compliance from the ground up. The result: enterprise-grade visitor intelligence powered by the cameras you already own.",
    cta: "Learn about our privacy approach",
    href: "/compliance",
    visual: {
      type: "image",
      src: frame102,
      alt: "Vision AI dashboard",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
  },
  {
    id: "real-time-tracking",
    title: "Real-Time Visitor Tracking",
    body: "Monitor live footfall, movement paths, zone engagement, dwell-time, and queue formation across every connected camera. See how visitors navigate your spaces as it happens - giving operations, marketing, and management teams immediate situational awareness and the ability to respond in the moment.",
    cta: "Explore the Analytics Hub",
    href: "/solutions/analytics-hub",
    visual: {
      type: "image",
      src: frame103,
      alt: "Spatial intelligence map",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
  },
  {
    id: "demographics",
    title: "Audience Profiling",
    body: "Understand who visits your spaces with anonymized demographic segmentation. Age and gender breakdowns, audience composition trends, and visitor quality scoring help marketing teams target the right audiences, leasing teams benchmark tenant performance, and operations teams staff to real demand - all without storing a single piece of personal data.",
    cta: "See how it works",
    href: "/use-cases#demographics",
    visual: {
      type: "animation",
      data: researchAnim,
      containerClassName:
        "flex h-[520px] w-full items-center justify-center bg-gray-100",
    },
  },
  {
    id: "spatial-intelligence",
    title: "Spatial Intelligence",
    body: "Go beyond counting entrances. Visualize movement with heatmaps, trace visitor journeys across zones, measure cross-visitation between tenants, and identify friction points in your layout - all from an interactive 3D map. Understand how every square meter of your space contributes to engagement and revenue.",
    cta: "Explore the Analytics Hub",
    href: "/solutions/analytics-hub",
    visual: {
      type: "animation",
      data: searchAnim,
    },
  },
  {
    id: "privacy-compliance",
    title: "Privacy & Compliance",
    body: "Privacy is not a feature bolt-on - it is the architectural foundation. Zonify processes video data through a GDPR-by-design pipeline: anonymization within milliseconds, no facial recognition, no biometric data, encryption at rest and in transit, role-based access controls, complete audit trails, and regional data residency options. Every safeguard is documented and ready for review.",
    cta: "Read our compliance overview",
    href: "/compliance",
    visual: {
      type: "animation",
      data: widgetAnim,
      containerClassName:
        "flex h-[520px] w-full items-center justify-center bg-gray-100",
    },
  },
  {
    id: "deployment",
    title: "Deployment Options",
    body: "Choose the deployment model that fits your infrastructure and governance requirements. Cloud processing offers fast setup with secure EU-hosted infrastructure, while on-premises deployment gives you full control with pre-configured server hardware. Both options connect to your existing camera network - no rip-and-replace projects, no new sensors, no disruption.",
    cta: "Explore deployment options",
    href: "/deployment#cloud",
    visual: {
      type: "image",
      src: reportImage,
      alt: "Automated reporting suite",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
  },
];

export default function PageClient() {
  return (
    <SolutionPage
      label="Core Platform"
      title="Turn your cameras into intelligence"
      description="Zonify transforms your existing 2D camera infrastructure into a privacy-first analytics engine - delivering real-time visitor behavior, demographic profiling, and spatial intelligence without deploying new hardware."
      currentPath="/solutions/core"
      heroVisual={{
        type: "image",
        src: frame103,
        alt: "Zonify Core Platform dashboard",
        sizes: "(max-width: 768px) 100vw, 1400px",
        priority: true,
      }}
      highlights={highlights}
      sections={sections}
    />
  );
}
