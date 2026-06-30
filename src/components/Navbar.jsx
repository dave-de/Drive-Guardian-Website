import { useEffect, useState } from 'react'

const Shield = ({ size = 21 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="brand" href="#">
          <span className="logo"><Shield /></span>
          DriveGuardian
        </a>
        <nav className="nav-links">
          <a className="lnk hide-sm" href="#features">Features</a>
          <a className="lnk hide-sm" href="#how">How it works</a>
          <a className="lnk hide-sm" href="#faq">FAQ</a>
          <a className="btn btn-primary" href="#download"><span className="sheen" />Get the app</a>
        </nav>
      </div>
    </header>
  )
}
