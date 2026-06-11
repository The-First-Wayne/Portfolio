import { motion } from 'framer-motion'

export function Certifications() {
  const certs = [
    { title: "Agentic AI: From Learner to Builder – Become an AI Agent Architect", issuer: "IBM SkillsBuild & CSRBOX", icon: "neurology" },
    { title: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild", icon: "smart_toy" },
    { title: "API Design using OAS 2.0 with Swagger Development Tool Suite", issuer: "Infosys Springboard", icon: "api" },
    { title: "API Modeling and Design", issuer: "Infosys Springboard", icon: "webhook" },
    { title: "Web Development with AI Training", issuer: "Internshala Trainings", icon: "code" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="py-40 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Continuous<br/><span className="text-primary italic">Learning.</span></h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-80">
            Certifications and specialized training in AI architectures, APIs, and modern web development.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {certs.map((cert, i) => (
             <div key={i} className="glass-surface p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:bg-surface-container-low transition-colors duration-300">
               <span className="material-symbols-outlined text-primary text-4xl opacity-50 group-hover:opacity-100 transition-opacity">{cert.icon}</span>
               <div>
                 <h4 className="font-headline-md text-[20px] md:text-[24px] text-on-surface mb-2">{cert.title}</h4>
                 <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{cert.issuer}</div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
