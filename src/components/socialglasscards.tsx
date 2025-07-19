'use client';

import React from 'react';
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: <Github size={28} />,
    label: "GitHub",
    link: "https://github.com/Anuj9675",
    color: "#6e40c9",
    about: "Open source enthusiast"
  },
  {
    icon: <Linkedin size={28} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/anuj-upadhyay-a973b0238/",
    color: "#0077B5",
    about: "Tech networking"
  },
  {
    icon: <Mail size={28} />,
    label: "Email",
    link: "mailto:anujupadhyay6265@gmail.com",
    color: "#ff6767",
    about: "Let's connect!"
  }
];

export function SocialGlassCards() {
  return (
    <div className="flex flex-wrap gap-10 justify-center py-10">
      {socials.map(({icon, label, link, color, about}, i) => (
        <div
          key={i}
          className="tooltip-container"
          style={{ "--color": color, "--border": `${color}40` } as React.CSSProperties}
        >
          {/* Tooltip */}
          <div className="tooltip">
            <div className="profile">
              <div className="user">
                
              </div>
              <div className="about">{about}</div>
            </div>
          </div>

          {/* Main Icon */}
          <div className="text">
            <Link className="icon" href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="svg icon-center">{icon}</span>
              </div>
              <div className="text">{label}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
