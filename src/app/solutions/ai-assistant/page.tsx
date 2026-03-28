import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI-Powered BI",
};

export default function Page() {
  return <PageClient />;
}
