"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Image, { type StaticImageData } from "next/image";

import frame102 from "@/public/images/vision-ai-dashboard.png";
import frame103 from "@/public/images/spatial-intelligence-map.png";
import reportImage from "@/public/images/automated-reporting-suite.png";
import customerJourneyImage from "@/public/images/customer-journey-analytics.png";

import searchAnim from "@/public/animations/SearchAnim.json";
import researchAnim2 from "@/public/animations/Research3.json";
import loadingResearchAnim from "@/public/animations/LoadingResearch.json";
import widgetAnim from "@/public/animations/Widget2.json";

type AnimationData = object;

type Offering = {
  id: string;
  title: string;
  alt: string;
  image?: StaticImageData;
  animation?: AnimationData;
};

const keyPoints: Offering[] = [
  {
    id: "analytics-2",
    title:
      "Unlock real-time visitor analytics from your existing camera infrastructure",
    image: frame103,
    alt: "Standard surveillance camera with AI analytics overlay",
  },
  {
    id: "analytics-1",
    title:
      "Unlock real-time visitor analytics from your existing camera infrastructure",
    image: frame102,
    alt: "Standard surveillance camera with AI analytics overlay",
  },
  
 
    {
    id: "customer-journey",
    title: "Follow every customer journey to discover cross-shopping patterns",
    image: customerJourneyImage,
    alt: "Customer journey tracking and cross-shopping analysis",
  },
  {
    id: "twin-1",
    title: "See every square foot in real-time with a living digital twin",
    image: reportImage,
    alt: "3D digital twin simulating physical space traffic",
  },
   {
    id: "journey-1",
    title: "Follow every customer journey to discover cross-shopping patterns",
    animation: searchAnim,
    alt: "Customer journey tracking and cross-shopping analysis",
  },
  {
    id: "journey-2",
    title: "Follow every customer journey to discover cross-shopping patterns",
    animation: researchAnim2,
    alt: "Customer journey tracking and cross-shopping analysis",
  },
  {
    id: "twin-2",
    title: "See every square foot in real-time with a living digital twin",
    animation: loadingResearchAnim,
    alt: "3D digital twin simulating physical space traffic",
  },
  {
    id: "gdpr-1",
    title: "Gather demographic insights safely with 100% GDPR compliance",
    animation: widgetAnim,
    alt: "GDPR-compliant demographic breakdown dashboard",
  },
];

export default function Offerings() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => keyPoints, []);

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return;

    const containerWidth = container.clientWidth;
    const slideLeft = slide.offsetLeft;
    const slideWidth = slide.offsetWidth;

    const targetLeft = slideLeft - (containerWidth / 2 - slideWidth / 2);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const clampedLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    container.scrollTo({
      left: clampedLeft,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame = 0;

    const updateActiveSlide = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSlide);
    };

    updateActiveSlide();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = useCallback(() => {
    if (activeIndex === slides.length - 1) {
      scrollToSlide(0);
    } else {
      scrollToSlide(activeIndex + 1);
    }
  }, [activeIndex, slides.length, scrollToSlide]);

  const handlePrev = useCallback(() => {
    if (activeIndex === 0) {
      scrollToSlide(slides.length - 1);
    } else {
      scrollToSlide(activeIndex - 1);
    }
  }, [activeIndex, slides.length, scrollToSlide]);

  return (
    <section className="relative w-full max-w-screen mx-auto px-4 my-20">
      <div
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        aria-label="Offerings carousel"
      >
        <div
          className="flex gap-5 snap-x snap-mandatory scrollbar-hide mx-[140px]"
          style={{ paddingLeft: "calc((100% - 1500px)/2)" }}
        >
          {slides.map((offering, index) => {
            const isLast = index === slides.length - 1;

            const showBack =
              (index === activeIndex - 1 && activeIndex > 0) || isLast;

            return (
              <div
                key={offering.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="flex flex-row justify-between items-center gap-4 shrink-0"
              >
                <div className="rounded-lg overflow-hidden min-w-full md:min-w-[1120px] flex flex-col space-y-8 snap-center">
                  <h3 className="max-w-2xl text-3xl text-balance z-10 leading-tight">
                    {offering.title}
                  </h3>

                  <div className="h-[560px] relative rounded-xl overflow-hidden flex items-center justify-center">
                    {offering.animation ? (
                      <Lottie
                        animationData={offering.animation}
                        loop={index === activeIndex}
                        autoplay={index === activeIndex}
                        className="h-full w-auto rounded-xl bg-[url('/images/showcase-background-gray.jpg')]"
                        aria-label={offering.alt}
                        role="img"
                      />
                    ) : offering.image ? (
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, 1120px"
                        className="h-full w-auto object-contain rounded-xl"
                      />
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-white rounded-full p-2 border focus:outline-none"
                  onClick={
                    showBack
                      ? isLast
                        ? () => scrollToSlide(0)
                        : handlePrev
                      : handleNext
                  }
                  aria-label={
                    showBack ? "Go to previous slide" : "Go to next slide"
                  }
                >
                  {showBack ? (
                    <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
