import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Credentials', id: 'credentials' },
  { label: 'Contact', id: 'contact' },
]

function scrollToSection(id: string) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const offset = 80 // nav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
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

  // Highlight active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const link = navLinks.find((l) => l.id === id)
          if (link) {
            setActiveLink(link.label)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    const handleScrollReset = () => {
      if (window.scrollY < 120) {
        setActiveLink('')
      }
    }
    window.addEventListener('scroll', handleScrollReset, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollReset)
    }
  }, [])

  const handleNav = (label: string, id: string) => {
    setActiveLink(label)
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-outline-variant/15 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center px-6 sm:px-8 md:px-10 xl:px-14 max-w-container-max mx-auto">

          {/* Brand */}
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Brand sphere"
          >
            <div className="sphere" aria-hidden="true">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden xl:flex gap-6 xl:gap-10 items-center font-label-sm text-[11px] md:text-[14px] lg:text-body-md uppercase tracking-widest min-w-0">
            {navLinks.map(({ label, id }) => (
              <button
                key={label}
                onClick={() => handleNav(label, id)}
                className={`relative min-w-0 group transition-colors duration-300 ${
                  activeLink === label
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    activeLink === label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Availability dot — desktop */}
          <div className="hidden xl:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-label-sm text-[10px] md:text-body-md text-on-surface-variant uppercase tracking-widest">
              Open to work
            </span>
          </div>

          {/* Hamburger — mobile */}
          <button
            id="nav-mobile-toggle"
            className="xl:hidden relative h-10 w-10 p-2 z-50 flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-1/2 block w-6 h-px bg-on-surface origin-center -translate-x-1/2 -translate-y-1/2"
            />
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
            {/* Grid bg inside drawer */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,196,149,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.04) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />

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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex items-center gap-3 mt-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-label-sm text-body-md text-on-surface-variant uppercase tracking-widest">
                Open to work
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
