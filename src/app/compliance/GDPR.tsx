"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideDownload } from "lucide-react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const privacySections = [
  {
    id: "gdpr",
    title: "GDPR COMPLIANCE & PRIVACY BY DESIGN",
    content:
      "Zonify.ai is built from the ground up to respect visitor privacy. We operate strictly on behavioral data, ensuring total compliance with global privacy standards like GDPR.",
    bulletPoints: [
      "No personally identifiable information (PII) is ever collected or stored.",
      "We rely entirely on secure vector embeddings and spatial metrics—no facial recognition technology is used.",
      "Our processes are designed to support legitimate business interests without compromising individual anonymity.",
    ],
  },
  {
    id: "infrastructure",
    title: "ENTERPRISE-GRADE INFRASTRUCTURE",
    content:
      "Our entire platform and data processing pipeline are securely hosted on Microsoft Azure, providing world-class reliability and data protection.",
    bulletPoints: [
      "Leveraging Azure Kubernetes Service (AKS) allows our systems to scale dynamically and handle complex data streams reliably.",
      "All data is encrypted both in transit and at rest using industry best practices.",
      "Granular, role-based access controls ensure that only authorized personnel can access your analytics dashboards.",
    ],
  },
  {
    id: "data-processing-overview",
    title: "DATA PROCESSING OVERVIEW",
    content:
      "Zonify.ai anonymizes and analyzes behavioral data in real-time to support privacy and insight generation without ever storing sensitive video.",
    bulletPoints: [
      "Video frames are instantly converted into anonymized vector embeddings—no raw images are kept.",
      "Movements are analyzed as continuous, anonymous paths to provide building-wide analytics.",
      "No image data is stored—only anonymized identifiers are retained for spatial analysis.",
    ],
  },
  {
    id: "security-audits",
    title: "TRANSPARENCY & ACCOUNTABILITY",
    content:
      "We believe trust is built on transparency. Our systems are continuously monitored and audited to maintain the highest security standards.",
    bulletPoints: [
      "Detailed audit trails and logs provide full visibility into platform activity and access.",
      "We utilize structural redundancy and high-availability cloud architecture to guarantee uptime.",
      "Regular assessments ensure our methods continually meet evolving legal and regulatory requirements.",
    ],
  },
];

export default function PrivacyAndDataProtection() {
  const effectiveDate = dayjs("2025-05-01").format("LL");
  const downloadUrl = "/resources/privacy-policy.pdf";

  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <h2 className="text-2xl md:text-3xl xl:text-5xl  leading-tight text-primary text-center">
            Privacy & Data Protection
          </h2>
          <h2 className="text-xl md:text-lg xl:text-2xl mb-2 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            How Zonify.ai ensures compliance, anonymization, and transparency in
            data processing
          </h2>
          <div className="w-full flex justify-end items-center pt-8">
            <div className="text-sm">Effective Date: {effectiveDate}</div>
            <a href={downloadUrl} download className="inline-flex items-center">
              <Button variant="link">
                <LucideDownload />
                Download
              </Button>
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {privacySections.map((section, index) => (
            <section id={section.id} key={index}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
              {section.bulletPoints && (
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  {section.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
