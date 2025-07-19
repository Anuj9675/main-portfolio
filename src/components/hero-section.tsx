import React, { useState, useEffect } from "react";
import { Code, Palette, Zap } from "lucide-react";
import Navbar from "./navbar";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Front End Developer",
    "Next.js Developer",
    "Business Analyst",
  ];

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://media.giphy.com/media/jBOOXxSJfG8kqMxT11/giphy.gif")`,
          }}
        />

        {/* white overlay for theme consistency */}
        <div className="absolute inset-0 bg-transparent"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Floating geometric lines */}
        <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Large subtle background elements */}
        <div
          className="absolute -top-40 -right-40 w-80 h-80 border border-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-white/3 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start px-8 lg:px-16 min-h-screen">
        <div className="max-w-5xl w-full">
          {/* Greeting */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-px bg-white"></div>
              <p className="text-sm uppercase tracking-[0.2em] text-white font-medium">
                Hello, I&apos;m
              </p>
            </div>
          </div>

          {/* Name */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] mb-8 tracking-tight">
              <span className="block text-white">Anuj</span>
              <span className="block font-bold text-white">Upadhyay</span>
            </h1>
          </div>

          {/* Dynamic Role with Icons */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex space-x-2">
                <Code className="w-5 h-5 text-white" />
                <Palette className="w-5 h-5 text-white" />
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="h-8 overflow-hidden">
                <div
                  className="transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${textIndex * 32}px)` }}
                >
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className="text-xl md:text-2xl text-white font-light h-8 flex items-center"
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl font-light leading-relaxed">
              I craft beautiful, functional digital experiences with a focus on
              clean design, smooth interactions, and exceptional user
              experiences.
            </p>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div
          className={`absolute top-8 right-8 transition-all duration-1000 delay-1700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="w-8 h-8 border-t-2 border-r-2 border-white"></div>
        </div>

        <div
          className={`absolute bottom-8 right-8 transition-all duration-1000 delay-1700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="w-8 h-8 border-b-2 border-r-2 border-white"></div>
        </div>
      </div>
    </section>
  );
}
