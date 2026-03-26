import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Security | Zonify.ai",
  description: "Learn about Zonify.ai's commitment to data security and privacy.",
};

export default function DataSecurityPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
