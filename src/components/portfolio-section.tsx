"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
  skills?: string[];
};

const portfolioItems: Project[] = [
  {
    id: "1",
    title: "Dindyali Homestay",
    imageUrl: "/assets/Dindayali.png",
    link: "https://dindyali-homestay.vercel.app",
    skills: ["Next.js", "TailwindCSS", "Parallax"],
    description:
      "A visually engaging website for a homestay with smooth animations, responsive design, and a modular layout to showcase rooms and reviews.",
  },
  {
    id: "2",
    title: "Studio Website",
    imageUrl: "/assets/Studio.png",
    link: "https://studio-sigma-nine.vercel.app",
    skills: ["Next.js", "TailwindCSS"],
    description:
      "Built for a photography studio to present services and portfolio using full-screen layouts, carousels, and custom-designed sections.",
  },
  {
    id: "3",
    title: "Photo Gallery Site",
    imageUrl: "/assets/PhotoGallery.png",
    link: "https://photostudio-kappa.vercel.app/",
    skills: ["React", "TailwindCSS"],
    description:
      "Responsive and minimalist gallery site for showcasing high-quality images.",
  },
  {
    id: "4",
    title: "Octa Dashboard",
    imageUrl: "/assets/Octa-tan.png",
    link: "https://octa-ten.vercel.app/",
    skills: ["Next.js", "TailwindCSS"],
    description:
      "A modern dashboard for managing events, schedules, and tasks with animated UI and a clean layout.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-24 bg-white">
      <div className="max-w-8xl mx-auto space-y-24">
        <h2 className="text-5xl md:text-6xl font-thin mb-16 tracking-wide text-center">
          My Portfolio
        </h2>

        {portfolioItems.map((item, i) => {
          const isEven = i % 2 === 0;

          const ContentBlock = (
            <div className="w-full flex flex-col justify-center h-full px-4">
              <p className="text-base tracking-widest text-gray-500 mb-4 uppercase">
                Latest Work
              </p>
              <h3 className="text-5xl font-serif font-bold mb-6 text-gray-900">
                {item.title}
              </h3>

              {item.skills && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-base px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.description && (
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
              )}

              <div>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-8 py-4 text-sm font-light tracking-wide bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Watch live
                </Link>
              </div>
            </div>
          );

          const ImageBlock = (
            <div className="flex justify-center items-center h-full p-2">
              <div className="aspect-square max-w-xl w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              {/* On mobile: Content always first. On desktop: alternate order */}
              <div className={`${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
                {ContentBlock}
              </div>
              <div className={`${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
                {ImageBlock}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
