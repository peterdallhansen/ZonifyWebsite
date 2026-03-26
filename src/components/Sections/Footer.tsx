// Import necessary libraries and components
import {
  Briefcase,
  Clipboard,
  FileText,
  Handshake,
  Laptop,
  Scale,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../Logo";
import { ResearchSection } from "@/app/about/Components/research-section";
import { navigation } from "@/lib/constants";

// Define the social media links data
const socialLinks = [
  {
    href: "https://www.linkedin.com/company/zonify-ai",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  // Add more social links here if needed
];

// Footer Component
export function Footer() {
  return (
    <footer className="  mt-auto">
      {/* <ResearchSection /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Logo */}
          <div className="md:col-span-1">
            <Logo width={240} height={100} />
          </div>

          {/* Navigation Sections */}
          {navigation.map((section) => (
            <div key={section.label} className="space-y-6">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
                {section.label}
              </h3>
              <div className="space-y-6">
                {section.sublinkGroups.map((group) => (
                  <div key={group.title} className="space-y-3">
                    {group.title && (
                      <h4 className="text-xs font-semibold text-primary/40 uppercase tracking-wide">
                        {group.title}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="text-sm text-primary/60 hover:text-primary transition-colors block">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-8  border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-primary/60">
            &copy; 2026 Zonify.ai, ApS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="text-primary/60 hover:text-primary "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.label}</span>
                <social.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Layout Wrapper
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer /> {/* Include Footer in the Layout */}
    </div>
  );
}
