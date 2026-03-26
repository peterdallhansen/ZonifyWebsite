import { Button } from "@/components/ui/button";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

export function JobsSection() {
  return (
    <section className="py-20 px-4 w-full bg-background" id="careers">
      <div className="max-w-6xl   mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          Open Roles
        </h2>

        <div className="space-y-1 mb-12 w-full ">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-6 border-b border-border hover:bg-muted/30 transition-colors px-4"
            >
              <div className="font-normal text-base">{job.title}</div>
              <div className="text-muted-foreground text-sm md:text-base">
                {job.type}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {job.location}
              </div>
              <a href={job.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="link"
                  className="text-sm hover:underline justify-start md:justify-end p-0 h-auto font-normal hover:bg-transparent"
                >
                  Apply
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={"/careers"}>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base hover:bg-black hover:text-white bg-transparent"
            >
              View all openings
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
