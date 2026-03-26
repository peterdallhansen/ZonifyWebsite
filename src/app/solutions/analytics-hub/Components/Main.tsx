"use client";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8  pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Analytics Hub
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-6xl font-normal leading-tight text-primary text-center">
            One Place For Everything That Matters.
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-xl md:text-1xl xl:text-2xl mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            Monitor real-time behavior, analyze historical trends, and make
            smarter decisions—all from a single, intuitive dashboard built for
            decision-makers
          </p>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <div className="relative overflow-hidden object-cover scale-[1.5] md:scale-[1] rounded-xl">
            <Image
              src="/images/analytics-hub-preview.png"
              width={2000}
              height={2016}
              priority
              quality={100}
              alt="img"
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
