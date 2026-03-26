import ServiceTerms from "./Components/Main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col pt-20">
      <ServiceTerms />
    </div>
  );
}
