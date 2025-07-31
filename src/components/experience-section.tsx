import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperienceStepper() {
  const steps = [
    {
      label: "Freelancer",
      subLabel: "Jan 2025 – Present",
      position: "Freelancer",
      description:
        "Practiced web development and explored platforms like Outlancer to seek freelance opportunities, while building hands-on experience through self-initiated projects.",
    },
    {
      label: "Totally Optimised Solutions (Hybrid)",
      subLabel: "Aug 2024 – Dec 2024",
      position: "Frontend Developer",
      description:
        "Created user-friendly interfaces and collaborated with design and backend teams.",
    },
    {
      label: "Business Web Solutions (Virtual)",
      subLabel: "Apr 2024 – Jun 2024",
      position: "Intern",
      description:
        "Assisted in frontend implementation, contributed to UI improvements, and participated in project planning and team syncs.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-4 sm:px-8 md:px-16 py-16 bg-[#f9fafb] text-gray-900"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-thin mb-16 tracking-wide text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-start">
        {/* Profile Card */}
        <div className="flex justify-center">
          <div className="group w-[320px] h-[460px] [perspective:1200px]">
            <div className="relative w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full rounded-2xl bg-white/90 backdrop-blur-lg flex flex-col justify-center items-center text-center backface-hidden shadow-xl p-6">
                <p className="text-xl font-bold">Anuj Upadhyay</p>
                <p className="text-base text-gray-700">
                  Frontend & Business Analyst
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  React • Next.js • Power BI
                </p>
              </div>
              <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] backface-hidden">
                <img
                  src="/assets/hero.png"
                  alt="Anuj"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <ol className="relative border-s border-gray-900 space-y-8">
            {steps.map((step, idx) => (
              <motion.li
                key={idx}
                className="relative pl-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <span className="absolute -left-2 top-1 w-4 h-4 bg-gray-900 rounded-full border border-white" />
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{step.label}</h3>
                  <p className="text-base text-gray-700">{step.position}</p>
                  <p className="text-sm text-gray-500">{step.subLabel}</p>
                  <p className="text-base text-gray-700">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Sidebar Info + Button */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mb-2 text-xl font-semibold">Key Achievements</h4>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>Completed several self-driven web projects</li>
              <li>Improved website performance and usability</li>
              <li>Strengthened client communication readiness</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="mb-2 text-xl font-semibold">Work Philosophy</h4>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>Think user-first, always</li>
              <li>Balance speed with quality</li>
              <li>Code for clarity, scale, and reuse</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link
              href="/assets/AnujResume.pdf"
              download
              className="w-full block text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
