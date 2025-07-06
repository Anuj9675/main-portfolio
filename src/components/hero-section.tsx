"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden scroll-smooth">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/60 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)] px-6 lg:px-8">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-12">
              Welcome to my
              <br />
              <span className="block">personal</span>
              <span className="block">portfolio website</span>
            </h1>

            <a href="#about">
              <button className="group flex items-center space-x-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg font-light">
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
