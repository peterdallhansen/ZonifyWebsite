import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Partners",
};
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/images/Partners/microsoft-logo-white-transparent_2166875.png",
    description:
      "Microsoft is a global leader in software, services, devices, and solutions that help people and businesses realize their full potential.",
  },
  {
    id: 2,
    name: "NVIDIA",
    logo: "/images/Partners/images (1).png",
    description:
      "NVIDIA specializes in the design and manufacture of graphics processing units (GPUs) for gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market.",
  },
  {
    id: 3,
    name: "Innofactor",
    logo: "/images/Partners/innofactor_logo_rgb_transparent_large-2.png",
    description:
      "Innofactor provides innovative IT solutions and services, focusing on digital transformation, cloud computing, and enterprise software to help businesses optimize their operations.",
  },
  {
    id: 4,
    name: "DTU Skylab",
    logo: "/images/Partners/DTU-skylab-logo.png",
    description: "",
  },
  {
    id: 4,
    name: "Milestone",
    logo: "/images/Partners/milestone_logo.png",
    description: "",
  },
];

export default function PartnersPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] pt-20 ">
      <div className="container mx-auto px-4 py-8">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center mb-2">
            Our Partners
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl  leading-tight text-primary text-center mb-8">
            Working Together With Trusted Partners
          </h2>
        </BlurFade>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="flex flex-col items-center"
              style={{ flex: "0 1 calc(33.333% - 2rem)" }} // max 3 per row, minus gap
            >
              <BlurFade inView delay={0.25 + 0.2 * index}>
                <div className="w-64 h-48 mb-4 relative">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
