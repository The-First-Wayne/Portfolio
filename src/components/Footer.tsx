export function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 border-t border-outline-variant/20 bg-background">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="font-headline-md text-headline-md text-on-surface">ANISH.G</div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left opacity-80">
          © 2024 Anish Gayen. Crafted with kinetic energy.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-body-md text-body-md text-on-surface-variant">
        <a className="hover:text-primary transition-colors duration-300" href="#">LinkedIn</a>
        <a className="hover:text-primary transition-colors duration-300" href="#">GitHub</a>
        <a className="hover:text-primary transition-colors duration-300" href="mailto:anishvis007@gmail.com">Email</a>
      </div>
      <button 
        className="flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest group" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        Back to Top
        <span className="material-symbols-outlined transition-transform group-hover:-translate-y-1">arrow_upward</span>
      </button>
    </footer>
  )
}
