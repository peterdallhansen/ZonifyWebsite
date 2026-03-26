"use client";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const LogoIcon: React.FC<Props> = ({
  className = "flex items-center space-x-2",
  width = 160,
  height = 40,
}) => {
  const logoSrc = "/images/logos/Icon.svg";

  return (
    <a className={className} href="/">
      <Image
        src={logoSrc}
        width={width}
        height={height}
        alt="Zonify Logo"
        className="object-contain"
        priority
      />
    </a>
  );
};

export default LogoIcon;
