import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView.js'

/** Counts up from 0 to `to` (eased) the first time it scrolls into view. */
export default function Counter({ to, suffix = '' }) {
  const [ref, inView] = useInView(0.6)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const dur = 1200
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return <span ref={ref}>{val}{suffix}</span>
}
