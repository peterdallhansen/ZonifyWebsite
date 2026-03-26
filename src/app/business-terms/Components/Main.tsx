"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { LucideDownload } from "lucide-react";
dayjs.extend(localizedFormat);
const termsSections: (
  | {
      id: string;
      title: string;
      content: string;
      bulletPoints?: undefined;
    }
  | {
      id: string;
      title: string;
      content: string;
      bulletPoints: string[];
    }
)[] = [
  {
    id: "generally",
    title: "GENERALLY",
    content:
      "Defined terms used in the Agreement shall have the same meaning in these SaaS Terms, unless otherwise stated or implied by the context.",
  },
  {
    id: "software-license",
    title: "SOFTWARE LICENSE AND USE OF THE SOFTWARE",
    content:
      "The Provider grants the Customer a non-transferable and non-exclusive right to use the Software and SaaS Services for its own internal business purposes, provided that the Customer complies with these SaaS Terms and the Agreement and pays all Fees under the Agreement.",
    bulletPoints: [
      "The Provider may develop new modules, functions or other things for the Software (“Development News”), which may or may not become part of the Software offered to the Customer.",
      "The Customer may not assign, sublicense, rent, lend or otherwise make available the SaaS Services or Software in whole or in part to third parties.",
      "The Customer may not reverse engineer, decompile, or disassemble the Software or SaaS Services.",
      "Open-source components may be provided and installed by the Vendor and are governed by their respective license terms.",
      "All rights not specifically granted are expressly reserved.",
    ],
  },
  {
    id: "availability-updates",
    title: "AVAILABILITY AND UPDATES",
    content:
      "The Software is generally available 24/7/365, and updates may affect availability temporarily. The Customer must ensure compatibility of their own systems.",
    bulletPoints: [
      "The Customer is responsible for ensuring compatibility of its systems and infrastructure.",
      "If annual average availability is below 95% (not due to the Customer), the Customer may request a price reduction for affected months.",
      "Any such reduction is 5% per full percentage point below 95%, capped at 100% of that month’s remuneration.",
      "No other remedies apply for lower availability than defined.",
      "Updates and maintenance do not entitle the Customer to any remedy.",
      "Updates may be delivered as new versions, service packs, hotfixes, etc.",
      "Planned service window downtimes (usually outside 09:00–17:00 CET) are excluded from availability calculations.",
    ],
  },
  {
    id: "warranty-liability",
    title: "WARRANTIES AND LIABILITY",
    content:
      "The Software is provided 'as is' without warranties unless explicitly stated. The Provider’s liability is limited.",
    bulletPoints: [
      "No guarantee of uninterrupted or error-free operation or correction of all defects.",
      "No warranties of fitness for particular purpose or commercial outcomes.",
      "No responsibility for issues due to modifications by Customer or use of other unapproved software.",
      "Customer is responsible for maintaining software and installing updates.",
      "No liability for loss due to network/infrastructure issues or third-party attacks.",
      "No liability for loss of data, earnings, or indirect damages unless otherwise stated.",
      "Customer must indemnify the Provider against certain third-party claims.",
      "Product liability only applies per applicable Danish law.",
      "Provider not responsible for Customer’s use or interpretation of output data.",
    ],
  },
  {
    id: "customer-obligations",
    title: "CUSTOMER'S OBLIGATIONS",
    content:
      "The Customer is responsible for instructing users properly and complying with use restrictions and legal requirements.",
    bulletPoints: [
      "Employees must be instructed per the Supplier’s directions.",
      "Certification may be a prerequisite for use in certain cases.",
      "Users must comply with Supplier's guidelines regarding skill and use.",
      "Use is limited to the current version of the Software available.",
      "The Customer is responsible for legal, ethical, regulatory, and professional compliance.",
    ],
  },
];
export default function ServiceTerms() {
  const effectiveDate = dayjs("2025-04-30").format("LL");

  const downloadUrl = "/resources/software-terms.pdf";

  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <h2 className="text-2xl md:text-3xl xl:text-5xl leading-tight text-primary text-center">
            Business Terms
          </h2>
          <h2 className="text-xl md:text-lg xl:text-2xl mb-2 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            Terms and conditions for the usage of software built and distributed
            by Zonify.ai
          </h2>
          {/* Effective date */}
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
          {termsSections.map((section, index) => (
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
