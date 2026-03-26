"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BriefcaseBusiness, LucideClock, LucideFlag } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { jobs } from "@/lib/jobs";

export default function Main() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openJob = (job: (typeof jobs)[0]) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    if (!open) {
      // start the leave animation
      setIsDialogOpen(false);
      // after it finishes, clear out the content
      setTimeout(() => setSelectedJob(null), 200);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            Careers
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl leading-tight text-primary text-center">
            Be Part of Our Journey
          </h2>
        </BlurFade>

        <section className="w-full max-w-6xl flex flex-col gap-2 mt-12">
          <BlurFade delay={0.6} inView>
            <h4 className="text-sm md:text-lg text-primary font-medium">
              Open Positions
            </h4>
          </BlurFade>
          <BlurFade delay={0.7} inView>
            <p className="text-xs text-primary text-opacity-60">
              Explore the opportunities to join our team.
            </p>
          </BlurFade>

          <div className="mt-4 flex flex-col gap-4">
            {jobs.map((job, index) => (
              <BlurFade delay={0.6} inView key={index}>
                <Card className="cursor-pointer" onClick={() => openJob(job)}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="text-primary/60">
                      {job.description.length > 200
                        ? `${job.description.slice(0, 200)}...`
                        : job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-8 justify-between flex flex-row gap-2">
                    <div className="flex flex-wrap items-center gap-2 w-fit">
                      <div className="flex items-center text-xs text-primary/80">
                        <LucideFlag className="w-4 h-4 mr-2 color-primary/80" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-xs text-primary/80">
                        <LucideClock className="w-4 h-4 mr-2 color-primary/80" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-xs text-primary/80">
                        <BriefcaseBusiness className="w-4 h-4 mr-2 color-primary/80" />
                        {job.locationType}
                      </div>
                    </div>
                    <div className="flex flex-row-reverse w-fit">
                      <a href={job.href} className="">
                        <Button
                          variant="outline"
                          className="bg-primary text-background rounded-full text-xs"
                        >
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <Dialog open={isDialogOpen} onOpenChange={onDialogOpenChange}>
          <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
            {selectedJob && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedJob.title}</DialogTitle>
                  <DialogDescription>
                    {selectedJob.location} • {selectedJob.type} •{" "}
                    {selectedJob.locationType}
                  </DialogDescription>
                </DialogHeader>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedJob.fullDescription}
                </ReactMarkdown>
                <DialogFooter>
                  <a href={selectedJob.href}>
                    <Button>Apply Now</Button>
                  </a>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
