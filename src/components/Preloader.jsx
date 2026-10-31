import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const MotionDiv = motion.div

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  // Timer to dismiss preloader after water fill animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Inner Brand Text Container */}
          <MotionDiv
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none"
          >
            {/* Background copy in dark red */}
            <span className="text-red-900/30">
              {personalInfo.brandName}.
            </span>

            {/* Foreground animated water-fill copy */}
            <MotionDiv
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-0 text-white"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
