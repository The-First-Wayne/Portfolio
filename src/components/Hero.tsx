import { motion } from 'framer-motion'
import { ContactDialog } from './ContactDialog'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          alt="A cinematic, high-contrast digital environment"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtVoxdDXjd2OPwu472185cP4qzCChl3_CE6tthXVR0bKcMh6_TwmPrcZ-wdNyoGcDUGBNU7aEiPDaxeel6HEGs9pXebP0DypUZZAdRJDcEwkInNxEm7NRXOMoUfBwFWOt7JhsXjAhqOq34nTXvogjKjbq9n7kQhTkVUqW_UIJ42WArjaPuEqDQTP0TMFRqG99bHkvZ_1QbFOalh-6kbi4O6ZkXsOmpYVVGI-Wb7hV6i3IGb_S9DobRnPtBYy4blBhjNN6b7P-kopc"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-20"
      >
        <h1 className="font-display-lg-mobile md:text-display-lg md:font-display-lg text-on-surface leading-none mb-8 tracking-widest">
          ANISH<span className="text-primary inline-block relative">.G

          </span>
        </h1>
        <div className="max-w-2xl flex flex-col md:flex-row md:items-end gap-8">
          <ContactDialog>
            <button className="group w-fit bg-on-background text-background px-8 py-4 font-headline-md text-[20px] flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              Let's Talk
              <span className="material-symbols-outlined transition-transform group-hover:rotate-45">north_east</span>
            </button>
          </ContactDialog>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md opacity-80">
            I build intelligent systems and premium digital experiences using AI agentics and robust engineering. Crafted with kinetic energy.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
