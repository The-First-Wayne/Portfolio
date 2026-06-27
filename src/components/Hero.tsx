import { motion } from 'framer-motion'
import { useState, useEffect, type MouseEvent } from 'react'
import { ParticleCanvas } from './ParticleCanvas'

const roles = ['AI Engineer', 'Full-Stack Developer', 'Systems Architect', 'UI/UX Craftsman']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const emailAddress = 'anishvis007@gmail.com'
    const webmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    const openedWindow = window.open(webmailHref, '_blank', 'noopener,noreferrer')

    if (!openedWindow) {
      window.location.href = webmailHref
    }
  }

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-background">

      {/* ── Particle layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,196,149,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ═══════════════════════════════
          LEFT — text content
      ═══════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 w-full lg:w-[58%] xl:w-[54%] 2xl:w-1/2 box-border min-h-screen pt-24 pb-14">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-full lg:max-w-[560px] xl:max-w-none">

          {/* Availability */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display-lg-mobile text-[34px] sm:text-[38px] md:text-[44px] xl:text-[50px] 2xl:text-[56px] md:font-display-lg text-on-surface leading-none mb-4 tracking-widest"
          >
            ANISH<span className="text-primary">.G</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-10 h-10">
            <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[13px]">—</span>
            <span className="text-primary text-[20px] md:text-[24px]"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
              {displayed}
            </span>
            <span className="cursor-blink inline-block w-[2px] h-6 bg-primary ml-0.5" />
          </motion.div>

          {/* CTA + bio */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg opacity-80 leading-relaxed">
              I make things that work well and feel good, usually involving some AI under the hood.
            </p>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anish-gayen-319789335/', icon: '/linkedin.svg' },
              { label: 'GitHub', href: 'https://github.com/The-First-Wayne', icon: '/github.svg' },
              { label: 'Email', href: '#', icon: '/mail.svg' },
            ].map(({ label, href, icon }) => {
              if (label === 'Email') {
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={handleEmailClick}
                    className="relative group/link inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
                  >
                    <img src={icon} alt={`${label} icon`} className="h-4 w-4 object-contain" />
                    <span>{label}</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </a>
                )
              }

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/link inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
                >
                  <img src={icon} alt={`${label} icon`} className="h-4 w-4 object-contain" />
                  <span>{label}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-6 sm:left-8 md:left-margin-desktop flex items-center gap-3"
        >
          <motion.div
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-primary to-transparent origin-top"
          />
          <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50">Scroll</span>
        </motion.div>
      </div>

      {/* ═══════════════════════════════
          RIGHT — hero photo
      ═══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-0 h-full w-[42%] z-10 pointer-events-none"
      >
        {/* photo */}
        <img
          src="/hero-photo.png"
          alt="Anish Gayen"
          className="w-full h-full object-cover object-center"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%)' }}
        />

        {/* orange blend toning — matches reference */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,130,40,0.45) 0%, rgba(180,70,0,0.2) 50%, transparent 100%)',
            mixBlendMode: 'color',
          }}
        />
        {/* dark vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,13,13,0.7) 100%)',
          }}
        />
        {/* fade into left content */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #131313 0%, transparent 20%)' }}
        />
        {/* fade bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, #131313 0%, transparent 100%)' }}
        />
      </motion.div>
    </section>
  )
}
