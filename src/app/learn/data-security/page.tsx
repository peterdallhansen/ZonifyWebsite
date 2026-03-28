import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Security | Zonify.ai",
  description:
    "How Zonify handles your data — anonymization, GDPR compliance, encryption, and access controls built in from the ground up.",
};

const sections = [
  {
    id: "anonymization",
    label: "Anonymization & No Facial Recognition",
    title: "We never collect personal data. There is nothing to expose.",
    description:
      "Zonify does not capture, store, or transmit images of individuals. Video is processed locally and immediately converted into anonymous behavioral data points — no faces, no identities, no biometrics. Because no personal data is collected at any stage, your organization's GDPR exposure is minimal by design. There is no facial recognition in the platform, and there is no configuration that enables it.",
    details: [
      { label: "Personal data collected", value: "None" },
      { label: "Facial recognition", value: "Not present in platform" },
      { label: "Raw footage stored", value: "No" },
      { label: "Demographic data type", value: "Aggregated and statistical" },
    ],
    image: "/images/unsplash/privacy.webp",
    imageAlt: "Anonymization and privacy architecture",
  },
  {
    id: "gdpr",
    label: "GDPR & Compliance",
    title: "Designed to minimize your compliance obligations.",
    description:
      "Because Zonify processes only anonymized, aggregated data, it falls outside the scope of most personal data obligations under GDPR. Your legal team will not need to establish a complex processing basis, appoint a data processor relationship for sensitive personal data, or manage data subject access requests relating to Zonify data. We support regional data residency to satisfy local legal requirements, and our processing architecture is documented and available for legal review.",
    details: [
      { label: "GDPR classification", value: "Anonymized data only" },
      { label: "Data subject rights exposure", value: "Minimal" },
      { label: "Data residency", value: "Regional options available" },
      { label: "Processing documentation", value: "Available on request" },
    ],
    image: "/images/unsplash/compliance.webp",
    imageAlt: "GDPR compliance documentation",
  },
  {
    id: "encryption",
    label: "Encryption & Infrastructure",
    title: "Your data is protected end to end — in transit and at rest.",
    description:
      "All data transmitted through the Zonify platform is encrypted in transit. Stored data is encrypted at rest. Our cloud infrastructure operates with a documented availability SLA and a service-credit mechanism, so your procurement team has contractual recourse for downtime. For organizations with stricter requirements, on-premises deployment is available — keeping all data and processing entirely within your own infrastructure and jurisdiction.",
    details: [
      { label: "Data in transit", value: "Encrypted" },
      { label: "Data at rest", value: "Encrypted" },
      { label: "Availability SLA", value: "Contractual, with service credits" },
      { label: "On-premises option", value: "Available" },
    ],
    image: "/images/unsplash/encryption.webp",
    imageAlt: "Encryption and infrastructure security",
  },
  {
    id: "access",
    label: "Access Controls & Audit",
    title: "Documented controls your compliance team can rely on.",
    description:
      "Zonify provides role-based access controls, full audit logging, and configurable permissions for internal teams and external stakeholders. Every access event is logged and traceable, giving your compliance and legal teams the evidence trail required for internal governance reviews and regulatory inquiries. Access rights can be scoped tightly to specific sites, data types, and reporting functions — nothing broader than necessary.",
    details: [
      { label: "Access model", value: "Role-based (RBAC)" },
      { label: "Audit trail", value: "Full, exportable logs" },
      {
        label: "External stakeholder access",
        value: "Configurable and scoped",
      },
      { label: "SSO support", value: "Available" },
    ],
    image: "/images/unsplash/access.webp",
    imageAlt: "Role-based access control dashboard",
  },
];

export default function DataSecurityPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 md:px-8 pb-16">
        {/* Hero */}
        <section className="mt-40 md:mt-52 grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6">
            <h1 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em]">
              No personal data. No compliance headache.
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
              Zonify collects no personal data, performs no facial recognition,
              and is designed from the ground up to minimize your organization's
              compliance obligations. Here is what your legal and procurement
              teams need to know.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section>
          <div className="grid grid-cols-8">
            {sections.map((section) => (
              <div
                key={section.id}
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
            ))}

            {/* CTA row */}
            {/* CTA row */}
            <div className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-16 md:py-24">
              <div className="col-span-full flex flex-col gap-4 md:col-span-4">
                <h2 className="text-xl md:text-2xl font-medium">
                  Conducting a procurement review?
                </h2>
                <p className="text-md text-gray-600 leading-relaxed">
                  We can provide processing documentation, security architecture
                  summaries, and contractual terms to support your legal and
                  procurement process.
                </p>
                <a
                  href="/contact"
                  className="text-sm text-gray-900 flex items-center gap-1 group"
                >
                  Request documentation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="col-span-full flex flex-col gap-4 md:col-span-4 md:col-start-5">
                <h2 className="text-xl md:text-2xl font-medium">
                  Looking for the full legal detail?
                </h2>
                <p className="text-md text-gray-600 leading-relaxed">
                  Our compliance page contains the complete legal documentation
                  including data processing terms, GDPR basis, and contractual
                  obligations.
                </p>
                <a
                  href="/compliance"
                  className="text-sm text-gray-900 flex items-center gap-1 group"
                >
                  View compliance documentation
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
