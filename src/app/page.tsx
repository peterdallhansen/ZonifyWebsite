"use client";
import TenantAppTeaser from "@/components/Sections/tenant-app-teaser";
import Hiring from "@/components/Sections/hiring";
import { ArrowRight, LucidePause, LucidePlay } from "lucide-react";
import { NewsGrid } from "./news/components/news-grid";
import Main2 from "@/components/Sections/Main2";
import { FeaturesSection } from "@/components/Sections/Features";
import Tools from "@/components/Tools";
import Offerings from "@/components/Offerings";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto flex flex-col items-center transition-colors duration-500">
<Main2 />

<div className="w-full mx-auto max-w-7xl px-6 md:px-12 mt-20">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-6 text-balance">
          See Your Space Come to Life <br /> Powered by AI
        </h2>
</div>
<Offerings />

      <div className="w-full   my-20 mx-auto container  md:px-12">
        <h2 className="text-4xl md:text-6xl font-medium text-center mb-8 text-balance">
          See how it works
        </h2>

        <div className="w-full rounded-2xl h-auto relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
            className="w-full rounded-2xl h-auto"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/video_1773312921087.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            onClick={toggleVideoPlayback}
          >
            {isVideoPlaying ? (
              <LucidePause fill="#fff" strokeWidth={0.5} />
            ) : (
              <LucidePlay fill="#fff" strokeWidth={0.5} />
            )}
          </button>
        </div>
      </div>
      <Tools />
      <div className="px-4 w-screen mx-auto flex items-center justify-center">
        <TenantAppTeaser />
      </div>

      <FeaturesSection />

<div className="mx-auto container px-6 py-16 md:px-12 md:py-20">
        <div className="flex flex-row justify-between w-full items-center mb-6">
          <p className="text-2xl font-medium">Latest News</p>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-primary/80 text-base group"
          >
            See all
            <ArrowRight className="w-4 h-4 group-hover:animate-wiggleRight" />
          </a>
        </div>
        <NewsGrid max={3} />
      </div>

<Hiring />
    </main>
  );
}
