"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Image, { type StaticImageData } from "next/image";

import MeasureZoneOverlay from "@/public/images/vision-ai-dashboard.png";
import Map3DCustomerPath from "@/public/images/spatial-intelligence-map.png";
import TenantLeaseReport from "@/public/images/automated-reporting-suite.png";
import CustomerJourneySankeyChart from "@/public/images/customer-journey-analytics.png";

import DataAssistantAgent from "@/public/animations/SearchAnim3.json";
import ResizeZone from "@/public/animations/ResizeZone.json";
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
    title: "See how visitors move through every zone — in real time",
    image: Map3DCustomerPath,
    alt: "3D spatial intelligence map showing visitor flow across zones",
  },
  {
    id: "analytics-1",
    title:
      "Measure dwell time, footfall, and engagement across any defined area",
    animation: ResizeZone,
    alt: "AI-powered zone analytics dashboard with live visitor data",
  },
  {
    id: "customer-journey",
    title:
      "Track how shoppers move between stores to reveal cross-shopping patterns",
    image: CustomerJourneySankeyChart,
    alt: "Sankey chart showing customer journey and cross-shopping flows",
  },
  {
    id: "twin-1",
    title:
      "Deliver automated performance reports to tenants, teams, and leadership",
    image: TenantLeaseReport,
    alt: "Automated reporting suite with tenant and operational insights",
  },
  {
    id: "journey-1",
    title: "Ask any question about your space — and get an instant answer",
    animation: DataAssistantAgent,
    alt: "AI data assistant responding to natural language spatial queries",
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
    <section className="relative mx-auto my-20 w-full max-w-screen px-4">
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        aria-label="Offerings carousel"
      >
        <div
          className="flex items-stretch gap-4 snap-x snap-mandatory md:mx-[140px] md:gap-5"
          style={{ paddingLeft: "max(0px, calc((100% - 1500px) / 2))" }}
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
                className="flex shrink-0 self-stretch gap-4"
              >
                <div className="flex h-full w-[calc(100vw-4rem)] max-w-full flex-col justify-end snap-center md:w-[1120px] md:min-w-[1120px]">
                  <h3 className="max-w-2xl text-2xl leading-tight text-balance md:text-3xl">
                    {offering.title}
                  </h3>

                  <div className="relative mt-4 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl bg-[url('/images/showcase-background-gray.jpg')] bg-cover bg-center sm:h-[320px] md:mt-8 md:h-[560px]">
                    {offering.animation ? (
                      <Lottie
                        animationData={offering.animation}
                        loop
                        autoplay
                        className="h-full w-full max-h-full max-w-full rounded-xl"
                        aria-label={offering.alt}
                        role="img"
                      />
                    ) : offering.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={offering.image}
                          alt={offering.alt}
                          priority={index < 2}
                          fill
                          sizes="(max-width: 768px) calc(100vw - 2rem), 1120px"
                          className="rounded-xl object-contain"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  className="hidden shrink-0 self-center rounded-full border bg-white p-2 focus:outline-none md:block"
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
