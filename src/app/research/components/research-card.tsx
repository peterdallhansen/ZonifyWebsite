import Image from "next/image";
import Link from "next/link";

interface ResearchArticle {
  id: number;
  title: string;
  authors: string;
  date: string;
  image: string;
  slug: string;
  description: string;
  overlayText?: string;
}

interface ResearchCardProps {
  article: ResearchArticle;
}

export function ResearchCard({ article }: ResearchCardProps) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="group flex flex-col gap-4 transition-opacity hover:opacity-80"
    >
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        {article.overlayText && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="text-center text-lg text-white drop-shadow-lg md:text-xl lg:text-2xl">
              {article.overlayText}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-balance font-sans text-xl font-normal leading-tight text-foreground md:text-2xl">
          {article.title}
        </h2>
        <p className="text-sm text-muted-foreground">{article.authors}</p>
        <p className="text-sm text-muted-foreground">{article.date}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
