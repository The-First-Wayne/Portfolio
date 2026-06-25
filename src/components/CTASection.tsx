import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,196,149,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,157,66,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Label */}
          <div className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            04 — Let's Build
            <span className="w-8 h-px bg-primary/50" />
          </div>

          {/* Headline */}
          <h2
            className="font-display-lg-mobile text-[44px] sm:text-[52px] md:text-[72px] md:font-display-lg text-on-surface leading-none mb-6 tracking-tight"
          >
            Ready to<br />
            <span className="text-primary italic">evolve?</span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto opacity-70 mb-14 leading-relaxed">
            Let's build something that matters. Currently accepting new projects and collaborations.
          </p>

          {/* CTA pair */}
          <div className="flex justify-center">
            <a
              href="mailto:anishvis007@gmail.com"
              className="group glass-surface px-8 sm:px-12 py-4 sm:py-5 border border-white/10 bg-white/5 backdrop-blur-xl font-headline-md text-[18px] sm:text-[20px] text-on-surface-variant flex items-center gap-3 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
