import { motion } from 'framer-motion'

const projects = [
  {
    year: '2024',
    index: '01',
    icon: 'health_and_safety',
    title: 'Healthcare Data & Insights Management System',
    short: 'HDIMS',
    description:
      'AI-powered healthcare document intelligence platform that automatically extracts, verifies, and structures clinical data from unorganized medical PDFs. Built dual-pipeline architecture combining Google Cloud Vision OCR, Gemini LLM extraction, and a confidence-scoring verification engine with a natural language query layer using Qdrant + LangChain.',
    tags: ['FastAPI', 'Qdrant', 'LangChain', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    year: '2023',
    index: '02',
    icon: 'database',
    title: 'Hibernate ORM Implementation',
    short: 'Java ORM',
    description:
      'Built a Java-based ORM layer using Hibernate and JPA to map entities to a relational database, implement CRUD operations, and manage relationships with lazy/eager fetching. Configured Hibernate SessionFactory and transactions using Maven.',
    tags: ['Java', 'Hibernate', 'JPA', 'Maven'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export function Projects() {
  return (
    <>
      <style>{`
        .project-card {
          --accent: rgba(255, 196, 149, 0.9);
          --canvas: color-mix(in lch, #0a0a0a, #ffc495 1%);
          --border-radius: 16;
          --border-width: 1;
          --trail-size: 20;
          --speed: 8s;
          position: relative;
          container-type: inline-size;
        }

        @container (width > 600px) {
          .project-card {
            --speed: 12s;
          }
        }

        /* Border layer — clips the trail to the rounded card shape */
        .project-card .card-border {
          position: absolute;
          inset: 0;
          clip-path: inset(0 0 0 0 round calc(var(--border-radius) * 1px));
          border-radius: calc(var(--border-radius) * 1px);
          background: color-mix(in lch, #ffc495, transparent 88%);
          z-index: 0;
          border: 0;
          container-type: inline-size;
          opacity: 1;
        }

        /* Trail always animating */
        .project-card .card-trail {
          width: calc(var(--trail-size) * 1cqmin);
          aspect-ratio: 2 / 1;
          position: absolute;
          background: radial-gradient(
            100% 100% at right,
            var(--accent),
            transparent 50%
          );
          offset-path: border-box;
          offset-anchor: 100% 50%;
          animation: card-journey var(--speed) infinite linear;
          opacity: 1;
        }

        /* Content — background-clip trick reveals trail through transparent border */
        .project-card .card-content {
          position: relative;
          z-index: 1;
          background: linear-gradient(var(--canvas), var(--canvas)) padding-box,
            transparent;
          border: calc(var(--border-width) * 1px) solid transparent;
          border-radius: calc(var(--border-radius) * 1px);
        }

        @keyframes card-journey {
          to { offset-distance: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card .card-trail {
            animation: none;
            opacity: 0 !important;
          }
        }
      `}</style>

      <section
        id="work"
        className="relative py-28 md:py-40 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden"
      >
        {/* Background grid */}
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-px bg-primary/50" />
                02 — Featured Work
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-headline-xl text-headline-xl text-on-surface leading-tight"
              >
                Projects that
                <br />
                <span className="text-primary italic">ship.</span>
              </motion.h2>
            </div>
            <motion.p
              variants={itemVariants}
              className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-70"
            >
              Real-world applications built with robust architecture and intelligent systems.
            </motion.p>
          </motion.div>

          {/* Project list — spaced cards, no dividers */}
          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="project-card group cursor-pointer"
              >
                {/* Border + trail layer */}
                <div className="card-border">
                  <div className="card-trail" />
                </div>

                {/* Content */}
                <div className="card-content grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-14 px-6 md:px-8">

                  {/* Number + year */}
                  <div className="md:col-span-1 flex md:flex-col gap-4 md:gap-2 items-center md:items-start">
                    <span className="font-label-sm text-label-sm text-primary/50 tracking-widest">
                      {project.index}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant/40 tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl opacity-70 group-hover:opacity-100 transition-opacity">
                        {project.icon}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase tracking-widest">
                        {project.short}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-[22px] md:text-[26px] text-on-surface leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5 md:col-start-6">
                    <p className="font-body-md text-body-md text-on-surface-variant opacity-75 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-outline-variant/30 text-xs font-label-sm text-primary/70 uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex items-start justify-end">
                    <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:rotate-45 transition-all duration-300 text-2xl">
                      north_east
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}