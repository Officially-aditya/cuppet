'use client'

import { useEffect } from 'react'

const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6'

export default function ScrollTitleUnderlines() {
  useEffect(() => {
    const headings = new Set<HTMLElement>()
    const headingObserver = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle('scroll-title-visible', entry.isIntersecting)
            })
          },
          {
            threshold: 0.15,
            rootMargin: '0px 0px -12% 0px',
          },
        )
      : null

    const registerHeadings = () => {
      document.querySelectorAll<HTMLElement>(HEADING_SELECTOR).forEach((heading) => {
        if (headings.has(heading)) return

        headings.add(heading)
        heading.classList.add('scroll-title')

        if (headingObserver) {
          headingObserver.observe(heading)
        } else {
          heading.classList.add('scroll-title-visible')
        }
      })
    }

    registerHeadings()

    const mutationObserver = 'MutationObserver' in window
      ? new MutationObserver(registerHeadings)
      : null

    mutationObserver?.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver?.disconnect()
      headingObserver?.disconnect()
      headings.forEach((heading) => {
        heading.classList.remove('scroll-title', 'scroll-title-visible')
      })
    }
  }, [])

  return null
}
