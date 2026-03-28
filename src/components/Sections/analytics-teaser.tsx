"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AnalyticsTeaser() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`; // blue-300
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative my-6 md:my-16 bg-primary w-full container max-w-[1800px]  rounded-2xl md:rounded-3xl overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:pl-16 lg:pr-0">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12 w-full">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 my-auto py-12 md:py-16 lg:py-20">
            <BlurFade inView delay={0.1}>
              <h5 className="text-lg md:text-xl lg:text-2xl font-normal text-white">
                Analytics Hub
              </h5>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
                Every Metric. Every Location. One Screen.
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={"/solutions/analytics-hub"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 rounded-full px-6 h-11 text-[15px] font-normal transition-colors"
                  >
                    Explore Analytics Hub
                  </Button>
                </Link>
                <Link href={"/contact"} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto hover:text-white outline-none text-white rounded-full px-6 h-11 text-[15px] font-normal transition-colors bg-[rgba(183,191,217,0.2)] hover:bg-[rgba(183,191,217,0.3)] backdrop-blur-md border-[rgba(230,234,240,0.06)]"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <div className="relative h-[200px] sm:h-[250px] md:h-[400px] lg:h-[700px]">
              <Image
                src="/images/dashboardPreview.png"
                alt="Zonify.ai analytics dashboard with interactive maps and smart filtering"
                fill
                priority
                className="object-contain md:object-cover object-center md:object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
