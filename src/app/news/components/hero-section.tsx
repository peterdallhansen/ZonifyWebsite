import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-black text-white">
      {/* Hero Content */}
      <div className="mx-auto max-w-[1400px] px-12 pb-16 pt-32">
        {/* Featured Video */}
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg">
          <video
            src="/videos/Ad2.mp4" // use actual video file
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline // ensures no full-screen autoplay on iOS
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
            Featured
          </p>
          <h1 className="mb-4 text-5xl  tracking-tight md:text-6xl lg:text-7xl">
            Introducing AI-Assistant
          </h1>
          <p className="mb-8 text-sm text-gray-400">
            AI-Assistant / November 1st, 2025
          </p>
          <Button
            variant="outline"
            className="rounded-full border-white bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
