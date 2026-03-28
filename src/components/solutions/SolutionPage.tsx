"use client";

import SidebarMenu from "@/components/SidebarMenu";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState, type ReactNode } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type ImageSource = string | StaticImageData;
type LottieData = object;

export interface SolutionHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface ImageVisual {
  type: "image";
  src: ImageSource;
  alt: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

interface AnimationVisual {
  type: "animation";
  data: LottieData;
  className?: string;
  containerClassName?: string;
}

interface VideoVisual {
  type: "video";
  src: string;
  className?: string;
  containerClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

interface NodeVisual {
  type: "node";
  node: ReactNode;
  containerClassName?: string;
}

export type SolutionVisual =
  | ImageVisual
  | AnimationVisual
  | VideoVisual
  | NodeVisual;

export interface SolutionSection {
  id: string;
  title: string;
  body: ReactNode;
  cta: string;
  href: string;
  visual?: SolutionVisual;
  visualFrameClassName?: string;
}

interface SolutionPageProps {
  label: string;
  title: string;
  description: ReactNode;
  currentPath: string;
  heroVisual?: SolutionVisual;
  highlights?: SolutionHighlight[];
  intro?: ReactNode;
  sections: SolutionSection[];
  className?: string;
}

function renderImage(visual: ImageVisual, defaults?: { className?: string }) {
  const dimensions =
    typeof visual.src === "string"
      ? {
          width: visual.width ?? 1600,
          height: visual.height ?? 900,
        }
      : {};

  return (
    <Image
      src={visual.src}
      alt={visual.alt}
      sizes={visual.sizes}
      priority={visual.priority}
      className={cn(defaults?.className, visual.className)}
      {...dimensions}
    />
  );
}

function renderVisual(
  visual: SolutionVisual,
  options?: {
    imageClassName?: string;
    containerClassName?: string;
    animationClassName?: string;
  },
) {
  if (visual.type === "image") {
    return (
      <div
        className={cn(options?.containerClassName, visual.containerClassName)}
      >
        {renderImage(visual, { className: options?.imageClassName })}
      </div>
    );
  }

  if (visual.type === "animation") {
    return (
      <div
        className={cn(options?.containerClassName, visual.containerClassName)}
      >
        <Lottie
          animationData={visual.data}
          loop
          autoplay
          className={cn(options?.animationClassName, visual.className)}
        />
      </div>
    );
  }

  if (visual.type === "video") {
    return (
      <div
        className={cn(options?.containerClassName, visual.containerClassName)}
      >
        <video
          src={visual.src}
          autoPlay={visual.autoPlay ?? true}
          loop={visual.loop ?? true}
          muted={visual.muted ?? true}
          playsInline={visual.playsInline ?? true}
          className={cn("w-full h-auto rounded-xl", visual.className)}
        />
      </div>
    );
  }

  return (
    <div className={cn(options?.containerClassName, visual.containerClassName)}>
      {visual.node}
    </div>
  );
}

export default function SolutionPage({
  label,
  title,
  description,
  currentPath,
  heroVisual,
  highlights,
  intro,
  sections,
  className,
}: SolutionPageProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  const sidebarSections = useMemo(
    () =>
      sections.map(({ id, title: sectionTitle }) => ({
        id,
        title: sectionTitle,
      })),
    [sections],
  );

  useEffect(() => {
    const handleScroll = () => {
      let nextActive = sections[0]?.id ?? "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          nextActive = section.id;
        }
      });

      setActiveSection((current) =>
        current === nextActive ? current : nextActive,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <main className={cn("bg-white text-gray-800", className)}>
      <div className="mx-auto grid max-w-[2000px] gap-16 px-5 pb-16 md:px-8">
        <section className="mt-40 grid grid-cols-8 gap-4 md:mt-52">
          <div className="col-span-8 md:col-span-8 flex justify-center flex-col items-center text-center">
            <BlurFade delay={0.25} inView>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest  text-gray-400">
                {label}
              </p>
            </BlurFade>
            <BlurFade delay={0.35} inView>
              <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-balance md:text-7xl">
                {title}
              </h1>
            </BlurFade>
            <BlurFade delay={0.45} inView>
              <div className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                {description}
              </div>
            </BlurFade>
          </div>
        </section>

        {heroVisual ? (
          <BlurFade delay={0.55} inView>
            {renderVisual(heroVisual, {
              containerClassName:
                "relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl",
              imageClassName: "h-auto w-full rounded-xl",
            })}
          </BlurFade>
        ) : null}

        {highlights?.length ? (
          <section className="pt-12 md:pt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                  <BlurFade key={highlight.title} delay={0.1 * index} inView>
                    <div className="flex flex-col gap-4">
                      <Icon size={28} className="text-gray-700" />
                      <h2 className="text-xl font-medium md:text-2xl">
                        {highlight.title}
                      </h2>
                      <p className="text-md leading-relaxed text-gray-600">
                        {highlight.description}
                      </p>
                      <a
                        href={highlight.link}
                        className="group mt-1 flex items-center gap-1 text-sm text-gray-900"
                      >
                        {highlight.linkText}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="pt-12 md:pt-16">
          {intro ? (
            <BlurFade
              delay={0}
              inView
              className="w-full flex justify-center text-center"
            >
              <div className="max-w-3xl text-lg   leading-relaxed text-gray-500">
                {intro}
              </div>
            </BlurFade>
          ) : null}

          <div
            className={cn(
              "relative flex w-full flex-row gap-8",
              intro && "pt-12 md:pt-16",
            )}
          >
            <div className="sticky top-40 hidden w-[280px] shrink-0 self-start md:block">
              <SidebarMenu
                sections={sidebarSections}
                activeSection={activeSection}
                currentPath={currentPath}
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-40 border-t border-gray-300 py-12 md:py-16"
                >
                  <h2 className="mb-5 text-2xl font-medium md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mb-6 max-w-2xl text-md leading-relaxed text-gray-600 [&_p]:m-0 [&_strong]:text-gray-900">
                    {section.body}
                  </div>
                  <a href={section.href}>
                    <AnimatedShinyText className="mb-8 inline-flex items-center gap-1 px-0 py-1 text-sm transition ease-out hover:text-neutral-600">
                      <span>{section.cta}</span>
                      <ArrowRightIcon className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                  </a>

                  {section.visual ? (
                    <div
                      className={cn(
                        "overflow-hidden rounded-xl  bg-gray-100",
                        section.visualFrameClassName,
                      )}
                    >
                      {renderVisual(section.visual, {
                        containerClassName:
                          "flex h-full max-h-[700px] w-auto items-center justify-center",
                        imageClassName:
                          "h-auto w-full rounded-xl object-contain",
                        animationClassName: "h-full w-auto",
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
