import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/google-analytics";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://zonify.ai"),
  title: {
    default: "Zonify.ai | AI-Driven Insights from Every Footstep",
    template: "%s | Zonify.ai",
  },
  description: `Our cloud-based AI solution enables 2D cameras to deliver real-time analytics, helping companies understand visitor behavior, optimize traffic, and enhance everyday operations.`,
  twitter: {
    card: "summary_large_image",
  },
};

const inter = Inter({
  subsets: ["latin"], // Adjust subsets based on your needs
  variable: "--font-inter", // Optional: CSS variable for font customization
});

const googleSans = Inter({
  subsets: ["latin"], // Adjust subsets based on your needs
  variable: "--font-inter", // Optional: CSS variable for font customization
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link
          href="https://db.onlinewebfonts.com/c/a20b7f0e9287edbc64a2ef52ba343440?family=ABC+Normal+White"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={`  antialiased   p-0   `} suppressHydrationWarning>
          <Header />

          <Suspense fallback={null}>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-QED3S3G00L" />
          </Suspense>
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
      </body>
    </html>
  );
}
