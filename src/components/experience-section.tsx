import { motion } from "framer-motion";

export default function ExperienceStepper() {
  const steps = [
    {
      label: "Freelancer",
      subLabel: "Jan 2025 – Present",
      position: "Freelancer",
      description:
        "Provided web development for clients, delivering responsive and interactive websites while managing the entire project lifecycle.",
    },
    {
      label: "Totally Optimised Solutions (Hybrid)",
      subLabel: "Aug 2024 – Dec 2024",
      position: "Frontend Developer",
      description:
        "Developed responsive, user-friendly interfaces and collaborated with teams on UI/UX, performance, and interactive features.",
    },
    {
      label: "Business Web Solutions (Virtual)",
      subLabel: "Apr 2024 – Jun 2024",
      position: "Intern",
      description:
        "Gained hands-on experience in full stack web development, applying HTML, CSS, JavaScript, Python, and Django to real-world projects.",
    },
  ];

  return (
    <section id="experience" className="py-32 px-8">
           {" "}
      <div className="max-w-7xl mx-auto">
               {" "}
        <motion.h2
          className="text-5xl md:text-6xl font-thin py-8 tracking-wide text-center text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
                    Experience        {" "}
        </motion.h2>
               {" "}
        <ol className="relative border-s border-gray-900 text-black">
                   {" "}
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              className="relative flex-1 start-8 top-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
                           {" "}
              <span className="absolute -start-12 top-0">
                               {" "}
                <span className="w-8 h-8 bg-gray-900 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  " />
                             {" "}
              </span>
                           {" "}
              <div className="flex flex-col pb-2 ">
                               {" "}
                <span className="font-semibold text-2xl font-serif text-black -mt-6">
                  {step.label}
                </span>
                               {" "}
                <span className="text-lg text-gray-700 -mt-6">
                  {step.position}
                </span>
                               {" "}
                <span className="text-lg text-gray-500 -mt-6">
                  {step.subLabel}
                </span>
                               {" "}
                <p className="text-xl text-gray-700 -mt-6">
                  {step.description}
                </p>
                             {" "}
              </div>
                         {" "}
            </motion.li>
          ))}
                 {" "}
        </ol>
               {" "}
        <motion.div
          className="mb-10 text-left -mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
                   {" "}
          <a
            href="/assets/AnujResume.pdf"
            download
            className="inline-block px-8 py-4 text-sm font-light tracking-wide bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          >
                        Download Resume          {" "}
          </a>
                 {" "}
        </motion.div>
             {" "}
      </div>
         {" "}
    </section>
  );
}
