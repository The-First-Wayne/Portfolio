import { motion } from 'framer-motion'

const certs = [
  {
    title: 'Agentic AI: From Learner to Builder – Become an AI Agent Architect',
    issuer: 'IBM SkillsBuild & CSRBOX',
    icon: 'neurology',
    year: '2024',
  },
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    icon: 'smart_toy',
    year: '2024',
  },
  {
    title: 'API Design using OAS 2.0 with Swagger Development Tool Suite',
    issuer: 'Infosys Springboard',
    icon: 'api',
    year: '2023',
  },
  {
    title: 'API Modeling and Design',
    issuer: 'Infosys Springboard',
    icon: 'webhook',
    year: '2023',
  },
  {
    title: 'Web Development with AI Training',
    issuer: 'Internshala Trainings',
    icon: 'code',
    year: '2023',
  },
]

export function Certifications() {
  return (
    <section id="credentials" className="relative py-40 px-margin-mobile md:px-margin-desktop bg-background overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,196,149,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,149,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div>
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary/50" />
              03 — Credentials
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
              Continuous<br /><span className="text-primary italic">Learning.</span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-70">
            Certifications and specialized training in AI architectures, APIs, and modern web development.
          </p>
        </motion.div>

        {/* Cert list */}
        <div className="flex flex-col border-t border-outline-variant/15">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 py-8 border-b border-outline-variant/15 hover:bg-surface-container/30 transition-colors duration-400 px-4 -mx-4 cursor-default"
            >
              {/* Index */}
              <span className="hidden md:block font-label-sm text-label-sm text-primary/30 tracking-widest w-8 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <span className="material-symbols-outlined text-primary/50 group-hover:text-primary transition-colors duration-300 text-3xl shrink-0">
                {cert.icon}
              </span>

              {/* Text */}
              <div className="flex-1">
                <h4 className="font-headline-md text-[18px] md:text-[22px] text-on-surface leading-snug mb-1">
                  {cert.title}
                </h4>
                <div className="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest">
                  {cert.issuer}
                </div>
              </div>

              {/* Year */}
              <span className="font-label-sm text-label-sm text-on-surface-variant/30 tracking-widest shrink-0">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
