import { motion } from 'framer-motion'

export function Projects() {
  return (
    <motion.section 
      id="work" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-40 bg-background px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Featured<br/><span className="text-primary italic">Work.</span></h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-80">
            Real-world applications built with robust architecture and intelligent systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="glass-surface p-10 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary text-4xl">health_and_safety</span>
              <span className="font-label-sm text-label-sm text-on-surface/20">2024</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Healthcare Data & Insights Management System (HDIMS)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80 mb-6 flex-1">
              An AI-powered healthcare document intelligence platform that automatically extracts, verifies, and structures clinical data from unorganized medical PDFs (lab reports, prescriptions). Built a dual-pipeline architecture combining Google Cloud Vision OCR, Gemini LLM extraction, and a confidence-scoring verification engine to ensure reliable, hallucination-resistant data processing. Implemented a natural language query layer using Qdrant vector search, LangChain reasoning chains, and persona-separated clinical AI interfaces.
            </p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">FastAPI</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Qdrant</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">LangChain</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Docker</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">PostgreSQL</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Redis</span>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="glass-surface p-10 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary text-4xl">database</span>
              <span className="font-label-sm text-label-sm text-on-surface/20">2023</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Hibernate ORM Implementation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80 mb-6 flex-1">
              Built a Java-based ORM layer using Hibernate and JPA to map entities to a relational database, implement CRUD operations, and manage relationships with lazy/eager fetching. Configured Hibernate SessionFactory and transactions using Maven.
            </p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Java</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Hibernate</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">JPA</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-label-sm text-primary uppercase">Maven</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
