import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseEnter = () => {
      cursor.style.width = '80px'
      cursor.style.height = '80px'
      cursor.style.background = 'rgba(255, 196, 149, 0.05)'
    }

    const handleMouseLeave = () => {
      cursor.style.width = '40px'
      cursor.style.height = '40px'
      cursor.style.background = 'rgba(255, 196, 149, 0.15)'
    }

    const setupListeners = () => {
      const interactables = document.querySelectorAll('button, a, .glass-surface')
      interactables.forEach(item => {
        // Remove first to avoid duplicates
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
        // Add listeners
        item.addEventListener('mouseenter', handleMouseEnter)
        item.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    document.addEventListener('mousemove', moveCursor)
    
    // Initial setup
    setTimeout(setupListeners, 100)

    // Watch for DOM changes to attach listeners to newly rendered elements
    const observer = new MutationObserver(() => {
       setupListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
      const interactables = document.querySelectorAll('button, a, .glass-surface')
      interactables.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor hidden md:block" 
      id="cursor"
    />
  )
}
