import {
  ArrowRight,
  LucideGlobe,
  LucideLayoutDashboard,
  LucideShieldCheck,
  LucideUsers,
  LucideVideo,
  LucideZap,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-10 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-normal text-center mb-20 text-balance">
          Frictionless Setup, Immediate Value
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Render features from an array */}
          {[
            {
              title: "Rapid, Remote Deployment",
              description:
                "Go live in days, not months. Our cloud-based platform installs in days and can be onboarded entirely remotely without requiring expensive on-site visits.",
              icon: LucideZap,
              link: "/solutions/analytics-hub",
              linkText: "Explore Deployment Fast-Track",
            },
            {
              title: "Zero Hardware Investment",
              description:
                "Eliminate new capex projects. We connect directly to your existing 2D camera infrastructure, transforming what you already own into a powerful analytics network.",
              icon: LucideVideo,
              link: "/contact",
              linkText: "See Integration Options",
            },
            {
              title: "Privacy-First by Design",
              description:
                "Stay fully GDPR-compliant with zero friction. Data is anonymized in milliseconds with absolutely no biometric data stored or facial recognition used.",
              icon: LucideShieldCheck,
              link: "/security",
              linkText: "Read Security Whitepaper",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="mb-6">
                  <Icon size={40} />
                </div>
                <h2 className={`text-3xl font-medium mb-4`}>{feature.title}</h2>
                <p className={`text-primary/80 leading-relaxed mb-6`}>
                  {feature.description}
                </p>
                <a
                  href={
                    idx === 0
                      ? "/solutions/analytics-hub"
                      : idx === 1
                        ? "/contact"
                        : "/security"
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  {idx === 0
                    ? "Explore Use Cases"
                    : idx === 1
                      ? "See Integration Options"
                      : "Read Security Whitepaper"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
