"use client";

import { useEffect, useState } from "react";
import { NewsCard } from "./news-card";

type NewsGridProps = {
  max?: number;
  articles?: any[];
};

export function NewsGrid({ max, articles: initialArticles }: NewsGridProps) {
  const [articles, setArticles] = useState<any[]>(initialArticles || []);

  useEffect(() => {
    if (!initialArticles) {
      fetch("/api/news")
        .then((res) => res.json())
        .then((data) => setArticles(data));
    }
  }, [initialArticles]);

  const displayArticles = max ? articles.slice(0, max) : articles;

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full container mx-auto">
      {displayArticles.map((article) => (
        <NewsCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
