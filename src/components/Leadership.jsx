import { leadershipList } from '../data/portfolioData'

// Individual Timeline Item
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12">
      {/* Central / Left glowing red node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_15px_rgba(255,42,42,0.8)] border-2 border-black z-20" />

      {/* Even Index Card (Left on Desktop) */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:scale-[1.01]">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white hover:text-[#ff2a2a] transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          {/* Right empty spacer on Desktop */}
          <div className="hidden md:block w-[45%]" />
        </>
      ) : (
        /* Odd Index Card (Right on Desktop) */
        <>
          {/* Left empty spacer on Desktop */}
          <div className="hidden md:block w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:scale-[1.01]">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white hover:text-[#ff2a2a] transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section
      id="activities"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top Edge: Torn-paper divider flowing from previous red section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            Community initiatives, technical clubs, and campus leadership roles shaping impactful collaboration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Gradient Line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 left-4 md:left-1/2 -translate-x-1/2 z-0" />

          {/* Timeline Nodes */}
          {leadershipList && leadershipList.length > 0 ? (
            leadershipList.map((item, index) => (
              <LeadershipItem
                key={item.title + index}
                item={item}
                index={index}
              />
            ))
          ) : (
            <div data-aos="fade-up" className="text-center py-8 relative z-20">
              <div className="inline-block px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 font-semibold text-sm">
                Active participant in developer community events, campus hackathons, and technical design workshops.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
