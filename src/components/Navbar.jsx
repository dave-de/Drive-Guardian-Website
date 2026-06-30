import { useEffect, useState } from 'react'

const Shield = ({ size = 21 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="brand" href="#" onClick={close}>
          <span className="logo"><Shield /></span>
          DriveGuardian
        </a>
        <nav className="nav-links">
          <a className="lnk hide-sm" href="#features">Features</a>
          <a className="lnk hide-sm" href="#how">How it works</a>
          <a className="lnk hide-sm" href="#faq">FAQ</a>
          <a className="btn btn-primary hide-sm" href="#download"><span className="sheen" />Get the app</a>
          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            )}
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#features" onClick={close}>Features</a>
        <a href="#how" onClick={close}>How it works</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a className="btn btn-primary" href="#download" onClick={close}><span className="sheen" />Get the app</a>
      </div>
    </header>
  )
}
