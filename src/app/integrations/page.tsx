import { Metadata } from "next";
import BlurFade from "@/components/ui/blur-fade";
import AnimatedBeamDemo from "@/components/ui/AnimatedBeamDemo";

export const metadata: Metadata = {
  title: "Integrations | Zonify.ai",
  description:
    "Plug Zonify directly into your existing BI stack, data lakes, and enterprise infrastructure. No new silos. No rebuilding your architecture.",
};

const sections = [
  {
    id: "bi-data-lake",
    label: "BI & Data Lake Sync",
    title: "Your spatial data, inside the tools you already use.",
    description:
      "We provide native exports and real-time syncing directly into your existing business intelligence and data infrastructure. Spatial analytics can live entirely within the Zonify Analytics Hub, inside your own data lakes, or across both — your architecture, your choice.",
    details: [
      { label: "Power BI", value: "Native integration" },
      { label: "Delta Lake", value: "Native integration" },
      { label: "Excel", value: "Native integration" },
      { label: "Data location", value: "Hub, lake, or both" },
    ],
  },
  {
    id: "apis",
    label: "APIs & Data Pipelines",
    title: "Deep connectivity for complex enterprise environments.",
    description:
      "For custom applications and enterprise data pipelines, we offer full developer connectivity via REST API and OpenAPI frameworks. Custom IDs are supported out of the box, making it straightforward to map Zonify data into your existing entity models and reporting structures.",
    details: [
      { label: "REST API", value: "Supported" },
      { label: "OpenAPI", value: "Supported" },
      { label: "Custom IDs", value: "Configurable" },
      { label: "Enterprise pipelines", value: "Supported" },
    ],
  },
  {
    id: "data-delivery",
    label: "Flexible Data Delivery",
    title: "Real-time for operations. Scheduled for analysis.",
    description:
      "Configure integrations to match how each team actually uses data. Live, real-time syncs support immediate floor operations and occupancy decisions. Aggregated and scheduled deliveries fuel long-term benchmarking, historical reporting, and stakeholder submissions — both from the same integration layer.",
    details: [
      { label: "Real-time sync", value: "Available" },
      { label: "Scheduled delivery", value: "Configurable" },
      { label: "Aggregated exports", value: "Available" },
      { label: "Historical data", value: "Supported" },
    ],
  },
  {
    id: "legacy-migration",
    label: "Legacy Migration",
    title: "Move away from people counters without losing continuity.",
    description:
      "Migrating from legacy, hardware-heavy people counters is one of the most common reasons organizations come to us. Zonify supports migration from existing counting systems and historical datasets, bringing old and new data into a unified analytics layer with minimal manual reconciliation and no loss of historical benchmarking.",
    details: [
      { label: "Legacy people counters", value: "Migration supported" },
      { label: "Historical datasets", value: "Importable" },
      { label: "Downtime required", value: "None" },
      { label: "Parallel operation", value: "Supported during transition" },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 md:px-8 pb-16">
        {/* Hero */}
        <section className="mt-40 md:mt-52 grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6">
            <BlurFade delay={0.1} inView>
              <h1 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em]">
                Spatial data that fits your stack
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
                Zonify plugs directly into your existing BI tools, data lakes,
                and enterprise pipelines. No new silos. No rebuilding your
                architecture around us.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Sections */}
        <section>
          <div className="grid grid-cols-8">
            {sections.map((section, index) => (
              <BlurFade
                key={section.id}
                delay={0.05 * index}
                inView
                className="col-span-8 grid grid-cols-subgrid gap-4"
              >
                <div
                  id={section.id}
                  className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-16 md:py-24 scroll-m-20"
                >
                  {/* LEFT — label + title */}
                  <div className="col-span-full md:col-span-4">
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      {section.label}
                    </p>
                    <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-snug">
                      {section.title}
                    </h2>
                  </div>

                  {/* RIGHT — description + details */}
                  <div className="col-span-full flex flex-col gap-8 md:col-span-4 md:col-start-5">
                    <p className="text-md text-gray-600 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-100 pt-6">
                      {section.details.map((detail) => (
                        <div key={detail.label}>
                          <p className="text-[11px] uppercase tracking-wide text-gray-400">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-gray-700">
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}

            {/* CTA row */}
            <div className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-16 md:py-24">
              <div className="col-span-full flex flex-col gap-4 md:col-span-4">
                <h2 className="text-2xl md:text-3xl font-medium">
                  Built for CIOs, IT architects, and data leads.
                </h2>
                <p className="text-md text-gray-600 leading-relaxed">
                  Our integration layer is designed for low-maintenance
                  operations at scale. Talk to our team about how Zonify fits
                  your current infrastructure before you commit to anything.
                </p>
                <a
                  href="/contact"
                  className="text-sm text-gray-900 flex items-center gap-1 group"
                >
                  Talk to our team
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="col-span-full flex flex-col gap-4 md:col-span-4 md:col-start-5">
                <h2 className="text-2xl md:text-3xl font-medium">
                  Need technical documentation?
                </h2>
                <p className="text-md text-gray-600 leading-relaxed">
                  API references, OpenAPI specs, and data schema documentation
                  are available for your engineering and data teams.
                </p>
                <a
                  href="https://help.zonify.ai"
                  className="text-sm text-gray-900 flex items-center gap-1 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the Help Center
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
