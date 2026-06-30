import { useEffect, useState } from 'react'

/** Thin gradient progress bar pinned to the top, tracking scroll position. */
export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setW(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="progress" style={{ width: w + '%' }} />
}
