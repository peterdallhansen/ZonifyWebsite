import Image from "next/image";
import { Metadata } from "next";
import { Check, Link } from "lucide-react";

export const metadata: Metadata = {
  title: "Deployment | Zonify.ai",
  description:
    "Deploy Zonify on your terms — in the cloud or on your own infrastructure. Same platform, same insights, full control over where your data lives.",
};

const deploymentOptions = [
  {
    id: "cloud",
    label: "Cloud Processing",
    href: "/deployment/cloud",
    tagline: "Up and running in days, not months.",
    summary:
      "Zonify manages the infrastructure. You get the insights. Our cloud deployment runs on top of your existing cameras with no servers to install, no hardware to maintain, and no IT overhead. Remote onboarding means your first site can be live within days.",
    bestFor:
      "Multi-site operators, fast-growing networks, teams without dedicated IT.",
    specs: [
      { label: "Deployment time", value: "Days" },
      { label: "Infrastructure required", value: "None" },
      { label: "Maintenance", value: "Managed by Zonify" },
      { label: "Availability SLA", value: "99.9% uptime target" },
      { label: "Updates", value: "Automatic" },
      { label: "Data residency", value: "Regional options available" },
    ],
    benefits: [
      "No on-site visit required for onboarding",
      "Scales automatically across new sites and cameras",
      "Always on the latest platform version",
      "24/7/365 availability with service-credit SLA",
      "Regional data residency options for compliance",
      "GDPR-compliant by design, zero facial recognition",
    ],
    proof:
      "Zonify remotely onboarded a 40,000 m² shopping center across 50+ cameras — without a single on-site visit.",
    image: "/images/unsplash/cloudsolution.jpg",

    imageAlt: "Cloud processing infrastructure diagram",
  },
  {
    id: "onprem",
    label: "On-Premises Server",
    href: "/deployment/onprem",
    tagline: "Full control. Data never leaves your walls.",
    summary:
      "For organizations where data residency, air-gapped networks, or internal security policy require processing to happen on-site, Zonify deploys directly onto your own server infrastructure. Same platform capabilities, same analytics quality — on your terms.",
    bestFor:
      "Airports, public sector, regulated environments, and organizations with strict data governance requirements.",
    specs: [
      { label: "Deployment time", value: "Coordinated with your IT team" },
      { label: "Infrastructure required", value: "Customer-provided server" },
      { label: "Maintenance", value: "Managed by your team" },
      { label: "Data location", value: "Stays within your infrastructure" },
      { label: "Updates", value: "Scheduled with your team" },
      { label: "Network requirement", value: "Works air-gapped" },
    ],
    benefits: [
      "Video data and analytics never leave your infrastructure",
      "Compatible with air-gapped and restricted network environments",
      "Meets the most demanding internal data governance policies",
      "Full control over update cadence and maintenance windows",
      "Supports regulated industries including airports and public sector",
      "Same GDPR-compliant, anonymized analytics as cloud deployment",
    ],
    proof: null,
    image: "/images/unsplash/datacenter.jpg",
    imageAlt: "On-premises server deployment diagram",
  },
];
export default function DeploymentPage() {
  return (
    <main>
      <div className="mx-auto max-w-[2000px] px-6 md:px-10">
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-16">
          <h1 className="text-[44px] leading-[1.05] tracking-[-0.03em] md:text-[88px] font-medium text-balance">
            Deploy on your terms
          </h1>
        </section>

        {/* Detailed Rows */}
        <div className="border-t border-neutral-300">
          {deploymentOptions.map((option, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={option.id}
                id={option.id}
                className="grid grid-cols-1 gap-10 border-b border-neutral-300 py-12 md:grid-cols-8 md:gap-8 md:py-16"
              >
                <div
                  className={`md:col-span-4 ${!isEven ? "md:col-start-1" : "md:col-start-1"}`}
                >
                  <div className="max-w-[460px]">
                    <h2 className="text-[38px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-medium text-balance">
                      {option.label}
                    </h2>
                    <p className="mt-3 text-[15px] font-medium text-neutral-400">
                      {option.tagline}
                    </p>
                    <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                      {option.summary}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {option.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-[14px] text-neutral-600"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-span-full md:col-span-4 ${isEven ? "md:col-start-5" : "md:col-start-5"}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-50">
                    <Image
                      src={option.image}
                      alt={option.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
