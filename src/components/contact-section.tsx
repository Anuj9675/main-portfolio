"use client";
import { motion } from "framer-motion";
import { SocialGlassCards } from "./socialglasscards";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      <div className=" mx-auto px-8 text-center justify-evenly relative">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-thin mb-8 tracking-wide"
          >
            Let&apos;s Connect
          </motion.h2>
          {/* Divider line */}

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          {/* Description */}
          <motion.p
            className="text-xl font-light mb-16 opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I&apos;m open to collaboration, freelance opportunities, or just a
            good tech chat.
          </motion.p>
        </div>
        {/* Social Icons */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SocialGlassCards />
        </motion.div>
      </div>
       
    </section>
  );
}
