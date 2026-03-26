import PrivacyAndDataProtection from "./GDPR";
import Info from "./Info";
import Main from "./Main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Compliance",
  description: "Ensuring Adherence to Industry Standards",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col pt-20">
      <PrivacyAndDataProtection />
    </div>
  );
}
