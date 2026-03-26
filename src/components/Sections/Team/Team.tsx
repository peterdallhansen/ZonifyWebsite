"use client";
import BlurFade from "@/components/ui/blur-fade";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LucideUserRound } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TeamMember {
  picture: string;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  description?: string;
  job?: string;
}
interface TeamMemberProps extends TeamMember {}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  index: number;
}

const management: TeamMember[] = [
  {
    picture: "/images/People/MDH-Blue.png",
    name: "Mathias Dall-Hansen",
    title: "CEO",
    phone: "+45 31 18 36 80",
    email: "mdh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/mathias-dall-hansen/",
    description: `Mathias is the CEO of Zonify.ai, bringing deep expertise in software architecture and computer vision. He founded Visotia (formerly Ivensa Vision ApS), where he successfully developed and commercialized footfall analytics software, leading the company as CEO until 2024. Throughout his career, Mathias has combined technical excellence with entrepreneurial leadership, driving innovation at the intersection of AI and real-world data applications.`,
  },
  {
    picture: "/images/People/ODH-Blue.png",
    name: "Ole Dall-Hansen",
    title: "Executive Chairman",
    phone: "+45 60 10 86 87",
    email: "odh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/ole-dall-hansen-4674622/",
    description: `Ole is the Executive Chairman of Zonify.ai, bringing over 25 years of experience in real estate fund management, corporate finance, and business development. He has served as a tech co-founder, CFO, and Executive Chairman of Visotia (formerly Ivensa Vision ApS), specializing in AI-powered retail performance management software. Throughout his career, Ole has held senior positions across equity research, M&A, investment management, private equity, and fund development, with a strong track record in international fundraising, investor relations, and alternative investments such as real estate, wind, and solar power. His background combines deep financial expertise with entrepreneurial leadership and a strong focus on scaling technology-driven businesses.`,
  },
  {
    picture: "/images/People/ADH-Blue.png",
    name: "Anders Dall-Hansen",
    title: "Board of Director",
    linkedin: "https://www.linkedin.com/in/andersdallhansen/",
    description: `Anders is an advisor at Zonify.ai, bringing deep expertise in statistical modeling, machine learning, and AI with a strong focus on value creation. Anders is a Data Scientist at Halfspace, where he continues to build advanced data solutions. Previously, he spent 3.5 years at A.P. Moller - Maersk within pricing and revenue management data science, developing price-sensitive demand forecasting models, price recommendation systems, and global predictive models of container prices. He has built robust end-to-end data pipelines, primarily using Spark on Databricks. Anders holds both an MSc and BSc in Mathematics and Economics from Copenhagen Business School.`,
  },
  {
    picture: "/images/People/PDH-Blue.png",
    name: "Peter Dall-Hansen",
    title: "Data Scientist & Fullstack Developer",
    linkedin: "https://www.linkedin.com/in/peterdallhansen",
    description: `Peter is a Data Scientist at Zonify.ai, contributing to product development, frontend architecture, and brand direction. He specializes in designing and developing user-facing solutions, combining technical skills with a strong focus on user experience and visual identity. Prior to Zonify.ai, Peter gained hands-on experience in customer onboarding and collaborative problem-solving as a student assistant at Visotia (formerly Ivensa Vision ApS).`,
    email: "pdh@zonify.ai",
  },
  {
    picture: "/images/People/SKJ.png",
    name: "Simone Kromand Jessen",
    title: "Student Assistant",
    description:
      "Simone is a Student Assistant at Zonify.ai, supporting customer onboarding as part of the current onboarding team.",
  },
  {
    picture: "/images/People/FSI-Blue.png",
    name: "Filip Simic",
    title: "Student Assistant",
    description: `Filip is a Student Assistant at Zonify.ai, contributing to customer onboarding and operational support. He was previously part of the onboarding team at Visotia (formerly Ivensa Vision ApS). Filip brings a strong service mindset and hands-on experience in supporting the growth of tech-driven solutions.`,
  },
  {
    picture: "",
    name: "William Jensen",
    title: "Student Assistant",
    description:
      "William is a Student Assistant at Zonify.ai, supporting customer onboarding as part of the current onboarding team.",
  },

  {
    picture: "/images/People/LL-Blue.png",
    name: "Lars Lund",
    title: "Advisory Board Member",
    linkedin: "https://www.linkedin.com/in/larslunddk/",
    description: `Lars is an Advisory Board Member at Zonify.ai, bringing extensive expertise in software integration and architecture. As Co-Owner and International Technical Project Manager at AlphaPeople, he has played a key role in bridging the gap between software development and commercial strategy. With deep experience in ERP software, international retail, eCommerce, and cross-channel integration, Lars combines technical leadership with a strong focus on delivering business-driven solutions across global markets.`,
  },
  {
    picture: "/images/People/LA-Blue.png",
    name: "Lars Andersen",
    title: "Advisory Board Member - Entrepreneurship",
    linkedin: "https://www.linkedin.com/in/seedcapitallarsandersen/",
    description: `Lars is an Advisory Board Member at Zonify.ai, bringing extensive experience in entrepreneurship, leadership, and business growth. As a General Partner at SEED Capital, he has helped drive the success of several prominent companies, with key involvements including Endomondo, Trustpilot, Vivino, and Lunar. Earlier in his career, Lars served as CEO of Columbus IT Partners, where he led the company’s international expansion and grew the team from approximately 50 to over 700 employees across multiple countries. His career reflects a strong track record of scaling businesses and building high-performing organizations in the technology and software sectors.`,
  },
  {
    picture: "/images/People/OWC-Blue.png",
    name: "Ole Wieth Christensen",
    title: "Advisory Board Member - Airports",
    linkedin: "https://www.linkedin.com/in/ole-wieth-christensen-8418ab1",
    description: `Ole is an Advisor and Advisory Board Member at Zonify.ai, bringing deep expertise in airport commercial optimization and development. He has held leadership roles across the aviation sector, including Director positions at CPH Airports and Swedavia AB, where he led European sales, business development, and airline route development. Ole also served as a Senior Advisor in aviation at Ramboll, advising on commercial strategies and infrastructure development. With extensive experience in optimizing airport operations and driving commercial growth, Ole brings valuable industry insight to Zonify.ai.`,
  },

  {
    picture: "/images/People/MWP-Blue.png",
    name: "Marlene Winther Plas",
    title: "Legal Advisor",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
    description: `Marlene is the Legal Advisor at Zonify.ai, specializing in compliance, IT law, and data privacy. She is a Partner at DLA Piper and an experienced professional board member, advising Danish and international clients on IT law, outsourcing, data privacy, and GDPR compliance. Marlene brings extensive expertise in contract drafting, negotiation, and regulatory advisory, helping organizations navigate complex legal frameworks while supporting business innovation.`,
  },
  {
    picture: "",
    name: "We're Hiring",
    title: "Data Scientist",
    description:
      "We're looking for a talented Data Scientist to join Zonify.ai. Help us build cutting-edge AI solutions for the physical world. Reach out if you're interested!",
    email: "careers@zonify.ai",
  },
  {
    picture: "",
    name: "We're Hiring",
    title: "Customer Success Manager",
    description:
      "We're hiring a Customer Success Manager to support onboarding and client growth. If you're passionate about helping customers thrive, let's talk!",
    email: "careers@zonify.ai",
  },
];

