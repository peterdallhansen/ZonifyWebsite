"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function WIP() {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6 z-[10] w-full text-center ">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Article in Progress
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-6xl  leading-tight text-primary text-center">
            We&apos;re Still Crafting This Piece
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-base md:text-lg text-primary text-center max-w-[600px]">
            Our team is hard at work putting the finishing touches on this
            article. Please bear with us as we ensure it meets our high
            standards of quality and insight.
          </p>
        </BlurFade>
        <BlurFade delay={0.7} inView className="mt-2">
          <a href="/">
            <Button className="rounded-3xl bg-primary text-background">
              Back to Home
            </Button>
          </a>
        </BlurFade>
      </main>
    </div>
  );
}
