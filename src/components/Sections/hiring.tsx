import React from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import BlurFade from "../ui/blur-fade";
import Link from "next/link";
import { Button } from "../ui/button";

function Hiring() {
  return (
    <section className=" flex items-center container justify-items-center min-h-1/2 gap-8 md:gap-32 p-2 md:p-8  py-10 ">
      <BlurFade inView delay={0.2} className="w-full">
        <div className="w-full bg-[#0C0C0C] rounded-2xl p-4 sm:p-6 md:p-12 lg:p-20 flex flex-col md:flex-row relative overflow-hidden gap-6 md:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6 w-full md:w-2/3">
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-white">
              We're Hiring!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
              Join our passionate team and help us build amazing products that
              make a difference. We’re looking for creative, driven individuals
              who are excited to grow and innovate with us.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end md:justify-end">
            <Link href="/careers" className="w-full md:w-auto">
              <Button
                size={"lg"}
                className="bg-white w-full md:w-80 h-14 md:h-16 text-base md:text-lg rounded-full text-black hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center px-4 py-2"
              >
                <span>See Open Positions</span>
                <ArrowRightIcon className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

export default Hiring;