function TeamMemberCard({
  picture,
  name,
  title,
  email,
  linkedin,
  description,
}: TeamMemberProps) {
  const showExpand = (description?.length ?? 0) > 140;

  return (
    <div className="h-full">
      {/* PHOTO PLATE */}
      <div className="">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden
                     rounded-2xl border border-neutral-100 bg-neutral-100"
        >
          {picture ? (
            <Image
              src={picture}
              alt={name}
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="
                object-cover
                contrast-110
              "
              priority
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <LucideUserRound className="h-64 w-64 text-neutral-300" />
            </div>
          )}
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div className=" pb-6 pt-4">
        <h3 className="text-[15px] font-semibold text-neutral-900 leading-tight">
          {name}
        </h3>

        <p className="mt-1 text-[13px] text-neutral-600">{title}</p>

        {description && (
          <>
            {/* true multi-line CSS ellipsing, no manual '...' */}
            <p
              className="mt-1 text-[13px] text-neutral-600"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }}
            >
              {description}
            </p>

            {showExpand && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="mt-2 text-[13px] font-medium text-neutral-700 underline hover:text-neutral-900"
                    aria-label={`Show full bio for ${name}`}
                  >
                    Show more
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[840px]">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100">
                      {picture ? (
                        <Image
                          src={picture}
                          alt={name}
                          fill
                          sizes="(min-width: 768px) 360px, 80vw"
                          className="object-cover contrast-110"
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center">
                          <LucideUserRound className="h-40 w-40 text-neutral-300" />
                        </div>
                      )}
                    </div>

                    <div>
                      <DialogHeader>
                        <DialogTitle className="text-2xl leading-tight">
                          {name}
                        </DialogTitle>
                        <DialogDescription className="text-sm text-neutral-600">
                          {title}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-4 text-[14px] leading-7 text-neutral-800 whitespace-pre-line">
                        {description}
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        {email && (
                          <a
                            href={`mailto:${email}`}
                            className="text-[14px] text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
                          >
                            {email}
                          </a>
                        )}
                        {linkedin && (
                          <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on LinkedIn`}
                            className="inline-flex h-6 w-6 items-center justify-center rounded border border-neutral-300 text-neutral-600 hover:text-neutral-900"
                          >
                            <LinkedInLogoIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </>
        )}

        <div className="mt-3 flex items-center gap-3">
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-[13px] text-neutral-700 hover:underline"
            >
              {email}
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="inline-flex h-5 w-5 items-center justify-center rounded
                         border border-neutral-300 text-neutral-500
                         hover:text-neutral-800"
            >
              <LinkedInLogoIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, index }) => {
  return (
    <section className="space-y-6">
      {title ? (
        <BlurFade delay={0.25 + 0.1 * index} inView>
          <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        </BlurFade>
      ) : null}

      {/* Wider gaps + consistent columns to mirror the reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <BlurFade key={`${m.name}-${i}`} delay={0.05 * i} inView>
            <TeamMemberCard {...m} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

const sections = [{ title: "", members: [...management] }];

export function Team() {
  return (
    <div className="bg-background min-h-screen w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <BlurFade delay={0.25} inView>
            <h4 className="text-sm md:text-lg text-primary">Our Team</h4>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h2 className="text-3xl md:text-5xl  tracking-tight">
              Meet The People Behind Zonify.ai
            </h2>
          </BlurFade>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <TeamSection
              key={index}
              title={section.title}
              members={section.members}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
