import { Team } from "@/components/Sections/Team/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet The People Behind Zonify.ai",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center pt-40">
      <Team />
    </main>
  );
}
