import { Metadata } from "next";
import { HeroSection } from "./components/hero-section";
import { NewsGrid } from "./components/news-grid";
import { getNewsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "Articles",
  description: "Read the lastes news and articles from Zonify.ai",
};

export default function NewsPage() {
  const posts = getNewsPosts();
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <NewsGrid articles={posts} />
      </div>
    </main>
  );
}
