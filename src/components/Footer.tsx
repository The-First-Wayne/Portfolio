import { type MouseEvent } from 'react'

export function Footer() {
  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const emailAddress = 'anishvis007@gmail.com'
    const webmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    const openedWindow = window.open(webmailHref, '_blank', 'noopener,noreferrer')

    if (!openedWindow) {
      window.location.href = webmailHref
    }
  }

  return (
    <footer className="relative w-full py-12 px-margin-mobile md:px-margin-desktop bg-background border-t border-outline-variant/10">
      {/* Grid line */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,196,149,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-1 items-center md:items-start">
          <div className="font-headline-md text-headline-md text-on-surface tracking-widest">
            ANISH<span className="text-primary">.G</span>
          </div>
          <p className="font-label-sm text-[10px] text-on-surface-variant/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Anish Gayen — Crafted with kinetic energy.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anish-gayen-319789335/', icon: '/linkedin.svg' },
            { label: 'GitHub', href: 'https://github.com/The-First-Wayne', icon: '/github.svg' },
            { label: 'Email', href: '#', icon: '/mail.svg' },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              onClick={label === 'Email' ? handleEmailClick : undefined}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="relative group/link inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <img src={icon} alt={`${label} icon`} className="h-4 w-4 object-contain" />
              <span>{label}</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          className="flex items-center gap-2 font-label-sm text-label-sm text-primary/50 hover:text-primary uppercase tracking-widest group transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Top
          <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-y-1">
            arrow_upward
          </span>
        </button>
      </div>
    </footer>
  )
}
