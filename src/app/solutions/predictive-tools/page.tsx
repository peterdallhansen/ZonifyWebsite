import WIP from "@/components/WIP";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Predictive Tools",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
