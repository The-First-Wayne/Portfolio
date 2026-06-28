import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Credentials', id: 'credentials' },
  { label: 'Contact', id: 'contact' },
]

function scrollToSection(id: string) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const link = navLinks.find((l) => l.id === e.target.id)
          if (link) setActiveLink(link.label)
        }
      }),
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    )
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    const onScroll = () => { if (window.scrollY < 120) setActiveLink('') }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const handleNav = (label: string, id: string) => {
    setActiveLink(label); setMobileOpen(false); scrollToSection(id)
  }

  return (
    <>
      <style>{`
        .ag-logo {
          --c1: #ffffff;
          --c2: #ffe8d6;
          --c3: #ffc495;
          --c4: #ff9f5a;
          --c5: #ff7a1a;
          font-family: inherit;
          font-weight: 700;
          font-size: 1.6rem;
          letter-spacing: 0.3em;
          color: var(--c1);
          text-transform: uppercase;
          animation: ag-shadows 0.9s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        @keyframes ag-shadows {
          0%   { text-shadow: none; transform: translate(0, 0); }
          15%  { text-shadow: 2px 2px 0 var(--c2); transform: translate(-2px, -2px); }
          30%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3); transform: translate(-4px, -4px); }
          45%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3), 6px 6px 0 var(--c4); transform: translate(-6px, -6px); }
          50%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3), 6px 6px 0 var(--c4), 8px 8px 0 var(--c5); transform: translate(-8px, -8px); }
          65%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3), 6px 6px 0 var(--c4), 8px 8px 0 var(--c5); transform: translate(-8px, -8px); }
          75%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3), 6px 6px 0 var(--c4); transform: translate(-4px, -4px); }
          85%  { text-shadow: 2px 2px 0 var(--c2), 4px 4px 0 var(--c3); transform: translate(-2px, -2px); }
          93%  { text-shadow: 2px 2px 0 var(--c2); transform: translate(-1px, -1px); }
          100% { text-shadow: none; transform: translate(0, 0); }
        }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-outline-variant/15 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center px-6 sm:px-8 md:px-10 xl:px-14 max-w-container-max mx-auto">

          {/* Brand — AG with animated text shadow */}
          <button onClick={() => scrollToSection('top')} aria-label="Brand">
            <span className="ag-logo">AG</span>
          </button>

          {/* Desktop links */}
          <div className="hidden xl:flex gap-6 xl:gap-10 items-center font-label-sm text-[11px] md:text-[14px] lg:text-body-md uppercase tracking-widest">
            {navLinks.map(({ label, id }) => (
              <button
                key={label}
                onClick={() => handleNav(label, id)}
                className={`relative group transition-colors duration-300 ${
                  activeLink === label ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  activeLink === label ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Availability dot */}
          <div className="hidden xl:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-label-sm text-[10px] md:text-body-md text-on-surface-variant uppercase tracking-widest">Open to work</span>
          </div>

          {/* Hamburger */}
          <button
            id="nav-mobile-toggle"
            className="xl:hidden relative h-10 w-10 p-2 z-50 flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }} transition={{ duration: 0.3 }} className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2" />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }} transition={{ duration: 0.3 }} className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-background/97 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 px-6 py-24 sm:py-28"
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,196,149,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.04) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }} />

            {navLinks.map(({ label, id }, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNav(label, id)}
                className="relative font-headline-md text-[26px] sm:text-[28px] text-on-surface hover:text-primary transition-colors duration-300 uppercase tracking-[0.35em] group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="relative flex items-center gap-3 mt-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-label-sm text-body-md text-on-surface-variant uppercase tracking-widest">Open to work</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}