import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployment | Zonify.ai",
  description:
    "Deploy Zonify on your terms — in the cloud or on your own infrastructure.",
};

const deploymentOptions = [
  {
    id: "cloud",
    label: "Cloud Processing",
    tagline: "Up and running in days, not months.",
    description:
      "Zonify manages the infrastructure. You get the insights. Our cloud deployment runs on top of your existing cameras with no servers to install, no hardware to maintain, and no IT overhead. Remote onboarding means your first site can be live within days — no on-site visit required.",
    details: [
      { label: "Deployment", value: "Days" },
      { label: "Infrastructure", value: "None required" },
      { label: "Maintenance", value: "Managed by Zonify" },
      { label: "Updates", value: "Automatic" },
    ],
    href: "/deployment/cloud",
    image: "/images/unsplash/cloud.webp",
    imageAlt: "Cloud processing infrastructure",
  },
  {
    id: "onprem",
    label: "On-Premises Server",
    tagline: "Full control. Data never leaves your walls.",
    description:
      "For organizations where data residency, air-gapped networks, or internal security policy require processing to happen on-site. Zonify deploys directly onto your own server infrastructure — same platform capabilities, same analytics quality, entirely within your environment.",
    details: [
      { label: "Deployment", value: "Coordinated with IT" },
      { label: "Infrastructure", value: "Customer-provided" },
      { label: "Maintenance", value: "Managed by your team" },
      { label: "Updates", value: "Scheduled with your team" },
    ],
    href: "/deployment/onprem",
    image: "/images/unsplash/server.webp",
    imageAlt: "On-premises server deployment",
  },
];

export default function DeploymentPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 md:px-8 pb-16">
        {/* Hero */}
        <section className="mt-40 md:mt-52 grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6">
            <h1 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em]">
              Deploy on your terms
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
              Same platform. Same insights. Full control over where your data
              lives.
            </p>
          </div>
        </section>

        {/* Rows */}
        <section>
          <div className="grid grid-cols-8">
            {deploymentOptions.map((option) => (
              <div
                key={option.id}
                id={option.id}
                className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-8 md:py-10 scroll-m-20"
              >
                {/* LEFT TEXT */}
                <div className="col-span-full flex flex-col gap-4 md:col-span-4 xl:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    {option.label}
                  </p>

                  <h2 className="text-xl md:text-2xl font-medium">
                    {option.tagline}
                  </h2>

                  <p className="text-md text-gray-600 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-gray-100 pt-4">
                    {option.details.map((detail) => (
                      <div key={detail.label}>
                        <p className="text-[11px] uppercase tracking-wide text-gray-400">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-gray-700">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={option.href}
                    className="text-sm text-gray-900 flex items-center gap-1 group mt-1"
                  >
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-span-full md:col-span-4 md:col-start-5">
                  <div className="relative w-full min-h-[320px] overflow-hidden rounded-lg md:min-h-[520px]">
                    <Image
                      src={option.image}
                      alt={option.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-8 md:py-10">
              <div className="col-span-full flex flex-col gap-4 md:col-span-4 xl:col-span-2">
                <h2 className="text-xl md:text-2xl font-medium">
                  Not sure which fits?
                </h2>
                <p className="text-md text-gray-600 leading-relaxed">
                  Talk to our team — we'll help you find the right option before
                  you commit to anything.
                </p>

                <a
                  href="/contact"
                  className="text-sm text-gray-900 flex items-center gap-1 group"
                >
                  Get in touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
