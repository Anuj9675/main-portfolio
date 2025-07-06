export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50/50 to-gray-100/30 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-thin mb-16 tracking-wide">About</h2>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100/50">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-gray-800 italic">
            &quot;Design with logic. Build with clarity. Deliver with purpose.&quot;
          </blockquote>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />
          <p className="text-lg font-light opacity-70 leading-relaxed max-w-3xl mx-auto mb-10">
            I&apos;m <strong>Anuj Upadhyay</strong>, a Frontend Developer with strong Business Analyst skills. I focus on building responsive, clean, and functional user interfaces that align with business needs. My goal is to bridge the gap between design, development, and user experience to deliver real results.
          </p>
          <a
            href="/assets/AnujResume.pdf"
            download
            className="inline-block mt-4 px-8 py-4 text-sm font-light tracking-wide bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
