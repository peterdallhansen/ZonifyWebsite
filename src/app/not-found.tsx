import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-primary mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button className="text-sm px-7 py-5 hover:bg-white/60 active:bg-white/40  rounded-3xl">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
