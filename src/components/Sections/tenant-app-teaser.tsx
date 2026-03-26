"use client";
import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import { MapPin, UploadCloud, Users, Zap } from "lucide-react";

const featuresLeft = [
  {
    icon: <MapPin className="w-5 h-5 text-primary/70" />,
    title: "Store Benchmarking",
    description:
      "Compare your daily footfall and capture rate directly against the shopping center's overall traffic trends.",
  },
  {
    icon: <UploadCloud className="w-5 h-5 text-primary/70" />,
    title: "POS Data Uploads",
    description:
      "Seamlessly submit revenue data and track correlation with footfall instantly.",
  },
];

const featuresRight = [
  {
    icon: <Users className="w-5 h-5 text-primary/70" />,
    title: "True Window Conversion",
    description:
      "Measure exactly how many passing mall visitors enter your store to test and optimize your window displays.",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary/70" />,
    title: "Mobile Alerts",
    description:
      "Receive push notifications for critical insights, mall events, and key performance shifts.",
  },
];

export default function TenantAppTeaser() {
  return (
    <section className="py-24 bg-background w-full overflow-hidden ">
      <div className="container mx-auto px-6 max-w-7xl  flex flex-col justify-center">
        <div className="text-center mb-24 space-y-4">
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-primary">
              Empower Tenants. Grow Together.
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg md:text-xl text-primary/60 max-w-2xl mx-auto">
              Give retailers the actionable footfall insights they need to succeed, while effortlessly automating your mall's POS data collection.
            </p>
          </BlurFade>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          {/* Left Features */}
          <div className="flex-1 w-full max-w-sm space-y-[200px] mb-[200px] lg:text-left text-center">
            {featuresLeft.map((feature, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1}>
                <div className="flex flex-col lg:items-start items-center space-y-4">
                  {/* <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    {feature.icon}
                  </div> */}
                  <div>
                    <h3 className="text-xl font-medium text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-primary/60 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Center Image */}
          <BlurFade delay={0.4} className="flex-shrink-0 relative z-10 w-full max-w-md lg:max-w-sm xl:max-w-lg">
            <div className="relative w-full aspect-[4/5]" style={{ position: "relative" }}>
              <Image
                src="/images/zonify-tenant-mobile-app.png"
                alt="Zonify Tenant App Mobile View"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain"
                priority
              />
            </div>
          </BlurFade>

          {/* Right Features */}
          <div className="flex-1 w-full max-w-sm space-y-[200px] lg:text-left text-center">
            {featuresRight.map((feature, index) => (
              <BlurFade key={index} delay={0.5 + index * 0.1}>
                <div className="flex flex-col lg:items-start items-center space-y-4">
                  {/* <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    {feature.icon}
                  </div> */}
                  <div>
                    <h3 className="text-xl font-medium text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-primary/60 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
