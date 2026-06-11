import { motion } from 'framer-motion'

export function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-40 bg-surface-container-low px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Bespoke<br/><span className="text-primary italic">Solutions.</span></h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-80">
            Crafting digital artifacts that push the boundaries of modern aesthetics and functional performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="glass-surface p-10 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
              <span className="font-label-sm text-label-sm text-on-surface/20">01</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">AI Agent Pipelines</h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80">End-to-end intelligent agent architectures built for scalability and elite performance.</p>
            <div className="pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Learn More —&gt;</span>
            </div>
          </div>
          {/* Service 2 */}
          <div className="glass-surface p-10 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary text-4xl">blur_on</span>
              <span className="font-label-sm text-label-sm text-on-surface/20">02</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Backend Systems</h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Adding robust kinetic energy to digital interfaces through solid backend engineering.</p>
            <div className="pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Learn More —&gt;</span>
            </div>
          </div>
          {/* Service 3 */}
          <div className="glass-surface p-10 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
              <span className="font-label-sm text-label-sm text-on-surface/20">03</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Digital Product Design</h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80">Developing the visual identity and narrative for the next generation of premium applications.</p>
            <div className="pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Learn More —&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
