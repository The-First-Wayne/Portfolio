import { motion } from 'framer-motion'
import { ContactDialog } from './ContactDialog'

export function CTASection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-40 text-center px-margin-mobile"
    >
      <div className="inline-block glass-surface px-12 py-24 w-full max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <h2 className="font-display-lg-mobile md:text-[64px] font-display-lg text-on-surface mb-8">Ready to evolve?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg mx-auto opacity-80">
            Let's build something that matters. Currently accepting new projects.
          </p>
          <ContactDialog>
            <button className="bg-primary text-on-primary-container px-12 py-5 font-headline-md text-[20px] rounded-none glow-hover hover:scale-110 transition-all duration-500 text-black">
              Start a Project
            </button>
          </ContactDialog>
        </div>
      </div>
    </motion.section>
  )
}
