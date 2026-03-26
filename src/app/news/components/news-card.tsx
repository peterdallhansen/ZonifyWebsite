import Image from "next/image";
import Link from "next/link";

interface Logo {
  text: string;
  position: string;
  bordered?: boolean;
}

interface Article {
  slug: string;
  title: string;
  company: string;
  date: string;
  image: string;
  video?: string;
  logos: Logo[];
  overlayText?: string;
}

export function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group flex flex-col gap-4 transition-opacity hover:opacity-80"
    >
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-muted">
        {article.video ? (
          <video
            src={article.video}
            className="object-contain w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        )}
        {article.overlayText && (
          <div className="absolute inset-0 flex items-center justify-center p-6 ">
            <p className="text-white text-xl md:text-2xl font-medium text-center leading-tight">
              {article.overlayText}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-balance font-sans text-xl font-normal leading-tight text-primary/90 md:text-2xl">
          {article.title}
        </h2>
        <p className="text-sm text-primary/60">
          {article.company} / {article.date}
        </p>
      </div>
    </Link>
  );
}

function getLogoPosition(position: string): string {
  const positions: Record<string, string> = {
    "top-left": "left-8 top-8",
    "top-center": "left-1/2 top-8 -translate-x-1/2",
    "top-right": "right-8 top-8",
    "center-left": "left-8 top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    "center-right": "right-8 top-1/2 -translate-y-1/2",
  };
  return positions[position] || positions.center;
}
