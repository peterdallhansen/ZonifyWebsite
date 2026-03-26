import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { Industries } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Industries",
};

function Page() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center pt-40 px-2">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Industries
        </h4>
      </BlurFade>
      <BlurFade delay={0.3} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl max-w-2xl mb-2 text-center leading-tight text-primary">
          Discover Solutions Designed for Your Industry Needs
        </h2>
      </BlurFade>

      <div className="space-y-32 mt-20 container">
        {Industries.map((solution, index) => (
          <div
            key={solution.label}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 lg:gap-16`}
          >
            <div className="lg:w-1/2 space-y-4">
              <BlurFade delay={0.2} inView>
                <h2 className="text-2xl md:text-3xl  text-primary">
                  {solution.label}
                </h2>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <p className="text-primary/80 max-w-xl">
                  {solution.longDescription}
                </p>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <a
                  href={solution.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <AnimatedShinyText className="inline-flex items-center py-2 transition ease-out text-primary">
                    <span>Go to Page</span>
                    <ChevronRight className="ml-1 size-4" />
                  </AnimatedShinyText>
                </a>
              </BlurFade>
            </div>

            <div className="lg:w-1/2 rounded-lg overflow-hidden">
              <BlurFade delay={0.5} inView>
                <div className="relative aspect-[4/4] w-full">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.label}
                    fill
                    quality={100}
                    className="object-cover bg-gray-100"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
