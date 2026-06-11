import { projects } from '@/data/content'
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'

function ProjectCard({ title, category, image }: (typeof projects)[number]) {
  const ref = useIntersectionReveal<HTMLDivElement>('asym-grid')

  return (
    <div ref={ref} className="asym-grid-item group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden bg-gray-900 mb-6">
        <img
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
          src={image}
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-lg uppercase tracking-tight">{title}</h4>
          <p className="text-xs text-gray-500 uppercase">{category}</p>
        </div>
        <div className="w-8 h-px bg-brand-crimson mt-3 transition-all duration-500 group-hover:w-12" />
      </div>
    </div>
  )
}

export function BentoGrid() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden" id="works">
      <div className="px-6 md:px-24 mb-16 flex justify-between items-end">
        <h2 className="text-6xl font-display uppercase italic tracking-tighter reveal">
          Selected <br /> Works
        </h2>
        <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 pb-2 reveal reveal-delay-2">
          Archive 2024—2026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-24">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
