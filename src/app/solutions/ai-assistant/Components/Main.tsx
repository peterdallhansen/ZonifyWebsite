import BlurFade from "@/components/ui/blur-fade";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            AI-Powered BI
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl  leading-tight text-primary text-center">
            Beyond Dashboards. Into Real Context.
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-xl md:text-1xl xl:text-2xl mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            Charts and tables are useful—but they don’t always tell the whole
            story. Our AI lets you ask natural questions and uncover the{" "}
            why behind the numbers, turning raw data into real
            decisions.
          </p>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <div className="relative overflow-hidden rounded-xl">
            <video
              src="/videos/Ad2.mp4"
              width={1500}
              height={2016}
              autoPlay
              loop
              muted
            />
          </div>
        </BlurFade>
      </main>
    </div>
  );
}

export default Main;
