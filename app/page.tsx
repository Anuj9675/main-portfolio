"use client";

import { ContactSection } from "@/src/components/contact-section";
import Footer from "@/src/components/footer";
import HeroSection from "@/src/components/hero-section";
import PortfolioSection from "@/src/components/portfolio-section";
import SkillsSection from "@/src/components/skills-section";
import ExperienceSection from "@/src/components/experience-section";

export default function Home() {
 

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
