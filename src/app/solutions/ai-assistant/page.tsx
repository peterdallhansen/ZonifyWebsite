import Main from "./Components/Main";
import Showcase from "./Components/Showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered BI",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Main />
      <Showcase />
    </div>
  );
}
