import { ResearchCard } from "./research-card";

const researchPapers = [
  {
    id: 1,
    title: "Autoregressive-to-Diffusion Vision Language Models",
    authors:
      "Marianne Arriola • Naveen Venkat • Jonathan Granskog • Anastasis Germanidis",
    date: "September 24, 2025",
    image: "/images/articles/fdvlm-post-hero.jpg",
    slug: "autoregressive-to-diffusion",
    description:
      "Efficient training of state-of-the-art diffusion vision language models. We develop A2D, by adapting an existing autoregressive vision language model for parallel diffusion decoding.",
    overlayText: "Autoregressive-to-Diffusion Vision Language Models",
  },
  {
    id: 2,
    title:
      "Humans Without Humans: Leveraging Controllable Virtual Environments for Person Re-Identification Training",
    authors: "Peter Dall-Hansen",
    date: "November 16, 2025",
    image: "/images/unsplash/center.jpg",
    slug: "synthetic-data-reid",
    description:
      "Creating large-scale datasets for person re-identification using fully controllable virtual environments. A privacy-preserving alternative for scalable data creation without recording real individuals.",
    overlayText: "Leveraging Virtual Environments for Person Re-Identification",
  },
];

type ResearchGridProps = {
  max?: number;
};

export function ResearchGrid({ max }: ResearchGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {researchPapers.slice(0, max || researchPapers.length).map((article) => (
        <ResearchCard key={article.id} article={article} />
      ))}
    </div>
  );
}
