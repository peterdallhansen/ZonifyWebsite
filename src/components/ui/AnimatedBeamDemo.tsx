"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { LucideDatabase } from "lucide-react";
import LogoIcon from "../LogoIcon";
import { AnimatedBeam } from "./animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gray-100 mb-20 rounded-xl">
      <div
        className={cn(
          "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 ",
          className
        )}
        ref={containerRef}
      >
        <div className="flex size-full max-w-lg  flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}>
              <Icons.powerbi />
            </Circle>
            <Circle ref={div2Ref}>
              <Icons.deltalake />
            </Circle>
            <Circle ref={div3Ref}>
              <LucideDatabase />
            </Circle>
            <Circle ref={div4Ref}>
              <Icons.openapi />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.excel />
            </Circle>
          </div>

          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref}>
              <LogoIcon />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
          reverse
        />
      </div>
    </div>
  );
}

const Icons = {
  powerbi: () => (
    <img src="/images/powerbi.svg" alt="Power BI" className="w-6 h-6" />
  ),
  deltalake: () => (
    <img src="/images/deltalake.svg" alt="Delta Lake" className="w-6 h-6" />
  ),
  openapi: () => (
    <img
      src="/images/openapi.svg"
      alt="Openapi"
      className="w-6 h-6 object-contain"
    />
  ),
  excel: () => <img src="/images/excel.svg" alt="Excel" className="w-6 h-6 " />,
};
