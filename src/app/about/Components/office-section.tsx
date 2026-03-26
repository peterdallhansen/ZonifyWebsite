import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function OfficeSection() {
  return (
    <section className="py-20 px-4 bg-background w-full">
      <div className=" ">
        {/* <div className="relative mb-16 max-w-7xl mx-auto">
          <HeroVideoDialog
            videoSrc="https://d3phaj0sisr2ct.cloudfront.net/site/about/v1/Make%2Bthe%2BImpossible_v4_1_1.mp4"
            thumbnailSrc="https://d3phaj0sisr2ct.cloudfront.net/site/images/046A4893.jpg"
          />
        </div> */}

        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 leading-relaxed w-full mx-auto">
          Our headquarters are in Copenhagen, Denmark,
          <br />
          building the future of physical world analytics.
        </h2>

        {/* <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide w-full">
          <img
            src="https://d3phaj0sisr2ct.cloudfront.net/site/about/gallery/AU0A9999.jpg"
            alt="Team meeting"
            className="h-[450px] w-auto object-cover rounded-2xl flex-shrink-0"
          />
          <img
            src="https://d3phaj0sisr2ct.cloudfront.net/site/about/gallery/AU0A8466.jpg"
            alt="Office space"
            className="h-[450px] w-auto object-cover rounded-2xl flex-shrink-0"
          />
          <img
            src="https://d3phaj0sisr2ct.cloudfront.net/site/about/gallery/AU0A8379.jpg"
            alt="Team working"
            className="h-[450px] w-auto object-cover rounded-2xl flex-shrink-0"
          />
          <img
            src="https://d3phaj0sisr2ct.cloudfront.net/site/about/gallery/AU0A8539.jpg"
            alt="Office interior"
            className="h-[450px] w-auto object-cover rounded-2xl flex-shrink-0"
          />
        </div> */}
      </div>
    </section>
  );
}
