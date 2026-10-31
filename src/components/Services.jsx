import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const MotionPath = motion.path

// Hanging tag card with hole cutout and dynamic activation on scroll line intersection
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Turn active when the animated scroll path reaches this card's vertical position
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const currentLineY = latest * containerRect.height

    if (currentLineY >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 shadow-xl relative select-none ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)]'
          : 'bg-white shadow-md'
      } ${className}`}
    >
      {/* Top punched hole circle */}
      <div className="w-5 h-5 rounded-full bg-white border border-gray-300 absolute top-4 left-1/2 -translate-x-1/2 shadow-inner" />

      {/* Inner card panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span className="font-serif italic text-3xl opacity-60 mb-2 font-bold block">
            {number}
          </span>
          <h3 className="text-2xl font-black tracking-tight mb-3">
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-red-50' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  // Track progress of the section scroll through viewport center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop curved path coordinates
  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  // Pre-configured positioning for the 4 process cards on desktop
  const cardConfigs = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block mb-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {skillsContent.heading}
            </h2>
            {/* Small hand-drawn arrow pointing toward process steps */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated Three-Layer SVG Path */}
        <svg
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Animated Mask */}
          <defs>
            <mask id="path-mask">
              <MotionPath
                d={desktopD}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Active Dark Dashed Path Revealed by Mask */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated Three-Layer SVG Path */}
        <svg
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
        >
          {/* Layer 1: Guide Path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 2: Mobile Mask */}
          <defs>
            <mask id="path-mask-mobile">
              <MotionPath
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="20"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Active Dashed Path on Mobile */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Hanging Tag Process Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => {
            const config = cardConfigs[idx] || cardConfigs[0]
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosType={config.aosType}
                aosDelay={config.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note in Caveat font */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}
