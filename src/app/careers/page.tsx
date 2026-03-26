import Main from "./Main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers",
  description: "Explore the opportunities to join our team.",
};
export default function Careers() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden x items-center">
      <Main />
    </div>
  );
}
