"use client";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  variant?: "light" | "dark";
}

const Logo: React.FC<Props> = ({
  className = "flex items-center space-x-2",
  width = 140,
  height = 30,
  variant,
}) => {
  const lightLogo = "/images/logos/LogoNew/LogoBlack.svg";
  const darkLogo = "/images/logos/LogoNew/LogoWhite.svg";

  return (
    <a className={className} href="/">
      {variant === "light" && (
        <Image
          src={lightLogo}
          width={width}
          height={height}
          alt="Zonify Logo Light"
          className="object-contain"
          style={{ width: `${width}px`, height: "auto" }}
          priority
        />
      )}
      {variant === "dark" && (
        <Image
          src={darkLogo}
          width={width}
          height={height}
          alt="Zonify Logo Dark"
          className="object-contain"
          style={{ width: `${width}px`, height: "auto" }}
          priority
        />
      )}
      {!variant && (
        <>
          {/* Light logo by default */}
          <Image
            src={lightLogo}
            width={width}
            height={height}
            alt="Zonify Logo Light"
            className="object-contain block dark:hidden"
            style={{ width: `${width}px`, height: "auto" }}
            priority
          />
          {/* Dark logo */}
          <Image
            src={darkLogo}
            width={width}
            height={height}
            alt="Zonify Logo Dark"
            className="object-contain hidden dark:block"
            style={{ width: `${width}px`, height: "auto" }}
            priority
          />
        </>
      )}
    </a>
  );
};

export default Logo;
