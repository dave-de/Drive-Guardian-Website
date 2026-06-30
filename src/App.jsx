import { useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Statement from './components/Statement.jsx'
import Testimonial from './components/Testimonial.jsx'
import Faq from './components/Faq.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Smooth-scroll for in-page anchor links WITHOUT adding "#section" to the URL
  // (intercept the click, scroll manually, prevent the default hash navigation).
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      // Placeholder links (href="#") should not jump or add a hash.
      if (href === '#') { e.preventDefault(); return }
      const target = document.getElementById(href.slice(1))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <HowItWorks />
      <Statement />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </>
  )
}
