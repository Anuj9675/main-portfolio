"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Github, link: "https://github.com/Anuj9675", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/anuj-upadhyay-a973b0238/", label: "LinkedIn" },
    { icon: Mail, link: "mailto:anujupadhyay6265@gmail.com", label: "Email" },
  ];

  const navItems = ["Home", "Experience", "Skills", "Portfolio", "Contact"];

  // Framer Motion Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.07, duration: 0.35 },
    }),
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.3 },
    },
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Toggle Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-12 bg-black/40 backdrop-blur border cursor-pointer border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Fullscreen Animated Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
          >
            <nav className="w-full max-w-lg mx-auto text-center">
              {/* Navigation items */}
              <ul className="space-y-8 mb-14">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={() => handleScrollToSection(item)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleScrollToSection(item);
                      }}
                      className="text-white text-3xl cursor-pointer tracking-wide font-light hover:text-purple-300 transition"
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA and Social icons */}
              <motion.div
                variants={bottomVariants}
                initial="hidden"
                animate="visible"
              >
                <span
                  role="button"
                  onClick={() => handleScrollToSection("contact")}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleScrollToSection("contact");
                  }}
                  className="inline-block cursor-pointer text-purple-300 text-lg font-medium px-6 py-2 rounded-full border border-purple-400/20 bg-white/5 hover:bg-purple-400/10 hover:text-white transition"
                >
                  Start a Project
                </span>

                <div className="flex gap-x-4 mt-6 justify-center">
                  {socialLinks.map(({ icon: Icon, link, label }, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 text-white/70 hover:text-white transition"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
