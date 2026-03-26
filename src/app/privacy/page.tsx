import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zonify.ai",
  description: "Read Zonify.ai's privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
