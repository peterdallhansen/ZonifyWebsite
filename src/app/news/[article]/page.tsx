import Image from "next/image";
import Link from "next/link";
import { NewsGrid } from "../components/news-grid";
import { getNewsPost } from "@/lib/news";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article } = await params;
  const post = getNewsPost(article);
  if (!post) return {};

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/[#*`]/g, ""),
  };
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const post = getNewsPost(article);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-white mt-8">
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* Article Header */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-balance font-sans text-4xl font-normal leading-tight tracking-tight text-neutral-700 md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="flex flex-col items-center gap-1 text-sm text-neutral-500">
              <time dateTime={post.date}>{post.date}</time>
              <p>by {post.company || "Zonify.ai"}</p>
            </div>
          </header>

          {/* Featured Image */}
          {(post.image || post.video) && (
            <div className="mb-16">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                {post.video ? (
                  <video
                    src={post.video}
                    className="object-cover w-full h-full"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={post.image!}
                    alt={post.title}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                    priority
                  />
                )}
                {post.overlayText && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-white text-2xl md:text-3xl lg:text-4xl font-medium text-center leading-tight max-w-xl">
                      {post.overlayText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-neutral mx-auto max-w-none">
            <div className="space-y-8 text-base leading-relaxed text-neutral-700 md:text-lg">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <div className="max-w-7xl mx-auto">
        <NewsGrid max={6} />
      </div>
    </>
  );
}
