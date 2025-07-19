import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiReactquery, SiRecoil, SiGit, SiGithub, SiNpm, SiPostman
} from "react-icons/si";

const skillsRow = [
  { name: "HTML", icon: <SiHtml5 className="h-5 w-5" /> },
  { name: "CSS", icon: <SiCss3 className="h-5 w-5" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
  { name: "React.js", icon: <SiReact className="h-5 w-5" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="h-5 w-5" /> },
  { name: "Recoil", icon: <SiRecoil className="h-5 w-5" /> },
  { name: "TanStack Query", icon: <SiReactquery className="h-5 w-5" /> },
  { name: "Git", icon: <SiGit className="h-5 w-5" /> },
  { name: "GitHub", icon: <SiGithub className="h-5 w-5" /> },
  { name: "NPM", icon: <SiNpm className="h-5 w-5" /> },
  { name: "Postman", icon: <SiPostman className="h-5 w-5" /> },
];





export default function AnimatedSkills() {
  return (
    <section id="skills" className="relative bg-black h-[80vh] flex items-center justify-center">
  <div className="w-full">
    <h2 className="text-5xl md:text-6xl text-white font-thin mb-16 tracking-wide text-center">
      What I work with
    </h2>
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-2/3 mx-auto px-4">
        {/* Row 1: Left to Right */}
        <div className="overflow-hidden whitespace-nowrap mb-6 group">
          <div className="flex items-center animate-marquee-ltr group-hover:[animation-play-state:paused]">
            {skillsRow.concat(skillsRow).map((skill, i) => (
              <span
                key={i}
                className="flex items-center bg-neutral-900 text-gray-100 px-4 py-2 rounded-full mx-2 text-sm font-light"
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="overflow-hidden whitespace-nowrap group">
          <div className="flex items-center animate-marquee-rtl group-hover:[animation-play-state:paused]">
            {skillsRow.concat(skillsRow).map((skill, i) => (
              <span
                key={i}
                className="flex items-center bg-neutral-900 text-gray-100 px-4 py-2 rounded-full mx-2 text-sm font-light"
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
