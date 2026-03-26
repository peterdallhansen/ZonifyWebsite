import BlurFade from "@/components/ui/blur-fade";

function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-10  sm:p-20 space-y-6 ">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Compliance
        </h4>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold  leading-tight text-primary text-center  ">
          Ensuring Adherence to Industry Standards
        </h2>
      </BlurFade>
    </div>
  );
}

export default Main;
