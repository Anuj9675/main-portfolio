"use client";

import { ContactSection } from "@/src/components/contact-section";
import Footer from "@/src/components/footer";
import PortfolioSection from "@/src/components/portfolio-section";
import SkillsSection from "@/src/components/skills-section";
import ExperienceSection from "@/src/components/experience-section";
import { Hero } from "@/src/components/hero";

export default function Home() {
 

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
