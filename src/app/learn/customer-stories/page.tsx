import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Stories | Zonify.ai",
  description: "Discover how organizations worldwide are transforming with Zonify.ai.",
};

export default function CustomerStoriesPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
