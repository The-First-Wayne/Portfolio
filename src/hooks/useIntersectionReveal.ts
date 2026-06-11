import { useEffect, useRef } from 'react'

type RevealMode = 'reveal' | 'asym-grid'

/**
 * Observes an element and toggles visibility classes when it enters the viewport.
 * Matches the Stitch HTML scroll-animation behaviour.
 */
export function useIntersectionReveal<T extends HTMLElement = HTMLDivElement>(
  mode: RevealMode = 'reveal'
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (mode === 'asym-grid') {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        if (mode === 'reveal') {
          el.classList.add('active')
        } else {
          el.classList.add('opacity-100')
          el.classList.remove('opacity-0', 'translate-y-10')
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [mode])

  return ref
}
