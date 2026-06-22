import { motion } from 'framer-motion'

const tickerItems = [
  'AI Agent Builder',
  'Full-Stack Dev',
  'Backend Systems',
  'UI/UX Design',
  'Cloud Architecture',
  'Machine Learning',
  'React & Next.js',
  'Python & FastAPI',
]

export function SkillsMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 border-y border-outline-variant/10 bg-surface-container-lowest overflow-hidden"
    >
      {/* Marquee track — two identical content blocks create a seamless loop */}
      <div className="marquee group">
        <div className="marquee-content">
          {tickerItems.map((text, i) => (
            <div key={i} className="flex gap-6 items-center shrink-0">
              <span className="font-headline-md font-bold text-[17px] uppercase tracking-tighter text-on-surface/35 italic hover:text-primary/70 transition-colors duration-300 cursor-default whitespace-nowrap">
                {text}
              </span>
              <span className="text-primary/60 text-xl">•</span>
            </div>
          ))}
        </div>

        {/* Duplicate — picks up exactly where the first ends */}
        <div className="marquee-content" aria-hidden="true">
          {tickerItems.map((text, i) => (
            <div key={i} className="flex gap-6 items-center shrink-0">
              <span className="font-headline-md font-bold text-[17px] uppercase tracking-tighter text-on-surface/35 italic hover:text-primary/70 transition-colors duration-300 cursor-default whitespace-nowrap">
                {text}
              </span>
              <span className="text-primary/60 text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
