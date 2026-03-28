import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Core Platform",
};

export default function Page() {
  return <PageClient />;
}
