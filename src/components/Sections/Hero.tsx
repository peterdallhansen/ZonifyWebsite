import { useEffect, useRef, useState } from "react";
import BlurFade from "../ui/blur-fade";
import Partners from "./Partners";
import Image from "next/image";

function Hero() {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [videoReady, setVideoReady] = useState(false);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   const markReady = () => setVideoReady(true);

  //   // If the video is already ready from cache/hydration timing, handle it immediately.
  //   if (video.readyState >= 2) {
  //     setVideoReady(true);
  //   }

  //   video.addEventListener("loadeddata", markReady);
  //   video.addEventListener("canplay", markReady);
  //   video.addEventListener("playing", markReady);

  //   return () => {
  //     video.removeEventListener("loadeddata", markReady);
  //     video.removeEventListener("canplay", markReady);
  //     video.removeEventListener("playing", markReady);
  //   };
  // }, []);

  return (
    <section className="relative mb-20 flex min-h-screen h-full w-screen flex-col overflow-hidden p-0 pb-0 ">
      <div className="min-h-0 w-full flex-1">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
          {/* <video
            ref={videoRef}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nofullscreen noremoteplayback nodownload"
            disableRemotePlayback
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/video_1773312921087.mp4" type="video/mp4" />
          </video> */}
          <Image
            src="/images/black-background.webp"
            alt="Hero Image"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
          />

          {/* <div
            className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-1000 ease-out ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          /> */}

          <div className="pointer-events-none absolute inset-0  bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />

          <div className="pointer-events-none absolute inset-0  bg-gradient-to-t from-black/20 via-transparent to-black/40" />

          <div className="absolute bottom-12 left-2 z-10 flex max-w-3xl flex-col items-start justify-end space-y-6 px-0 text-left sm:bottom-16 sm:left-10 md:bottom-8 md:left-8">
            <BlurFade delay={0} inView>
              <h1 className="text-balance text-5xl leading-tight tracking-tight text-white sm:text-5xl xl:text-[80px]">
                AI-Driven Insights from Every Footstep
              </h1>
            </BlurFade>

            <BlurFade delay={0.1} inView>
              <h2 className="max-w-2xl text-base font-medium leading-relaxed text-gray-200 sm:text-lg xl:text-2xl">
                Unlock real-time visitor analytics from your existing camera
                infrastructure. No new hardware required.
              </h2>
            </BlurFade>
          </div>
          <div className="absolute right-8 bottom-8 max-w-[470px] backdrop-blur-sm rounded-lg p-4 rounded-lg text-lg text-white text-balance">
            <h2>
              → Your on-demand spatial intelligence layer. Understand visitor
              flows, optimize operations, and empower your team to make
              data-driven decisions with confidence.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex h-24 w-full items-center">
        <Partners />
      </div>
    </section>
  );
}

export default Hero;
