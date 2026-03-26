import { ResearchGrid } from "./components/research-grid";

export const metadata = {
  title: "Research Papers - Our Latest AI Innovations",
  description:
    "Explore our cutting-edge research papers on AI-powered vision analytics and spatial intelligence, showcasing our commitment to innovation and excellence in the field.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center">
          <h1 className="mb-6 font-sans text-4xl tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Research
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 md:text-xl">
            Exploring the frontier of AI-powered vision analytics and spatial
            intelligence
          </p>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ResearchGrid />
      </section>
    </main>
  );
}
