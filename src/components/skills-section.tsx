import { Code, Database, Wrench } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    title: "Frontend",
    description:
      "Tools and frameworks used to build beautiful user experiences",
    icon: <Code className="h-5 w-5" />,
    features: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Next.js",
      "TailwindCSS",
      "TanStack Query",
      "Recoil",
    ],
  },
  {
    title: "Backend",
    description: "Technologies that power the logic, database, and APIs",
    icon: <Database className="h-5 w-5" />,
    features: ["Node.js", "Firebase", "MySQL"],
  },
  {
    title: "Tools",
    description: "Essential tools and utilities for development and deployment",
    icon: <Wrench className="h-5 w-5" />,
    features: ["Git", "GitHub", "Redux-Toolkit", "VS Code", "NPM", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-white to-gray-50/50 px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-thin mb-16 tracking-wide">
            My Skills
          </h2>
          <div className="space-y-10">
            {skills.map((skill, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-xl transition-all duration-700 border border-gray-100/50">
                  <div className="w-10 h-10 p-2 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-3 group-hover:text-gray-600 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-base font-light opacity-70 mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.features.map((f, j) => (
                        <span
                          key={j}
                          className="text-xs font-light px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl rotate-6" />
          <div className="relative aspect-[6/7] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero.jpg"
              alt="hero"
              className="object-cover w-full h-full"
              width={400}
              height={533}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
