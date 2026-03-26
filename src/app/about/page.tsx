import { HeroSection } from "./Components/hero-section";
import { JobsSection } from "./Components/jobs-section";
import { MissionSection } from "./Components/mission-section";
import { OfficeSection } from "./Components/office-section";
import { ResearchSection } from "./Components/research-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden x items-center">
      <HeroSection />
      <MissionSection />
      <OfficeSection />
      <JobsSection />
    </main>
  );
}
