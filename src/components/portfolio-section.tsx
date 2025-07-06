"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Project = {
  id: string
  title: string
  imageUrl: string
  link: string
}

const portfolioItems: Project[] = [
  {
    id: "1",
    title: "Dindyali Homestay",
    imageUrl: "/assets/Dindayali.png",
    link: "https://dindyali-homestay.vercel.app"
  },
  {
    id: "2",
    title: "Studio Website",
    imageUrl: "/assets/Studio.png",
    link: "https://studio-sigma-nine.vercel.app"
  },
  
  {
    id: "3",
    title: "Photo Gallery Site",
    imageUrl: "/assets/PhotoGallery.png",
    link: "https://photostudio-kappa.vercel.app/"
  },
  {
    id: "4",
    title: "Octa Dashboard",
    imageUrl: "/assets/Octa-tan.png",
    link: "https://octa-ten.vercel.app/"
  },
  {
    id: "5",
    title: "Bedwood Furnishing",
    imageUrl: "/assets/Bedwood.png",
    link: "https://bedwoodfurnishing.com"
  },
  {
    id: "6",
    title: "TOS Vert",
    imageUrl: "/assets/Tos.png",
    link: "https://tos-vert.vercel.app"
  },
  {
    id: "7",
    title: "Taxi Sanchalak",
    imageUrl: "/assets/Taxi.png",
    link: "https://taxisanchalak.vercel.app"
  },
  {
    id: "8",
    title: "Meeting Scheduler",
    imageUrl: "/assets/MeetingScheduler.png",
    link: "https://meeting-scheduler-octa.vercel.app"
  },
  {
    id: "9",
    title: "Gamers Platform",
    imageUrl: "/assets/MOONLITYT.png",
    link: "https://moonlityt.vercel.app"
  },
  {
    id: "10",
    title: "FoodSite App",
    imageUrl: "/assets/Food.png",
    link: "https://foodsite-app.vercel.app"
  },
  {
    id: "11",
    title: "Animal Welfare",
    imageUrl: "/assets/Welfare.png",
    link: "https://animalwelfare.netlify.app"
  },
  {
    id: "12",
    title: "SeekMonk",
    imageUrl: "/assets/Seekmonk.png",
    link: "https://www.seekmonk.com"
  },
  
]


export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-50/30 to-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-wide">Portfolio</h2>
          <p className="text-lg font-light opacity-60">A curated collection of my finest work</p>
        </div>
        <div className="grid md:grid-cols-2  gap-8">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[6/3] group cursor-pointer overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-light tracking-wider opacity-80 uppercase">Project</span>
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </div>
                <h3 className="text-xl font-light mb-1">{item.title}</h3>
                <p className="text-sm font-light opacity-75">{new URL(item.link).hostname}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
