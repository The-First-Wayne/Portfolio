import { feedItems, site } from '@/data/content'
import { Button } from '@/components/ui/button'

const DELAY_CLASSES = ['', 'reveal-delay-1', 'reveal-delay-2'] as const

export function TacticalFeed() {
  return (
    <section
      className="py-32 px-6 md:px-24 bg-brand-black border-t border-white/5"
      id="tactical"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-12 reveal">
          <div className="h-2 w-2 rounded-full bg-brand-crimson animate-pulse" />
          <h2 className="text-xs tracking-[0.5em] uppercase font-bold">
            Tactical Intelligence Feed
          </h2>
        </div>

        <div className="space-y-12">
          {feedItems.map(({ date, title, body, active }, i) => (
            <article
              key={title}
              className={`border-l-2 pl-8 py-2 reveal ${DELAY_CLASSES[i]} ${
                active ? 'border-brand-crimson' : 'border-gray-800'
              }`}
            >
              <time className="text-[10px] text-gray-600 font-mono mb-2 block">{date}</time>
              <h3 className="text-xl font-bold uppercase mb-2">{title}</h3>
              <p className="text-gray-400 text-sm max-w-2xl">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center reveal reveal-delay-3">
          <Button asChild>
            <a href={`mailto:${site.email}`}>Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
