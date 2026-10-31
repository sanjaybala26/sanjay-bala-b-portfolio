import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

const MotionDiv = motion.div

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect for the background giant typography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Form submission handler with EmailJS support and mailto fallback
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      // Fallback: Open pre-composed mail in user's default email client
      const mailtoBody = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${mailtoBody}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      // Send directly via EmailJS SDK
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        )
        setStatus('success')
        form.reset()
      } catch (err) {
        console.error('EmailJS error:', err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax "Contact" Word */}
      <MotionDiv
        style={{ y }}
        className="absolute inset-x-0 top-10 pointer-events-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap font-['Impact','Arial_Black',sans-serif]"
        >
          Contact
        </div>
      </MotionDiv>

      {/* In Front: Aligned Red Card Container */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-bold transition-colors inline-flex items-center space-x-1.5"
          >
            <span>DM on Instagram</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 mt-10"
        >
          {/* Two-Column Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Inputs */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="First Name *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email Address *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or opportunity... *"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] h-full"
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col space-y-6 pt-4">
            {/* Permission Checkbox */}
            <label className="flex items-center space-x-3 text-sm text-white/90 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="w-4 h-4 rounded text-black accent-black cursor-pointer"
              />
              <span>
                I agree to allow my submitted details to be used to contact me.
              </span>
            </label>

            {/* Note & Urgent Mail */}
            <div className="space-y-1">
              <p className="text-xs text-white/80 leading-relaxed">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p className="text-xs text-white/70">
                Urgent inquiry? Email directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group px-8 py-4 rounded-full border border-white font-bold text-sm tracking-wider uppercase transition-all duration-300 inline-flex items-center space-x-3 cursor-pointer ${
                  status === 'sending'
                    ? 'bg-white/20 text-white/60 border-white/30 cursor-not-allowed'
                    : status === 'success'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                      : status === 'error'
                        ? 'bg-red-950 text-white border-red-800'
                        : 'bg-transparent text-white hover:bg-white hover:text-[#ff2a2a]'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}

                {status === 'success' && <span>Sent Successfully ✓</span>}

                {status === 'error' && <span>Failed — Try Again</span>}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
