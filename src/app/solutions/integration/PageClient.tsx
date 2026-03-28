"use client";

import AnimatedBeamDemo from "@/components/ui/AnimatedBeamDemo";
import SolutionPage, { type SolutionSection } from "@/components/solutions/SolutionPage";
import integrationImage from "@/public/images/integration-change-management.png";
import secureTransferImage from "@/public/images/secure-data-transfer.png";

const sections: SolutionSection[] = [
  {
    id: "seamless-integration",
    title: "Seamless Integration",
    body: "Our integration platform connects effortlessly with your existing infrastructure. Flexible interfaces support rapid deployment with minimal disruption, helping teams plug Zonify into current environments without rebuilding the stack around it.",
    cta: "Learn more",
    href: "#seamless-integration",
    visual: {
      type: "node",
      node: <AnimatedBeamDemo />,
      containerClassName: "block h-auto w-full",
    },
    visualFrameClassName: "bg-none",
  },
  {
    id: "ease-of-maintenance",
    title: "Ease of Maintenance",
    body: "Our cloud-native, software-only approach removes hardware dependencies and simplifies upkeep. Your team gets reliable performance, faster updates, and less operational overhead, so effort stays focused on outcomes instead of maintenance cycles.",
    cta: "Learn more",
    href: "#ease-of-maintenance",
    visual: {
      type: "image",
      src: integrationImage,
      alt: "Integration and change management workflow",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
  },
  {
    id: "data-migration",
    title: "Data Migration & Legacy Support",
    body: "Move from legacy systems without losing continuity. Zonify supports migration from existing people counters and historical datasets, bringing old and new information into a unified analytics layer with less risk and less manual reconciliation.",
    cta: "Learn more",
    href: "#data-migration",
    visual: {
      type: "image",
      src: secureTransferImage,
      alt: "Secure data transfer illustration",
      sizes: "(max-width: 768px) 100vw, 900px",
    },
  },
];

export default function PageClient() {
  return (
    <SolutionPage
      label="Integrations"
      title="Effortless integration and migration"
      description="Simplify maintenance, migrate from legacy people counters, and connect Zonify to the systems your teams already rely on. The integration layer is built to minimize disruption while making data more usable across the business."
      currentPath="/solutions/integration"
      heroVisual={{
        type: "image",
        src: integrationImage,
        alt: "Integration change management overview",
        sizes: "(max-width: 768px) 100vw, 1400px",
        priority: true,
      }}
      intro="Discover integration capabilities designed for easier maintenance, smoother migrations, and cleaner connectivity across your analytics ecosystem."
      sections={sections}
    />
  );
}
