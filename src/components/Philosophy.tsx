import { motion } from 'framer-motion'

export function Philosophy() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-40 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-container-max mx-auto"
    >
      <div className="md:col-span-5 mb-12 md:mb-0">
        <div className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-6">Our Philosophy</div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">We combine intelligent architecture, technology, and user-focused design.</h2>
      </div>
      <div className="md:col-start-7 md:col-span-6">
        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-8">
          <p>
            My journey began with a simple idea: great design and intelligent systems should not only look beautiful but also create real impact. From working with early-stage AI startups to collaborating with global giants, I maintain an environment where content and performance are the protagonists.
          </p>
          <p>
            I utilize expansive whitespace—or as we call it, "blackspace"—to allow high-fidelity work to breathe. My approach is mysterious, high-end, and kinetically charged.
          </p>
          <div className="pt-8 border-t border-outline-variant/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A professional headshot of Anish" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzNT23cZgSeUGQWR509c5kelhzXvw879PSwkyFYLmXXFtvKTdadmNy1xmd8mrePcA3Gur1tvSoMtzue_eJl0EpRv5-y16Un6usifnOPJXkCR4YilZ7ODpA0uS0McWvldn_3ALMLOxkMafDlUHA8D0jgDQ6tKQdey4nwxSqnhYXXNC__mOzuTvqkinOqKZhIPfYXTKt0770vwvAAvhHEA_0C2jDfhc8S5l1C7dPZ9p0PYvq0eDQcXvEINloGaCcgmD89t9vCZDV_5E"
                />
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface font-bold">ANISH GAYEN</div>
                <div className="font-label-sm text-[10px] text-on-surface-variant uppercase">AI Agent Builder & Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
