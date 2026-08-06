'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once when it scrolls into view. Fires once (unobserves
 * after triggering), so it never re-hides on scroll-away/scroll-back.
 * Pairs with the `.reveal` / `.reveal.is-visible` CSS classes in index.css,
 * which handle the actual transition and the prefers-reduced-motion override.
 */
export function useRevealOnScroll<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
