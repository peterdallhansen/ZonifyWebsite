import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Analytics Hub",
};

export default function Page() {
  return <PageClient />;
}
