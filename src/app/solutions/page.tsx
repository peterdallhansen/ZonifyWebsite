import BlurFade from "@/components/ui/blur-fade";
import { solutions } from "@/lib/constants";
import Image from "next/image";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "The full Zonify platform — from real-time analytics and AI querying to predictive tools, digital twins, and seamless data integrations.",
};

export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 md:px-8 pb-16">
        {/* Hero */}
        <section className="mt-40 md:mt-52 grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6">
            <BlurFade delay={0.1} inView>
              <h1 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em]">
                One platform. Every insight.
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
                From live visitor analytics to AI-powered querying and
                predictive forecasting — everything your organization needs to
                understand and act on spatial data, built into a single
                connected platform.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* Rows */}
        <section>
          <div className="grid grid-cols-8">
            {solutions.map((solution, index) => (
              <BlurFade
                key={index}
                delay={0.05 * index}
                inView
                className="col-span-8 grid grid-cols-subgrid gap-4"
              >
                <div className="col-span-8 grid grid-cols-subgrid gap-4 border-t border-gray-300 py-8 md:py-10 scroll-m-20">
                  {/* LEFT TEXT */}
                  <div className="col-span-full flex flex-col gap-4 md:col-span-4 xl:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      {solution.description}
                    </p>

                    <h2 className="text-xl md:text-2xl font-medium">
                      {solution.label}
                    </h2>

                    <p className="text-md text-gray-600 leading-relaxed">
                      {solution.longDescription}
                    </p>

                    <a
                      href={solution.href}
                      className="text-sm text-gray-900 flex items-center gap-1 group mt-1"
                    >
                      Explore {solution.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="col-span-full md:col-span-4 md:col-start-5">
                    <div className="relative w-full min-h-[320px] overflow-hidden rounded-lg md:min-h-[520px]">
                      <Image
                        src={solution.image || "/images/placeholder.png"}
                        alt={solution.label}
                        fill
                        className={cn("object-cover", solution.imageClassName)}
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
