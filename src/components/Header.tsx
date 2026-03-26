"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import CookieBanner from "@/components/CookieBanner";
import { navigation } from "@/lib/constants";
import MobileMenu from "./Header/MobileMenu";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHome = ["/", "/news"].includes(pathname);

  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);
  
  const lastScrollY = useRef(0);
  const atTopTimeout = useRef<number | null>(null);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  let hoverTimeout = useRef<number | null>(null);

  const currentHoverData = navigation.find((link) => link.label === hoveredLink);
  const isHovering = hoveredLink !== null;

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      
      // Hide header on scroll down, show on scroll up
      if (y > lastScrollY.current && y > 50) setShowHeader(false);
      else if (y < lastScrollY.current) setShowHeader(true);
      lastScrollY.current = y;

      // Handle top gradient/transparency
      const newAtTop = y < 10;
      if (newAtTop !== atTop) {
        if (atTopTimeout.current) clearTimeout(atTopTimeout.current);
        atTopTimeout.current = window.setTimeout(() => setAtTop(newAtTop), 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [atTop]);

  // Window Resize Listener
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onHover = (link: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredLink(link);
  };

  const onHoverEnd = () => {
    hoverTimeout.current = window.setTimeout(() => setHoveredLink(null), 100);
  };

  // Calculates height for dynamic dropdown expansion
  const getHeaderHeight = () => {
    if (!isHovering || !currentHoverData?.sublinkGroups) return 60;
    const groups = currentHoverData.sublinkGroups;
    const maxLinksInGroup = Math.max(...groups.map((g) => g.links.length));
    const rows = Math.ceil(groups.length / 3);
    const rowHeight = 36 * (maxLinksInGroup + 1);
    return 60 + 40 + rows * rowHeight; // TopNav + padding + Rows
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="site-header"
            className="fixed top-0 z-50 w-screen px-3 overflow-hidden text-white"
            initial={{ y: -100, opacity: 0, height: 60, backgroundColor: "rgba(0,0,0,0)" }}
            animate={{
              y: 0,
              opacity: 1,
              height: getHeaderHeight(),
              backgroundColor: isHovering && currentHoverData?.sublinkGroups
                ? "rgba(10,10,10,0.9)"
                : atTop && isHome
                  ? "rgba(0,0,0,0)"
                  : "#181818",
            }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseLeave={onHoverEnd}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 items-center mx-auto px-4 h-[60px]">
              
              {/* Left: Logo */}
              <div className="justify-self-start">
                <Logo variant="dark" />
              </div>

              {/* Center: Desktop Navigation */}
              {!isMobile && (
                <nav className="justify-self-center flex items-center gap-8 h-[60px]">
                  {navigation.map((link) => (
                    <div
                      key={link.label}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => onHover(link.label)}
                    >
                      <Link
                        href={link.href || "#"}
                        className={cn(
                          "text-sm transition-colors",
                          isHovering
                            ? hoveredLink === link.label
                              ? "text-white"
                              : "text-white/60 hover:text-white"
                            : "text-white hover:text-white/80"
                        )}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              )}

              {/* Right: Actions */}
              <div className="justify-self-end">
                {isMobile ? (
                  <MobileMenu />
                ) : (
                  <div className="flex items-center h-[60px]">
                    <Link href="/contact">
                      <Button variant="link" className="text-white hover:text-white/80">
                        Contact
                      </Button>
                    </Link>
                    <Link href="http://accounts.zonify.ai/sign-in">
                      <Button
                        variant="outline"
                        className="rounded-full shadow-none text-black bg-white hover:bg-white/90 border-white"
                      >
                        Log in
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Expanded Dropdown */}
            <AnimatePresence>
              {isHovering && currentHoverData?.sublinkGroups && (
                <motion.div
                  className="absolute left-0 right-0 top-[60px] w-full pt-8 pb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-fit mx-auto px-4 md:px-[64px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-6 text-white">
                      {currentHoverData.sublinkGroups.map((group) => (
                        <div key={group.title}>
                          <h3 className="text-xs text-white/60 mb-2">
                            {group.title}
                          </h3>
                          <ul className="space-y-3">
                            {group.links.map((sublink) => {
                              const isExternal = sublink.external;
                              return (
                                <li key={sublink.label}>
                                  <Link
                                    href={sublink.href}
                                    target={isExternal ? "_blank" : undefined}
                                    className="group inline-flex items-center gap-1 text-sm text-white hover:text-white/70 transition-colors hover:underline"
                                    onClick={onHoverEnd}
                                  >
                                    <span>{sublink.label}</span>
                                    {isExternal && (
                                      <LucideArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity w-3 h-3 ml-1" />
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
      <CookieBanner textColorClass={"text-primary"} />
    </>
  );
}
