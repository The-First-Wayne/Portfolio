import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ContactDialog } from './ContactDialog'
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
      <div className="relative z-10 flex flex-col justify-center px-margin-mobile md:px-margin-desktop w-full md:w-1/2 min-h-screen pt-24 pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

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
            className="font-display-lg-mobile md:text-display-lg md:font-display-lg text-on-surface leading-none mb-4 tracking-widest"
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
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <ContactDialog>
              <button
                id="hero-cta-btn"
                className="group w-fit bg-on-background text-background px-8 py-4 font-headline-md text-[20px] flex items-center gap-3 hover:scale-105 hover:bg-primary hover:text-on-primary transition-all duration-300"
              >
                Let's Talk
                <span className="material-symbols-outlined transition-transform group-hover:rotate-45">north_east</span>
              </button>
            </ContactDialog>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xs opacity-80 leading-relaxed">
              I build intelligent systems and premium digital experiences using AI agentics and robust engineering.
              Crafted with kinetic energy.
            </p>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex gap-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'GitHub', href: 'https://github.com' },
              { label: 'Email', href: 'mailto:anishvis007@gmail.com' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="relative group/link hover:text-primary transition-colors duration-300">
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-margin-mobile md:left-margin-desktop flex items-center gap-3"
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
        className="hidden md:block absolute right-0 top-0 h-full w-1/2 z-10 pointer-events-none"
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

        {/* decorative 4-point star (matches reference) */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-16 right-12 text-primary/40"
          style={{ fontSize: '48px', lineHeight: 1 }}
        >
          ✦
        </motion.div>
      </motion.div>
    </section>
  )
}
