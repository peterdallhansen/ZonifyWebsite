import Main from "./Components/Main";
import CoreShowcase from "./Components/Showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Platform — Zonify",
  description:
    "Zonify transforms your existing 2D camera infrastructure into a privacy-first analytics engine — delivering real-time visitor behavior, demographic profiling, and spatial intelligence.",
};

/**
 * Core Platform product page.
 * Serves as the primary overview of Zonify's vision-AI system,
 * explaining what it does, how it works, and why it is trustworthy.
 */
export default function CorePlatformPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Main />
      <CoreShowcase />
    </div>
  );
}
