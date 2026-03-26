"use client";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import {
  ArrowRight,
  LucideShieldCheck,
  LucideVideo,
  LucideZap,
} from "lucide-react";
import frame102 from "@/public/images/vision-ai-dashboard.png";

/**
 * Hero section for the Core Platform product page.
 * Introduces Zonify's vision-AI system with a headline,
 * subheadline, hero image, and a features-style highlights grid.
 */
function Main() {
  const highlights = [
    {
      icon: LucideZap,
      title: "Rapid, Remote Deployment",
      description:
        "Go live in days, not months. Our cloud-based platform connects to your cameras and can be onboarded entirely remotely — no on-site visits required.",
      link: "/deployment/cloud",
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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        {/* Label */}
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Core Platform
          </h4>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.4} inView>
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-normal leading-tight text-primary text-center">
            Turn Your Cameras Into Intelligence
          </h1>
        </BlurFade>

        {/* Subheadline */}
        <BlurFade delay={0.5} inView>
          <p className="text-lg md:text-xl xl:text-2xl mb-8 leading-relaxed text-primary/60 text-center max-w-[800px]">
            Zonify transforms your existing 2D camera infrastructure into a
            privacy-first analytics engine — delivering real-time visitor
            behavior, demographic profiling, and spatial intelligence without
            deploying new hardware.
          </p>
        </BlurFade>

        {/* Hero Image */}
        <BlurFade delay={0.6} inView>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={frame102}
              alt="Zonify Core Platform — AI-powered camera analytics dashboard"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </BlurFade>

        {/* Features-style highlights grid */}
        <BlurFade delay={0.7} inView>
          <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              {highlights.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="mb-6">
                      <Icon size={40} />
                    </div>
                    <h2 className="text-3xl font-medium mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-primary/80 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                    >
                      {feature.linkText}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
