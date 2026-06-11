import { motion } from 'framer-motion'

export function SkillsMarquee() {
  const tickerItems = [
    'AI Agent Builder',
    'Full-Stack Dev',
    'Backend Systems',
    'UI/UX Design',
    'Cloud Architecture'
  ]

  const repeated = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 border-y border-outline-variant/10 bg-surface-container-lowest"
    >
      <div className="px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="https://linkedin.com">LinkedIn</a>
          <a className="hover:text-primary transition-colors" href="https://github.com">GitHub</a>
          <a className="hover:text-primary transition-colors" href="mailto:anishvis007@gmail.com">Email</a>
        </div>
        <div className="marquee flex-1 max-w-2xl">
          <div className="marquee-content font-headline-md text-[18px] uppercase tracking-tighter text-on-surface/40 italic">
            {repeated.map((text, i) => (
               <div key={i} className="flex gap-6 items-center shrink-0">
                  <span>{text}</span>
                  <span className="text-primary">•</span>
               </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
