import { solutions } from "@/lib/constants";
import React from "react";

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
    <div className="w-full h-full flex flex-col items-start justify-start text-left gap-4   ">
      {solutions.map((item, index) => (
        <div key={index}>
          {currentPath === item.href ? (
            <>
              <h2 className=" text-xl md:text-xl xl:text-[16px] leading-tight text-primary max-w-[750px] font-bold inline-flex mb-2 items-center flex-row justify-center align-center">
                {item.icon && <item.icon className="mr-2 size-4" />}
                {item.label}
              </h2>
              {/* Render sections only under the current path */}
              {currentPath === item.href && (
                <div className="pl-4 ">
                  {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <h2
                        className={`text-xl md:text-xl xl:text-[14px] leading-tight max-w-[750px] mb-2  hover:text-primary/80 ${
                          activeSection === section.id
                            ? "font-bold"
                            : "font-normal"
                        }`}
                      >
                        {section.title}
                      </h2>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a href={item.href}>
              <h2 className=" text-xl md:text-xl xl:text-[16px] leading-tight text-primary/60 hover:text-primary max-w-[750px]  inline-flex items-center flex-row justify-center align-center">
                {item.icon && <item.icon className="mr-2 size-4" />}
                {item.label}
              </h2>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
