import { ContactDialog } from './ContactDialog'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto bg-transparent backdrop-blur-md border-b border-outline-variant/10">
      <div className="font-headline-md text-headline-md font-bold text-on-surface">ANISH.G</div>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 items-center font-label-sm text-label-sm uppercase tracking-widest">
        <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#work">Work</a>
        <a className="text-on-tertiary-container hover:text-on-surface transition-colors" href="#">About</a>
        <a className="text-on-tertiary-container hover:text-on-surface transition-colors" href="#">Services</a>
      </div>
      <ContactDialog>
        <button className="bg-primary text-on-primary-container px-6 py-2 font-label-sm uppercase tracking-widest rounded-none glow-hover hover:scale-105 transition-all duration-300 active:scale-95 text-black">
          Let's Talk
        </button>
      </ContactDialog>
    </nav>
  )
}
