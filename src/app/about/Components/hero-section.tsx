import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[800px] w-full container mt-20 flex items-center justify-center overflow-hidden rounded-2xl">
      {/* Gradient overlay */}
      <div className="absolute w-full inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />

      {/* Centered image */}
      <Image
        src="/images/hollandsvej.jpg"
        alt="Team collaboration"
        className="relative z-0 h-auto w-full object-cover mx-auto"
        width={1920}
        height={1080}
      />

      {/* Text content */}
      <div className="absolute bottom-8 z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-light text-white mb-8 leading-tight">
          Advancing insights
          <br />
          with artificial intelligence.
        </h1>
      </div>
    </section>
  );
}
