"use client";

import { useState, useEffect } from "react";

import { ContactSection } from "@/src/components/contact-section";
import CursorEffect from "@/src/components/cursor-effect";
import Footer from "@/src/components/footer";
import HeroSection from "@/src/components/hero-section";
import PortfolioSection from "@/src/components/portfolio-section";
import SkillsSection from "@/src/components/skills-section";
import ExperienceSection from "@/src/components/experience-section";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <CursorEffect position={mousePosition} />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
