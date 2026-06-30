import { useEffect, useRef, useState } from 'react'

/** Returns [ref, inView] — inView flips true the first time the element scrolls
 * into view. Used for scroll-reveal animations and triggering count-ups. */
export function useInView(threshold = 0.15, once = true) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])
  return [ref, inView]
}
