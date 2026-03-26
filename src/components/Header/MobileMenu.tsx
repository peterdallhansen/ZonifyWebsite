import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LucideArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  const closeMenu = () => {
    setExpandedSection(null);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild onClick={() => setExpandedSection(null)}>
        <button className="p-2 text-white hover:text-white/80 transition-colors" aria-label="Open mobile menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      
      <SheetContent side="top" className="p-6 flex flex-col h-full bg-white overflow-y-auto border-none">
        
        <Logo width={150} height={48} variant="light" className="fixed top-0 left-0 w-fit" />

        <nav className="flex flex-col items-start space-y-6 text-lg font-medium w-full mt-16">
          {navigation.map((link) => (
            <div key={link.label} className="w-full">
              <button
                onClick={() => link.sublinkGroups && toggleSection(link.label)}
                className={`flex justify-between items-center w-full text-left focus:outline-none ${
                   !expandedSection || expandedSection === link.label ? "text-black" : "text-gray-400"
                }`}
              >
                {link.href ? (
                  <Link href={link.href} onClick={closeMenu}>
                    <span className="text-xl font-semibold">{link.label}</span>
                  </Link>
                ) : (
                  <span className="text-xl font-semibold">{link.label}</span>
                )}
              </button>

              <AnimatePresence>
                {expandedSection === link.label && link.sublinkGroups && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 pl-4 overflow-hidden flex flex-col space-y-2"
                  >
                    {link.sublinkGroups.map((group) => (
                      <div key={group.title} className="w-full">
                        {group.title && (
                          <h4 className="text-sm font-medium text-gray-400 mb-2 mt-2">{group.title}</h4>
                        )}
                        <div className="flex flex-col space-y-2">
                          {group.links.map((sublink) => (
                            <Link
                              key={sublink.label}
                              href={sublink.href}
                              target={sublink.external ? "_blank" : undefined}
                              className="block py-1 text-base font-normal text-gray-700 hover:text-black"
                              onClick={closeMenu}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                        <hr className="my-2 border-gray-100" />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="my-2 border-gray-200 w-full" />
            </div>
          ))}
        </nav>

        <div className="mt-auto flex flex-col items-center space-y-4 w-full pt-8">
          <Link href="/contact" className="w-full">
            <Button variant="outline" className="w-full text-center rounded-3xl py-6">
              Contact
            </Button>
          </Link>
          <Link href="http://accounts.zonify.ai/sign-in" className="w-full relative">
            <Button className="w-full text-center bg-black text-white hover:bg-black/80 rounded-3xl py-6">
              Login
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
