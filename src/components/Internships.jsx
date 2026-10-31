import { internshipsList } from '../data/portfolioData'

// Individual Internship Card
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between space-y-6"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 font-bold text-sm tracking-wide mt-1 mb-5">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        {intern.skills && intern.skills.length > 0 && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 block">
              Skills Gained:
            </span>
            <ul className="space-y-1.5 text-sm text-red-50">
              {intern.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-start space-x-2">
                  <span className="text-white select-none">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom: Technologies Used */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-auto">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2 block">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top Edge: Torn-paper divider flowing from previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing star bottom-left at 20% opacity */}
      <svg
        className="absolute bottom-10 left-10 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none z-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base leading-relaxed">
            Professional roles, internships, and engineering contributions delivering real-world software solutions.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList && internshipsList.length > 0 ? (
            internshipsList.map((intern, index) => (
              <InternshipCard
                key={intern.organization + index}
                intern={intern}
                index={index}
              />
            ))
          ) : (
            <div data-aos="fade-up" className="col-span-full text-center py-8">
              <div className="inline-block px-6 py-4 rounded-2xl bg-black/15 backdrop-blur-md border border-black/10 text-white font-semibold text-sm">
                Open to full-time Software Engineer and Internship opportunities.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
