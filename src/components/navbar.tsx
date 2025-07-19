"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const socialLinks = [
    { icon: "Github", link: "https://github.com/Anuj9675" },
    { icon: "Linkedin", link: "https://www.linkedin.com/in/anuj-upadhyay-a973b0238/" },
    { icon: "Mail", link: "mailto:anujupadhyay6265@gmail.com" },
  ]

  const iconMap = { Github, Linkedin, Mail }

  return (
    <>
      {/* Sticky Toggle Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full cursor-pointer flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg">
          <div className="flex items-center justify-center min-h-screen p-6">
            <nav className="text-center">
              <ul className="space-y-8">
                {["home", "experience", "skills", "portfolio", "contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-white text-3xl md:text-4xl font-light hover:text-purple-300 transition-colors duration-300 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-8 border-t border-white/20">
                <div className="flex flex-col space-y-4">
                  <a
                    href="#contact"
                    className="text-purple-300 text-lg font-medium hover:text-white transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start a Project
                  </a>

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
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
