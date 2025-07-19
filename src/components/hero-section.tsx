import React, { useState, useEffect } from "react";
import { Code, Palette, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Front End Developer",
    "Next.js Developer",
    "Business Analyst",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://media.giphy.com/media/jBOOXxSJfG8kqMxT11/giphy.gif")`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }} />
      </div>

      {/* Animated Geometries (unchanged) */}
      <div className="absolute inset-0">
        {/* floating pulses */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
        {/* ... other floating elements remain unchanged */}
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start px-8 lg:px-16 min-h-screen">
        <div className="max-w-5xl w-full">

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-12 h-px bg-white"></div>
            <p className="text-sm uppercase tracking-[0.2em] text-white font-medium">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] mb-8 tracking-tight text-white"
          >
            <span className="block">Anuj</span>
            <span className="block font-bold">Upadhyay</span>
          </motion.h1>

          {/* Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center space-x-4 mb-8 h-8 overflow-hidden"
          >
            <div className="flex space-x-2">
              <Code className="w-5 h-5 text-white" />
              <Palette className="w-5 h-5 text-white" />
              <Zap className="w-5 h-5 text-white" />
            </div>

            <div className="relative h-8 w-auto">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 text-xl md:text-2xl text-white font-light"
                >
                  {roles[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white mb-12 max-w-2xl font-light leading-relaxed"
          >
            I craft beautiful, functional digital experiences with a focus on
            clean design, smooth interactions, and exceptional user
            experiences.
          </motion.p>
        </div>

        {/* Corner Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute top-8 right-8"
        >
          <div className="w-8 h-8 border-t-2 border-r-2 border-white"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 right-8"
        >
          <div className="w-8 h-8 border-b-2 border-r-2 border-white"></div>
        </motion.div>
      </div>
    </section>
  );
}
