"use client";

import BlurFade from "../ui/blur-fade";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

import MagasinLogo from "@/assets/partners/magasin.svg";
import MicrosoftLogo from "@/assets/partners/microsoft.svg";
import NvidiaLogo from "@/assets/partners/nvidia.svg";
import InnofactorLogo from "@/assets/partners/innofactor.svg";
import DTUSkylabLogo from "@/assets/partners/dtu.svg";
import BytorvHorsensLogo from "@/assets/partners/bytorvhorsens.svg";
import SSCPLogo from "@/assets/partners/sscp.svg";
import EjnerHesselLogo from "@/assets/partners/ejnerhessel.svg";
import DadesLogo from "@/assets/partners/dades.svg";
import ROSLogo from "@/assets/partners/ros.svg";
import RenaultLogo from "@/assets/partners/renault.svg";

export default function Partners() {
  const companies = [
    { Logo: BytorvHorsensLogo, alt: "Bytorv Horsens" },
    // { Logo: MicrosoftLogo, alt: "Microsoft" },
    // { Logo: NvidiaLogo, alt: "Nvidia" },
    {Logo: MagasinLogo, alt: "Magasin"},
    // { Logo: InnofactorLogo, alt: "Innofactor" },
    // { Logo: DTUSkylabLogo, alt: "DTU Skylab" },
    { Logo: SSCPLogo, alt: "SSCP" },
    { Logo: EjnerHesselLogo, alt: "Ejner Hessel" },
    { Logo: DadesLogo, alt: "Dades" },
    { Logo: ROSLogo, alt: "ROS" },
    { Logo: RenaultLogo, alt: "Renault" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:20s] gap-8 sm:gap-16"
        repeat={6}
      >
        {companies.map(({ Logo: Component }, index) => (
          <BlurFade
            inView
            delay={index * 0.1 + 0.2}
            key={index}
            className="flex items-center justify-center mx-4 sm:mx-8"
          >
            <div className="flex items-center justify-center  max-w-24 sm:w-32 h-12 sm:h-16 ">
              <Component
                style={{
                  maxWidth: "100%",
                  maxHeight: "32px",
                  objectFit: "contain",
                  fill: "#9ca3af",
                }}
                role="img"
                className="opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105 "
              />
            </div>
          </BlurFade>
        ))}
      </Marquee>
    </div>
  );
}
