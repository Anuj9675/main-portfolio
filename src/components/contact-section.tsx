"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    { icon: "Github", link: "https://github.com/Anuj9675" },
    { icon: "Linkedin", link: "https://www.linkedin.com/in/anuj-upadhyay-a973b0238/" },
    { icon: "Mail", link: "mailto:anujupadhyay6265@gmail.com" },
  ]

  const iconMap = { Github, Linkedin, Mail }

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="max-w-4xl mx-auto px-8 text-center relative">
        <h2 className="text-5xl md:text-6xl font-thin mb-8 tracking-wide">Let&apos;s Connect</h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12" />
        <p className="text-xl font-light mb-16 opacity-80">
          I&apos;m open to collaboration, freelance opportunities, or just a good tech chat.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-x-4">
          {socialLinks.map((social, i) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap]
            return (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 bg-white/10 border border-white/10 hover:bg-white/20 text-white/70 hover:text-white"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
