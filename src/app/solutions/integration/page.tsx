import { Metadata } from "next";
import Main from "./Components/Main";
import Showcase from "./Components/Showcase";
export const metadata: Metadata = {
  title: "Integration",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Main />
      <Showcase />
    </div>
  );
}
