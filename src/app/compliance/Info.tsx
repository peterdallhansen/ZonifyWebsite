import { Handshake, LucideLock, LucideProps, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

interface FeatureItem {
  title: string;
  description: string;
}

interface Section {
  title: string;
  items: FeatureItem[];
  // optional: if using an image instead of icon
  image?: {
    src: string;
    alt: string;
  };
  IconComponent:
    | IconType
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
}

const sections: Section[] = [
  {
    title: "Privacy & Data Protection",
    IconComponent: ShieldCheck,
    items: [
      {
        title: "GDPR-Compliant by Design",
        description:
          "Our platform follows privacy-by-design principles and meets all GDPR requirements for data collection, storage, and handling.",
      },
      {
        title: "Anonymized Data Only",
        description:
          "We do not collect or store personally identifiable information. Visitor behavior is processed anonymously and securely.",
      },
      {
        title: "No Facial Recognition",
        description:
          "We never use facial recognition technology. Our system is built for behavioral analytics—not identity tracking.",
      },
    ],
  },
  {
    title: "Security & Infrastructure",
    IconComponent: LucideLock,
    items: [
      {
        title: "End-to-End Encryption",
        description:
          "All data is encrypted in transit and at rest using industry best practices to ensure confidentiality and integrity.",
      },
      {
        title: "Role-Based Access Controls",
        description:
          "Granular access controls ensure only authorized personnel can access specific data or dashboard features.",
      },
      {
        title: "High Availability & Redundancy",
        description:
          "Our cloud infrastructure is designed for high availability, ensuring continuous service uptime.",
      },
    ],
  },
  {
    title: "Compliance & Transparency",
    IconComponent: Handshake,
    items: [
      {
        title: "Audit Trails & Data Logs",
        description:
          "Maintain full visibility with detailed audit logs that track platform activity and data access for compliance and review.",
      },
      {
        title: "Regional Data Residency",
        description:
          "We offer data hosting in EU or other required jurisdictions to meet local legal and regulatory requirements.",
      },
      {
        title: "Third-Party Assessments",
        description:
          "Our platform undergoes regular security reviews and compliance audits to maintain trust and reliability.",
      },
    ],
  },
];

export default function Info() {
  return (
    <div
      id="features"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-20 flex-1"
    >
      <main className="flex flex-col gap-20 row-start-2 items-center w-full">
        {sections.map((section, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <section key={section.title} className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                {/* Text Column */}
                <div
                  className={`flex flex-col justify-center space-y-8 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {section.title}
                  </h2>
                  <div className="space-y-8">
                    {section.items.map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-500 dark:text-primary/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image or Icon Column */}
                <div
                  className={`relative flex items-center justify-center bg-gray-100 aspect-square rounded-xl ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  {section.image ? (
                    <Image
                      alt={section.image.alt}
                      src={section.image.src}
                      width={800}
                      height={800}
                      className="rounded-xl object-cover"
                    />
                  ) : (
                    <section.IconComponent className="w-60 h-60 md:w-80 md:h-80 text-primary" />
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
