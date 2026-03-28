import { solutions } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface SidebarMenuProps {
  sections: Section[];
  activeSection: string;
  currentPath: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  sections,
  activeSection,
  currentPath,
}) => {
  return (
    <nav className="flex flex-col gap-8 w-full">
      {solutions.map((item, index) => {
        const isCurrentParent = currentPath === item.href;

        return (
          <div key={index} className="flex flex-col gap-3">
            {/* Parent Category Link */}
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest transition-colors",
                isCurrentParent
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600",
              )}
            >
              {item.label}
            </Link>

            {/* Sub-sections (Only shown if this is the active path) */}
            {isCurrentParent && (
              <div className="flex flex-col border-l border-gray-200 ml-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={cn(
                        "pl-4 py-1.5 text-[14px] leading-tight transition-all border-l -ml-[1px]",
                        isActive
                          ? "text-gray-900 font-medium border-gray-900"
                          : "text-gray-500 font-normal border-transparent hover:text-gray-800 hover:border-gray-300",
                      )}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default SidebarMenu;
